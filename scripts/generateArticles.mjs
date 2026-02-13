import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '../src/content/articles');
const outputFile = path.join(__dirname, '../src/content/articles.ts');

function generateArticlesTs() {
  console.log('🔍 Lecture des articles Markdown...');
  
  const files = fs.readdirSync(articlesDir).filter(file => file.endsWith('.md'));
  
  const articles = files.map((file, index) => {
    const filePath = path.join(articlesDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      id: index + 1,
      slug: data.slug || file.replace('.md', ''),
      title: data.title || 'Sans titre',
      description: data.description || 'Description à venir',
      image: data.image || '/blog/default.jpg',
      category: data.category || 'Actualités',
      date: data.date || new Date().toISOString().split('T')[0],
      readTime: data.readTime || 5,
      tags: data.tags || []
    };
  });

  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
}

export const articles: Article[] = ${JSON.stringify(articles, null, 2)};

export const getLatestArticles = (count: number = 3): Article[] => {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};
`;

  fs.writeFileSync(outputFile, tsContent, 'utf8');
  console.log('✅ Fichier généré : ' + outputFile);
  console.log('📝 ' + articles.length + ' articles trouvés');
}

generateArticlesTs();
