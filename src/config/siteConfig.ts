// 📁 src/config/siteConfig.ts - LE LOKAL PAU
export const siteConfig = {
  clubName: "Le Lokal",
  city: "Pau",
  positioning: "Complexe libertin 3 en 1 • Sauna + Cinéma + Sex-shop • 250 m² au cœur de Pau",
  accentMode: "dark" as "dark" | "light",

  tone: {
    keywords: [
      "tolérant",
      "propre",
      "convivial",
      "accueillant",
      "authentique",
      "respectueux",
      "chaleureux"
    ],
    promise:
      "Le Lokal est un complexe unique à Pau qui réunit un sex-shop, un cinéma permanent et un sauna-balnéo de 250 m² dans un cadre authentique où la pierre apparente est superbement mise en valeur. Un lieu tolérant envers toutes les sexualités où règne la propreté et la convivialité.",
  },

  hero: {
    title: "Bienvenue au Lokal",
    subtitle: "Complexe Libertin à Pau",
    tagline: "\"3 en 1 : Sex-shop • Cinéma • Sauna de 250 m²\"",
    description: "Le seul complexe complet de Pau alliant shopping coquin, cinéma pour adultes et espace balnéo",
    cta: "Découvrir Le Lokal"
  },

  audience: {
    primary: "Toutes tendances",
    secondary: "Couples et hommes seuls",
    tertiary: "Clientèle masculine les mercredi et dimanche",
    philosophy: "Au Lokal, toutes les sexualités se croisent dans le respect et la tolérance. Que vous soyez en couple, homme seul, gay, bi, hétéro ou curious, vous êtes les bienvenus dans notre espace convivial et propre. Une atmosphère chaleureuse où chacun peut s'exprimer librement."
  },

  spaces: [
    {
      title: "Grand Hammam",
      emoji: "💨",
      description: "Capacité 25 personnes à 43°C",
      details: "Hammam spacieux avec diffuseur d'huiles essentielles aromatiques pour une expérience luxueuse et relaxante"
    },
    {
      title: "Sauna Sec",
      emoji: "🔥",
      description: "Accueille jusqu'à 10 personnes",
      details: "Sauna traditionnel à chaleur sèche pour des moments de détente intense entre amis"
    },
    {
      title: "Piscine à Bulles & Jacuzzi",
      emoji: "🌊",
      description: "10 000 litres d'eau",
      details: "Grande piscine avec jacuzzi intégré et pédiluve pour une hygiène optimale"
    },
    {
      title: "10 Cabines Climatisées",
      emoji: "🚪",
      description: "Confortablement équipées",
      details: "Cabines privées climatisées pour plus d'intimité avec gel et préservatifs à disposition"
    },
    {
      title: "Zone Cruising",
      emoji: "🔒",
      description: "Espace de rencontres",
      details: "Zone dédiée aux rencontres spontanées dans un environnement propre et respectueux"
    },
    {
      title: "Sex-shop",
      emoji: "🛍️",
      description: "Shopping coquin",
      details: "Boutique glamour et ludique avec produits sexy dans une atmosphère de confiance"
    },
    {
      title: "Cinéma Permanent",
      emoji: "🎬",
      description: "Films pour adultes",
      details: "Salle de projection permanente pour des moments de détente visuelle"
    },
    {
      title: "Bar",
      emoji: "🥤",
      description: "Boissons sans alcool",
      details: "Espace convivial pour se rafraîchir et faire connaissance"
    },
    {
      title: "Fumoir",
      emoji: "💨",
      description: "Espace fumeurs",
      details: "Zone dédiée aux amateurs de tabac"
    }
  ],

  values: [
    { text: "Complexe 3 en 1", icon: "🏪" },
    { text: "250 m² balnéo", icon: "🏢" },
    { text: "Propreté reconnue", icon: "✨" },
    { text: "Toutes tendances", icon: "🌈" },
    { text: "Tarif unique 18€", icon: "💰" }
  ],

  dressCode: {
    ladies: "Tenue libre - Serviette fournie à l'entrée",
    gentlemen: "Tenue libre - Serviette fournie à l'entrée",
    spirit: "Au Lokal, l'ambiance est décontractée et tolérante. Venez comme vous êtes, une serviette vous sera fournie. L'essentiel est le respect mutuel."
  },

  weeklySchedule: [
    {
      day: "Lundi",
      hours: "13h - 20h",
      orientation: "Toutes tendances",
      theme: "Mixte et convivial",
      description: "Ouvert à tous dans une ambiance chaleureuse"
    },
    {
      day: "Mardi",
      hours: "13h - 20h",
      orientation: "Toutes tendances",
      theme: "Mixte et convivial",
      description: "Accueil de toutes les sexualités"
    },
    {
      day: "Mercredi",
      hours: "13h - 20h",
      orientation: "100% Masculin",
      theme: "Journée gay",
      description: "Réservé à la clientèle masculine"
    },
    {
      day: "Jeudi",
      hours: "13h - 00h",
      orientation: "Toutes tendances",
      theme: "Soirée prolongée mixte",
      description: "Ouverture jusqu'à minuit pour profiter plus longtemps"
    },
    {
      day: "Vendredi",
      hours: "13h - 02h",
      orientation: "Toutes tendances",
      theme: "Week-end commence !",
      description: "Ouverture jusqu'à 2h du matin pour lancer le week-end"
    },
    {
      day: "Samedi",
      hours: "13h - 02h",
      orientation: "Toutes tendances",
      theme: "Grande soirée mixte",
      description: "La soirée phare de la semaine jusqu'à 2h"
    },
    {
      day: "Dimanche",
      hours: "13h - 20h",
      orientation: "100% Masculin",
      theme: "Après-midi gay",
      description: "Réservé à la clientèle masculine"
    }
  ],

  events: [
    {
      title: "Soirées Toutes Tendances",
      schedule: "Lundi, Mardi, Jeudi, Vendredi, Samedi",
      description: "Ouvert à tous : couples, hommes, femmes, toutes orientations",
      atmosphere: "Ambiance mixte où toutes les sexualités se croisent dans le respect et la tolérance"
    },
    {
      title: "Journées 100% Masculines",
      schedule: "Mercredi & Dimanche 13h-20h",
      description: "Réservé à la clientèle masculine gay et bi",
      atmosphere: "Espace dédié aux hommes dans une ambiance conviviale et respectueuse"
    },
    {
      title: "Week-ends Prolongés",
      schedule: "Vendredi & Samedi jusqu'à 2h",
      description: "Ouverture étendue pour profiter pleinement",
      atmosphere: "Les grandes soirées du Lokal avec ambiance festive jusqu'au bout de la nuit"
    },
    {
      title: "Complexe Complet",
      schedule: "Tous les jours d'ouverture",
      description: "Accès au sex-shop, cinéma et sauna",
      atmosphere: "Trois expériences en un seul lieu pour une visite complète"
    }
  ],

  pricing: {
    standard: [
      { label: "Homme seul", price: "18€", note: "Tarif unique" },
      { label: "Couple", price: "18€", note: "Pour deux personnes" }
    ],
    includes: "Accès complet au sauna-balnéo 250 m² • Serviette fournie • Gel et préservatifs • Vestiaires sécurisés • Bar (boissons sans alcool)"
  },

  contact: {
    address: {
      street: "3 rue Duboué",
      city: "64000 Pau",
      region: "Pyrénées-Atlantiques",
      access: "Centre-ville de Pau"
    },
    phone: "05 59 84 69 85",
    email: "contact@le-lokal.fr",
    website: "www.le-lokal.fr",
    hours: [
      { day: "Lundi - Mardi", time: "13h - 20h (Toutes tendances)" },
      { day: "Mercredi", time: "13h - 20h (100% Masculin)" },
      { day: "Jeudi", time: "13h - 00h (Toutes tendances)" },
      { day: "Vendredi - Samedi", time: "13h - 02h (Toutes tendances)" },
      { day: "Dimanche", time: "13h - 20h (100% Masculin)" }
    ],
    parking: "Centre-ville de Pau"
  },

  highlights: [
    "Complexe unique 3 en 1 à Pau",
    "Sex-shop glamour et ludique",
    "Cinéma permanent pour adultes",
    "Sauna-balnéo de 250 m²",
    "Grand hammam 25 personnes avec huiles essentielles",
    "Sauna sec capacité 10 personnes",
    "Piscine à bulles 10 000 litres + jacuzzi",
    "Pédiluve pour hygiène optimale",
    "10 cabines climatisées confortables",
    "Zone cruising dédiée",
    "Vestiaires séparés (idéal couples)",
    "Pierre apparente mise en valeur",
    "Propreté irréprochable reconnue",
    "Accueil chaleureux du patron",
    "Tolérance envers toutes sexualités",
    "Tarif unique 18€ sans discrimination",
    "Bar avec boissons sans alcool",
    "Fumoir à disposition",
    "Gel et préservatifs partout",
    "Ambiance conviviale et respectueuse"
  ],

  features: [
    "Hammam 43°C (25 pers.)",
    "Sauna sec (10 pers.)",
    "Piscine 10 000L + jacuzzi",
    "Pédiluve",
    "10 cabines climatisées",
    "Zone cruising",
    "Sex-shop",
    "Cinéma permanent",
    "Bar (sans alcool)",
    "Fumoir",
    "Vestiaires séparés",
    "Pierre apparente"
  ],

  complex3in1: {
    title: "Un complexe unique à Pau",
    description: "Le Lokal est le seul établissement de Pau à proposer trois expériences en un seul lieu : un sex-shop glamour pour vos achats coquins, un cinéma permanent pour adultes, et un sauna-balnéo de 250 m² superbement aménagé. Une révolution dans le shopping et le divertissement coquin palois !",
    spaces: [
      {
        name: "Sex-shop",
        icon: "🛍️",
        description: "Boutique sexy, glamour et ludique dans une atmosphère de confiance"
      },
      {
        name: "Cinéma",
        icon: "🎬",
        description: "Projection permanente de films pour adultes"
      },
      {
        name: "Sauna-Balnéo",
        icon: "💦",
        description: "250 m² d'espaces bien-être et de rencontres"
      }
    ]
  },

  strategy: {
    goal:
      "Mettre en avant le concept unique du complexe 3 en 1 (sex-shop + cinéma + sauna), les 250 m² de balnéo avec grand hammam et piscine, la programmation mixte/masculine, la propreté reconnue et le tarif unique égalitaire de 18€.",
    explanation:
      "Une présentation qui valorise l'unicité du concept tout-en-un, la tolérance envers toutes les sexualités, la qualité des installations (hammam 25 pers., piscine 10 000L) et l'accueil chaleureux dans un cadre authentique avec pierres apparentes.",
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à présenter une version moderne du site du Lokal.",
};