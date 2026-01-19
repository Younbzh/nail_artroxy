import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Tarifs() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Tarifs"
        title="Une présentation tarifaire plus lisible et plus valorisante"
        description="L’objectif n’est pas d’indiquer ici les montants exacts, mais de montrer une manière plus moderne de présenter les formules, afin de rendre la lecture simple, fluide et rassurante pour le visiteur."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Couples</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              La formule centrale du club, mise en avant comme une expérience privilégiée,
              afin de valoriser l’ambiance, le confort et l’équilibre social du lieu.
            </p>
            <p className="mt-4 text-xs text-[#E6D39A]">
              Exemple de présentation — tarifs à adapter.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Femmes seules</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Une mise en avant élégante, qui souligne l’attention portée à cette clientèle,
              tout en renforçant la perception de sécurité et de respect.
            </p>
            <p className="mt-4 text-xs text-[#E6D39A]">
              Conditions à définir en fonction de la politique du club.
            </p>
          </div>
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Hommes seuls</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Une explication claire des conditions d’accès, des créneaux ou de la sélection,
              afin de cadrer les attentes et de préserver l’harmonie du lieu.
            </p>
            <p className="mt-4 text-xs text-[#E6D39A]">
              Présentation illustrative — à affiner selon les règles du club.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Lecture"
        title="Ce que cette mise en forme change pour le visiteur"
        description="Un tarif présenté proprement, avec un vocabulaire choisi et une hiérarchie claire, donne une impression de sérieux et de transparence. C’est un levier important dans la décision de venir ou non."
      />
    </div>
  );
}

export default Tarifs;
