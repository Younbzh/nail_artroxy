import { vignette } from '../data/portfolio';

export default function Apropos() {
  return (
    <section id="apropos" className="section bg-paper">
      <div className="section-inner grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img
            src={vignette('nailart-floral-rose')}
            alt="Nail art floral réalisé par Roxana"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-4 -right-4 hidden bg-ink px-6 py-5 text-paper md:block">
            <p className="eyebrow-on-dark mb-1">Formée en</p>
            <p className="font-display text-xl font-bold italic tabular-nums">2025</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Qui suis-je</p>
          <h2 className="section-title mb-7">
            Roxana,
            <em className="block font-normal italic">artiste ongulaire</em>
          </h2>
          <div className="max-w-prose space-y-4 text-[15.5px] leading-relaxed text-ink-mut">
            <p>
              Je suis passionnée par les détails et par la couleur. Ce qui m'intéresse, ce n'est pas de
              poser un vernis : c'est de trouver avec vous la forme, la longueur et la teinte qui vous
              ressemblent vraiment.
            </p>
            <p>
              Je me forme en continu auprès de formatrices spécialisées — cuticules, résistance des
              ongles, techniques de pose — parce que la beauté d'une pose tient d'abord à la santé de
              l'ongle qui est dessous.
            </p>
            <p>
              Je vous reçois dans un espace dédié et calme, sur rendez-vous uniquement. Vous êtes la
              seule cliente sur votre créneau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
