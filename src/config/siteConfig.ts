// 📁 src/config/siteConfig.ts - ATTITUDE SAUNA BREST
export const siteConfig = {
  clubName: "Attitude Sauna",
  city: "Brest",
  positioning: "Sauna libertin & espace bien-être — Ouvert à toutes les sexualités, 7j/7",
  accentMode: "dark" as "dark" | "light",
  
  // SPÉCIFICITÉ : C'est un SAUNA, pas un club !
  type: "sauna" as "sauna" | "club",

  tone: {
    keywords: [
      "bien-être",
      "détente",
      "convivial",
      "inclusif",
      "chaleureux",
      "respectueux",
      "propre",
      "zen"
    ],
    promise:
      "Au cœur de Brest, un espace de rencontre et de détente ouvert 7j/7. Que vous soyez gay, hétéro, bi, trans ou en couple, venez profiter d'un cadre chaleureux où règnent respect et bienveillance.",
  },

  hero: {
    title: "Attitude Sauna Brest",
    subtitle: "Votre oasis de détente et de rencontres",
    tagline: "Un espace inclusif où tous les plaisirs se rencontrent",
    description: "Sauna, hammam, spa, bar lounge... 4 univers pour vos envies de détente et de rencontres coquines",
    cta: "Découvrir nos espaces"
  },

  // PARTICULARITÉ MAJEURE : Planning Gay / Mixte / Toutes Tendances
  audience: {
    primary: "Hommes gay",
    secondary: "Toutes tendances (gay, bi, hétéro, trans)",
    tertiary: "Couples et femmes (créneaux mixtes)",
    philosophy: "Chez Attitude Sauna, nous sommes fiers d'être un espace véritablement inclusif. Que vous soyez un homme gay, hétéro, bi, transexuel, que vous veniez seul ou en couple, vous serez le bienvenu dans le respect des règles de savoir-vivre et d'hygiène."
  },

  // 4 UNIVERS distincts (leur concept unique !)
  universes: [
    {
      name: "SPA",
      emoji: "💦",
      title: "L'Univers Spa",
      description: "Détente aquatique et chaleur bienfaisante",
      features: [
        "Sauna sec haute température",
        "Hammam aux senteurs envoûtantes", 
        "Spa à débordement (eau à 36°C)",
        "Douches modernes et spacieuses"
      ],
      atmosphere: "Laissez-vous envelopper par la vapeur chaude, détendez vos muscles dans notre spa à débordement..."
    },
    {
      name: "DÉTENTE",
      emoji: "🛋️",
      title: "L'Univers Détente",
      description: "Espaces de repos et de sérénité",
      features: [
        "Cabines de relaxation privées",
        "Salle vidéo cosy",
        "Zone de repos zen",
        "Ambiance tamisée et apaisante"
      ],
      atmosphere: "Des espaces pensés pour vous ressourcer entre deux passages au spa..."
    },
    {
      name: "BAR",
      emoji: "🍸",
      title: "L'Univers Bar Lounge",
      description: "Convivialité et rafraîchissements",
      features: [
        "Bar avec Licence III",
        "Boissons sans alcool, bière, vin, champagne",
        "Petite restauration (croque-monsieur, plats préparés)",
        "Fumoir adjacent"
      ],
      atmosphere: "Prenez un verre, faites des rencontres, échangez dans une ambiance lounge..."
    },
    {
      name: "RENCONTRES",
      emoji: "🔥",
      title: "L'Univers Rencontres",
      description: "Espaces dédiés aux plaisirs partagés",
      features: [
        "Le Labyrinthe sensuel",
        "Sling pour jeux plus intenses",
        "Cabines intimistes",
        "Zones de jeux coquins"
      ],
      atmosphere: "Pour des rencontres torrides dans des espaces conçus pour tous vos fantasmes..."
    }
  ],

  values: [
    { text: "Inclusivité totale", icon: "🏳️‍🌈" },
    { text: "Hygiène irréprochable", icon: "✨" },
    { text: "Respect & Bienveillance", icon: "💝" },
    { text: "Discrétion garantie", icon: "🔒" },
    { text: "Ouvert 7j/7", icon: "📅" }
  ],

  // PLANNING COMPLEXE Gay/Mixte/Toutes Tendances
  schedule: {
    lundi: {
      hours: "13h-20h",
      type: "GAY",
      description: "Journée réservée aux hommes",
      tarif: "17€"
    },
    mardi: {
      hours: "13h-01h",
      type: "TOUTES TENDANCES",
      description: "Gay, hétéro, bi, trans — Tous les plaisirs se rencontrent",
      tarif: "20€ hommes / 5€ femmes / 20€ couples"
    },
    mercredi: {
      hours: "13h-20h",
      type: "GAY",
      description: "Journée 100% masculine",
      special: "Gay naturiste de 18h à 22h",
      tarif: "17€"
    },
    jeudi: {
      hours: "13h-01h",
      type: "TOUTES TENDANCES",
      description: "Journée ouverte à toutes les sexualités",
      tarif: "20€ hommes / 5€ femmes / 20€ couples"
    },
    vendredi: {
      hours: "13h-19h GAY / 20h-01h MIXTE",
      type: "GAY puis MIXTE",
      description: "Après-midi gay, soirée mixte hétéro",
      tarif: "17€ (gay) / 35€ couples mixte / 5€ femmes"
    },
    samedi: {
      hours: "13h-18h GAY / 18h-01h TOUTES TENDANCES",
      type: "GAY puis TOUTES TENDANCES",
      description: "Après-midi gay, soirée toutes tendances",
      tarif: "17€ (gay) / 20€ (TT) / 5€ femmes / 20€ couples",
      note: "Facturation toutes tendances à partir de 17h"
    },
    dimanche: {
      hours: "13h-18h GAY / 18h-01h TOUTES TENDANCES",
      type: "GAY puis TOUTES TENDANCES",
      description: "Après-midi masculine, soirée ouverte à tous",
      tarif: "17€ (gay) / 20€ (TT) / 5€ femmes / 20€ couples",
      note: "Facturation toutes tendances à partir de 17h"
    }
  },

  // TARIFS COMPLEXES avec réductions jeunes
  pricing: {
    standard: [
      { label: "Hommes (créneaux gay)", price: "17€", note: "Lundi, Mercredi, Vendredi AM, Sam/Dim AM" },
      { label: "Hommes (toutes tendances)", price: "20€", note: "Mardi, Jeudi, Sam/Dim soir" },
      { label: "Hommes (mixte vendredi)", price: "35€", note: "Vendredi soir uniquement" }
    ],
    jeunes: [
      { label: "25-30 ans", price: "14€", note: "Tarif réduit 10€" },
      { label: "18-24 ans", price: "10€", note: "Tarif réduit 8€" },
      { label: "Tarif jeune spécial", price: "6€", note: "Mercredi toute la journée + Dimanche avant 14h" }
    ],
    mixte: [
      { label: "Couples", price: "20€", note: "Mardi, Jeudi, Sam/Dim soir" },
      { label: "Femmes seules", price: "5€", note: "Tous créneaux mixtes" }
    ],
    reductions: [
      { label: "Tarif réduit", price: "10€", note: "Première heure ou 2h avant fermeture" }
    ],
    includes: "Accès à tous les équipements • Serviettes fournies • Casiers sécurisés"
  },

  events: [
    {
      title: "Journée Bears",
      schedule: "Événements réguliers",
      description: "Après-midi dédiés à la communauté Bears",
      atmosphere: "Ambiance chaleureuse entre hommes assumés et virils"
    },
    {
      title: "Soirée Sex Club",
      schedule: "Sur annonce",
      description: "Soirées spéciales ultra-hot",
      atmosphere: "Pour les amateurs de sensations fortes"
    },
    {
      title: "Gay Naturiste",
      schedule: "Mercredi 18h-22h",
      description: "Soirée 100% naturiste",
      atmosphere: "Liberté totale dans le respect de chacun"
    },
    {
      title: "Couples & Trios",
      schedule: "Certains weekends",
      description: "Soirées spéciales pour couples et trios",
      atmosphere: "Rencontres entre couples complices"
    }
  ],

  facilities: [
    {
      category: "Bien-être",
      items: ["Sauna sec", "Hammam", "Spa à débordement (36°C)", "Douches modernes"]
    },
    {
      category: "Détente",
      items: ["Cabines de relaxation", "Salle vidéo", "Zone repos", "Fumoir"]
    },
    {
      category: "Rencontres",
      items: ["Labyrinthe", "Sling", "Cabines intimistes", "Espaces de jeux"]
    },
    {
      category: "Services",
      items: ["Bar (Licence III)", "Petite restauration", "Casiers sécurisés", "Caméra de surveillance (sécurité)"]
    }
  ],

  contact: {
    address: {
      street: "35, rue Duperré",
      city: "29200 Brest",
      region: "Finistère, Bretagne",
      landmark: "À deux pas de l'église Saint-Martin, au cœur de Brest"
    },
    phone: "02 98 80 68 57",
    facebook: "Attitude-sauna-1196761207130856",
    shop: "https://sextoy-fun.com/",
    hours: [
      { day: "Lundi", time: "13h - 20h (Gay)" },
      { day: "Mardi", time: "13h - 01h (Toutes Tendances)" },
      { day: "Mercredi", time: "13h - 20h (Gay)" },
      { day: "Jeudi", time: "13h - 01h (Toutes Tendances)" },
      { day: "Vendredi", time: "13h - 19h (Gay) / 20h - 01h (Mixte)" },
      { day: "Samedi", time: "13h - 18h (Gay) / 18h - 01h (TT)" },
      { day: "Dimanche", time: "13h - 18h (Gay) / 18h - 01h (TT)" }
    ],
    parking: "Discrétion garantie"
  },

  rules: {
    title: "Règles de l'établissement",
    items: [
      "Contrôle d'identité obligatoire à l'entrée (strictement interdit aux mineurs)",
      "Port du maillot de bain INTERDIT (raisons d'hygiène)",
      "Seule une serviette est autorisée",
      "Hygiène corporelle régulière exigée (douches à disposition)",
      "Téléphone sur vibreur et dans le casier",
      "Respect absolu des autres et des différences",
      "Pas de harcèlement, pas de forçage de portes",
      "Consommation d'alcool uniquement au bar",
      "Drogue strictement interdite",
      "Comportement civil et serein obligatoire"
    ]
  },

  highlights: [
    "4 univers distincts : Spa, Détente, Bar, Rencontres",
    "Ouvert 7 jours sur 7 avec horaires étendus",
    "Inclusif : gay, bi, hétéro, trans, couples",
    "Hygiène irréprochable régulièrement saluée",
    "Équipe accueillante et bienveillante",
    "Planning varié Gay/Mixte/Toutes Tendances",
    "Événements spéciaux réguliers (Bears, Sex Club...)",
    "Note moyenne 4.8/5 sur les avis clients",
    "Nouveaux propriétaires dynamiques",
    "Boutique en ligne partenaire pour vos accessoires"
  ],

  testimonials: [
    {
      text: "Hygiène impeccable, personnel super agréable et souriant",
      author: "Tony",
      rating: 5
    },
    {
      text: "Nous avons découvert l'Attitude lors d'une soirée couples. Ce fut un enchantement. L'accueil était parfait",
      author: "FredVirgOl",
      rating: 5
    },
    {
      text: "Un vrai bonheur car personnel au top. La clientèle est respectueuse. Nous recommandons",
      author: "Seduction29",
      rating: 5
    },
    {
      text: "Les nouveaux propriétaires ont donné un nouveau souffle à ce sauna",
      author: "Johan",
      rating: 5
    },
    {
      text: "Simple, convivial alliant détente, chill et un peu d'exotisme voir érotisme",
      author: "Moi",
      rating: 5
    }
  ],

  strategy: {
    goal:
      "Positionner Attitude Sauna comme LE sauna libertin de référence à Brest : moderne, inclusif, et parfaitement entretenu. Mettre en avant l'aspect unique des 4 univers et de la programmation variée Gay/Mixte/Toutes Tendances.",
    explanation:
      "Un site moderne permettra de refléter la qualité réelle de l'établissement, d'expliquer clairement le planning complexe, et d'attirer une clientèle diverse en phase avec les valeurs d'inclusivité et de respect du sauna.",
    specificities: "C'est un SAUNA bien-être avec espace libertin, pas un club classique. Le concept des 4 univers est unique et doit être mis en valeur. L'inclusivité totale (gay/bi/hétéro/trans/couples) est un atout majeur à Brest."
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à montrer le potentiel d'une version moderne du site d'Attitude Sauna.",
};