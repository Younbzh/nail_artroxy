/**
 * Communes autour de Moréac qui méritent leur propre page.
 *
 * Attention au sens du trajet. Un artisan se déplace : « maçon à Locminé »
 * décrit une prestation qui a bien lieu à Locminé. Roxana, elle, reçoit dans
 * son espace à Moréac et ne se déplace pas. Une page « prothésiste ongulaire
 * à Locminé » affirmerait donc quelque chose de faux, et tomberait dans la
 * page satellite que Google sanctionne.
 *
 * L'angle retenu est « proche de » : la recherche visée est la même
 * (quelqu'un à Locminé cherche une onglerie), mais la page dit la vérité —
 * je suis à Moréac, voici la distance, voici le trajet.
 *
 * Distances à vol d'oiseau entre centres-bourgs, populations INSEE via
 * geo.api.gouv.fr (relevé du 2026-08-05). Le trajet réel est plus long : la
 * conversion en minutes en tient compte.
 */
export interface Commune {
  nom: string;
  /** Distance à vol d'oiseau depuis le bourg de Moréac. */
  km: number;
  /** Direction depuis Moréac, pour situer sans carte. */
  cap: string;
  population: number;
  codePostal: string;
}

export const communes: Commune[] = [
  { nom: 'Locminé', km: 6.3, cap: 'au sud-ouest', population: 4773, codePostal: '56500' },
  { nom: 'Évellys', km: 6.8, cap: 'au nord-ouest', population: 3379, codePostal: '56500' },
  { nom: 'Réguiny', km: 6.9, cap: 'au nord-est', population: 1955, codePostal: '56500' },
  { nom: 'Bignan', km: 7.4, cap: 'au sud-est', population: 2757, codePostal: '56500' },
  { nom: 'Plumelin', km: 9.1, cap: 'au sud-ouest', population: 2885, codePostal: '56500' },
  { nom: 'Saint-Jean-Brévelay', km: 12.4, cap: 'au sud-est', population: 2869, codePostal: '56660' },
  { nom: 'Pluméliau-Bieuzy', km: 14.9, cap: "à l'ouest", population: 4632, codePostal: '56310' },
  { nom: 'Noyal-Pontivy', km: 15.0, cap: 'au nord-ouest', population: 3606, codePostal: '56920' },
];

/** "Saint-Jean-Brévelay" → "saint-jean-brevelay" */
export const slugCommune = (nom: string) =>
  nom
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const cheminCommune = (nom: string) => `/onglerie-proche-${slugCommune(nom)}/`;

/** « de Locminé », mais « d'Évellys » : l'élision se voit dans les titres. */
export const deCommune = (nom: string) =>
  /^[aeiouyàâäéèêëîïôöùûü]/i.test(nom.normalize('NFD').replace(/[̀-ͯ]/g, '')) ? `d'${nom}` : `de ${nom}`;

/**
 * Trajet estimé. Routes départementales du Centre-Morbihan, et la distance
 * routière dépasse toujours le vol d'oiseau : 40 km/h effectifs est prudent.
 */
export const minutesTrajet = (km: number) => Math.max(8, Math.round((km / 40) * 60));
