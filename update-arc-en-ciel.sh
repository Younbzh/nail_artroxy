#!/bin/bash
set -e

echo "🌈 Mise à jour du site pour : Club Arc-en-Ciel"
echo "Style : Boudoir premium + nuances lumineuses"

###########################################
# HOME.TSX
###########################################
echo "Updating Home.tsx..."
cat > src/pages/Home.tsx << 'EOF'
import Hero from '../components/Hero';
import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Home() {
  return (
    <div className="space-y-20">

      <Hero
        title={`${siteConfig.clubName} — Spa, soirées et élégance moderne`}
        subtitle="Une expérience unique entre détente, convivialité et ambiance festive. Une vision moderne et élégante de votre établissement."
        highlight="Maquette illustrative personnalisée"
      />

      <Section
        eyebrow="Ambiance"
        title="Un lieu entre relaxation et soirées animées"
        description="L’idée ici est de montrer au visiteur la diversité de l’expérience : détente en journée, convivialité en soirée, le tout dans un cadre élégant et respectueux. Cette section présente les forces du club avec un ton moderne et rassurant."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold">Espace Spa</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Sauna, hammam et zones de détente pensées pour offrir une pause relaxante et chaleureuse,
              dans un cadre élégant et confortable.
            </p>
          </div>

          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold">Soirées festives</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Ambiance conviviale, piste de danse, musique moderne : les soirées permettent aux visiteurs
              de profiter d’un moment social, vivant et respectueux.
            </p>
          </div>

          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold">Espaces intimes</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Des coins câlins et zones plus feutrées, disposés avec goût pour une transition naturelle 
              entre détente et sensualité.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
EOF

###########################################
# INFOS.TSX
###########################################
echo "Updating Infos.tsx..."
cat > src/pages/Infos.tsx << 'EOF'
import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Infos() {
  return (
    <div className="space-y-20">

      <Section
        eyebrow="Le concept"
        title={`L’expérience ${siteConfig.clubName}`}
        description="Cette page met en avant la singularité du club : un espace hybride qui combine spa relaxant, convivialité sociale et soirées animées. Le but est de proposer une lecture fluide et moderne, qui rassure et donne envie de découvrir le lieu."
      >
        <div className="grid gap-6 md:grid-cols-2">

          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold">Une ambiance accueillante</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              L’ambiance du club repose sur l’écoute, la convivialité et le respect. Le design permet de refléter 
              cette atmosphère chaleureuse sans surcharge visuelle.
            </p>
          </div>

          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold">Codes & respect</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Le dress-code élégant et le respect mutuel sont au centre de l’expérience, pour garantir une qualité 
              de fréquentation et une ambiance agréable pour tous.
            </p>
          </div>

        </div>
      </Section>

      <Section
        eyebrow="Espaces"
        title="Sauna, hammam, bar, piste de danse"
        description="Une variété d’espaces qui permet à chacun de vivre l’expérience qui lui correspond : relaxation, sociabilité ou sensualité."
      >
        <div className="grid gap-6 md:grid-cols-3">

          <div className="glass p-6 gold-halo">
            <h3 className="text-sm font-semibold">Spa & détente</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Sauna, hammam et zones de relaxation pour une parenthèse bien-être.
            </p>
          </div>

          <div className="glass p-6 rose-halo">
            <h3 className="text-sm font-semibold">Bar & socialisation</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Un espace chaleureux pour discuter, partager et rencontrer de nouveaux visages.
            </p>
          </div>

          <div className="glass p-6 gold-halo">
            <h3 className="text-sm font-semibold">Piste & animations</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Une ambiance dynamique idéale pour soirées à thème, danse, musique et convivialité.
            </p>
          </div>

        </div>
      </Section>
    </div>
  );
}

export default Infos;
EOF

###########################################
# TARIFS.TSX
###########################################
echo "Updating Tarifs.tsx..."
cat > src/pages/Tarifs.tsx << 'EOF'
import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Tarifs() {
  return (
    <div className="space-y-20">

      <Section
        eyebrow="Tarifs & créneaux"
        title="Présentation moderne et lisible"
        description="Arc-en-Ciel dispose de créneaux mixtes, couples/femmes seules et hommes seuls. L’objectif de cette maquette est d’apporter une structure plus claire et plus premium à la grille tarifaire du site existant."
      >
        <div className="grid gap-6 md:grid-cols-3">

          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold">Créneaux mixtes</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Idéal pour couples et femmes seules. Ambiance détendue et conviviale, parfaite pour un moment agréable.
            </p>
            <div className="mt-4 text-sm text-[#E6D39A]">
              Exemple de présentation tarifaire modernisée
            </div>
          </div>

          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold">Femmes seules & couples</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Mise en avant élégante, valorisant la qualité de l’accueil et la sécurité de l’expérience.
            </p>
          </div>

          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold">Hommes seuls</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Présentation claire des créneaux spécifiquement dédiés, pour garantir un équilibre harmonieux.
            </p>
          </div>

        </div>
      </Section>

      <Section
        eyebrow="Note"
        title="Une grille modernisée"
        description="Cette présentation ne remplace pas les tarifs officiels du club, mais illustre une structure plus lisible pour les visiteurs."
      />
    </div>
  );
}

export default Tarifs;
EOF

###########################################
# CONTACT.TSX
###########################################
echo "Updating Contact.tsx..."
cat > src/pages/Contact.tsx << 'EOF'
import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Contact() {
  return (
    <div className="space-y-20">

      <Section
        eyebrow="Contact"
        title="Un espace clair et rassurant"
        description={`Ce formulaire illustratif montre comment un visiteur peut contacter ${siteConfig.clubName} dans un cadre moderne, élégant et discret.`}
      >
        <div className="grid gap-6 md:grid-cols-2">

          <div className="glass rose-halo p-7">

            <h3 className="text-base font-semibold text-white">Formulaire</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Nom / pseudo</label>
                <input className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" />
              </div>

              <div>
                <label className="block text-xs text-neutral-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" />
              </div>

              <div>
                <label className="block text-xs text-neutral-300 mb-1">Message</label>
                <textarea rows="4" className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" />
              </div>

              <button className="btn-primary w-full">Envoyer (maquette)</button>

            </div>
          </div>

          <div className="glass gold-halo p-7">
            <h3 className="text-base font-semibold text-white">Informations utiles</h3>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              Cette section sert à donner une idée claire de ce que pourrait contenir la page finale : 
              adresse, horaires, consignes, éléments utiles pour la venue à ${siteConfig.clubName}.
            </p>

            <div className="mt-5 space-y-2 text-sm text-neutral-300">
              <div>📍 Adresse (exemple)</div>
              <div>📞 Numéro (exemple)</div>
              <div>🕘 Horaires type</div>
              <div>🧥 Dress-code conseillé</div>
            </div>

            <p className="mt-6 text-[11px] text-neutral-400">
              Maquette visuelle — le contenu final sera adapté aux informations réelles du club.
            </p>
          </div>

        </div>
      </Section>
    </div>
  );
}

export default Contact;
EOF

echo "✅ Mise à jour terminée !"
echo "👉 Lance : npm run dev"
EOF
