/**
 * L'épilation laser, une seule source pour la section et pour le SEO.
 *
 * Les tarifs reprennent la plaquette de Roxana (public/epilation-laser/).
 * Le mot « définitive » n'apparaît nulle part : le laser réduit durablement
 * la pilosité, il ne garantit pas son absence à vie, et promettre plus que ce
 * que la fiche d'information remise à la cliente décrit serait trompeur.
 */

export interface Zone {
  nom: string;
  precision?: string;
  prix: number;
  duree: string;
}

export const zones: { groupe: string; lignes: Zone[] }[] = [
  {
    groupe: 'Haut du corps',
    lignes: [
      { nom: 'Aisselles', prix: 25, duree: '10 à 15 min' },
      { nom: 'Épaules', prix: 40, duree: '10 à 15 min' },
      { nom: 'Ventre', prix: 60, duree: '10 à 15 min' },
      { nom: 'Bras', precision: 'complets', prix: 70, duree: '20 à 30 min' },
      { nom: 'Torse', prix: 90, duree: '20 à 30 min' },
      { nom: 'Dos complet', prix: 90, duree: '20 à 30 min' },
    ],
  },
  {
    groupe: 'Maillot',
    lignes: [
      { nom: 'Maillot classique', precision: 'bikini', prix: 40, duree: '10 à 15 min' },
      { nom: 'Maillot intégral', prix: 70, duree: '20 à 30 min' },
    ],
  },
  {
    groupe: 'Jambes',
    lignes: [
      { nom: 'Demi-jambes', precision: 'genoux inclus', prix: 60, duree: '20 à 30 min' },
      { nom: 'Cuisses', prix: 60, duree: '20 à 30 min' },
      { nom: 'Jambes complètes', prix: 100, duree: '40 à 50 min' },
    ],
  },
];

export const corpsComplet = {
  zones: ['Maillot intégral', 'Aisselles', 'Jambes complètes'],
  prix: 170,
  duree: '1 h 30 à 2 h',
};

export const avantages = ['−10 % dès 3 zones', '−15 % sur un forfait de 6 séances', 'Bilan personnalisé offert'];

/**
 * Les attestations de formation, à compléter quand Roxana les transmet.
 * Tant que la liste est vide, la section dit qu'elles sont affichées au salon,
 * ce qu'impose de toute façon la réglementation.
 */
export const attestations: { titre: string; organisme: string; annee: string; image: string }[] = [];

export const questionsLaser = [
  {
    q: "L'épilation laser est-elle définitive ?",
    r: "Le laser diode réduit durablement la pilosité : séance après séance, les poils traités repoussent moins nombreux et plus fins, jusqu'à devenir rares. Une séance d'entretien ponctuelle peut être utile plus tard, selon votre peau et vos hormones. Je préfère vous le dire franchement plutôt que de vous promettre l'impossible.",
  },
  {
    q: 'Combien de séances faut-il ?',
    r: "Comptez en moyenne 8 séances par zone, espacées de 4 à 8 semaines pour suivre le cycle de pousse du poil. Mais chaque personne est différente : la peau, la couleur et l'épaisseur des poils, les hormones font varier ce nombre d'une cliente à l'autre. On fait le point dès le bilan, puis à chaque séance, et une séance d'entretien peut être utile plus tard.",
  },
  {
    q: 'Est-ce que ça fait mal ?',
    r: "La plupart des clientes décrivent une sensation de chaleur ou de petit picotement, brève et supportable. Les zones fines comme le maillot sont un peu plus sensibles. On adapte les réglages ensemble et vous pouvez m'arrêter à tout moment.",
  },
  {
    q: 'Le laser fonctionne-t-il sur tous les poils ?',
    r: "Le laser agit sur le pigment du poil. Il est efficace sur les poils bruns et châtains, et la technologie diode convient à une large gamme de carnations. En revanche, les poils blancs, gris, roux ou très blonds y répondent peu : si c'est votre cas, je vous le dis dès le bilan plutôt que de vous vendre des séances inutiles.",
  },
  {
    q: 'Comment me préparer avant une séance ?',
    r: "Rasez la zone au rasoir la veille. Pendant tout le protocole, c'est rasoir uniquement : ni cire, ni pince, ni épilateur, ni crème dépilatoire, car le laser a besoin de la racine. Évitez le soleil, les UV et l'autobronzant sur la zone dans les semaines qui précèdent et qui suivent, et venez sans crème ni déodorant sur la zone.",
  },
  {
    q: 'Y a-t-il des contre-indications ?',
    r: "Oui. Le laser est déconseillé pendant la grossesse, sur une peau bronzée, irritée ou lésée, sur un tatouage, et avec certains traitements photosensibilisants. Elles sont toutes passées en revue au bilan, et une fiche d'information vous est remise avant la première séance. Il est recommandé de consulter votre médecin avant de commencer, et indispensable en cas de doute.",
  },
  {
    q: "Les hommes peuvent-ils venir ?",
    r: "Oui. Le torse, le dos, les épaules et les bras font partie des zones proposées.",
  },
];
