import { siteConfig } from '../config/siteConfig';

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10">
      <div className="glass rose-halo p-8 md:p-12">
        <div className="eyebrow mb-3">{siteConfig.positioning}</div>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
          {siteConfig.clubName}
        </h1>
        <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-200 leading-relaxed">
          {siteConfig.tone?.promise ??
            "Une expérience élégante, rassurante et contemporaine, pensée pour mettre en valeur votre établissement."}
        </p>
      </div>
    </section>
  );
}

export default Hero;
