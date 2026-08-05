export const siteConfig = {
  name: "Nail.art.rox by Dina",
  url: "https://nailartrox.fr",
  ville: "Moréac",
  tagline: "Ongles parfaits, toujours",
  description: "Prothésiste ongulaire passionnée par les détails et la couleur. Gel, semi-permanent, nail art & pédicure avec soin et douceur à Moréac.",
  
  contact: {
    address: "1 Kerob, 56500 Moréac",
    phone: "06 60 27 48 20",
    email: null,
    location: {
      lat: 47.9205,
      lng: -2.8327
    }
  },

  social: {
    instagram: "https://www.instagram.com/nail_artroxy",
    facebook: "https://www.facebook.com/people/Nailartrox-by-Dina/61570895737920/"
  },

  // Réservation en ligne — une seule source pour tous les boutons du site
  reservation: {
    url: "https://cal.eu/nail-art-roxy",
    prestations: {
      gel: "https://cal.eu/nail-art-roxy/gel",
      semiPermanent: "https://cal.eu/nail-art-roxy/semi-permanent",
      pedicure: "https://cal.eu/nail-art-roxy/pedicure"
    }
  },

  hours: {
    type: "Sur rendez-vous uniquement",
    note: "Prise de rendez-vous via le bouton de réservation ou en message privé sur Instagram et Facebook"
  },

  about: {
    owner: "Roxana",
    story: "Je suis Roxana, prothésiste ongulaire passionnée par les détails et la couleur. Chaque ongle est une petite œuvre d'art que je crée avec soin et douceur.",
    values: [
      "Attention aux détails",
      "Écoute personnalisée",
      "Produits de qualité",
      "Créativité sur-mesure"
    ],
    personality: "Féminité moderne, passion de l'art ongulaire, approche girly sans stéréotypes"
  },

  services: [
    {
      name: "Gel",
      description: "Pose de gel pour des ongles naturels et résistants",
      icon: "sparkles"
    },
    {
      name: "Semi-permanent",
      description: "Vernis longue durée avec brillance éclatante",
      icon: "palette"
    },
    {
      name: "Nail Art",
      description: "Créations artistiques personnalisées selon vos envies",
      icon: "paintbrush-2"
    },
    {
      name: "Pédicure",
      description: "Soins et beauté pour vos pieds",
      icon: "heart"
    }
  ],

  features: [
    {
      title: "Cadre intimiste",
      description: "Je vous reçois dans un espace dédié, calme et personnalisé, pour une expérience beauté sur-mesure",
      highlight: true
    },
    {
      title: "Offre découverte",
      description: "15% de réduction pour toutes les nouvelles clientes",
      highlight: true
    },
    {
      title: "Sur rendez-vous",
      description: "Contactez-moi en message privé pour réserver votre créneau"
    }
  ],

  seo: {
    title: "Nail.art.rox by Dina | Prothésiste Ongulaire Moréac (56500)",
    description: "Roxana, prothésiste ongulaire à Moréac (56500). Gel, semi-permanent, nail art & pédicure dans un espace dédié, sur rendez-vous. -15% sur la première pose. ☎ 06 60 27 48 20",
    keywords: [
      "prothésiste ongulaire Moréac",
      "nail art Moréac",
      "onglerie Moréac 56500",
      "gel semi-permanent Morbihan",
      "pédicure Moréac",
      "manucure Locminé",
      "styliste ongulaire Bretagne",
      "pose gel Moréac",
      "onglerie proche Locminé",
      "prothésiste ongulaire Centre Morbihan"
    ],
    og: {
      title: "Nail.art.rox by Dina - Ongles parfaits, toujours",
      description: "Prothésiste ongulaire à Moréac. Gel, semi-permanent, nail art sur-mesure, sur rendez-vous. -15% sur la première pose.",
      image: "/og-image.jpg",
      type: "website"
    }
  },

  /**
   * Direction visuelle retenue : « Blanc & Rose poudré ».
   * Ces valeurs sont la référence — leur application vit dans tailwind.config.cjs.
   * Deux directions ont été maquettées en repli si la cliente change d'avis :
   *   A — Crème & Aubergine : #FAF6F3 / #2D1B2E / #B87333
   *   B — Nuit & Or         : #1A1218 / #F2ECE4 / #C9A227
   */
  colors: {
    paper: "#FFFFFF",   // fond principal
    chalk: "#FAF8F8",   // fond alterné, très légèrement rosé
    ink: "#141414",     // titres
    inkSoft: "#4A4646", // texte courant
    inkMuted: "#7A7474",// légendes
    blush: "#F4A8B4",   // aplats : boutons, tuiles
    blushInk: "#A8505F",// accent lisible sur blanc
    blushPale: "#FDF2F4",
    line: "#E9E5E5"
  }
};
