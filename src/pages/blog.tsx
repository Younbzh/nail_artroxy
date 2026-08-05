import { Link } from 'react-router-dom';
import { articles } from '../content/articles';
import { siteConfig } from '../config/siteConfig';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/** Les titres portent un suffixe SEO qui n'a pas lieu d'être affiché en grille. */
const titreCourt = (t: string) => t.replace(/ \| Nail[ .]?[Aa]rt[ .]?[Rr]ox.*$/, '');

export default function Blog() {
  return (
    <>
      <Nav surPhoto={false} />

      <main className="pt-[68px]">
        <section className="section bg-paper pb-10">
          <div className="section-inner max-w-prose">
            <p className="eyebrow">Le journal</p>
            <h1 className="section-title mb-5">Conseils et actualités</h1>
            <p className="text-[15.5px] leading-relaxed text-ink-mut">
              Tout ce que je répète en cabine : comment faire durer une pose, préparer ses ongles, éviter
              les erreurs classiques. Écrit pour être utile, pas pour remplir.
            </p>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8">
          <div className="section-inner grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group bg-paper transition-colors hover:bg-chalk"
              >
                <div className="aspect-[4/3] overflow-hidden bg-chalk">
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
                  <h2 className="mb-2.5 font-sans text-[16.5px] font-bold leading-snug text-ink">
                    {titreCourt(article.title)}
                  </h2>
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
        </section>

        <section className="section bg-chalk text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="section-title mb-4">Envie de passer à la pratique ?</h2>
            <p className="mb-8 text-[15.5px] leading-relaxed text-ink-mut">
              Réservez votre créneau en ligne. La première pose est à −15 %.
            </p>
            <a
              href={siteConfig.reservation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill"
            >
              Réserver un créneau
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
