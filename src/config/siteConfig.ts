export const siteConfig = {
  // Informations générales
  name: "Ze Bar",
  tagline: "Le Bar Branché de Pontivy",
  slogan: "Ambiance, Jeux & Rooftop",
  description: "Bar convivial au cœur de Pontivy avec rooftop, billard, fléchettes et événements réguliers. Une ambiance décontractée pour passer d'excellentes soirées entre amis.",
  
  // Contact
  address: {
    street: "3 Bis rue Noble",
    city: "Pontivy",
    postalCode: "56300",
    region: "Morbihan, Bretagne",
    details: "Dans une petite ruelle du centre-ville, perpendiculaire à la rue Nationale",
    coordinates: {
      lat: 48.0667,
      lng: -2.9667
    }
  },
  
  phone: "02 97 27 32 29",
  email: "", // Non communiqué
  
  // Réseaux sociaux
  social: {
    facebook: "zebar.pontivy",
    facebookUrl: "https://www.facebook.com/zebar.pontivy",
    instagram: "ze_bar_pontivy",
    instagramUrl: "https://www.instagram.com/ze_bar_pontivy/"
  },
  
  // Horaires
  hours: {
    lundi: { ouvert: false, horaires: "Fermé" },
    mardi: { ouvert: true, horaires: "17:00 - 02:00" },
    mercredi: { ouvert: true, horaires: "17:00 - 02:00" },
    jeudi: { ouvert: true, horaires: "17:00 - 02:00" },
    vendredi: { ouvert: true, horaires: "17:00 - 02:00" },
    samedi: { ouvert: true, horaires: "17:00 - 02:00" },
    dimanche: { ouvert: true, horaires: "18:00 - 23:00" }
  },
  
  // Concept
  about: {
    story: "Ze Bar est LE bar incontournable de Pontivy depuis plusieurs années. Situé dans une petite ruelle discrète mais animée, cet établissement sur plusieurs niveaux propose une ambiance unique mêlant convivialité, divertissement et soirées à thème. Avec son décor atypique qui rappelle un mix entre un bar de nuit moderne et un pub chaleureux, Ze Bar séduit une clientèle jeune et dynamique.",
    vision: "Un lieu de rencontres et de convivialité où l'on vient pour l'ambiance, les jeux, la musique et l'accueil chaleureux des gérants.",
    team: "Une équipe professionnelle et souriante, toujours à l'écoute des clients"
  },
  
  // Points forts
  highlights: [
    {
      icon: "🏠",
      title: "Rooftop Cocooning",
      description: "Notre magnifique rooftop récent, très bien décoré, idéal pour profiter d'un verre dans une ambiance chaleureuse"
    },
    {
      icon: "🎱",
      title: "Espace Jeux",
      description: "Billards de qualité, fléchettes, flipper et baby-foot pour des soirées animées"
    },
    {
      icon: "🎉",
      title: "Soirées à Thème",
      description: "Concerts live, événements sportifs, soirées années 80, rock le dimanche, électro le jeudi"
    },
    {
      icon: "🎵",
      title: "Ambiance Musicale",
      description: "Playlist variée pour tous les goûts, écran vidéo, ambiance décontractée de 20 à 45 ans"
    }
  ],
  
  // Carte & Boissons
  drinks: {
    categories: [
      {
        name: "Bières Pression",
        icon: "🍺",
        description: "Large sélection de bières à partir de 5€",
        items: ["Pintes", "Demis", "Bières artisanales", "Bières locales"]
      },
      {
        name: "Cocktails",
        icon: "🍹",
        description: "Cocktails maison préparés par nos barmen",
        items: ["Pina Colada", "Mojito", "Cocktails du moment", "Cocktails personnalisés"]
      },
      {
        name: "Planches Apéro",
        icon: "🧀",
        price: "15,00 €",
        items: ["Fromage", "Charcuterie", "Tomate", "Cornichons", "Tapas"]
      },
      {
        name: "Soft & Autres",
        icon: "🥤",
        items: ["Softs", "Jus de fruits", "Boissons chaudes"]
      }
    ]
  },
  
  // Activités & Jeux
  activities: [
    "🎱 Tables de billard de qualité",
    "🎯 Jeux de fléchettes (3 jeux disponibles)",
    "⚽ Baby-foot",
    "🕹️ Flipper",
    "📺 Retransmission événements sportifs",
    "🎤 Karaoké",
    "🎸 Concerts live",
    "🎬 Écran vidéo",
    "💃 Soirées à thème régulières"
  ],
  
  // Ambiance & Style
  atmosphere: {
    style: "Bar branché et tendance",
    ambiance: "Décontractée, conviviale, énergique",
    décor: "Mix entre bar de nuit moderne et pub avec escaliers en bois, décoration atypique et charmante",
    musique: "Playlist variée - Électro le jeudi, Rock le dimanche, hits pour tous les goûts",
    public: "20-45 ans, étudiants, jeunes actifs, groupes d'amis"
  },
  
  // Services
  services: [
    "🍺 Large carte de bières et cocktails",
    "🧀 Planches apéro",
    "🏠 Rooftop aménagé",
    "🪑 Terrasse extérieure",
    "🎱 Salle de billard à l'étage",
    "📺 Diffusion matchs",
    "🎵 Soirées à thème",
    "🎉 Privatisation possible",
    "💳 Paiement carte",
    "♿ Accessible PMR"
  ],
  
  // Événements réguliers
  events: {
    regular: [
      {
        day: "Jeudi",
        type: "Soirée Électro & Dance",
        description: "Ambiance électro pour danser jusqu'au bout de la nuit"
      },
      {
        day: "Vendredi & Samedi",
        type: "Animations",
        description: "Soirées festives jusqu'à 2h du matin"
      },
      {
        day: "Dimanche",
        type: "Rock Night",
        description: "Ambiance rock de 18h à 23h"
      }
    ],
    special: [
      "Concerts live",
      "Soirées années 80",
      "Retransmissions sportives (rugby, foot)",
      "Événements privés sur réservation"
    ]
  },
  
  // Localisation
  location: {
    description: "Situé dans une petite ruelle discrète du centre-ville de Pontivy, perpendiculaire à la rue Nationale. Un lieu à découvrir absolument !",
    parking: "Parking Général de Gaulle à 225m",
    access: "Gare de Pontivy à 772m à pied",
    nearbyAttractions: [
      "Centre-ville Pontivy",
      "Rue Nationale (commerces)",
      "Château des Rohan",
      "Canal de Nantes à Brest",
      "Basilique Notre-Dame-de-Joie"
    ]
  },
  
  // Avis clients (extraits authentiques)
  testimonials: [
    {
      text: "Meilleur bar de Bretagne ! Super billard, patron génial et super accueillant.",
      author: "Camille"
    },
    {
      text: "Super bar. Les gérants sont au top, l'ambiance également. La playlist est bonne, la carte des boissons variée, le lieu spacieux avec terrasse et roof top.",
      author: "Avis Google"
    },
    {
      text: "Le bar de Pontivy où il faut y aller, beau rooftop, le personnel très accueillant, toujours un bon moment passé dans ce bar.",
      author: "Malika"
    },
    {
      text: "Sympathique endroit de convivialité, de rencontres, bonne ambiance. Toujours un plaisir de passer une soirée entre amis/collègues.",
      author: "Avis vérifié"
    }
  ],
  
  // SEO
  seo: {
    keywords: [
      "bar Pontivy",
      "Ze Bar",
      "bar rooftop Pontivy",
      "billard Pontivy",
      "soirées Pontivy",
      "bar branché Morbihan",
      "concerts Pontivy",
      "fléchettes Pontivy",
      "bar à cocktails Pontivy",
      "sortir à Pontivy",
      "vie nocturne Pontivy"
    ],
    og: {
      title: "Ze Bar - Le Bar Branché de Pontivy | Rooftop, Billard & Soirées",
      description: "Bar convivial avec rooftop, billard, fléchettes et soirées à thème. Ambiance décontractée et accueil chaleureux au cœur de Pontivy. Ouvert jusqu'à 2h. ☎️ 02 97 27 32 29"
    }
  },
  
  // Infos pratiques
  practical: {
    price_range: "€€",
    average_drink: "5-8€",
    capacity: "Bar spacieux sur plusieurs niveaux",
    reservations: "Non nécessaire (sauf privatisation)",
    parking: true,
    terrace: true,
    rooftop: true,
    accessibility: true
  }
};