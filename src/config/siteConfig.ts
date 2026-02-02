export const siteConfig = {
  // IDENTITÉ
  name: "V Club",
  fullName: "V Club Quéven",
  tagline: "La plus grande boîte de nuit du pays de Lorient",
  slogan: "Électro • Pop • 18-30 ans",
  
  // DATES CLÉS
  opening: {
    date: "14 février 2026",
    event: "Saint-Valentin",
    headliner: "KGS",
    specialNote: "Ouverture exceptionnelle avec le chanteur KGS en tête d'affiche"
  },

  // HERO
  hero: {
    title: "V Club",
    subtitle: "La plus grande boîte de nuit du pays de Lorient",
    description: "700 places • 640m² • Électro & Pop • Ambiance nouvelle génération",
    openingDate: "Ouverture le 14 février 2026",
    badges: [
      "700 places",
      "Électro & Pop",
      "18-30 ans",
      "Navette gratuite"
    ]
  },

  // ÉQUIPE
  team: {
    director: {
      name: "Gervaise Huet",
      age: 63,
      role: "Responsable V Club",
      quote: "J'ai ça dans le sang",
      alsoManages: "Le Point de Vue (Laz, Finistère)",
      experience: "Passionnée de la nuit depuis toujours"
    },
    programmer: {
      name: "Valentin Perron",
      artistName: "DJ Sixter",
      age: 20,
      role: "Communication & Programmation musicale",
      djSets: "1 samedi par mois au V Club",
      experience: "DJ le week-end en Bretagne",
      previousLife: "10 ans en Savoie (Lyon, Grenoble)",
      vision: "Apporter l'électro à Lorient, changer des autres boîtes"
    },
    owners: {
      family: "Famille Hurst",
      since: 1988,
      currentManagers: ["Bruno (avec Gervaise)", "Christelle", "Mireille"],
      note: "Enfants des fondateurs qui co-gèrent le complexe"
    }
  },

  // ADRESSE & CONTACT
  address: {
    street: "Penquelen",
    city: "Quéven",
    postalCode: "56530",
    region: "Bretagne",
    department: "Morbihan",
    sector: "Pays de Lorient",
    note: "Juste à côté du Valentino",
    coordinates: {
      lat: 47.7833,
      lng: -3.4167
    }
  },

  contact: {
    phone: "02 97 65 00 31", // Référence Valentino, à confirmer pour V Club
    email: "", // À confirmer
    facebook: "",
    instagram: "",
    website: ""
  },

  // CAPACITÉ & SPECS
  venue: {
    capacity: 700,
    seating: 245,
    floorArea: "640 m²",
    title: "La plus grande boîte de nuit du secteur de Lorient",
    features: [
      {
        icon: "👥",
        title: "700 places",
        description: "Dont 245 assises"
      },
      {
        icon: "🎵",
        title: "640 m²",
        description: "De piste de danse"
      },
      {
        icon: "🏆",
        title: "N°1 du secteur",
        description: "Plus grande boîte de Lorient"
      },
      {
        icon: "🎧",
        title: "Son",
        description: "Système entièrement neuf"
      }
    ]
  },

  // AMBIANCE & DESIGN
  ambiance: {
    title: "Ambiance & Design",
    subtitle: "Entièrement rénové pour une expérience clubbing unique",
    description: "Le V Club a été entièrement repensé : design noir profond, éclairages modernes, son de qualité professionnelle et piste de danse exceptionnelle.",
    renovations: [
      {
        icon: "🎨",
        title: "Design noir",
        description: "Murs et plafonds peints en noir pour une ambiance clubbing immersive"
      },
      {
        icon: "💎",
        title: "Boule à facettes",
        description: "L'iconique disco ball pour une ambiance rétro-futuriste"
      },
      {
        icon: "🛋️",
        title: "Fauteuils colorés",
        description: "Assises jaune et fuchsia remises au goût du jour"
      },
      {
        icon: "🎤",
        title: "Scène pro",
        description: "Scène fabriquée pour accueillir les showcases"
      },
      {
        icon: "🪵",
        title: "Parquet exceptionnel",
        description: "Grande piste de danse sur parquet - le plus beau de la région"
      },
      {
        icon: "🚬",
        title: "Espace fumeurs",
        description: "Coin aménagé et abrité par un préau"
      }
    ],
    vip: {
      title: "Carré VIP",
      capacity: 19,
      location: "À l'étage",
      description: "Espace privatif avec vue sur la salle"
    },
    bar: {
      title: "Bar refait à neuf",
      description: "Entièrement rénové pour un service optimal"
    },
    parquet: {
      quote: "Aucune boîte n'a un aussi beau parquet. Pour danser, il n'y a rien de mieux. Et la musique sonne mieux.",
      author: "Sophie (fille de Gervaise)"
    }
  },

  // MUSIQUE
  music: {
    title: "Programmation Musicale",
    subtitle: "Électro & Pop - Une nouvelle vague musicale à Lorient",
    target: "18-30 ans",
    styles: ["Électro", "Pop"],
    differentiation: {
      title: "Une musique qui change",
      regional: "Dans le coin, c'est beaucoup le style antillais, shatta",
      lyonGrenoble: "Vers Lyon, Grenoble, c'est plus électro",
      vClub: "On apporte l'électro à Lorient"
    },
    djSixter: {
      name: "DJ Sixter",
      realName: "Valentin Perron",
      frequency: "1 samedi par mois",
      style: "Électro, remixes, sons actuels",
      quote: "La musique changera des autres boîtes de nuit",
      background: "10 ans en Savoie, habitué de l'électro lyonnaise"
    },
    philosophy: "Oubliez les années 1980 ou le rock"
  },

  // HORAIRES & TARIFS
  schedule: {
    openingPhase: "Dans un premier temps",
    days: ["Samedi"],
    hours: "Minuit - 6h",
    note: "Ouverture uniquement le samedi au démarrage",
    prices: {
      standard: "12€",
      showcase: "20€"
    }
  },

  // TRANSPORT
  transport: {
    title: "Navette gratuite",
    subtitle: "Bus de 60 places pour rentrer en toute sécurité",
    capacity: 60,
    circuit: ["Guidel", "Quéven", "Plœmeur", "Lorient"],
    note: "Plusieurs tours dans la nuit",
    description: "Un bus de soixante places fera plusieurs tours entre Guidel, Quéven, Plœmeur et Lorient."
  },

  // LE COMPLEXE
  complex: {
    title: "2 Salles, 2 Ambiances",
    subtitle: "V Club + Valentino = Le plus grand complexe de nuit du secteur",
    concept: "Deux boîtes adjacentes pour deux publics complémentaires",
    vClub: {
      name: "V Club",
      style: "Électro & Pop",
      target: "18-30 ans",
      vibe: "Nouvelle génération, musique moderne"
    },
    valentino: {
      name: "Le Valentino",
      style: "Disco-Rock",
      target: "Tous âges",
      vibe: "Classique, ambiance festive",
      activities: "Boîte de nuit + Thés dansants + Danse en ligne"
    },
    symbolism: {
      title: "Le V de Valentino",
      description: "On a gardé le V de Valentino pour symboliser la continuité et le lien entre les deux établissements."
    }
  },

  // HISTOIRE
  history: {
    title: "L'Histoire du Complexe",
    familleHurst: {
      since: 1988,
      founders: "Famille Hurst",
      current: "Bruno, Christelle, Mireille (2e génération)"
    },
    timeline: [
      {
        period: "1988",
        event: "Acquisition du Valentino par la famille Hurst"
      },
      {
        period: "Il y a 8 ans",
        event: "Démolition de l'ancien hangar et construction du nouveau bâtiment"
      },
      {
        period: "Période intermédiaire",
        event: "Valentino fermé (sauf thés dansants), soirées dans le nouveau bâtiment jusqu'à 3h disco puis électro"
      },
      {
        period: "Il y a 1 an et demi",
        event: "Réouverture du Valentino en mode boîte de nuit + danse en ligne"
      },
      {
        period: "2025-2026",
        event: "Nouveaux travaux pour créer le V Club"
      },
      {
        period: "14 février 2026",
        event: "Ouverture officielle du V Club avec KGS"
      }
    ],
    quote: "Avant, ici, c'était un hangar. La famille Hurst l'a rasé pour construire ce bâtiment il y a huit ans.",
    evolution: "De hangar → Salle multi-usage → V Club + Valentino"
  },

  // EMPLOI
  jobs: {
    count: "~10 personnes",
    roles: [
      "Bar",
      "Sécurité",
      "Accueil",
      "DJ",
      "Technique son/lumière",
      "Service"
    ]
  },

  // POURQUOI V CLUB
  whyVClub: {
    title: "Pourquoi le V Club ?",
    reasons: [
      {
        icon: "🏆",
        title: "La plus grande du secteur",
        description: "700 places, 640m² - aucune autre boîte de cette taille à Lorient"
      },
      {
        icon: "🎵",
        title: "Musique différente",
        description: "Électro & Pop, loin de l'antillais/shatta dominant dans la région"
      },
      {
        icon: "👨‍🎤",
        title: "DJ Sixter résident",
        description: "20 ans, expérience Savoie/Lyon, vision électro moderne"
      },
      {
        icon: "🪵",
        title: "Le meilleur parquet",
        description: "Grande piste sur parquet exceptionnel - confort et acoustique"
      },
      {
        icon: "🎨",
        title: "Design rénové",
        description: "Entièrement refait à neuf : noir, fuchsia, jaune, son pro"
      },
      {
        icon: "🚌",
        title: "Navette gratuite",
        description: "Bus 60 places Guidel-Quéven-Plœmeur-Lorient"
      },
      {
        icon: "🎤",
        title: "Scène pour showcases",
        description: "Accueil d'artistes et shows live"
      },
      {
        icon: "💎",
        title: "Carré VIP",
        description: "19 places à l'étage avec vue sur la salle"
      }
    ]
  },

  // TARGET
  target: {
    age: "18-30 ans",
    profile: "Jeunes qui aiment l'électro, la pop, les sons modernes",
    mindset: "Nouvelle génération qui veut danser sur de la vraie musique électro",
    contrast: "Pas les années 80, pas le rock, pas seulement l'antillais"
  },

  // LORIENT
  city: {
    title: "Pays de Lorient",
    description: "Le V Club s'implante dans le pays de Lorient, apportant une nouvelle offre de nuit électro pour la jeunesse du territoire.",
    proximity: [
      "Lorient : centre névralgique",
      "Quéven : implantation stratégique",
      "Guidel : accès facile",
      "Plœmeur : proximité immédiate"
    ],
    context: "Jusqu'à présent, les boîtes de la région proposaient surtout de l'antillais et du shatta. Le V Club vient combler un manque pour les amateurs d'électro et de pop."
  },

  // FAQ
  faq: {
    title: "Questions fréquentes",
    questions: [
      {
        question: "Quelle est la date d'ouverture ?",
        answer: "Le V Club ouvre ses portes le 14 février 2026, jour de la Saint-Valentin, avec le chanteur KGS en tête d'affiche."
      },
      {
        question: "Quels sont les horaires d'ouverture ?",
        answer: "Dans un premier temps, le V Club n'ouvrira que le samedi, de minuit à 6h du matin."
      },
      {
        question: "Quel type de musique est jouée ?",
        answer: "Le V Club propose une programmation électro et pop, ciblant les 18-30 ans. Oubliez les années 1980 ou le rock - ici, c'est la nouvelle génération électro."
      },
      {
        question: "Quelle est la capacité de la boîte ?",
        answer: "Le V Club peut accueillir jusqu'à 700 personnes (dont 245 places assises) sur 640m² - c'est la plus grande boîte de nuit du pays de Lorient."
      },
      {
        question: "Y a-t-il une navette ?",
        answer: "Oui ! Un bus de 60 places fait plusieurs tours entre Guidel, Quéven, Plœmeur et Lorient tout au long de la nuit."
      },
      {
        question: "Quel est le prix d'entrée ?",
        answer: "L'entrée est à 12€ en soirée normale, et 20€ lors des showcases avec artistes invités."
      },
      {
        question: "Quelle est la différence avec le Valentino ?",
        answer: "Le V Club et le Valentino sont deux boîtes adjacentes formant un grand complexe. Le V Club est orienté électro/pop pour les 18-30 ans, tandis que le Valentino propose du disco-rock pour tous les âges. Deux salles, deux ambiances !"
      },
      {
        question: "Y a-t-il un espace VIP ?",
        answer: "Oui, un carré VIP à l'étage peut accueillir jusqu'à 19 personnes avec vue sur la salle."
      },
      {
        question: "Qui est DJ Sixter ?",
        answer: "DJ Sixter (Valentin Perron, 20 ans) s'occupe de la programmation musicale et mixera un samedi par mois. Il a vécu 10 ans en Savoie et apporte la culture électro lyonnaise à Lorient."
      }
    ]
  },

  // SEO
  seo: {
    title: "V Club Quéven - Plus grande boîte électro du pays de Lorient • Ouverture 14 février 2026",
    description: "700 places, 640m² de piste sur parquet. Électro & Pop pour les 18-30 ans. Navette gratuite Guidel-Lorient. Ouverture le 14/02/26 avec KGS. Penquelen, Quéven.",
    keywords: [
      "V Club Quéven",
      "boîte de nuit Lorient",
      "discothèque électro Morbihan",
      "club Quéven",
      "DJ Sixter",
      "soirée électro Lorient",
      "Valentino Quéven",
      "clubbing Bretagne",
      "boîte 18-30 ans",
      "navette gratuite Lorient"
    ]
  },

  // THÈME
  theme: {
    primary: "purple", // Électro, neon, clubbing
    secondary: "fuchsia", // Fauteuils fuchsia
    accent: "yellow", // Fauteuils jaune
    dark: "black" // Murs et plafonds noirs
  }
};