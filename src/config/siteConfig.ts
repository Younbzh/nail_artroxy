// 📁 src/config/siteConfig.ts - EUPHORIA SPA
export const siteConfig = {
  clubName: "Euphoria Spa",
  city: "Benesse Maremne",
  positioning: "Spa & Club Privé Libertin • Glamour, classe et sexy aux portes du Pays Basque",
  accentMode: "dark" as "dark" | "light",

  tone: {
    keywords: [
      "glamour",
      "classe",
      "sexy",
      "raffiné",
      "élégant",
      "respectueux",
      "discret"
    ],
    promise:
      "Un véritable havre de bien-être et de liberté sur 250 m² d'espace intérieur. Nous vous accueillons toute l'année pour des soirées à thèmes où règne une atmosphère glamour et raffinée, propice à la détente, à la rencontre et à la découverte de nouveaux plaisirs.",
  },

  hero: {
    title: "Bienvenue à Euphoria Spa",
    subtitle: "Spa & Club Privé Libertin",
    tagline: "\"Un havre de bien-être et de liberté\"",
    description: "Situé aux portes du Pays Basque et des Landes, sur 250 m² d'espace glamour et raffiné",
    cta: "Découvrir Euphoria"
  },

  audience: {
    primary: "Couples",
    secondary: "Dames seules",
    tertiary: "Hommes seuls (nombre proportionné)",
    philosophy: "Que vous soyez habitué(e) ou débutant(e), de tous âges, notre établissement vous offre un cadre élégant et respectueux des envies de chacun. Euphoria est un club où règne une atmosphère glamour et raffinée. Le respect et la discrétion sont nos maîtres mots. Les samedis soirs sont totalement réservés aux couples et aux femmes seules."
  },

  spaces: [
    {
      title: "Euphoria Club",
      emoji: "🎊",
      description: "Bar et Night-Club",
      details: "Piste de danse avec DJ, cage et barre de pole dance pour toutes les audaces. Ambiance lounge en journée, club festif en soirée"
    },
    {
      title: "Euphoria Spa",
      emoji: "🌊",
      description: "Espace balnéo détente",
      details: "Douches, sauna et bain à bulles dans un espace naturiste pour vous délasser ou vous rapprocher dans les bulles"
    },
    {
      title: "Summer Pool",
      emoji: "🏖️",
      description: "Plage naturiste libertine",
      details: "Votre plage privée pour les beaux jours, espace extérieur naturiste et libertin"
    },
    {
      title: "Salons de Relaxation",
      emoji: "🛋️",
      description: "Deux espaces de détente",
      details: "Des salons cosy à proximité de l'espace balnéo pour des moments de complicité"
    },
    {
      title: "Espace Tapas",
      emoji: "🍷",
      description: "Restauration légère",
      details: "Tapas offerts les jeudis (20h-22h) et samedis (20h-21h30) pour partager un moment convivial"
    },
    {
      title: "Bar Central",
      emoji: "🍸",
      description: "Le point de rencontre",
      details: "Bar convivial pour profiter d'un verre dans une ambiance chaleureuse et élégante"
    }
  ],

  values: [
    { text: "3 espaces en 1", icon: "🎯" },
    { text: "Glamour & Raffinement", icon: "💎" },
    { text: "Respect & Discrétion", icon: "🤝" },
    { text: "Dress code strict", icon: "👗" },
    { text: "250 m² d'espace", icon: "🏢" }
  ],

  dressCode: {
    ladies: "Pantalons, shorts, claquettes et baskets INTERDITS. Optez pour une robe ou jupe + talons pour révéler toute votre sensualité",
    gentlemen: "Bermudas et claquettes INTERDITS. Pantalon + chemise ou polo exigé. Sneakers acceptées",
    spirit: "Euphoria est un club libertin et sélect, où l'élégance et le raffinement sont de mise. Une tenue soignée est exigée pour préserver cette ambiance chic et sensuelle."
  },

  events: [
    {
      title: "Jeudi Après-midi & Soirée",
      schedule: "Jeudi 14h - 01h",
      description: "Soirée mixte avec tapas de 20h à 22h",
      atmosphere: "Ambiance lounge décontractée, idéale pour découvrir le club en douceur"
    },
    {
      title: "Vendredi Soir",
      schedule: "Vendredi 20h - 02h",
      description: "Soirée mixte - Couples, Dames seules & Hommes seuls",
      atmosphere: "Démarrez le week-end dans une ambiance festive et glamour"
    },
    {
      title: "Samedi Soir Premium",
      schedule: "Samedi 20h - 03h",
      description: "EXCLUSIVEMENT Couples et Dames seules + Tapas 20h-21h30",
      atmosphere: "La soirée d'élite avec DJ, ambiance club et tapas inclus"
    },
    {
      title: "Dimanche Détente",
      schedule: "Dimanche 14h - 19h30",
      description: "Soirée mixte en journée",
      atmosphere: "Terminez le week-end en beauté dans une ambiance décontractée"
    }
  ],

  pricing: {
    jeudi: [
      { label: "Couples", price: "30€", note: "+ 1 conso/pers" },
      { label: "Hommes seuls", price: "35€", note: "+ 1 consommation" },
      { label: "Avec tapas & vin", price: "+15€", note: "Couple 50€ / Homme 45€" }
    ],
    vendredi: [
      { label: "Couples", price: "45€", note: "+ 1 conso/pers" },
      { label: "Hommes seuls", price: "50€", note: "+ 1 consommation" },
      { label: "Dames seules", price: "Tarif préférentiel", note: "Nous contacter" }
    ],
    samedi: [
      { label: "Couples", price: "45€", note: "+ tapas & vin + 1 conso/pers" },
      { label: "Dames seules", price: "Tarif préférentiel", note: "Nous contacter" }
    ],
    dimanche: [
      { label: "Couples", price: "40€", note: "+ 1 conso/pers" },
      { label: "Hommes seuls", price: "50€", note: "+ 1 consommation" }
    ],
    includes: "🎁 Offre spéciale : Achat d'une bouteille (Alcool ou Champagne 100€) = Entrée Club+Spa offerte pour 2 personnes • 🎉 Formule Week-End : Venir le vendredi = Samedi offert"
  },

  contact: {
    address: {
      street: "D810 - Chemin des Sablerets",
      city: "40220 Benesse Maremne",
      region: "Entre Pays Basque et Landes",
      access: "1 minute de la sortie 8 d'autoroute A63 • À deux pas de Capbreton et Hossegor"
    },
    phone: "05 58 72 58 68",
    email: "contact@euphoriaspa.fr",
    website: "www.euphoriaspa.fr",
    hours: [
      { day: "Lundi - Mercredi", time: "Fermé" },
      { day: "Jeudi", time: "14h - 01h (Mixte + Tapas)" },
      { day: "Vendredi", time: "20h - 02h (Mixte)" },
      { day: "Samedi", time: "20h - 03h (Couples uniquement + Tapas)" },
      { day: "Dimanche", time: "14h - 19h30 (Mixte)" }
    ],
    parking: "Parking privé sur place • Service navette depuis hôtel partenaire disponible"
  },

  highlights: [
    "3 espaces en 1 : Club + Spa + Summer Pool (été)",
    "250 m² d'espace glamour et raffiné",
    "Soirées à thèmes chaque week-end",
    "À proximité des plages naturistes de Capbreton/Hossegor",
    "Accès facile : 1 min sortie A63",
    "Hôtel partenaire avec service navette",
    "Formule Week-End avantageuse",
    "Tapas offerts jeudis et samedis",
    "Ambiance glamour, classe et sexy",
    "Hommes seuls acceptés avec comportement irréprochable",
    "Samedis réservés aux couples et dames seules"
  ],

  features: [
    "Night-Club avec DJ",
    "Piste de danse + Cage + Pole dance",
    "Espace balnéo : sauna + jacuzzi",
    "Douches et vestiaires",
    "2 salons de relaxation",
    "Bar central convivial",
    "Summer Pool (plage naturiste)",
    "Service tapas",
    "Parking privé",
    "Service navette hôtel"
  ],

  weekendFormula: {
    title: "Formule Week-End",
    description: "Profitez pleinement de votre séjour : si vous venez le vendredi soir, l'entrée du samedi soir vous est offerte !",
    conditions: "Valable selon conditions prévues, hors soirées spéciales ou privées"
  },

  strategy: {
    goal:
      "Mettre en avant le concept unique 3-en-1 d'Euphoria Spa : un club glamour, un spa détente et une plage naturiste. Souligner l'élégance, le raffinement et la localisation exceptionnelle entre Pays Basque et Landes.",
    explanation:
      "Une présentation moderne qui reflète l'ambiance glamour et classe d'Euphoria, tout en mettant en avant ses atouts : situation géographique privilégiée, espaces variés et formules avantageuses.",
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à présenter une version moderne du site d'Euphoria Spa.",
};