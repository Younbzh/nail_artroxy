import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug } from '../content/articles';
import { Sparkles, ArrowLeft, Calendar as CalendarIcon, Clock, Tag } from 'lucide-react';

interface ArticleContent {
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    category: string;
    readTime: number;
    tags: string[];
    image?: string;
  };
  content: string;
}

function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const [articleContent, setArticleContent] = useState<ArticleContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      if (!slug) return;
      
      setLoading(true);
      try {
        // Import dynamique du fichier .md
        const mdModule = await import(`../content/articles/${slug}.md?raw`);
        const rawContent = mdModule.default as string;
        
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = rawContent.match(frontmatterRegex);
        
        if (match) {
          const frontmatterText = match[1];
          const content = match[2];
          
          // Parser le frontmatter YAML
          const frontmatter: Record<string, string | string[]> = {};
          frontmatterText.split('\n').forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
              const key = line.slice(0, colonIndex).trim();
              let value: string | string[] = line.slice(colonIndex + 1).trim();
              
              // Nettoyer les guillemets
              value = value.replace(/^["']|["']$/g, '');
              
              // Parser les tableaux
              if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
              }
              
              frontmatter[key] = value;
            }
          });
          
          setArticleContent({
            frontmatter: {
              title: (frontmatter.title as string) || article?.title || 'Article',
              slug: (frontmatter.slug as string) || slug,
              date: (frontmatter.date as string) || article?.date || '',
              category: (frontmatter.category as string) || article?.category || 'Actualités',
              readTime: parseInt(frontmatter.readTime as string) || article?.readTime || 5,
              tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : (article?.tags || []),
              image: (frontmatter.image as string) || article?.image
            },
            content: content.trim()
          });
        } else {
          setArticleContent({
            frontmatter: {
              title: article?.title || 'Article',
              slug: slug,
              date: article?.date || '',
              category: article?.category || 'Actualités',
              readTime: article?.readTime || 5,
              tags: article?.tags || [],
              image: article?.image
            },
            content: rawContent
          });
        }
      } catch (error) {
        console.error('Erreur chargement article:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadArticle();
  }, [slug, article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-900 mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-pink-600 hover:text-pink-700 font-semibold">← Retour au blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-pink-900 text-lg">Nail.art.rox</span>
            </Link>
            <Link to="/blog" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />Retour au blog
            </Link>
          </div>
        </div>
      </header>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12"><p className="text-gray-600">Chargement...</p></div>
          ) : (
            <>
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-pink-500 text-white text-sm font-bold rounded-full mb-4">
                  {articleContent?.frontmatter.category || article.category}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-pink-900 mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                  {articleContent?.frontmatter.title || article.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">{article.description}</p>
                <div className="flex items-center gap-6 text-gray-500">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    {new Date(articleContent?.frontmatter.date || article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {articleContent?.frontmatter.readTime || article.readTime} min
                  </span>
                </div>
              </div>

              {(articleContent?.frontmatter.image || article.image) && (
                <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <img src={articleContent?.frontmatter.image || article.image} alt={articleContent?.frontmatter.title || article.title} className="w-full h-auto object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/nail-art-sample.jpg'; }} />
                </div>
              )}

              <div className="prose prose-lg max-w-none mb-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg markdown-content">
                  {articleContent?.content ? (
                    <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: (() => {
                      const parseInline = (text: string): string => {
                        return text
                          .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-pink-600 hover:text-pink-700 underline font-medium">$1</a>');
                      };
                      const lines = articleContent.content.split('\n');
                      const html: string[] = [];
                      let i = 0;
                      while (i < lines.length) {
                        const line = lines[i];
                        if (line.startsWith('## ')) {
                          html.push(`<h2 class="text-2xl font-bold text-pink-900 mt-8 mb-4">${parseInline(line.slice(3))}</h2>`);
                        } else if (line.startsWith('### ')) {
                          html.push(`<h3 class="text-xl font-bold text-pink-800 mt-6 mb-3">${parseInline(line.slice(4))}</h3>`);
                        } else if (line.trim() === '') {
                          // ligne vide
                        } else {
                          html.push(`<p class="mb-4">${parseInline(line)}</p>`);
                        }
                        i++;
                      }
                      return html.join('\n');
                    })() }} />
                  ) : (
                    <p className="text-gray-600 italic">📝 Contenu en cours de rédaction...</p>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-pink-600" />
                  {(articleContent?.frontmatter.tags || article.tags).map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 rounded-3xl p-8 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-pink-900 mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Envie d'ongles sublimes ?</h3>
                <p className="text-gray-700 mb-6">Réservez votre prestation en ligne et bénéficiez de -15% pour votre première visite</p>
                <a href="https://cal.eu/nail-art-roxy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Réserver ma prestation<span>→</span>
                </a>
              </div>
            </>
          )}
        </div>
      </article>

      <footer className="bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nail.art.rox by Dina. Tous droits réservés.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;700&display=swap');
        .markdown-content h2 { margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem; font-weight: bold; color: #831843; }
        .markdown-content h3 { margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem; font-weight: bold; color: #9f1239; }
        .markdown-content p { margin-bottom: 1rem; line-height: 1.75; }
      `}</style>
    </div>
  );
}

export default ArticlePage;
