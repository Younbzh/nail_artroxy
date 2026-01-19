import { siteConfig } from '../config/siteConfig';

function ColdOpen() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-24 pb-10">
      <p className="text-center text-lg md:text-2xl font-light tracking-wide opacity-80 leading-relaxed">
        Certains lieux ne se décrivent pas.
        <br />
        <span className="italic opacity-90">
          {siteConfig.clubName} fait partie de ceux que l’on ressent.
        </span>
      </p>
    </section>
  );
}

export default ColdOpen;
