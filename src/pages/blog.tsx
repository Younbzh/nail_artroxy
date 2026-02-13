import { articles } from '../content/articles';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">

      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-pink-900 text-lg">Nail.art.rox</span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />Retour au site
            </Link>
          </div>
        </div>
      </header>

      {/* HERO BLOG */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Blog</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            Conseils & Actualités
          </h1>
          <p className="text-gray-600 text-lg">
            Conseils d'experte pour prendre soin de vos ongles et suivre les dernières tendances
          </p>
        </div>
      </section>

      {/* GRILLE ARTICLES */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link to={`/articles/${article.slug}`}>
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/nail-art-sample.jpg'; }}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime} min
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-pink-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {article.title.replace(/ \| Nail Art Roxy.*$/, '').replace(/ \| Nail.art.rox.*$/, '')}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-pink-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Lire l'article <span>→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-pink-900 mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
            Envie d'ongles sublimes ?
          </h2>
          <p className="text-gray-600 mb-8">Réservez en ligne et bénéficiez de -15% pour votre première visite</p>
          <a
            href="https://cal.eu/nail-art-roxy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Réserver ma prestation →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Nail.art.rox by Dina. Tous droits réservés.</p>
          <p className="mt-2 text-pink-200 text-sm">Prothésiste ongulaire à Moréac, Morbihan (56)</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;700&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
}