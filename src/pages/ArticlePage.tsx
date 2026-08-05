import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug } from '../content/articles';
import { articlePrecharge, corpsSeul } from '../lib/articlePrecharge';
import { siteConfig } from '../config/siteConfig';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AncrageLocal from '../components/AncrageLocal';

const titreCourt = (t: string) => t.replace(/ \| Nail[ .]?[Aa]rt[ .]?[Rr]ox.*$/, '');

/**
 * Les fichiers Markdown, indexés par leur nom réel.
 *
 * Un import construit à partir du slug échouait : quatre articles portent un
 * nom de fichier qui n'a rien à voir avec lui — « manucure-gel-sante-risques-
 * prevention » vit dans « Manucure-gel-et-santé.md ». Vite fige ici la liste
 * des fichiers réellement présents, et `article.fichier` donne la bonne clé.
 *
 * Les noms sont normalisés en NFC : macOS écrit les accents en décomposé, ce
 * qui rend « santé » différent de « santé » à la comparaison.
 */
const fichiersMd = Object.fromEntries(
  Object.entries(
    import.meta.glob('../content/articles/*.md', { query: '?raw', import: 'default' }),
  ).map(([chemin, charger]) => [
    (chemin.split('/').pop() ?? '').normalize('NFC'),
    charger as () => Promise<string>,
  ]),
);

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  // Présent dès le premier rendu sur une page livrée : ni attente, ni écart d'hydratation.
  const [corps, setCorps] = useState<string | null>(() => (slug ? articlePrecharge(slug) : null));
  const [echec, setEchec] = useState(false);

  useEffect(() => {
    if (!slug || corps !== null || !article) return;
    let annule = false;

    const charger = fichiersMd[article.fichier.normalize('NFC')];
    if (!charger) {
      console.error(`Fichier « ${article.fichier} » absent pour l'article « ${slug} »`);
      setEchec(true);
      return;
    }

    charger()
      .then((brut) => {
        if (!annule) setCorps(corpsSeul(brut));
      })
      .catch((err) => {
        console.error(`Article « ${slug} » illisible :`, err);
        if (!annule) setEchec(true);
      });

    return () => {
      annule = true;
    };
  }, [slug, corps, article]);

  if (!article) {
    return (
      <>
        <Nav surPhoto={false} />
        <main className="flex min-h-screen items-center justify-center px-5 pt-[68px] text-center">
          <div>
            <h1 className="section-title mb-4">Cet article n'existe pas</h1>
            <p className="mb-7 text-[15.5px] text-ink-mut">
              Le lien est peut-être ancien, ou l'adresse comporte une faute.
            </p>
            <Link to="/blog" className="btn-outline">
              Voir tous les articles
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav surPhoto={false} />

      <main className="pt-[68px]">
        <article className="px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">{article.category}</p>
            <h1 className="section-title mb-5">{titreCourt(article.title)}</h1>
            <p className="mb-6 text-[17px] leading-relaxed text-ink-mut">{article.description}</p>
            <p className="border-b border-line pb-8 text-[13px] text-ink-mut tabular-nums">
              {new Date(article.date).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}{' '}
              · {article.readTime} min de lecture
            </p>

            {article.image && (
              <img
                src={article.image}
                alt={titreCourt(article.title)}
                className="my-10 aspect-[16/9] w-full object-cover"
              />
            )}

            {echec ? (
              <p className="text-[15.5px] text-ink-mut">
                Le contenu de cet article n'a pas pu être chargé.{' '}
                <Link to="/blog" className="underline decoration-blush decoration-2 underline-offset-4">
                  Retour aux articles
                </Link>
              </p>
            ) : corps === null ? (
              <p className="text-[15.5px] text-ink-mut">Chargement…</p>
            ) : (
              <div
                className="prose prose-neutral max-w-none
                           prose-headings:font-display prose-headings:text-ink
                           prose-h2:text-[1.6rem] prose-h2:mt-12 prose-h2:mb-4
                           prose-h3:text-[1.25rem] prose-h3:mt-9 prose-h3:mb-3
                           prose-p:text-[15.5px] prose-p:leading-relaxed prose-p:text-ink-mut
                           prose-li:text-[15.5px] prose-li:text-ink-mut
                           prose-strong:text-ink
                           prose-a:text-ink prose-a:decoration-blush prose-a:decoration-2 prose-a:underline-offset-4
                           prose-blockquote:border-l-blush prose-blockquote:text-ink-soft prose-blockquote:not-italic"
              >
                <ReactMarkdown>{corps}</ReactMarkdown>
              </div>
            )}

            {article.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blush-pale px-3.5 py-1.5 text-[12.5px] font-medium text-blush-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <AncrageLocal />
          </div>
        </article>

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
