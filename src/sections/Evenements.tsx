interface Props {
  onDevis: () => void;
}

const formules = [
  {
    nom: 'Mariage',
    minimum: 'À partir de 3 personnes',
    details: ['Mariée et demoiselles d\'honneur', 'Nail art coordonné au thème', 'Essais couleurs inclus'],
  },
  {
    nom: 'EVJF',
    minimum: 'À partir de 5 personnes',
    details: ['Session entre copines', 'Nail art sur le thème choisi', 'Photos souvenir offertes'],
  },
  {
    nom: 'Anniversaire',
    minimum: 'À partir de 4 personnes',
    details: ['Créneau privatisé rien que pour vous', 'Nail art personnalisé', 'Formules ados bienvenues'],
  },
];

export default function Evenements({ onDevis }: Props) {
  return (
    <section id="evenements" className="section bg-ink text-paper">
      <div className="section-inner">
        <div className="mb-14 max-w-prose">
          <p className="eyebrow-on-dark">Événements</p>
          <h2 className="section-title mb-5 text-paper">
            Quand vous êtes
            <em className="block font-normal italic">plusieurs</em>
          </h2>
          <p className="text-[15.5px] leading-relaxed text-white/60">
            Mariage, EVJF, anniversaire : je vous reçois en groupe dans l'espace de Moréac. Dites-moi
            votre date, le nombre de personnes et votre thème, je vous réponds sous vingt-quatre heures.
          </p>
        </div>

        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {formules.map(({ nom, minimum, details }) => (
            <div key={nom} className="bg-ink p-8">
              <h3 className="mb-2 text-2xl font-bold text-paper">{nom}</h3>
              <p className="mb-6 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-blush">
                {minimum}
              </p>
              <ul className="space-y-2.5 text-[14.5px] leading-relaxed text-white/60">
                {details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button type="button" onClick={onDevis} className="btn-fill">
            Demander un devis
          </button>
        </div>
      </div>
    </section>
  );
}
