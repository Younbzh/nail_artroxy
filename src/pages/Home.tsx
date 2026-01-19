import ColdOpen from '../components/ColdOpen';
import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      <ColdOpen />
      <Hero />
      <TrustSignals />

      <Section
        eyebrow="L’expérience"
        title={`Ce que propose réellement ${siteConfig.clubName}`}
        description="Cette section permet au visiteur de comprendre, en un coup d’œil, la nature de l’expérience proposée : détente, sociabilité, sensualité. Le ton est volontairement posé, moderne et rassurant, pour refléter une gestion sérieuse et élégante."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Un cadre pensé pour se sentir bien</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              L’ambiance visuelle, les lumières et le rythme du site sont conçus pour évoquer une atmosphère douce,
              accueillante et maîtrisée, loin des clichés agressifs.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Une image plus premium</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              La présentation met en avant le sérieux du lieu, la qualité de l’accueil et la cohérence de l’univers,
              afin de donner envie à des visiteurs exigeants de franchir le pas.
            </p>
          </div>
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Un discours clair et rassurant</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Peu de texte, bien organisé, avec un vocabulaire choisi : cela simplifie la lecture et renforce la confiance,
              surtout pour les personnes qui découvrent ce type d’établissement.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Première visite"
        title="Comment un nouveau visiteur perçoit ce site"
        description="Cette partie illustre la logique du parcours : on ne cherche pas à tout dire, mais à donner envie, rassurer, et guider vers le contact ou la visite."
      >
        <div className="glass p-7 md:p-8 rose-halo">
          <ol className="space-y-3 text-sm text-neutral-300 leading-relaxed list-decimal list-inside">
            <li>
              <span className="font-semibold text-white">Comprendre l’ambiance globale :</span>{' '}
              l’ouverture et le Hero donnent tout de suite un ton haut de gamme, calme et assumé.
            </li>
            <li>
              <span className="font-semibold text-white">Identifier les garanties :</span>{' '}
              consentement, discrétion, hygiène, sélection et dress-code sont visibles dès le début.
            </li>
            <li>
              <span className="font-semibold text-white">Se projeter dans l’expérience :</span>{' '}
              les sections suivantes détaillent les espaces, les soirées et les informations pratiques,
              sans surcharger ni perdre le lecteur.
            </li>
          </ol>
        </div>
      </Section>
    </div>
  );
}

export default Home;
