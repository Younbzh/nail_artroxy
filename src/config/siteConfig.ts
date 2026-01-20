// 📁 src/config/siteConfig.ts - LA CHALOUPE BORDEAUX
export const siteConfig = {
  clubName: "La Chaloupe",
  city: "Bordeaux",
  positioning: "Le Club des Libertin(e)s depuis 34 ans • Fun, élégance et tolérance",
  accentMode: "dark" as "dark" | "light",

  tone: {
    keywords: [
      "élégant",
      "convivial",
      "chaleureux",
      "tolérant",
      "festif",
      "bienveillant",
      "libre"
    ],
    promise:
      "Voguer sur les rives du plaisir & des sens, dans un écrin de liberté. Un espace de Fun, d'ouverture, de chaleur et de tolérance où chacun peut s'amuser avec élégance et fantaisie.",
  },

  hero: {
    title: "Bienvenue à La Chaloupe",
    subtitle: "Club libertin à Bordeaux",
    tagline: "\"Voguer sur les rives du plaisir & des sens\"",
    description: "Depuis 34 ans, La Chaloupe vous accueille dans un écrin de liberté pour des soirées inoubliables",
    cta: "Découvrir La Chaloupe"
  },

  audience: {
    primary: "Couples",
    secondary: "Dames seules",
    tertiary: "Célibataires (selon soirées)",
    philosophy: "La Chaloupe est un espace de Fun, d'ouverture, de chaleur et de tolérance, principalement ouvert pour les couples mais accessible à toutes celles et ceux qui respectent et célèbrent la liberté de chacun, qui souhaitent s'amuser avec élégance et fantaisie, sortir des sentiers battus du conformisme."
  },

  spaces: [
    {
      title: "Piste de Danse",
      emoji: "💃",
      description: "La pièce centrale animée",
      details: "Une piste de danse où l'alchimie naît parfois d'une simple musique, d'un regard ou d'un pas vers l'autre"
    },
    {
      title: "Bar Central",
      emoji: "🍸",
      description: "L'espace convivialité",
      details: "Le cœur de La Chaloupe où se créent les rencontres et les échanges dans une ambiance chaleureuse"
    },
    {
      title: "Coins Câlins",
      emoji: "🛋️",
      description: "Espaces d'intimité",
      details: "Des espaces pensés pour vivre intensément ou en toute quiétude chaque moment de complicité"
    },
    {
      title: "Jacuzzi",
      emoji: "🌊",
      description: "Détente et sensualité",
      details: "Un espace aquatique pour prolonger le plaisir dans une ambiance détendue et sensuelle"
    },
    {
      title: "Terrasse",
      emoji: "🌙",
      description: "Espace extérieur fumeurs",
      details: "Une terrasse agréable pour prendre l'air et profiter de moments de pause entre deux danses"
    },
    {
      title: "Espace Buffet",
      emoji: "🍽️",
      description: "Restauration (samedis)",
      details: "Buffet salé et sucré à discrétion les samedis soirs pour reprendre des forces"
    }
  ],

  values: [
    { text: "34 ans d'expérience", icon: "🎉" },
    { text: "Fun & Tolérance", icon: "💖" },
    { text: "Élégance appréciée", icon: "👔" },
    { text: "Ambiance festive", icon: "🎊" },
    { text: "Convivialité & Respect", icon: "🤝" }
  ],

  dressCode: {
    ladies: "Tenues sexy vivement appréciées et souhaitées",
    gentlemen: "Comportement et tenue de parfait gentleman (chemise, pantalon, chaussures de ville)",
    spirit: "À La Chaloupe, les messieurs gagnent à se mettre en valeur dans une tenue élégante. Les dames sont invitées à briller dans des tenues sexy qui subliment leur féminité."
  },

  events: [
    {
      title: "Soirée du Jeudi",
      schedule: "Jeudi 22h - 02h",
      description: "Couples, Dames seules & Célibataires",
      atmosphere: "Une soirée conviviale en semaine pour se détendre et faire de belles rencontres"
    },
    {
      title: "Soirée du Vendredi",
      schedule: "Vendredi & veilles de fériés 22h - 05h",
      description: "Couples, Dames seules & nombre limité de Célibataires",
      atmosphere: "L'ambiance monte d'un cran pour démarrer le week-end en beauté jusqu'au petit matin"
    },
    {
      title: "Soirée du Samedi - Couples",
      schedule: "Samedi 22h - 05h",
      description: "Exclusivement Couples et Dames seules",
      atmosphere: "La soirée premium avec buffet à discrétion et ambiance festive garantie jusqu'à l'aube"
    },
    {
      title: "Soirées Thématiques",
      schedule: "Tout au long de l'année",
      description: "Événements spéciaux et thématiques variées",
      atmosphere: "Consultez nos réseaux sociaux pour découvrir les prochains thèmes"
    }
  ],

  pricing: {
    jeudi: [
      { label: "Dames seules", price: "Gratuit", note: "+ 1 consommation offerte" },
      { label: "Célibataires", price: "40€", note: "+ 2 consommations" },
      { label: "Couples", price: "30€", note: "+ 4 consommations" }
    ],
    vendredi: [
      { label: "Dames seules", price: "Gratuit", note: "+ 1 consommation offerte" },
      { label: "Célibataires", price: "50€", note: "+ 2 consos (nombre limité)" },
      { label: "Couples", price: "40€", note: "+ 4 consommations" }
    ],
    samedi: [
      { label: "Dames seules", price: "Gratuit", note: "+ 1 consommation offerte" },
      { label: "Couples", price: "50€", note: "+ 4 consos + buffet à discrétion" }
    ],
    includes: "Verre supplémentaire : 10€ • Demi-bouteille : 60€ (1 soirée) • Bouteille : 100€ (2 soirées)"
  },

  contact: {
    address: {
      street: "30 Rue Giacomo Mattéoti",
      city: "33100 Bordeaux",
      region: "Quartier Benauge",
      access: "Proche du centre-ville de Bordeaux"
    },
    phone: "05 56 40 28 91",
    email: "contact@lachaloupe-club.com",
    website: "www.lachaloupe-club.com",
    hours: [
      { day: "Lundi - Mercredi", time: "Fermé" },
      { day: "Jeudi", time: "22h - 02h (Mixte)" },
      { day: "Vendredi & veilles fériés", time: "22h - 05h (Mixte limité)" },
      { day: "Samedi", time: "22h - 05h (Couples uniquement)" },
      { day: "Dimanche", time: "Fermé" }
    ],
    parking: "Stationnement possible dans le quartier"
  },

  highlights: [
    "34 ans d'histoire et d'anecdotes croustillantes",
    "Ambiance Fun, chaleureuse et tolérante",
    "Soirées thématiques régulières",
    "Buffet salé et sucré à discrétion les samedis",
    "Terrasse extérieure pour les fumeurs",
    "Accueil bienveillant et convivial",
    "Cadre élégant et festif",
    "Chaque soirée est unique et imprévisible"
  ],

  features: [
    "Grande piste de danse centrale",
    "Bar convivial",
    "Jacuzzi sensuel",
    "Multiples coins câlins",
    "Terrasse extérieure",
    "Buffet samedis soirs",
    "Soirées thématiques",
    "Vestiaires et espaces confort"
  ],

  testimonials: [
    {
      name: "Laurence et Manu",
      title: "De la joie !",
      text: "C'était notre retour après plusieurs mois… Forcément ! Comme toujours accueil parfait et bienveillance. Nous adorons. Tout le monde s'y sent bien."
    },
    {
      name: "Audrey",
      title: "Fun & Volupté",
      text: "C'est un club où règne une bonne ambiance. Danser en liberté, s'exhiber, se frotter… Le tout arrosé d'un bon accueil. Idéal pour une soirée libertine entre amis."
    },
    {
      name: "Stella",
      title: "Caliente",
      text: "Très beau monde. Accueil chaleureux. Fiesta assurée !"
    }
  ],

  strategy: {
    goal:
      "Mettre en avant l'histoire et l'authenticité de La Chaloupe, un club historique de 34 ans qui privilégie la convivialité, l'élégance et le fun dans un cadre festif et bienveillant.",
    explanation:
      "Une présentation moderne qui reflète les valeurs de La Chaloupe : un lieu où la liberté, le respect et la fête se conjuguent depuis plus de trois décennies pour créer des soirées uniques et mémorables.",
  },

  disclaimer:
    "Maquette illustrative non contractuelle, destinée à présenter une version moderne du site de La Chaloupe.",
};