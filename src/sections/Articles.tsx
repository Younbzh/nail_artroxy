import { Link } from 'react-router-dom';
import { getLatestArticles } from '../content/articles';

export default function Articles() {
  const articles = getLatestArticles(3);
  if (articles.length === 0) return null;

  return (
    <section id="articles" className="section bg-paper">
      <div className="section-inner">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-prose">
            <p className="eyebrow">Le journal</p>
            <h2 className="section-title">Conseils et actualités</h2>
          </div>
          <Link
            to="/blog"
            className="text-[13.5px] font-bold text-ink underline decoration-blush decoration-2 underline-offset-4 hover:decoration-blush-ink"
          >
            Tous les articles
          </Link>
        </div>

        <div className="grid gap-px bg-line md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.id} to={`/articles/${article.slug}`} className="group bg-paper transition-colors hover:bg-chalk">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <p className="mb-3 text-[11.5px] uppercase tracking-[0.14em] text-blush-ink">
                  {article.category}
                </p>
                <h3 className="mb-2.5 font-sans text-[16.5px] font-bold leading-snug text-ink">
                  {article.title}
                </h3>
                <p className="line-clamp-2 text-[14.5px] leading-relaxed text-ink-mut">
                  {article.description}
                </p>
                <p className="mt-4 text-[12.5px] text-ink-mut tabular-nums">
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}{' '}
                  · {article.readTime} min de lecture
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
