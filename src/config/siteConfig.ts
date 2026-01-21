// 📁 src/config/siteConfig.ts - LA STATION SAUNA PAU
export const siteConfig = {
  clubName: "La Station Sauna",
  city: "Pau",
  positioning: "Sauna Gay & Mixte sur 600 m² et 4 niveaux • Ouvert 7j/7",
  accentMode: "dark" as "dark" | "light",

  tone: {
    keywords: [
      "convivial",
      "torride",
      "respectueux",
      "varié",
      "festif",
      "accueillant",
      "libertin"
    ],
    promise:
      "La Station est un sauna gay et mixte au centre-ville de Pau. 600 m² de coins câlins torrides sur 4 niveaux avec un espace balnéo refait à neuf. Un club mixte, libertin et échangiste ouvert 7 jours sur 7, où règnent sexe, chaleur et rencontres respectueuses !",
  },

  hero: {
    title: "Bienvenue à La Station",
    subtitle: "Sauna Gay & Mixte à Pau",
    tagline: "\"600 m² de plaisir sur 4 niveaux\"",
    description: "Ancien Sauna Eros, La Station vous accueille 7j/7 dans un espace balnéo refait à neuf avec bar musical convivial",
    cta: "Découvrir La Station"
  },

  audience: {
    primary: "Public Gay",
    secondary: "Couples mixtes",
    tertiary: "Toutes orientations (selon jours)",
    philosophy: "La Station accueille une clientèle mixte du lundi au samedi, et propose des soirées 100% gay le dimanche de 13h à 20h. Un club où règnent le respect, la chaleur et les rencontres dans un cadre convivial et sans jugement."
  },

  spaces: [
    {
      title: "Espace Balnéo",
      emoji: "🌊",
      description: "Refait à neuf en 2018",
      details: "1 Sauna sec (70-85°C), 1 Hammam (40°C) avec huiles essentielles, 2 Jacuzzis (35°C) et multiples douches"
    },
    {
      title: "Bar Musical",
      emoji: "🎵",
      description: "Espace convivial 7j/7",
      details: "Un bar musical où se retrouver autour d'un verre dans une ambiance décontractée et chaleureuse"
    },
    {
      title: "Cabines Thématiques",
      emoji: "🎭",
      description: "Plus de 20 cabines variées",
      details: "Cabines miroir, sling, exhib', et cabines à thèmes : Zèbre, Léopard, Militaire, Glamour..."
    },
    {
      title: "Espace Hard",
      emoji: "⛓️",
      description: "Sous-sol dédié",
      details: "Croix de Saint-André, sling, planche de bondage et autres attractions torrides"
    },
    {
      title: "Glory Holes",
      emoji: "🔒",
      description: "2 espaces avec vidéos",
      details: "Glory holes ouverts et fermés avec vidéos pour plus d'excitation"
    },
    {
      title: "Salons Vidéo",
      emoji: "📺",
      description: "1 mixte + 1 gay",
      details: "Deux salons vidéo dédiés pour se détendre et profiter du spectacle"
    },
    {
      title: "Fumoir",
      emoji: "🚬",
      description: "Espace fumeurs",
      details: "Un espace dédié aux fumeurs pour des pauses conviviales"
    },
    {
      title: "Sex-Shop",
      emoji: "🛍️",
      description: "Boutique sur place",
      details: "Poppers, lubrifiants, cockrings et autres accessoires disponibles à l'accueil"
    }
  ],

  values: [
    { text: "600 m² - 4 niveaux", icon: "🏢" },
    { text: "Ouvert 7j/7", icon: "📅" },
    { text: "Balnéo refait à neuf", icon: "✨" },
    { text: "20+ cabines", icon: "🚪" },
    { text: "Soirées thématiques", icon: "🎉" }
  ],

  dressCode: {
    ladies: "Serviette fournie - Ambiance sauna décontractée",
    gentlemen: "Serviette fournie - Venez comme vous êtes",
    spirit: "À La Station, l'ambiance est conviviale et décontractée. Pas de dress code strict, juste le respect et la bonne humeur !"
  },

  weeklySchedule: [
    {
      day: "Lundi",
      hours: "13h - 00h",
      orientation: "Mixte",
      theme: "Journée mixte",
      description: "Ouvert à tous pour bien démarrer la semaine"
    },
    {
      day: "Mardi",
      hours: "13h - 00h",
      orientation: "Mixte",
      theme: "Soirée Couples",
      description: "Soirée spéciale couples mixtes dans une ambiance torride"
    },
    {
      day: "Mercredi",
      hours: "13h - 00h",
      orientation: "Mixte",
      theme: "Young Boys",
      description: "Soirée spéciale jeunes dans une ambiance festive"
    },
    {
      day: "Jeudi",
      hours: "13h - 00h",
      orientation: "Mixte",
      theme: "Couples Gratuit",
      description: "Entrée gratuite couples mixtes de 18h à 22h !"
    },
    {
      day: "Vendredi",
      hours: "13h - 03h",
      orientation: "Mixte",
      theme: "Week-end Party",
      description: "Démarrez le week-end jusqu'à 3h du matin !"
    },
    {
      day: "Samedi",
      hours: "13h - 03h",
      orientation: "Mixte",
      theme: "Soirées spéciales",
      description: "Soirées thématiques selon calendrier mensuel"
    },
    {
      day: "Dimanche",
      hours: "13h - 20h",
      orientation: "100% Gay",
      theme: "Gay Day",
      description: "Dimanche 100% gay de 13h à 20h"
    }
  ],

  monthlyEvents: [
    {
      title: "1er Samedi - Soirée Cabaret",
      description: "Entrée gratuite couples dès 18h",
      icon: "🎭"
    },
    {
      title: "2ème Samedi - Soirée Mousse",
      description: "Mousse party dans le Hammam",
      icon: "🫧"
    },
    {
      title: "3ème Samedi - Couples Gratuit",
      description: "Entrée gratuite couples dès 18h",
      icon: "💑"
    },
    {
      title: "4ème Samedi - Années 80",
      description: "Soirée rétro ambiance années 80",
      icon: "🎵"
    }
  ],

  events: [
    {
      title: "Soirées Mixtes",
      schedule: "Lundi au Samedi",
      description: "Ouvert à tous - Hommes, femmes, couples",
      atmosphere: "Ambiance conviviale et torride dans un cadre respectueux"
    },
    {
      title: "Dimanche 100% Gay",
      schedule: "Dimanche 13h - 20h",
      description: "Journée exclusivement gay",
      atmosphere: "Entre hommes dans une ambiance détendue et complice"
    },
    {
      title: "Soirée Couples du Mardi",
      schedule: "Chaque mardi",
      description: "Soirée spéciale couples mixtes",
      atmosphere: "Pour les couples qui souhaitent explorer leurs fantasmes"
    },
    {
      title: "Jeudi Couples Gratuit",
      schedule: "Chaque jeudi 18h-22h",
      description: "Entrée gratuite pour les couples mixtes",
      atmosphere: "Profitez d'une soirée offerte en semaine !"
    },
    {
      title: "Young Boys du Mercredi",
      schedule: "Chaque mercredi",
      description: "Soirée dédiée aux jeunes",
      atmosphere: "Ambiance jeune et festive pour les moins de 30 ans"
    },
    {
      title: "Soirées Thématiques Mensuelles",
      schedule: "Samedis selon calendrier",
      description: "Cabaret, Mousse, Années 80...",
      atmosphere: "Des thèmes variés pour ne jamais s'ennuyer"
    }
  ],

  pricing: {
    standard: [
      { label: "Homme seul", price: "17€", note: "Tarif standard" },
      { label: "Couple gay", price: "30€", note: "Pour 2 personnes" },
      { label: "Happy Hours", price: "Tarif réduit", note: "18h-20h tous les jours" }
    ],
    gratuit: [
      { label: "Jeudi Couples", price: "Gratuit", note: "18h-22h pour couples mixtes" },
      { label: "1er Samedi Couples", price: "Gratuit", note: "Dès 18h" },
      { label: "3ème Samedi Couples", price: "Gratuit", note: "Dès 18h" }
    ],
    includes: "Serviette fournie • Casiers sécurisés • Accès à tous les espaces • Fontaine à eau"
  },

  contact: {
    address: {
      street: "8 rue René Fournets",
      city: "64000 Pau",
      region: "Pyrénées-Atlantiques (64)",
      access: "Centre-ville de Pau"
    },
    phone: "05 59 27 48 80",
    email: "contact@lastation-sauna.com",
    website: "www.lastation-sauna.com",
    hours: [
      { day: "Lundi - Mercredi", time: "13h - 00h (Mixte)" },
      { day: "Jeudi", time: "13h - 00h (Mixte - Couples gratuit 18h-22h)" },
      { day: "Vendredi - Samedi", time: "13h - 03h (Mixte)" },
      { day: "Dimanche", time: "13h - 20h (100% Gay)" }
    ],
    parking: "Stationnement en centre-ville"
  },

  highlights: [
    "600 m² sur 4 niveaux",
    "Ouvert 7 jours sur 7",
    "Espace balnéo refait à neuf (2018)",
    "Plus de 20 cabines thématiques",
    "Espace Hard au sous-sol",
    "Bar musical convivial",
    "Soirées thématiques mensuelles",
    "Happy Hours quotidiens 18h-20h",
    "Dimanche 100% gay",
    "Entrées gratuites couples régulières",
    "Sex-shop sur place",
    "Ancien Sauna Eros - Nouvelle direction depuis 2016",
    "Ambiance respectueuse et conviviale",
    "Clientèle variée et tolérante"
  ],

  features: [
    "Sauna sec 70-85°C",
    "Hammam 40°C avec huiles essentielles",
    "2 Jacuzzis 35°C",
    "Douches chaudes et froides",
    "20+ cabines thématiques",
    "Cabines miroir et sling",
    "Espace Hard complet",
    "2 Glory Holes",
    "2 Salons vidéo",
    "Bar musical",
    "Fumoir",
    "Sex-shop",
    "Vestiaires fermés",
    "WC avec lavement"
  ],

  specialOffers: {
    title: "Offres Spéciales",
    offers: [
      "🎁 Jeudi : Couples mixtes GRATUIT 18h-22h",
      "🎭 1er Samedi : Couples GRATUIT dès 18h + Cabaret",
      "💑 3ème Samedi : Couples GRATUIT dès 18h",
      "⏰ Happy Hours : 18h-20h TOUS LES JOURS"
    ]
  },

  strategy: {
    goal:
      "Mettre en avant la diversité de La Station : 600 m² sur 4 niveaux, ouvert 7j/7 avec programmation mixte et gay, soirées thématiques régulières et nombreuses offres gratuites pour les couples.",
    explanation:
      "Une présentation dynamique qui valorise l'espace balnéo refait à neuf, la variété des cabines thématiques, les soirées à thème mensuelles et l'ambiance conviviale et respectueuse.",
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à présenter une version moderne du site de La Station Sauna.",
};