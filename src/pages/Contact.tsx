import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Contact() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Prise de contact"
        title="Un espace clair pour poser des questions ou préparer une visite"
        description={`Cette page montre comment ${siteConfig.clubName} pourrait présenter un contact moderne, rassurant et discret. Le but est d’encourager les premiers échanges, sans pression.`}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rose-halo p-7">
            <h3 className="text-base font-semibold text-white">Formulaire illustratif</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Nom / pseudo</label>
                <input className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" />
              </div>
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100"
                />
              </div>
              <button className="btn-primary w-full">Envoyer (maquette)</button>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Aucun message n’est réellement envoyé depuis cette maquette. Dans une version finale, ce formulaire serait relié
                à l’adresse e-mail du club ou à un système de réservation.
              </p>
            </div>
          </div>

          <div className="glass gold-halo p-7">
            <h3 className="text-base font-semibold text-white">Informations utiles</h3>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              Cette zone peut regrouper les éléments essentiels : adresse, horaires, consignes, accès…
              L’objectif est de rendre la venue la plus simple et la plus rassurante possible.
            </p>
            <div className="mt-5 space-y-2 text-sm text-neutral-300">
              <div>📍 Adresse (exemple)</div>
              <div>📞 Téléphone (exemple)</div>
              <div>🕘 Horaires habituels</div>
              <div>🧥 Dress-code conseillé</div>
            </div>
            <p className="mt-6 text-[11px] text-neutral-400">
              Une phrase courte sur la discrétion et le respect de la confidentialité peut être ajoutée ici,
              afin de renforcer encore la confiance des visiteurs.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
