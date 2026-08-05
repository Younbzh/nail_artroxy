import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Wordmark from './Wordmark';

const liens = [
  { label: 'Prestations', href: '/#prestations' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Qui suis-je', href: '/#apropos' },
  { label: 'Événements', href: '/#evenements' },
  { label: 'Articles', href: '/blog' },
];

/**
 * Transparente au-dessus du hero, elle bascule sur fond blanc au défilement.
 * `surPhoto` vaut false sur les pages sans image d'ouverture (blog, article).
 */
export default function Nav({ surPhoto = true }: { surPhoto?: boolean }) {
  const [ouvert, setOuvert] = useState(false);
  const [defile, setDefile] = useState(false);

  useEffect(() => {
    const onScroll = () => setDefile(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clair = surPhoto && !defile && !ouvert;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        clair ? 'bg-transparent' : 'border-b border-line bg-paper/95 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="text-lg">
          <Wordmark clair={clair} />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {liens.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-[13.5px] font-medium transition-colors ${
                clair ? 'text-white/80 hover:text-white' : 'text-ink-soft hover:text-blush-ink'
              }`}
            >
              {label}
            </a>
          ))}
          <a href={siteConfig.reservation.url} target="_blank" rel="noopener noreferrer" className="btn-fill">
            Réserver
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={ouvert}
          className={`md:hidden ${clair ? 'text-white' : 'text-ink'}`}
        >
          {ouvert ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {ouvert && (
        <div className="flex flex-col gap-1 border-t border-line bg-paper px-5 pb-6 pt-3 md:hidden">
          {liens.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOuvert(false)}
              className="py-3 text-base font-medium text-ink"
            >
              {label}
            </a>
          ))}
          <a
            href={siteConfig.reservation.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOuvert(false)}
            className="btn-fill mt-3"
          >
            Réserver un créneau
          </a>
        </div>
      )}
    </header>
  );
}
