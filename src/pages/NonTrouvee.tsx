import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NonTrouvee() {
  return (
    <>
      <Nav surPhoto={false} />
      <main className="flex min-h-[70vh] items-center justify-center px-5 pt-[68px] text-center">
        <div>
          <p className="eyebrow">Erreur 404</p>
          <h1 className="section-title mb-5">Cette page n'existe pas</h1>
          <p className="mb-8 text-[15.5px] text-ink-mut">
            Le lien est peut-être ancien, ou l'adresse comporte une faute.
          </p>
          <Link to="/" className="btn-outline">
            Revenir à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
