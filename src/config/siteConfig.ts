export const siteConfig = {
  // Informations générales
  name: "Y'a du Goût",
  tagline: "Bar-Restaurant & Événements",
  description: "Bar-restaurant convivial au bord du Scorff. Cuisine saisonnière réconfortante, concerts, soirées DJ, karaoké et événements sportifs. Terrasse avec vue sur la rivière.",
  
  // Contact
  address: {
    street: "6, rue du Vieux-Pont",
    city: "Pont-Scorff",
    postalCode: "56620",
    region: "Morbihan, Bretagne",
    coordinates: {
      lat: 47.8317,
      lng: -3.4089
    }
  },
  
  phone: "09 80 58 91 17",
  email: "", // Non communiqué
  
  // Horaires
  hours: {
    mardi: { midi: "12h - 14h", soir: "17h - 23h" },
    mercredi: { midi: "12h - 14h", soir: "17h - 23h" },
    jeudi: { midi: "12h - 14h", soir: "17h - 23h" },
    vendredi: { midi: "12h - 14h", soir: "17h - 00h" },
    samedi: { midi: "12h - 14h", soir: "17h - 00h" },
    dimanche: { midi: "Fermé", soir: "Fermé" },
    lundi: { midi: "Fermé", soir: "Fermé" }
  },
  
  // Réseaux sociaux
  social: {
    facebook: "https://www.facebook.com/lentre2pontscorff", // Ancien compte, à vérifier s'ils ont créé un nouveau
    instagram: "@lentre2pontscorff", // Ancien compte
  },
  
  // À propos
  about: {
    story: "Nadia Eon-Bihan et Emmanuel Eon, originaires du pays de Lorient (Groix et Rédéné), ont repris ce lieu emblématique au bord du Scorff. Après 10 ans d'expérience dans la restauration, dont une crêperie à Saint-Nazaire et un bar à Sarzeau, ils sont revenus dans leur région pour créer Y'a du Goût : un bar-restaurant chaleureux où cuisine réconfortante et ambiance festive se rencontrent.",
    team: [
      { name: "Nadia Eon-Bihan", role: "Co-gérante" },
      { name: "Emmanuel Eon", role: "Co-gérant" },
      { name: "Adrien", role: "Service" },
      { name: "Maëlle", role: "Service" }
    ]
  },
  
  // Points forts
  highlights: [
    {
      icon: "🏞️",
      title: "Cadre exceptionnel",
      description: "Bâtiment sur pilotis au bord du Scorff avec terrasse panoramique"
    },
    {
      icon: "🎵",
      title: "Événements variés",
      description: "Concerts, soirées DJ, karaoké, blind tests et retransmissions sportives"
    },
    {
      icon: "🍺",
      title: "Bar convivial",
      description: "Nombreuses bières à la pression, cocktails maison et ambiance chaleureuse"
    },
    {
      icon: "🍽️",
      title: "Cuisine saisonnière",
      description: "Plats montagnards réconfortants et burgers gourmands"
    }
  ],
  
  // Menu (Carte d'hiver 2025-2026)
  menu: {
    sections: [
      {
        title: "🧀 Spécialités Montagnardes",
        items: [
          { name: "Raclette", description: "Fromage fondant, charcuterie et pommes de terre" },
          { name: "Fondue Savoyarde", description: "3 fromages, pain croustillant" },
          { name: "Tartiflette", description: "Reblochon, lardons, oignons et pommes de terre" },
          { name: "Camembert Rôti", description: "Au four, accompagné de pain et salade" }
        ]
      },
      {
        title: "🍔 Burgers & Plats",
        items: [
          { name: "Burger Classique", description: "Steak, cheddar, salade, tomate, oignons" },
          { name: "Burger du Chef", description: "Recette signature de la maison" },
          { name: "Plat de la Semaine", description: "Création hebdomadaire du chef" }
        ]
      },
      {
        title: "🥨 Snacking au Bar",
        items: [
          { name: "Planches à partager", description: "Tapas, charcuterie, fromages" },
          { name: "Frites maison", description: "" },
          { name: "Petites portions apéro", description: "" }
        ]
      }
    ],
    note: "La carte change avec les saisons. Menu du midi disponible en semaine.",
    priceRange: "€€ (20-30€)"
  },
  
  // Services
  services: [
    "🍽️ Restaurant & Snacking",
    "🍺 Bar avec multiples tireuses",
    "🎯 Jeu de fléchettes",
    "🎤 Soirées karaoké",
    "🎵 Concerts live",
    "🎧 Soirées DJ",
    "🎮 Blind tests",
    "⚽ Retransmissions sportives",
    "🎉 Privatisation possible",
    "🌊 Terrasse au bord du Scorff",
    "♿ Accès PMR",
    "🅿️ Parking à proximité"
  ],
  
  // Ambiance & Atouts
  atmosphere: {
    style: "Convivial, festif, chaleureux",
    cadre: "Bâtiment sur pilotis en bois et pierres apparentes, terrasse 'les pieds dans l'eau'",
    ambiance: "Bar-restaurant animé avec programmation événementielle régulière",
    publicCible: "Étudiants, groupes d'amis, familles, touristes, habitués du coin"
  },
  
  // Spécificités
  specialities: [
    "Emplacement unique au bord de la rivière Scorff",
    "Architecture remarquable (sur pilotis)",
    "Programmation culturelle régulière",
    "Ambiance bar + qualité restaurant",
    "Cuisine saisonnière qui évolue",
    "Retour aux sources des propriétaires (enfants du pays)"
  ],
  
  // Localisation & Accès
  location: {
    city: "Pont-Scorff",
    description: "Petite Cité de Caractère du Morbihan, labellisée en 2023",
    nearbyAttractions: [
      "Zoo Les Terres de Nataé",
      "Centre-ville historique de Pont-Scorff",
      "Rivière Scorff (pêche, promenades)",
      "Lorient (10 km)",
      "Côte bretonne (20 min)"
    ],
    access: "Parking gratuit à proximité, accessible PMR"
  },
  
  // SEO
  seo: {
    keywords: [
      "restaurant Pont-Scorff",
      "bar Pont-Scorff",
      "terrasse Scorff",
      "raclette Morbihan",
      "burger Pont-Scorff",
      "soirée concert Bretagne",
      "karaoké Lorient",
      "restaurant bord de rivière",
      "bar événementiel Morbihan",
      "Y'a du Goût"
    ],
    og: {
      title: "Y'a du Goût - Bar-Restaurant & Événements à Pont-Scorff",
      description: "Bar-restaurant convivial au bord du Scorff. Cuisine saisonnière, concerts, DJ, karaoké. Terrasse panoramique sur la rivière. 09 80 58 91 17"
    }
  }
};