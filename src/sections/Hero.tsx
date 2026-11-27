import { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { heroSlug, pleineTaille } from '../data/portfolio';
import { laserVisible } from '../data/laser';

export default function Hero() {
  /*
    La photo d'accueil, mise en mouvement.

    Un seul plan, une poussée lente vers les ongles, aucune coupe — c'est la
    coupe qui fait lire un diaporama, pas le fait que la source soit fixe. Le
    mouvement va vers le sujet plutôt qu'au hasard : c'est ce que fait
    quelqu'un qui se penche pour regarder de plus près.

    La source est SA photo, pas un plan de banque. Son travail vaut mieux que
    n'importe quelle main anonyme, et l'affiche de la vidéo étant cette même
    photo, la page est identique à l'ancienne pendant le chargement comme en
    mouvement réduit.

    Deux montages, un seul téléchargement : l'accueil fait 92 % de la hauteur
    d'écran, et sur un téléphone une 16/9 y perdrait les deux tiers de sa
    largeur. Le choix se fait ici parce que `<source media>` n'est pas appliqué
    sur une vidéo, et que deux <video> dont l'un est masqué se téléchargent
    tous les deux.
  */
  const [srcVideo, setSrcVideo] = useState('');
  useEffect(() => {
    const mq = window.matchMedia('(max-aspect-ratio: 1/1)');
    const choisir = () =>
      setSrcVideo(mq.matches ? '/videos/hero-mobile-v1.mp4' : '/videos/hero-v1.mp4');
    choisir();
    mq.addEventListener('change', choisir);
    return () => mq.removeEventListener('change', choisir);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img
        src={pleineTaille(heroSlug)}
        alt="French longue réalisée en gel par Roxana"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      <video
        src={srcVideo || undefined}
        poster={pleineTaille(heroSlug)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="video-hero absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      {/* Voile dégradé : garantit la lisibilité du texte quelle que soit la photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 md:pb-24">
        {laserVisible && (
          <a
            href="#epilation-laser"
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-ink/30 py-1.5 pl-1.5 pr-4 text-[12.5px] text-white/85 backdrop-blur-sm transition-colors hover:border-blush hover:text-white"
          >
            <span className="rounded-full bg-blush px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink">Nouveau</span>
            Épilation laser diode, bilan offert
            <span aria-hidden="true">→</span>
          </a>
        )}
        <p className="eyebrow-on-dark mb-5">{laserVisible ? 'Ongles & épilation laser' : 'Prothésiste ongulaire'} · Moréac (56)</p>

        <h1 className="mb-6 text-[clamp(2.7rem,8vw,5.6rem)] font-bold leading-[0.88] tracking-[-0.015em] text-white">
          Roxé
          <em className="block font-normal italic opacity-90">Beauté</em>
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
