import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Infos() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Esprit du lieu"
        title={`Ambiance & philosophie de ${siteConfig.clubName}`}
        description="Ici, le but n’est pas de tout dévoiler, mais de faire ressentir le sérieux du cadre, le respect des codes et la volonté d’offrir une expérience élégante, sereine et bienveillante."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Une atmosphère maîtrisée</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              L’ambiance du club repose sur un équilibre entre convivialité, sensualité et discrétion.
              Ce site modernisé permet de traduire visuellement ce positionnement, en évitant toute impression de désordre ou de confusion.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Une communication plus claire</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              En présentant les informations de façon structurée et apaisée, le visiteur comprend immédiatement
              qu’il s’agit d’un lieu sérieux, bien tenu, et respectueux des personnes qui le fréquentent.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Charte"
        title="Consentement, discrétion, hygiène"
        description="Au-delà du décor, ce sont les règles et l’attitude des personnes présentes qui font la qualité d’un club. Cette section montre comment ces éléments peuvent être mis en avant de manière élégante."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass p-6">
            <h3 className="text-sm font-semibold text-white">Consentement évident</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Le site peut rappeler avec tact que tout se fait dans le respect de chacun, sans insistance ni pression.
              Ce type de message rassure immédiatement les visiteurs les plus hésitants.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-sm font-semibold text-white">Discrétion assumée</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              La confidentialité, l’absence de photos non consenties et la gestion attentive des espaces
              sont autant d’éléments que la maquette peut mettre subtilement en avant.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-sm font-semibold text-white">Hygiène & tenue du lieu</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Même évoquée en peu de mots, l’importance de la propreté et du confort renforce la confiance
              et donne une impression de lieu sérieux et bien géré.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Infos;
