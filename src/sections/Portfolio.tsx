import { useState } from 'react';
import { categories, pleineTaille, realisations, vignette, type Categorie } from '../data/portfolio';
import Lightbox from '../components/Lightbox';

type Filtre = 'Sélection' | Categorie;
const filtres: Filtre[] = ['Sélection', ...categories];

export default function Portfolio() {
  const [filtre, setFiltre] = useState<Filtre>('Sélection');
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  const visibles =
    filtre === 'Sélection' ? realisations.filter((r) => r.vedette) : realisations.filter((r) => r.categorie === filtre);

  return (
    <section id="portfolio" className="section bg-chalk">
      <div className="section-inner">
        <div className="mb-10 max-w-prose">
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-title">Mes réalisations</h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {filtres.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltre(f)}
              aria-pressed={filtre === f}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-colors ${
                filtre === f
                  ? 'bg-ink text-paper'
                  : 'border border-line bg-paper text-ink-soft hover:border-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {visibles.map(({ slug, titre, categorie, format }) => (
            <button
              key={slug}
              type="button"
              onClick={() => setZoom({ src: pleineTaille(slug), alt: `${titre} — ${categorie}` })}
              className={`group relative overflow-hidden bg-paper ${
                format === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={vignette(slug)}
                alt={`${titre} — ${categorie}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2.5 pt-8 text-left text-[12.5px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {titre}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-[13px] text-ink-mut tabular-nums">
          {visibles.length} réalisation{visibles.length > 1 ? 's' : ''}
          {filtre !== 'Sélection' && ` en ${filtre.toLowerCase()}`}
        </p>
      </div>

      {zoom && <Lightbox src={zoom.src} alt={zoom.alt} onClose={() => setZoom(null)} />}
    </section>
  );
}
