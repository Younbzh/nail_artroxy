import type { Commune } from '../data/communes';

/**
 * Commune visée par la page en cours de rendu.
 *
 * Vaut `null` partout sauf pendant le prérendu des pages « proche de ».
 * Le navigateur ne s'en sert jamais : les pages communes sont des fichiers
 * HTML statiques. Cet état permet aux composants partagés d'adapter leur
 * texte sans qu'on ait à les dupliquer.
 */
let ciblee: Commune | null = null;

export const communeCiblee = () => ciblee;
export const definirCommune = (c: Commune | null) => {
  ciblee = c;
};
