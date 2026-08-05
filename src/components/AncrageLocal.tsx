import { siteConfig } from '../config/siteConfig';
import { communes, cheminCommune } from '../data/communes';

/**
 * Rattache un article au territoire.
 *
 * Sans ce bloc, « faire durer un semi-permanent » est un conseil que n'importe
 * qui pourrait publier depuis n'importe où : rien ne le fait remonter sur une
 * recherche locale. Ici l'article gagne le nom de la commune, celui de
 * l'auteure, et des liens vers les pages voisines — c'est ce maillage qui
 * transforme l'expertise en visibilité de proximité.
 */
export default function AncrageLocal() {
  return (
    <aside className="mt-14 border-t border-line pt-10">
      <p className="eyebrow mb-3">Écrit à Moréac</p>
      <h2 className="mb-4 font-sans text-[17px] font-bold text-ink">
        Roxana, prothésiste ongulaire en Centre-Morbihan
      </h2>
      <p className="max-w-prose text-[15px] leading-relaxed text-ink-mut">
        Ces conseils viennent de la cabine, pas d'un manuel. Je reçois à{' '}
        {siteConfig.contact.address}, sur rendez-vous, et je vois passer les mêmes questions toutes les
        semaines — alors je les écris. Si vous voulez qu'on en parle de vive voix, la première pose est
        à −15 %.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
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

      <p className="mt-9 mb-3 text-[13px] font-semibold text-ink">Vous venez des environs ?</p>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {communes.map((c) => (
          <li key={c.nom}>
            <a
              href={cheminCommune(c.nom)}
              className="text-[13.5px] text-ink-mut underline decoration-line underline-offset-4 transition-colors hover:text-blush-ink hover:decoration-blush"
            >
              {c.nom}
              <span className="tabular-nums"> · {c.km.toString().replace('.', ',')} km</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
