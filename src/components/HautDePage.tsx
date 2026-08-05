import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Remet la page en haut à chaque changement d'adresse.
 *
 * Sans ça, React Router conserve la position de défilement : en cliquant sur
 * un article depuis le bas de la liste, on arrive au milieu du nouvel article.
 *
 * Deux précautions. Le défilement est instantané, parce que `scroll-behavior:
 * smooth` s'applique globalement et ferait remonter la page en glissant, ce
 * qui donne l'impression d'un bug. Et on ne touche à rien quand l'adresse
 * porte une ancre : c'est alors au navigateur d'aller à la bonne section.
 */
export default function HautDePage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
