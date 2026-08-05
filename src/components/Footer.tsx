import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import Wordmark from './Wordmark';

const telBrut = siteConfig.contact.phone.replace(/\s/g, '');

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <p className="text-xl"><Wordmark clair /></p>
          <p className="mt-3 text-[14.5px] leading-relaxed text-white/50">
            Prothésiste ongulaire à Moréac.
            <br />
            Gel, semi-permanent, nail art et pédicure, sur rendez-vous.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-1.5 text-[12px] text-white/60 transition-colors hover:border-blush hover:text-blush"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-1.5 text-[12px] text-white/60 transition-colors hover:border-blush hover:text-blush"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow-on-dark mb-4">Contact</p>
          <div className="space-y-1.5 text-[14.5px] text-white/60">
            <p>{siteConfig.contact.address}</p>
            <a href={`tel:${telBrut}`} className="block transition-colors hover:text-white">
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow-on-dark mb-4">Le site</p>
          <div className="space-y-1.5 text-[14.5px] text-white/60">
            <a href="/#prestations" className="block transition-colors hover:text-white">
              Prestations
            </a>
            <a href="/#portfolio" className="block transition-colors hover:text-white">
              Portfolio
            </a>
            <Link to="/blog" className="block transition-colors hover:text-white">
              Articles
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-[12.5px] text-white/30 sm:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} · Prothésiste ongulaire à Moréac, Morbihan (56)
        </p>
        <p className="mt-2">
          Site créé par{' '}
          <a
            href="https://avalon-stratege.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-white/60"
          >
            Avalon Stratège
          </a>
        </p>
      </div>
    </footer>
  );
}
