import { MapPin, Clock, Users } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { communes, cheminCommune, deCommune, minutesTrajet, type Commune as TCommune } from '../data/communes';

/**
 * Bloc propre à une page « onglerie proche de X ».
 *
 * C'est lui qui rend la page défendable. Huit pages identiques à un nom près
 * sont du contenu dupliqué : Google ne les classe pas, et peut dévaluer le
 * site entier. Les faits utilisés sont vérifiables et différents à chaque
 * fois — distance, direction, population — et le texte change selon la
 * taille de la commune.
 *
 * Le trajet est annoncé comme une estimation, jamais comme une promesse.
 */
export default function Commune({ commune }: { commune: TCommune }) {
  const minutes = minutesTrajet(commune.km);
  const pop = commune.population;
  const nature = pop > 4000 ? 'ville' : pop > 1500 ? 'commune' : 'petite commune';

  const contexte =
    pop > 4000
      ? "C'est le pôle du secteur, et beaucoup de mes clientes en viennent"
      : pop > 2500
        ? 'Plusieurs de mes clientes régulières en viennent'
        : "C'est tout près, et le trajet se fait sans y penser";

  const autres = communes
    .filter((c) => c.nom !== commune.nom)
    .sort((a, b) => Math.abs(a.km - commune.km) - Math.abs(b.km - commune.km))
    .slice(0, 5);

  const faits = [
    { icone: MapPin, valeur: `${commune.km} km`.replace('.', ','), label: `${commune.cap} de Moréac` },
    { icone: Clock, valeur: `~${minutes} min`, label: 'de trajet estimé' },
    { icone: Users, valeur: pop.toLocaleString('fr-FR'), label: 'habitants' },
  ];

  return (
    <section id="commune" className="section bg-chalk">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow">Vous venez {deCommune(commune.nom)} ?</p>
            <h2 className="section-title mb-7">
              Une onglerie
              <em className="block font-normal italic">à {commune.km.toString().replace('.', ',')} km de chez vous</em>
            </h2>

            <div className="max-w-prose space-y-4 text-[15.5px] leading-relaxed text-ink-mut">
              <p>
                {commune.nom} est une {nature} de {pop.toLocaleString('fr-FR')} habitants, située à{' '}
                {commune.km.toString().replace('.', ',')} km {commune.cap} de Moréac. {contexte}.
              </p>
              <p>
                Je ne me déplace pas : je reçois dans un espace dédié à Moréac, sur rendez-vous, et vous
                êtes la seule cliente sur votre créneau. Comptez environ {minutes} minutes de route depuis{' '}
                {commune.nom}, stationnement facile sur place.
              </p>
              <p>
                Gel, semi-permanent, nail art et pédicure — les mêmes prestations, aux mêmes tarifs, quelle
                que soit votre commune. La première pose est à −15 %.
              </p>
            </div>

            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {faits.map((f) => (
                <li key={f.label} className="bg-paper p-5">
                  <f.icone className="h-4 w-4 text-blush-ink" aria-hidden="true" />
                  <b className="mt-3 block font-display text-2xl font-bold leading-none tabular-nums text-ink">
                    {f.valeur}
                  </b>
                  <span className="mt-1.5 block text-[12.5px] text-ink-mut">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={siteConfig.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill"
              >
                Réserver un créneau
              </a>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="btn-outline">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="bg-paper p-7">
            <h3 className="font-sans text-[15px] font-bold text-ink">Vous venez d'ailleurs ?</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-mut">
              Voici les distances depuis les communes voisines.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {autres.map((c) => (
                <li key={c.nom}>
                  <a
                    href={cheminCommune(c.nom)}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 text-[14.5px] transition-colors hover:text-blush-ink"
                  >
                    <span className="font-semibold text-ink">{c.nom}</span>
                    <span className="text-[12.5px] text-ink-mut tabular-nums">
                      {c.km.toString().replace('.', ',')} km
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/"
              className="mt-6 inline-block text-[13.5px] font-bold text-ink underline decoration-blush decoration-2 underline-offset-4"
            >
              Voir le site complet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
