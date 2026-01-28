export const siteConfig = {
  // IDENTITÉ
  teamName: "WRC Trévé RX",
  fullName: "Team WRC Trévé RX",
  tagline: "Team de Rallycross",
  slogan: "La passion du rallycross en Bretagne",
  city: "Trévé",
  region: "Côtes-d'Armor, Bretagne",
  founded: "2009",
  
  // HERO
  hero: {
    title: "Team WRC Trévé RX",
    subtitle: "Double Champion de France de Rallycross",
    tagline: "Division 4 • 2024 & 2025",
    description: "Team de rallycross bretonne menée par Luc Derrien, double champion de France consécutif en Division 4. Performance, passion et dépassement de soi sur tous les circuits français.",
    cta: "Suivez-nous"
  },

  // LE PILOTE
  pilot: {
    name: "Luc DERRIEN",
    number: "#35",
    title: "Pilote & Double Champion de France",
    bio: "Pilote passionné et déterminé, Luc Derrien incarne l'excellence du rallycross français. Avec un talent indéniable et une régularité impressionnante, il a su s'imposer comme une référence en Division 4.",
    achievements: "Double champion de France consécutif (2024-2025), Luc a démontré sa maîtrise technique et sa combativité lors de la finale 2025 à Dreux, remontant un retard de 15 points pour décrocher le titre.",
    style: "Pilotage agressif mais précis, excellente gestion de course, spécialiste des départs canon",
    quote: "Le rallycross, c'est ma passion. Chaque course est un nouveau défi, chaque victoire est le fruit d'un travail d'équipe acharné."
  },

  // LA VOITURE
  car: {
    model: "Honda Civic Type R",
    category: "Division 4",
    number: "#35",
    specs: {
      motorisation: "2.0L i-VTEC",
      puissance: "~280 ch",
      transmission: "6 rapports",
      poids: "~1150 kg",
      entrainement: "Traction avant"
    },
    colors: ["Noir", "Vert fluo", "Jaune"],
    features: [
      "Châssis renforcé rallycross",
      "Suspension ajustable",
      "Freinage haute performance",
      "Arceau de sécurité FIA",
      "Pneumatiques mixtes terre/asphalte"
    ]
  },

  // PALMARÈS
  achievements: {
    title: "Palmarès",
    titles: [
      {
        year: "2025",
        title: "Champion de France Rallycross Division 4",
        points: "304 points",
        highlight: "Victoire finale à Dreux après une remontée spectaculaire de 15 points",
        details: [
          "2 victoires en qualifications (Q2 et Q3)",
          "1ère place en demi-finale",
          "Victoire en finale",
          "Domination du championnat"
        ]
      },
      {
        year: "2024",
        title: "Champion de France Rallycross Division 4",
        points: "304 points",
        highlight: "Premier titre national avec une régularité impressionnante",
        details: [
          "Domination de la saison",
          "Multiples podiums",
          "Constance exceptionnelle",
          "Titre mérité"
        ]
      }
    ],
    stats: {
      titres: 2,
      victoires: "15+",
      podiums: "25+",
      annees: "2024-2025"
    }
  },

  // LE RALLYCROSS
  rallycross: {
    title: "Le Rallycross",
    subtitle: "Sport automobile spectaculaire",
    description: "Le rallycross est une discipline de sport automobile se déroulant sur circuit fermé alternant surface en terre et surface en asphalte. Des courses intenses de 4 à 6 tours avec départs groupés, dérapages spectaculaires et dépassements audacieux.",
    characteristics: [
      {
        icon: "🏁",
        title: "Circuit mixte",
        description: "60% terre / 40% asphalte"
      },
      {
        icon: "⚡",
        title: "Courses courtes",
        description: "4-6 tours ultra-intensifs"
      },
      {
        icon: "🚗",
        title: "Départs groupés",
        description: "6 voitures simultanément"
      },
      {
        icon: "🎯",
        title: "Joker Lap",
        description: "Variante tactique obligatoire"
      },
      {
        icon: "💨",
        title: "Spectacle garanti",
        description: "Dérapages et dépassements"
      },
      {
        icon: "🏆",
        title: "Compétition",
        description: "Qualifs, demi-finales, finale"
      }
    ]
  },

  // PARTENAIRES
  partners: {
    title: "Nos partenaires",
    subtitle: "Ils nous font confiance",
    main: [
      {
        name: "SARL Glais et Fils",
        type: "Partenaire principal",
        location: "Plémet",
        description: "Partenaire historique apportant un soutien logistique et financier essentiel"
      }
    ],
    sponsors: [
      { name: "YACCO", type: "Lubrifiants" },
      { name: "Nova Forklift", type: "Matériel" },
      { name: "MCP", type: "Pièces auto" },
      { name: "Graphiee", type: "Communication" },
      { name: "Balticross", type: "Équipement" },
      { name: "Cooper Tires", type: "Pneumatiques" }
    ]
  },

  // LA TEAM
  team: {
    title: "L'équipe",
    description: "Une équipe soudée et passionnée au service de la performance. Pilote, mécaniciens, préparateurs et partenaires travaillent ensemble pour viser l'excellence à chaque course.",
    values: [
      { icon: "🏁", text: "Performance", description: "Toujours viser le podium" },
      { icon: "🤝", text: "Esprit d'équipe", description: "La force du collectif" },
      { icon: "🔧", text: "Préparation", description: "Rigueur et professionnalisme" },
      { icon: "💪", text: "Combativité", description: "Ne jamais abandonner" },
      { icon: "❤️", text: "Passion", description: "L'amour du rallycross" }
    ]
  },

  // CHAMPIONNAT
  championship: {
    title: "Championnat de France Rallycross",
    description: "Le championnat de France de rallycross est l'une des compétitions nationales les plus relevées au monde. Avec 8 manches sur les meilleurs circuits français, il attire les meilleurs pilotes et offre un spectacle exceptionnel.",
    divisions: [
      {
        name: "Supercar",
        description: "Catégorie reine (~600ch, 4x4)"
      },
      {
        name: "Super 1600",
        description: "Future élite (~280ch)"
      },
      {
        name: "Division 3",
        description: "Propulsion (~250ch)"
      },
      {
        name: "Division 4",
        description: "Notre catégorie (~280ch, traction)"
      }
    ],
    circuits: [
      "Lessay", "Faleyras", "Châteauroux", "Pont-de-Rouan",
      "Kerlabo", "Lohéac", "Mayenne", "Dreux"
    ]
  },

  // SAISON
  season: {
    title: "Saison 2025 - Bilan",
    subtitle: "Une saison de folie !",
    highlight: "8ème et dernière manche à Dreux : week-end d'exception avec 2 victoires en qualifications, victoire en demi-finale et victoire en finale pour décrocher le titre de champion !",
    finalRace: {
      circuit: "Dreux",
      date: "Octobre 2025",
      position: "1er",
      points: "304 points au total",
      context: "15 points de retard avant la manche"
    }
  },

  // CONTACT & RÉSEAUX
  contact: {
    title: "Nous contacter",
    address: {
      street: "15 rue de Beauséjour",
      city: "22600 Trévé",
      region: "Côtes-d'Armor, Bretagne"
    },
    social: {
      facebook: "https://www.facebook.com/p/Team-WRC-Trévé-RX-100063737791619/",
      instagram: "https://www.instagram.com/wrc_treve_rx/",
      followers: "1000+"
    },
    cta: "Suivez nos aventures sur les réseaux sociaux !"
  },

  // GALERIE
  gallery: {
    title: "Galerie",
    categories: ["Victoires", "Course", "Team", "Voiture"]
  },

  // ACTUALITÉS
  news: {
    title: "Actualités",
    latest: {
      title: "Luc Derrien sacré champion de France pour la 2ème fois !",
      date: "Octobre 2025",
      excerpt: "Week-end exceptionnel à Dreux avec une finale mémorable qui offre le titre à Luc Derrien devant Arthur Barbault Forget.",
      content: "La Team WRC de Trévé avec son pilote Luc DERRIEN a passé un week-end d'exception lors de la 8ème et dernière manche du championnat de France de Rallycross à Dreux avec 2 victoires en Q2 et Q3, une première place en demi finale et bien sûr la victoire en finale devant son concurrent direct Arthur Barbault Forget qui comptait 15 points d'avance avant le week-end. Luc Derrien devient donc champion de France de Rallycross de la Division 4 pour la seconde fois consécutive."
    }
  },

  // DEVENIR PARTENAIRE
  partnership: {
    title: "Devenir partenaire",
    subtitle: "Associez votre marque à la performance",
    benefits: [
      "Visibilité sur la voiture et les équipements",
      "Logo sur tous nos supports de communication",
      "Présence sur nos réseaux sociaux",
      "Invitations VIP aux courses",
      "Retombées médiatiques nationales",
      "Association à une équipe gagnante"
    ],
    cta: "Contactez-nous pour un partenariat"
  },

  // SEO
  seo: {
    title: "Team WRC Trévé RX - Double Champion de France Rallycross",
    description: "Team WRC Trévé RX : Luc Derrien, double champion de France de rallycross 2024-2025 en Division 4. Honda Civic #35. Suivez nos courses sur tous les circuits français !",
    keywords: "WRC Trévé, rallycross, Luc Derrien, champion France, Division 4, Honda Civic, sport automobile, Bretagne, Côtes-d'Armor, rallycross France, team rallycross"
  },

  // THÈME
  theme: {
    primary: "green", // Vert fluo de la voiture
    secondary: "yellow", // Jaune des sponsors
    accent: "black", // Noir de la voiture
    mode: "dark" // Mode sombre pour ambiance racing
  }
};