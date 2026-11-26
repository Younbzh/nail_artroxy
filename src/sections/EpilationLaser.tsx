import { useState } from 'react';
import { ClipboardCheck, GraduationCap, ShieldCheck, HeartHandshake, Phone, Plus } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Lightbox from '../components/Lightbox';
import { zones, corpsComplet, avantages, attestations, questionsLaser } from '../data/laser';

const telBrut = siteConfig.contact.phone.replace(/\s/g, '');
const PLAQUETTE = '/epilation-laser/plaquette-tarifs.jpg';

/*
  La confiance passe avant le prix : on parle d'un appareil qui chauffe la
  peau. D'où l'ordre — les garanties, puis les tarifs, puis le déroulé.
  Les précautions et les questions restent à portée, mais repliées : elles
  rassurent celle qui les cherche sans alourdir la lecture des autres.
  Le fond rose poudré détache la section des ongles sans rompre avec le
  reste du site.
*/
const engagements = [
  {
    Icone: ClipboardCheck,
    titre: 'Un bilan offert avant tout',
    texte:
      "On regarde ensemble votre peau, vos poils et les contre-indications. Si le laser ne vous convient pas, je vous le dis, et ça ne vous coûte rien.",
  },
  {
    Icone: GraduationCap,
    titre: 'Une praticienne formée',
    texte:
      "Formation socle laser suivie en novembre 2026 auprès d'un organisme certifié Qualiopi. L'attestation est consultable ci-dessous et affichée au salon.",
  },
  {
    Icone: ShieldCheck,
    titre: 'Un cadre sécurisé',
    texte:
      "Laser diode professionnel, lunettes de protection à chaque séance, fiche d'information remise et signée avant la première séance.",
  },
  {
    Icone: HeartHandshake,
    titre: 'Un suivi à chaque séance',
    texte:
      "Je note les réglages et l'évolution de chaque zone. On ajuste au fil des séances, et vous savez toujours où vous en êtes.",
  },
];

const etapes = [
  {
    titre: 'Le bilan',
    texte:
      "Questionnaire de santé, examen de la zone, explications sur les résultats à attendre et remise de la fiche d'information. Gratuit et sans engagement.",
  },
  {
    titre: 'Les séances',
    texte:
      'Zone rasée au rasoir la veille, lunettes de protection, quelques minutes de laser. Vous repartez tout de suite à vos occupations.',
  },
  {
    titre: 'Le protocole',
    texte:
      "Comptez en moyenne 8 séances par zone, espacées de 4 à 8 semaines. Chaque peau et chaque pilosité est unique : on ajuste ensemble, séance après séance.",
  },
];

const aSavoir = [
  'Rasoir uniquement pendant tout le protocole : ni cire, ni pince, ni épilateur, ni crème dépilatoire. Le laser a besoin de la racine.',
  'Pas de soleil, d’UV ni d’autobronzant sur la zone dans les semaines avant et après chaque séance.',
  'Peu efficace sur les poils blancs, gris, roux ou très blonds : le laser cible le pigment.',
  'Déconseillé pendant la grossesse, sur une peau bronzée ou lésée, sur un tatouage, ou avec un traitement photosensibilisant.',
];

const euros = (n: number) => `${n} €`;

/** Un volet repliable, sur le modèle des questions fréquentes. */
function Volet({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-line py-5 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15.5px] font-medium text-ink [&::-webkit-details-marker]:hidden">
        {titre}
        <Plus className="h-4 w-4 shrink-0 text-blush-ink transition-transform group-open:rotate-45" aria-hidden="true" />
      </summary>
      <div className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-ink-mut">{children}</div>
    </details>
  );
}

export default function EpilationLaser() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
  const urlBilan = siteConfig.reservation.prestations.laser;

  return (
    <section id="epilation-laser" className="section bg-blush-pale">
      <div className="section-inner">
        {/* En-tête */}
        <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">
              <span className="mr-2 rounded-full bg-blush px-2.5 py-1 text-ink">Nouveau</span>
              Épilation laser diode
            </p>
            <h2 className="section-title mt-6">
              Une peau douce,
              <em className="block font-normal italic text-blush-ink">durablement.</em>
            </h2>
            <p className="mt-6 max-w-prose text-[15.5px] leading-relaxed text-ink-mut">
              Fini le rasoir tous les deux jours et la cire qui tire. Le laser diode réduit la pousse
              du poil séance après séance, dans le même espace calme et privé que pour vos ongles. On
              commence toujours par un bilan, offert, pour savoir si c'est fait pour vous.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={urlBilan} target="_blank" rel="noopener noreferrer" className="btn-fill">
                Réserver mon bilan offert
              </a>
              <a href="#laser-tarifs" className="btn-outline bg-paper">
                Voir les tarifs
              </a>
            </div>
          </div>

          {/* L'essentiel, d'un coup d'œil */}
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line">
            {[
              ['Bilan', 'offert'],
              ['Dès', '25 €'],
              ['En moyenne', '8 séances'],
              ['Technologie', 'laser diode'],
            ].map(([libelle, valeur]) => (
              <div key={libelle} className="bg-paper px-6 py-7">
                <dt className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-blush-ink">{libelle}</dt>
                <dd className="mt-2 font-display text-[1.7rem] font-bold leading-none text-ink">{valeur}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Engagements */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map(({ Icone, titre, texte }) => (
            <div key={titre} className="rounded-2xl bg-paper p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-pale">
                <Icone className="h-5 w-5 text-blush-ink" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mb-2 mt-5 text-lg font-bold">{titre}</h3>
              <p className="text-[14px] leading-relaxed text-ink-mut">{texte}</p>
            </div>
          ))}
        </div>

        {/* Attestations de formation : la preuve, pas seulement la promesse */}
        {attestations.map((a) => (
          <div key={a.image} className="mt-4 grid items-center gap-8 rounded-2xl bg-paper p-6 sm:p-8 md:grid-cols-[1.3fr_1fr]">
            <button
              type="button"
              onClick={() => setZoom({ src: a.image, alt: `Attestation de ${a.titre.toLowerCase()}` })}
              className="group overflow-hidden rounded-xl border border-line"
            >
              <img
                src={a.image}
                alt={`Attestation de ${a.titre.toLowerCase()}, ${a.organisme}`}
                loading="lazy"
                decoding="async"
                className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            <div>
              <p className="eyebrow">Ma formation</p>
              <h3 className="mt-3 text-2xl font-bold">{a.titre}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-mut">
                {a.organisme}, {a.date}.
                <br />
                {a.detail}.
              </p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-ink-mut">
                Une formation obligatoire depuis le décret du 24 mai 2024 pour pratiquer l'épilation
                au laser. Cliquez sur l'attestation pour l'agrandir.
              </p>
            </div>
          </div>
        ))}

        {/* Tarifs */}
        <div id="laser-tarifs" className="mt-20 rounded-3xl bg-paper p-7 sm:p-10">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Tarifs par zone</p>
              <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold">Prix par séance, sans surprise</h3>
            </div>
            <button
              type="button"
              onClick={() => setZoom({ src: PLAQUETTE, alt: "Plaquette des tarifs d'épilation laser de Roxé Beauté" })}
              className="self-start text-[13px] font-bold text-ink underline decoration-blush decoration-2 underline-offset-4 hover:decoration-blush-ink sm:self-auto"
            >
              Voir la plaquette
            </button>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {zones.map(({ groupe, lignes }) => (
              <div key={groupe}>
                <h4 className="mb-5 border-b border-line pb-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-blush-ink">
                  {groupe}
                </h4>
                <ul className="space-y-4">
                  {lignes.map((z) => (
                    <li key={z.nom} className="flex items-baseline gap-3">
                      <span className="text-[15px] text-ink">
                        {z.nom}
                        {z.precision && <span className="text-ink-mut"> ({z.precision})</span>}
                        <span className="block text-[12px] text-ink-mut tabular-nums">{z.duree}</span>
                      </span>
                      <span className="flex-1 -translate-y-1 border-b border-dotted border-line" aria-hidden="true" />
                      <span className="font-display text-lg font-bold text-ink tabular-nums">{euros(z.prix)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Corps complet et avantages */}
          <div className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-5 rounded-2xl bg-blush p-7 text-ink sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70">Corps complet</p>
                <p className="mt-2 text-[15px] leading-relaxed">{corpsComplet.zones.join(' · ')}</p>
                <p className="mt-1 text-[12.5px] text-ink/60 tabular-nums">{corpsComplet.duree}</p>
              </div>
              <p className="font-display text-5xl font-bold tabular-nums">{euros(corpsComplet.prix)}</p>
            </div>
            <div className="rounded-2xl border border-line p-7">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-blush-ink">Forfaits et avantages</p>
              <ul className="mt-4 space-y-2 text-[15px] text-ink">
                {avantages.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-blush-ink" aria-hidden="true">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Déroulé */}
        <div className="mt-20">
          <p className="eyebrow">Comment ça se passe</p>
          <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold">Trois étapes, et aucune précipitation</h3>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {etapes.map(({ titre, texte }, i) => (
              <li key={titre} className="border-t border-blush pt-6">
                <span className="font-display text-4xl font-bold italic text-blush-ink tabular-nums">{i + 1}</span>
                <h4 className="mt-3 text-lg font-bold">{titre}</h4>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-mut">{texte}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Précautions et questions, repliées */}
        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">Avant de vous décider</p>
            <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold">Tout ce qu'il faut savoir</h3>
            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-ink-mut">
              Les questions qu'on me pose le plus, et ce que je préfère vous dire avant plutôt
              qu'après.
            </p>
          </div>
          <div className="rounded-3xl bg-paper px-7 py-2 sm:px-9">
            <Volet titre="Les précautions à connaître">
              <ul className="space-y-2.5">
                {aSavoir.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blush-ink" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px]">
                Une consultation médicale est recommandée avant de commencer un protocole d'épilation au
                laser, et indispensable en cas de doute sur une contre-indication.
              </p>
            </Volet>
            {questionsLaser.map(({ q, r }) => (
              <Volet key={q} titre={q}>
                <p>{r}</p>
              </Volet>
            ))}
          </div>
        </div>

        {/* Appel final */}
        <div className="mt-20 flex flex-col items-start gap-6 rounded-3xl bg-ink p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="text-2xl font-bold text-paper">Commencez par le bilan, il est offert</h3>
            <p className="mt-2 text-[14.5px] text-white/60">Le temps de faire le point ensemble, sans engagement.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={urlBilan} target="_blank" rel="noopener noreferrer" className="btn-fill">
              Réserver mon bilan
            </a>
            <a href={`tel:${telBrut}`} className="btn-ghost">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {zoom && <Lightbox src={zoom.src} alt={zoom.alt} onClose={() => setZoom(null)} />}
    </section>
  );
}
