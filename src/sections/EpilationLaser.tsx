import { useState } from 'react';
import { ClipboardCheck, GraduationCap, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Lightbox from '../components/Lightbox';
import { zones, corpsComplet, avantages, attestations, questionsLaser } from '../data/laser';

const telBrut = siteConfig.contact.phone.replace(/\s/g, '');
const PLAQUETTE = '/epilation-laser/plaquette-tarifs.jpg';

/*
  La confiance passe avant le prix : on parle d'un appareil qui chauffe la
  peau. D'où l'ordre de la section — les garanties, puis les tarifs, puis le
  déroulé, puis ce qu'on ne cache pas (limites et contre-indications).
  Le fond sombre la détache des ongles : c'est un autre métier, et il est
  nouveau.
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
      "J'ai suivi la formation obligatoire à l'épilation laser. Mes attestations sont affichées au salon, comme l'exige la réglementation.",
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
      'Zone rasée la veille, lunettes de protection, quelques minutes de laser. Vous repartez tout de suite à vos occupations.',
  },
  {
    titre: 'Le protocole',
    texte:
      'En général 6 à 8 séances par zone, espacées de 4 à 8 semaines. Les poils repoussent de moins en moins, et de plus en plus fins.',
  },
];

const aSavoir = [
  "Pas de cire ni de pince pendant le protocole : le laser a besoin de la racine. Le rasoir, oui.",
  'Pas de soleil, d’UV ni d’autobronzant sur la zone dans les semaines avant et après chaque séance.',
  "Peu efficace sur les poils blancs, gris, roux ou très blonds : le laser cible le pigment.",
  'Déconseillé pendant la grossesse, sur une peau bronzée ou lésée, sur un tatouage, ou avec un traitement photosensibilisant.',
];

const euros = (n: number) => `${n} €`;

export default function EpilationLaser() {
  const [plaquette, setPlaquette] = useState(false);
  const urlBilan = siteConfig.reservation.prestations.laser;

  return (
    <section id="epilation-laser" className="section bg-ink text-white/70">
      <div className="section-inner">
        {/* En-tête */}
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow-on-dark">
              <span className="mr-2 rounded-full bg-blush px-2.5 py-1 text-ink">Nouveau</span>
              Épilation laser diode
            </p>
            <h2 className="section-title mt-6 text-white">
              Une peau douce,
              <em className="block font-normal italic text-blush">durablement.</em>
            </h2>
          </div>
          <div>
            <p className="text-[15.5px] leading-relaxed text-white/70">
              Fini le rasoir tous les deux jours et la cire qui tire. Le laser diode réduit la pousse
              du poil séance après séance, dans le même espace calme et privé que pour vos ongles.
              On commence toujours par un bilan, offert, pour savoir si c'est fait pour vous.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={urlBilan} target="_blank" rel="noopener noreferrer" className="btn-fill">
                Réserver mon bilan offert
              </a>
              <a href="#laser-tarifs" className="btn-ghost">
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>

        {/* Engagements */}
        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map(({ Icone, titre, texte }) => (
            <div key={titre} className="bg-ink p-7">
              <Icone className="h-6 w-6 text-blush" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mb-2 mt-5 text-lg font-bold text-white">{titre}</h3>
              <p className="text-[14px] leading-relaxed text-white/60">{texte}</p>
            </div>
          ))}
        </div>

        {/* Attestations, dès qu'elles sont transmises */}
        {attestations.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {attestations.map((a) => (
              <figure key={a.image} className="bg-white/5 p-4">
                <img src={a.image} alt={a.titre} loading="lazy" className="aspect-[4/3] w-full bg-paper object-contain p-2" />
                <figcaption className="mt-3 text-[13.5px] text-white/70">
                  <span className="font-bold text-white">{a.titre}</span> · {a.organisme}, {a.annee}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Tarifs */}
        <div id="laser-tarifs" className="mt-24">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-on-dark">Tarifs par zone</p>
              <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Prix par séance, sans surprise</h3>
            </div>
            <button
              type="button"
              onClick={() => setPlaquette(true)}
              className="self-start text-[13px] font-bold text-white underline decoration-blush decoration-2 underline-offset-4 hover:decoration-white sm:self-auto"
            >
              Voir la plaquette
            </button>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {zones.map(({ groupe, lignes }) => (
              <div key={groupe} className="bg-ink p-7">
                <h4 className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-blush">{groupe}</h4>
                <ul className="space-y-4">
                  {lignes.map((z) => (
                    <li key={z.nom} className="flex items-baseline gap-3">
                      <span className="text-[15px] text-white">
                        {z.nom}
                        {z.precision && <span className="text-white/45"> ({z.precision})</span>}
                        <span className="block text-[12px] text-white/40 tabular-nums">{z.duree}</span>
                      </span>
                      <span className="flex-1 translate-y-[-4px] border-b border-dotted border-white/20" aria-hidden="true" />
                      <span className="font-display text-lg font-bold text-white tabular-nums">{euros(z.prix)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Corps complet et avantages */}
          <div className="grid gap-px bg-white/10 md:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-6 bg-blush p-8 text-ink sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70">Corps complet</p>
                <p className="mt-2 text-[15px] leading-relaxed">{corpsComplet.zones.join(' · ')}</p>
                <p className="mt-1 text-[12.5px] text-ink/60 tabular-nums">{corpsComplet.duree}</p>
              </div>
              <p className="font-display text-5xl font-bold tabular-nums">{euros(corpsComplet.prix)}</p>
            </div>
            <div className="bg-ink p-8">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-blush">Forfaits et avantages</p>
              <ul className="mt-4 space-y-2 text-[15px] text-white">
                {avantages.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-blush" aria-hidden="true">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Déroulé */}
        <div className="mt-24 grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow-on-dark">Comment ça se passe</p>
            <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Trois étapes, et aucune précipitation</h3>
          </div>
          <ol className="space-y-8">
            {etapes.map(({ titre, texte }, i) => (
              <li key={titre} className="flex gap-6">
                <span className="font-display text-3xl font-bold text-blush tabular-nums">{i + 1}</span>
                <div>
                  <h4 className="text-lg font-bold text-white">{titre}</h4>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/60">{texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Ce qu'il faut savoir */}
        <div className="mt-24 border border-white/15 p-8 md:p-10">
          <p className="eyebrow-on-dark">À savoir avant de commencer</p>
          <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {aSavoir.map((t) => (
              <li key={t} className="flex gap-3 text-[14.5px] leading-relaxed text-white/70">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blush" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/50">
            Une consultation médicale est recommandée avant de commencer un protocole d'épilation au
            laser, et indispensable en cas de doute sur une contre-indication.
          </p>
        </div>

        {/* Questions */}
        <div className="mt-24 grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow-on-dark">Vos questions</p>
            <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Celles qu'on me pose le plus</h3>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {questionsLaser.map(({ q, r }) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15.5px] font-medium text-white [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="text-xl text-blush transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-prose text-[14.5px] leading-relaxed text-white/60">{r}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Appel final */}
        <div className="mt-24 flex flex-col items-start gap-6 bg-white/5 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="text-2xl font-bold text-white">Commencez par le bilan, il est offert</h3>
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

      {plaquette && (
        <Lightbox
          src={PLAQUETTE}
          alt="Plaquette des tarifs d'épilation laser de Roxé Beauté"
          onClose={() => setPlaquette(false)}
        />
      )}
    </section>
  );
}
