export type Categorie = 'Gel' | 'Semi-permanent' | 'Nail Art' | 'Pédicure';

export interface Realisation {
  slug: string;
  categorie: Categorie;
  titre: string;
  /** Orientation du fichier source, pour réserver la bonne place dans la grille. */
  format: 'paysage' | 'portrait';
  /** Mise en avant sur la page d'accueil. */
  vedette?: boolean;
}

/**
 * Les fichiers vivent dans public/portfolio/ :
 *   <slug>-800.webp  → vignette de grille (~19 Ko)
 *   <slug>.webp      → pleine taille, chargée seulement à l'ouverture du zoom
 * Les JPEG d'origine sont conservés hors publication, dans _photos-source/originaux/.
 */
export const realisations: Realisation[] = [
  // ---- Gel ----
  { slug: 'gel-french-longue', categorie: 'Gel', titre: 'French longue', format: 'paysage', vedette: true },
  { slug: 'gel-amande-nacre', categorie: 'Gel', titre: 'Amande nacré', format: 'portrait' },
  { slug: 'gel-blanc-nacre', categorie: 'Gel', titre: 'Blanc nacré', format: 'paysage' },

  // ---- Semi-permanent ----
  { slug: 'semi-babyboomer', categorie: 'Semi-permanent', titre: 'Babyboomer nude', format: 'paysage', vedette: true },
  { slug: 'semi-nude-rose', categorie: 'Semi-permanent', titre: 'Nude rosé', format: 'paysage' },
  { slug: 'semi-nude-poudre', categorie: 'Semi-permanent', titre: 'Nude poudré', format: 'paysage' },
  { slug: 'semi-gris-perle', categorie: 'Semi-permanent', titre: 'Gris perle', format: 'paysage' },
  { slug: 'semi-degrade-nude', categorie: 'Semi-permanent', titre: 'Dégradé nude', format: 'paysage' },

  // ---- Nail Art ----
  { slug: 'nailart-floral-rose', categorie: 'Nail Art', titre: 'Floral rose', format: 'paysage', vedette: true },
  { slug: 'nailart-fleur-relief', categorie: 'Nail Art', titre: 'Fleur en relief', format: 'paysage' },
  { slug: 'nailart-fleur-blanche', categorie: 'Nail Art', titre: 'Fleur blanche', format: 'paysage' },
  { slug: 'nailart-rouge-pois', categorie: 'Nail Art', titre: 'Rouge à pois', format: 'paysage' },
  { slug: 'nailart-corail', categorie: 'Nail Art', titre: 'Touches corail', format: 'paysage' },
  { slug: 'nailart-corail-neon', categorie: 'Nail Art', titre: 'Corail néon', format: 'paysage' },
  { slug: 'nailart-fleurs-jaunes', categorie: 'Nail Art', titre: 'Fleurs jaunes', format: 'paysage' },
  { slug: 'nailart-abstrait', categorie: 'Nail Art', titre: 'Abstrait orange & bleu', format: 'paysage' },

  // ---- Pédicure ----
  { slug: 'pedicure-french', categorie: 'Pédicure', titre: 'French pieds', format: 'paysage', vedette: true },
  { slug: 'pedicure-nacre', categorie: 'Pédicure', titre: 'Nacré', format: 'portrait' },
  { slug: 'pedicure-turquoise', categorie: 'Pédicure', titre: 'Turquoise', format: 'paysage' },
  { slug: 'pedicure-rouge', categorie: 'Pédicure', titre: 'Rouge vif', format: 'paysage' },
  { slug: 'pedicure-rouge-marbre', categorie: 'Pédicure', titre: 'Rouge sur marbre', format: 'paysage' },
  { slug: 'pedicure-rose-vif', categorie: 'Pédicure', titre: 'Rose vif', format: 'paysage' },
  { slug: 'pedicure-violet-bleu', categorie: 'Pédicure', titre: 'Violet & bleu', format: 'paysage' },
  { slug: 'pedicure-prune', categorie: 'Pédicure', titre: 'Prune', format: 'paysage' },
];

export const categories: Categorie[] = ['Gel', 'Semi-permanent', 'Nail Art', 'Pédicure'];

/** Photo d'ouverture : french longue sur soie blanche. */
export const heroSlug = 'gel-french-longue';

export const vignette = (slug: string) => `/portfolio/${slug}-800.webp`;
export const pleineTaille = (slug: string) => `/portfolio/${slug}.webp`;
