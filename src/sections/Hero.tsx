import { siteConfig } from '../config/siteConfig';
import { heroSlug, pleineTaille } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img
        src={pleineTaille(heroSlug)}
        alt="French longue réalisée en gel par Roxana"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      {/* Voile dégradé : garantit la lisibilité du texte quelle que soit la photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 md:pb-24">
        <p className="eyebrow-on-dark mb-5">Prothésiste ongulaire · Moréac (56)</p>

        <h1 className="mb-6 text-[clamp(2.7rem,8vw,5.6rem)] font-bold leading-[0.88] tracking-[-0.015em] text-white">
          Nail.art.rox
          <em className="block font-normal italic opacity-90">by Dina</em>
        </h1>

        <p className="mb-9 max-w-[34ch] text-base leading-relaxed text-white/75">
          Chaque ongle est une petite œuvre d'art. Je la crée avec vous, avec soin et douceur.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href={siteConfig.reservation.url} target="_blank" rel="noopener noreferrer" className="btn-fill">
            Réserver un créneau
          </a>
          <a href="#portfolio" className="btn-ghost">
            Voir le portfolio
          </a>
        </div>

        <p className="mt-8 text-[13px] text-white/55">
          <span className="font-semibold text-blush">−15 %</span> sur votre première pose
        </p>
      </div>
    </section>
  );
}
