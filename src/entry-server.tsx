/**
 * Point d'entrée du prérendu.
 *
 * Rend l'application en HTML au moment du build, pour que le fichier livré
 * contienne le texte du site et non un conteneur vide. Décisif pour les robots
 * d'IA — GPTBot, ClaudeBot, PerplexityBot — qui n'exécutent pas JavaScript :
 * sans ça, ils ne voient rien du site et ne peuvent jamais le citer.
 *
 * `prerender` est employé plutôt que `renderToString` parce qu'il attend la
 * résolution des frontières Suspense : les pages blog et article sont chargées
 * par `lazy()`, et un rendu synchrone n'aurait produit que leur écran d'attente.
 */
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import { articles } from './content/articles';
import { communes, cheminCommune } from './data/communes';
import { definirCommune } from './lib/commune';
import { definirArticlePrecharge, corpsSeul } from './lib/articlePrecharge';
import { seoAccueil, seoArticle, seoBlog, seoCommune, type DonneesSeo } from './lib/seo';

export interface PageRendue {
  /** Dossier de destination sous dist/. Vide pour la racine. */
  chemin: string;
  html: string;
  seo: DonneesSeo;
  /** Markdown à embarquer dans la page, pour les articles. */
  markdown?: { slug: string; contenu: string };
}

async function enHtml(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

  const morceaux: Buffer[] = [];
  for await (const m of prelude) morceaux.push(Buffer.from(m));
  return Buffer.concat(morceaux).toString('utf8');
}

/**
 * Toutes les pages du site, rendues une à une.
 *
 * L'ordre compte : `definirCommune` et `definirArticlePrecharge` posent un état
 * que le rendu suivant lit. On rend donc séquentiellement, et on remet à zéro
 * après chaque page.
 */
export async function rendreTout(
  markdownParSlug: Record<string, string>,
): Promise<PageRendue[]> {
  const pages: PageRendue[] = [];

  // Accueil
  definirCommune(null);
  pages.push({ chemin: '', html: await enHtml('/'), seo: seoAccueil() });

  // Liste des articles
  pages.push({ chemin: 'blog', html: await enHtml('/blog'), seo: seoBlog() });

  // Un fichier par article
  for (const article of articles) {
    const brut = markdownParSlug[article.slug];
    if (!brut) {
      console.warn(`  markdown introuvable pour « ${article.slug} », page ignorée`);
      continue;
    }
    const contenu = corpsSeul(brut);
    definirArticlePrecharge(article.slug, contenu);
    pages.push({
      chemin: `articles/${article.slug}`,
      html: await enHtml(`/articles/${article.slug}`),
      seo: seoArticle(article),
      markdown: { slug: article.slug, contenu },
    });
  }

  // Une page par commune voisine
  for (const commune of communes) {
    definirCommune(commune);
    const chemin = cheminCommune(commune.nom).replace(/^\/|\/$/g, '');
    const seo = seoCommune();
    if (!seo) continue;
    pages.push({ chemin, html: await enHtml(`/${chemin}`), seo });
  }
  definirCommune(null);

  return pages;
}
