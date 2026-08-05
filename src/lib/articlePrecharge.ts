/**
 * Contenu d'article disponible sans attendre.
 *
 * Une page d'article chargeait son Markdown dans un effet, donc après le
 * rendu. Au prérendu les effets ne s'exécutent pas : le HTML livré n'aurait
 * contenu que le titre, et les robots d'IA — qui n'exécutent pas JavaScript —
 * n'auraient jamais lu une ligne des dix-neuf articles.
 *
 * Le texte est donc déposé ici avant le rendu : par `scripts/prerendre.mjs`
 * côté build, et par le HTML livré côté navigateur. Les deux rendus
 * concordent, l'hydratation ne rejoue rien.
 */
declare global {
  interface Window {
    __ARTICLE_MD__?: { slug: string; contenu: string };
  }
}

let precharge: { slug: string; contenu: string } | null = null;

export const definirArticlePrecharge = (slug: string, contenu: string) => {
  precharge = { slug, contenu };
};

export function articlePrecharge(slug: string): string | null {
  if (precharge?.slug === slug) return precharge.contenu;
  if (typeof window !== 'undefined' && window.__ARTICLE_MD__?.slug === slug) {
    return window.__ARTICLE_MD__.contenu;
  }
  return null;
}

/** Le frontmatter est déjà exploité par generateArticles.mjs : on garde le corps. */
export const corpsSeul = (brut: string) => brut.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
