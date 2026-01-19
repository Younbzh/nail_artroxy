const signals = [
  'Consentement',
  'Discrétion',
  'Hygiène',
  'Dress-code',
  'Sélection',
];

function TrustSignals() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="flex flex-wrap justify-center gap-3 text-[11px] tracking-[0.22em] uppercase opacity-85">
        {signals.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm bg-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TrustSignals;
