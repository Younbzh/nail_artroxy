import { siteConfig } from '../config/siteConfig';

type Prestation = {
  nom: string;
  duree: string;
  texte: string;
  url: string;
  tarifs?: { nom: string; prix: string }[];
};

const prestations: Prestation[] = [
  {
    nom: 'Gel sur ongle naturel',
    duree: '1 h à 1 h 30',
    texte: "Le gel posé sur vos ongles, sans rallonge : solides, nets, et toujours naturels.",
    url: siteConfig.reservation.prestations.gel,
    tarifs: [{ nom: 'À partir de', prix: '30 €' }],
  },
  {
    nom: 'Construction',
    duree: '2 h à 3 h',
    texte: "Des ongles allongés et sculptés au gel, à la longueur et à la forme que vous choisissez.",
    url: siteConfig.reservation.prestations.gel,
    tarifs: [{ nom: 'À partir de', prix: '40 €' }],
  },
  {
    nom: 'Semi-permanent',
    duree: '1 h à 1 h 30',
    texte: 'La couleur qui reste impeccable trois semaines, avec une brillance de premier jour.',
    url: siteConfig.reservation.prestations.semiPermanent,
    tarifs: [{ nom: 'À partir de', prix: '30 €' }],
  },
  {
    nom: 'Pédicure',
    duree: '45 min à 1 h',
    texte: "Un vrai moment de soin, pour des pieds qu'on a envie de montrer.",
    url: siteConfig.reservation.prestations.pedicure,
    tarifs: [
      { nom: 'Pose semi-permanent', prix: '30 €' },
      { nom: 'Dépose + pose', prix: '35 €' },
      { nom: 'Dépose complète', prix: '20 €' },
    ],
  },
];

export default function Prestations() {
  return (
    <section id="prestations" className="section bg-chalk">
      <div className="section-inner">
        <div className="mb-14 max-w-prose">
          <p className="eyebrow">Mes prestations</p>
          <h2 className="section-title">Quatre façons de prendre soin de vos ongles</h2>
        </div>

        {/* La grille en 1px de gap sur fond `line` dessine les filets de séparation */}
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {prestations.map(({ nom, duree, texte, url, tarifs }) => (
            <a
              key={nom}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-paper p-8 transition-colors hover:bg-blush-pale"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-blush-ink tabular-nums">
                {duree}
              </p>
              <h3 className="mb-2.5 mt-3 text-2xl font-bold">{nom}</h3>
              <p className="mb-7 text-[15px] leading-relaxed text-ink-mut">{texte}</p>
              {tarifs && (
                <ul className="mb-7 mt-auto space-y-1.5 border-t border-line pt-4">
                  {tarifs.map((t) => (
                    <li key={t.nom} className="flex items-baseline justify-between gap-3 text-[13.5px] text-ink-soft">
                      {t.nom}
                      <span className="font-display text-[15px] font-bold text-ink tabular-nums">{t.prix}</span>
                    </li>
                  ))}
                </ul>
              )}
              <span className="self-start text-[13px] font-bold text-ink underline decoration-blush decoration-2 underline-offset-4 group-hover:decoration-blush-ink">
                Réserver
              </span>
            </a>
          ))}
        </div>

        {/* Le nail art n'est pas une prestation autonome : c'est un supplément */}
        <div className="mt-14 flex flex-col items-start gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-prose">
            <h3 className="mb-1.5 text-xl font-bold">
              Nail art <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-blush-ink align-middle">en option</span>
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-mut">
              À ajouter à une pose gel ou semi-permanent. Comptez trente minutes de plus, et dites-moi
              simplement ce dont vous avez envie.
            </p>
          </div>
          <a href={siteConfig.reservation.url} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0">
            Ajouter à ma réservation
          </a>
        </div>
      </div>
    </section>
  );
}
