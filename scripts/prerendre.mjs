#!/usr/bin/env node
/**
 * Écrit le site dans le HTML livré, au lieu de le laisser produire par JavaScript.
 *
 * Pourquoi c'est décisif. Google sait exécuter le JavaScript, avec retard et
 * sans garantie. Les robots d'IA — GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended — ne l'exécutent pas du tout : ils lisent le HTML brut. Avant
 * ce script, ils ne voyaient qu'un `<div id="root">` vide, et les dix-neuf
 * articles de Roxana leur étaient invisibles.
 *
 * Produit aussi robots.txt, sitemap.xml et llms.txt.
 * Lancé automatiquement à la fin de `npm run build`.
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(RACINE, 'dist');
const DIST_SSR = path.join(RACINE, '.ssr');
const ARTICLES = path.join(RACINE, 'src/content/articles');

const echapper = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* --------------------------------------------------------------- rendu */

execFileSync(
  'npx',
  ['vite', 'build', '--ssr', 'src/entry-server.tsx', '--outDir', '.ssr', '--logLevel', 'error'],
  { cwd: RACINE, stdio: ['ignore', 'ignore', 'inherit'] },
);

// Le Markdown est lu ici : entry-server reste indépendant du système de fichiers.
const markdownParSlug = Object.fromEntries(
  fs
    .readdirSync(ARTICLES)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const brut = fs.readFileSync(path.join(ARTICLES, f), 'utf8');
      const slug = brut.match(/^slug:\s*["']?(.+?)["']?\s*$/m)?.[1] ?? f.replace(/\.md$/, '');
      return [slug, brut];
    }),
);

const serveur = await import(pathToFileURL(path.join(DIST_SSR, 'entry-server.js')).href);
const pages = await serveur.rendreTout(markdownParSlug);

/* ----------------------------------------------- injection dans le gabarit */

const gabarit = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

/**
 * Compose une page livrée : balises calculées, JSON-LD, et le rendu dans #root.
 *
 * Les balises existantes du gabarit sont retirées d'abord, sinon chaque page
 * porterait deux titres et deux descriptions — celle de l'accueil et la sienne.
 */
function composer({ html, seo, markdown }) {
  const balises = [
    `<title>${echapper(seo.titre)}</title>`,
    `<meta name="description" content="${echapper(seo.description)}">`,
    `<meta name="keywords" content="${echapper(seo.motsCles)}">`,
    `<link rel="canonical" href="${echapper(seo.canonical)}">`,
    `<meta property="og:title" content="${echapper(seo.titre)}">`,
    `<meta property="og:description" content="${echapper(seo.description)}">`,
    `<meta property="og:url" content="${echapper(seo.canonical)}">`,
    ...seo.blocs.map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`),
  ].join('\n    ');

  let page = gabarit;
  page = page.replace(/<title>[\s\S]*?<\/title>\s*/i, '');
  page = page.replace(/\s*<meta name="(?:title|description|keywords)"[^>]*>/gi, '');
  page = page.replace(/\s*<meta property="og:(?:title|description|url)"[^>]*>/gi, '');
  page = page.replace(/\s*<link rel="canonical"[^>]*>/i, '');
  // Le JSON-LD du gabarit est remplacé par celui calculé pour cette page.
  page = page.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

  page = page.replace('</head>', `  ${balises}\n  </head>`);

  const charge = markdown
    ? `<script>window.__ARTICLE_MD__=${JSON.stringify(markdown).replace(/</g, '\\u003c')}</script>`
    : '';
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>${charge}`);

  return page;
}

for (const page of pages) {
  const dossier = page.chemin ? path.join(DIST, page.chemin) : DIST;
  fs.mkdirSync(dossier, { recursive: true });
  fs.writeFileSync(path.join(dossier, 'index.html'), composer(page));
}

/* --------------------------------------- robots, sitemap et llms.txt */

const accueil = pages[0];
const url = accueil.seo.canonical.replace(/\/$/, '');
const jour = new Date().toISOString().slice(0, 10);

/*
  Les robots d'IA sont autorisés explicitement : tout l'intérêt, pour un salon,
  est d'être cité quand quelqu'un demande « une onglerie près de Locminé » à un
  assistant. Beaucoup de sites les bloquent par réflexe et s'en privent.
*/
fs.writeFileSync(
  path.join(DIST, 'robots.txt'),
  [
    'User-agent: *',
    'Allow: /',
    '',
    '# Assistants IA : autorisés volontairement',
    ...[
      'GPTBot',
      'OAI-SearchBot',
      'ChatGPT-User',
      'ClaudeBot',
      'Claude-Web',
      'PerplexityBot',
      'Google-Extended',
      'Applebot-Extended',
      'CCBot',
    ].flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${url}/sitemap.xml`,
    '',
  ].join('\n'),
);

const priorite = (chemin) => (chemin === '' ? '1.0' : chemin.startsWith('articles/') ? '0.6' : '0.8');

fs.writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...pages.map(
      (p) =>
        `  <url><loc>${p.seo.canonical}</loc><lastmod>${jour}</lastmod>` +
        `<changefreq>monthly</changefreq><priority>${priorite(p.chemin)}</priority></url>`,
    ),
    '</urlset>',
    '',
  ].join('\n'),
);

/*
  llms.txt : convention émergente qui donne aux assistants une version texte,
  propre et courte, de ce que le site raconte. Elle ne remplace pas le prérendu,
  elle le complète en levant toute ambiguïté sur les faits essentiels.
*/
const enTexte = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    // Le rendu serveur sépare deux textes voisins par un commentaire vide.
    // Le retirer sans rien mettre à la place, sinon « viennent. » devient « viennent . ».
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x27;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:!?])/g, '$1')
    .trim();

const lien = (p) => p.seo.canonical;
const pagesArticles = pages.filter((p) => p.chemin.startsWith('articles/'));
const pagesCommunes = pages.filter((p) => p.chemin.startsWith('onglerie-proche-'));

fs.writeFileSync(
  path.join(DIST, 'llms.txt'),
  [
    `# ${accueil.seo.titre}`,
    '',
    `> ${accueil.seo.description}`,
    '',
    `Site officiel : ${url}`,
    '',
    '## Le salon',
    '',
    enTexte(accueil.html),
    '',
    '## Communes voisines',
    '',
    ...pagesCommunes.map((p) => `- [${p.seo.titre}](${lien(p)})`),
    '',
    '## Articles',
    '',
    ...pagesArticles.map((p) => `- [${p.seo.titre}](${lien(p)}) — ${p.seo.description}`),
    '',
  ].join('\n'),
);

fs.rmSync(DIST_SSR, { recursive: true, force: true });

const lisible = enTexte(accueil.html).length;
console.log(
  `\x1b[90mprérendu : ${pages.length} pages · ${lisible} caractères lisibles sur l'accueil · ` +
    `${pagesCommunes.length} communes, ${pagesArticles.length} articles · ` +
    `robots.txt, sitemap.xml, llms.txt\x1b[0m`,
);
