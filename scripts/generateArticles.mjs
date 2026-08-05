import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../src/content/articles');
const outputFile = path.join(__dirname, '../src/content/articles.ts');

/**
 * En deçà de ce nombre de caractères, l'article est une ébauche.
 *
 * Une page de cent caractères est du contenu mince : Google ne la classe pas,
 * et une accumulation de pages vides pèse sur la qualité perçue du site entier.
 * Ces articles restent dans le dossier, mais ne sont ni listés, ni prérendus,
 * ni inscrits au sitemap, tant qu'ils ne sont pas écrits.
 */
const SEUIL_PUBLIABLE = 600;

function generateArticlesTs() {
  console.log('🔍 Lecture des articles Markdown...');

  const files = fs.readdirSync(articlesDir).filter((file) => file.endsWith('.md'));

  const articles = files.map((file, index) => {
    const filePath = path.join(articlesDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const corps = content.trim();

    return {
      id: index + 1,
      slug: data.slug || file.replace('.md', ''),
      // Le nom du fichier ne se déduit pas du slug : quatre articles diffèrent.
      fichier: file,
      title: data.title || 'Sans titre',
      description: data.description || 'Description à venir',
      image: data.image || '/blog/default.jpg',
      category: data.category || 'Actualités',
      date: data.date || new Date().toISOString().split('T')[0],
      readTime: data.readTime || 5,
      tags: data.tags || [],
      brouillon: corps.length < SEUIL_PUBLIABLE,
    };
  });

  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const brouillons = articles.filter((a) => a.brouillon);

  const tsContent = `// =========================================
// ARTICLES GÉNÉRÉS AUTOMATIQUEMENT
// =========================================
// Ce fichier est généré par scripts/generateArticles.mjs
// Ne pas modifier manuellement !

export interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: 'Conseils' | 'Tendances' | 'Soins' | 'Actualités';
  date: string;
  readTime: number;
  tags: string[];
  /** Nom réel du fichier Markdown — il ne correspond pas toujours au slug. */
  fichier: string;
  /** Corps trop court pour être publié : ni listé, ni prérendu, ni indexé. */
  brouillon: boolean;
}

/** Tous les articles, brouillons compris. */
export const tousLesArticles: Article[] = ${JSON.stringify(articles, null, 2)};

/** Les articles réellement publiables — c'est ce que le site affiche. */
export const articles: Article[] = tousLesArticles.filter((a) => !a.brouillon);

export const getLatestArticles = (count: number = 3): Article[] =>
  articles.slice(0, count);

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug);
`;

  fs.writeFileSync(outputFile, tsContent, 'utf8');
  console.log('✅ Fichier généré : ' + outputFile);
  console.log(
    `📝 ${articles.length - brouillons.length} article(s) publiable(s), ` +
      `${brouillons.length} brouillon(s) écarté(s)`,
  );
  for (const b of brouillons) console.log(`   ↳ brouillon : ${b.slug}`);

  /*
    Les dix-neuf articles ont longtemps pointé vers des images inexistantes.
    Personne ne l'a vu parce qu'un `onError` les remplaçait discrètement par la
    même photo de repli. On vérifie donc à la source, et on refuse de livrer un
    article dont l'image manque.
  */
  const publics = path.join(__dirname, '../public');
  const orphelins = articles.filter((a) => !fs.existsSync(path.join(publics, a.image)));

  if (orphelins.length) {
    console.error(`\n❌ ${orphelins.length} article(s) pointent vers une image absente :`);
    for (const a of orphelins) console.error(`   ${a.slug} → public${a.image}`);
    console.error('\n   Corrigez le champ `image:` du frontmatter, ou ajoutez le fichier.');
    if (process.argv.includes('--strict')) process.exit(1);
  }
}

generateArticlesTs();
