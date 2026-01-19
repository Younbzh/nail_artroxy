#!/bin/bash
set -e

echo "🎬 Upgrade TEMPLATE V2 — Experiential Premium"

mkdir -p src/components

############################################
# COLD OPEN
############################################
cat > src/components/ColdOpen.tsx << 'EOF'
import { siteConfig } from '../config/siteConfig';

function ColdOpen() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-28 pb-10">
      <p className="text-center text-lg md:text-2xl font-light tracking-wide opacity-80">
        Certains lieux ne se décrivent pas. <br />
        <span className="italic opacity-90">Ils se ressentent.</span>
      </p>
    </section>
  );
}

export default ColdOpen;
EOF

############################################
# TRUST SIGNALS
############################################
cat > src/components/TrustSignals.tsx << 'EOF'
const signals = [
  "Consentement",
  "Discrétion",
  "Hygiène",
  "Dress-code",
  "Sélection",
];

function TrustSignals() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap justify-center gap-4 text-xs tracking-widest uppercase opacity-80">
        {signals.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 px-4 py-2 backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrustSignals;
EOF

############################################
# HERO UPDATE (replace import usage)
############################################
cat > src/components/Hero.tsx << 'EOF'
import { siteConfig } from '../config/siteConfig';

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
        {siteConfig.clubName}
      </h1>

      <p className="mt-4 max-w-xl text-neutral-300 text-base leading-relaxed">
        {siteConfig.tone.promise}
      </p>
    </section>
  );
}

export default Hero;
EOF

############################################
# GLOBAL STYLE MODE (dark / light)
############################################
cat >> src/index.css << 'EOF'

/* LIGHT MODE OVERRIDES */
body[data-theme="light"] {
  background: linear-gradient(to bottom, #f8f8f8, #ffffff);
  color: #111;
}

body[data-theme="light"] .glass {
  background: rgba(255,255,255,0.8);
  border-color: rgba(0,0,0,0.08);
}

body[data-theme="light"] p {
  color: #333;
}
EOF

echo "✅ Template V2 installé"
