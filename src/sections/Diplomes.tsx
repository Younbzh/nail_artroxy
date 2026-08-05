import { useState } from 'react';
import Lightbox from '../components/Lightbox';

const formations = [
  { titre: "Les secrets de l'entretien complet et rapide", image: '/diplome1.webp' },
  { titre: 'Ultraslim, slim, classique et chablon', image: '/diplome2.webp' },
  { titre: 'The Trend Tips Technique', image: '/diplome3.webp' },
  { titre: 'Résistance des ongles et allergies', image: '/diplome4.webp' },
  { titre: 'La cuticule, fondement de la manucure', image: '/diplome5.webp' },
  { titre: 'Dites non aux ongles rongés', image: '/diplome6.webp' },
];

export default function Diplomes() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="diplomes" className="section bg-chalk">
      <div className="section-inner">
        <div className="mb-12 max-w-prose">
          <p className="eyebrow">Formation</p>
          <h2 className="section-title mb-5">Ce que j'ai appris, et auprès de qui</h2>
          <p className="text-[15.5px] leading-relaxed text-ink-mut">
            Six formations suivies en 2025 auprès de Ioana Diana, formatrice spécialisée. Chaque
            certificat est consultable — cliquez pour l'agrandir.
          </p>
        </div>

        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {formations.map(({ titre, image }) => (
            <button
              key={image}
              type="button"
              onClick={() => setZoom({ src: image, alt: titre })}
              className="group bg-paper p-5 text-left transition-colors hover:bg-chalk"
            >
              <div className="mb-4 aspect-[4/3] overflow-hidden bg-chalk">
                <img
                  src={image}
                  alt={titre}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-sans text-[14.5px] font-bold leading-snug text-ink">{titre}</h3>
              <p className="mt-1.5 text-[12.5px] text-ink-mut tabular-nums">Ioana Diana · 2025</p>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-8 text-[13.5px] text-ink-mut">
          <span>Matériel stérilisé après chaque cliente</span>
          <span>Produits professionnels certifiés CE</span>
          <span>Normes d'hygiène ARS</span>
        </div>
      </div>

      {zoom && <Lightbox src={zoom.src} alt={zoom.alt} onClose={() => setZoom(null)} />}
    </section>
  );
}
