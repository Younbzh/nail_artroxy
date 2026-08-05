import { siteConfig } from '../config/siteConfig';
import { communes, cheminCommune, deCommune, minutesTrajet } from '../data/communes';
import { communeCiblee } from './commune';
import type { Article } from '../content/articles';

const RACINE = siteConfig.url.replace(/\/$/, '');
const TEL = `+33${siteConfig.contact.phone.replace(/\s/g, '').slice(1)}`;

export interface DonneesSeo {
  titre: string;
  description: string;
  motsCles: string;
  canonical: string;
  blocs: object[];
}

/* ------------------------------------------------------------ blocs JSON-LD */

/**
 * La fiche de l'établissement.
 *
 * `areaServed` liste nommément les communes : c'est ce que Google recoupe avec
 * les recherches « onglerie + commune ». Le `GeoCircle` décrit la zone d'où
 * viennent réellement les clientes — pas une zone d'intervention, puisque
 * Roxana ne se déplace pas.
 */
const etablissement = (description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  '@id': `${RACINE}/#salon`,
  name: siteConfig.name,
  description,
  url: RACINE,
  telephone: TEL,
  priceRange: '€€',
  image: `${RACINE}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.split(',')[0].trim(),
    addressLocality: siteConfig.ville,
    postalCode: '56500',
    addressRegion: 'Bretagne',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.contact.location.lat,
    longitude: siteConfig.contact.location.lng,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${siteConfig.contact.location.lat},${siteConfig.contact.location.lng}`,
  areaServed: [
    { '@type': 'City', name: siteConfig.ville },
    ...communes.map((c) => ({ '@type': 'City', name: c.nom })),
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  founder: { '@type': 'Person', name: 'Roxana' },
  makesOffer: siteConfig.services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.name, description: s.description },
  })),
});

/**
 * Questions réellement posées en cabine.
 *
 * Doublement utile : Google peut les afficher en résultat enrichi, et les
 * assistants y puisent des réponses factuelles attribuables au salon.
 */
const questionsCommunes = [
  {
    q: 'Où se trouve le salon ?',
    r: `À ${siteConfig.contact.address}, en Centre-Morbihan. L'accueil se fait dans un espace dédié, sur rendez-vous uniquement, et vous êtes la seule cliente sur votre créneau.`,
  },
  {
    q: 'Roxana se déplace-t-elle à domicile ?',
    r: "Non. Toutes les prestations ont lieu dans l'espace dédié à Moréac.",
  },
  {
    q: 'Combien de temps dure une prestation ?',
    r: "Comptez 2 h 30 à 3 h pour une pose gel, 1 h à 1 h 30 pour un semi-permanent, 45 min à 1 h pour une pédicure. Le nail art ajoute environ 30 minutes.",
  },
  {
    q: 'Comment prendre rendez-vous ?',
    r: `En ligne via le bouton de réservation, par téléphone au ${siteConfig.contact.phone}, ou en message privé sur Instagram et Facebook.`,
  },
  {
    q: 'Y a-t-il une offre pour les nouvelles clientes ?',
    r: 'Oui, 15 % de réduction sur la première pose, quelle que soit la prestation choisie.',
  },
];

const faq = (extra: { q: string; r: string }[] = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...extra, ...questionsCommunes].map(({ q, r }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: r },
  })),
});

const filAriane = (elements: { nom: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: elements.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.nom,
    item: `${RACINE}${e.url}`,
  })),
});

/* --------------------------------------------------------------- par page */

export function seoAccueil(): DonneesSeo {
  const description = siteConfig.seo.description;
  return {
    titre: siteConfig.seo.title,
    description,
    motsCles: siteConfig.seo.keywords.join(', '),
    canonical: `${RACINE}/`,
    blocs: [etablissement(description), faq(), filAriane([{ nom: 'Accueil', url: '/' }])],
  };
}

/**
 * Page « onglerie proche de X ».
 *
 * Le titre dit « proche de » et non « à » : Roxana n'exerce pas dans ces
 * communes. Formuler autrement serait faux, et ferait de ces pages des pages
 * satellites — que Google écarte, quand il ne pénalise pas le site entier.
 */
export function seoCommune(): DonneesSeo | null {
  const c = communeCiblee();
  if (!c) return null;

  const km = c.km.toString().replace('.', ',');
  const titre = `Prothésiste ongulaire proche ${deCommune(c.nom)} (${c.codePostal}) | Nail.art.rox à Moréac`;
  const description =
    `Onglerie à ${km} km ${deCommune(c.nom)} : Roxana vous reçoit à Moréac, sur rendez-vous. ` +
    `Gel, semi-permanent, nail art et pédicure. ~${minutesTrajet(c.km)} min de trajet. −15 % sur la première pose.`;

  return {
    titre,
    description,
    motsCles: [
      `prothésiste ongulaire ${c.nom}`,
      `onglerie proche ${c.nom}`,
      `pose gel près de ${c.nom}`,
      `nail art ${c.nom}`,
      `manucure ${c.codePostal}`,
      `semi-permanent ${c.nom}`,
    ].join(', '),
    canonical: `${RACINE}${cheminCommune(c.nom)}`,
    blocs: [
      etablissement(description),
      faq([
        {
          q: `À quelle distance ${deCommune(c.nom)} se trouve le salon ?`,
          r: `Le salon est à ${km} km ${c.cap} ${deCommune(c.nom)}, à Moréac (56500). Comptez environ ${minutesTrajet(c.km)} minutes de trajet.`,
        },
      ]),
      filAriane([
        { nom: 'Accueil', url: '/' },
        { nom: `Proche de ${c.nom}`, url: cheminCommune(c.nom) },
      ]),
    ],
  };
}

export function seoBlog(): DonneesSeo {
  const description =
    'Conseils de prothésiste ongulaire : faire durer une pose, préparer ses ongles, entretenir un nail art, choisir entre gel et semi-permanent.';
  return {
    titre: 'Conseils et actualités ongles | Nail.art.rox by Dina',
    description,
    motsCles: 'conseils ongles, entretien manucure, faire durer semi-permanent, soin cuticules, tendances nail art',
    canonical: `${RACINE}/blog/`,
    blocs: [
      etablissement(description),
      filAriane([
        { nom: 'Accueil', url: '/' },
        { nom: 'Articles', url: '/blog/' },
      ]),
    ],
  };
}

/**
 * Page d'article.
 *
 * L'article n'est pas traité comme un billet hors-sol : `publisher` pointe sur
 * l'identifiant du salon, et `contentLocation` le rattache à Moréac et aux
 * communes voisines. C'est ce qui permet à un conseil d'expertise de remonter
 * sur une recherche locale — l'expertise ne sert à rien si elle n'est pas
 * reliée à un endroit où l'on peut prendre rendez-vous.
 *
 * La fiche du salon est jointe pour que la page reste attribuable même lue
 * isolément, ce que font les assistants.
 */
export function seoArticle(a: Article): DonneesSeo {
  const url = `${RACINE}/articles/${a.slug}/`;
  const lieux = [siteConfig.ville, ...communes.map((c) => c.nom)];

  return {
    titre: a.title,
    description: a.description,
    motsCles: [...a.tags, `prothésiste ongulaire ${siteConfig.ville}`, 'onglerie Centre-Morbihan'].join(', '),
    canonical: url,
    blocs: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: a.title,
        description: a.description,
        datePublished: a.date,
        dateModified: a.date,
        image: `${RACINE}${a.image}`,
        articleSection: a.category,
        keywords: a.tags.join(', '),
        wordCount: a.readTime * 200,
        inLanguage: 'fr-FR',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: {
          '@type': 'Person',
          name: 'Roxana',
          jobTitle: 'Prothésiste ongulaire',
          url: RACINE,
          worksFor: { '@id': `${RACINE}/#salon` },
        },
        publisher: { '@id': `${RACINE}/#salon` },
        contentLocation: {
          '@type': 'Place',
          name: siteConfig.ville,
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.ville,
            postalCode: '56500',
            addressRegion: 'Bretagne',
            addressCountry: 'FR',
          },
        },
        spatialCoverage: lieux.map((nom) => ({ '@type': 'Place', name: nom })),
        about: { '@id': `${RACINE}/#salon` },
      },
      etablissement(a.description),
      filAriane([
        { nom: 'Accueil', url: '/' },
        { nom: 'Articles', url: '/blog/' },
        { nom: a.title, url: `/articles/${a.slug}/` },
      ]),
    ],
  };
}
