import type { Commune as TCommune } from '../data/communes';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Commune from '../sections/Commune';
import Prestations from '../sections/Prestations';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

/**
 * Page « onglerie proche de X ».
 *
 * La commune vient de la route, identique au prérendu et dans le navigateur :
 * les deux rendus concordent, donc rien ne disparaît à l'hydratation.
 */
export default function PageCommune({ commune }: { commune: TCommune }) {
  return (
    <>
      <Nav surPhoto={false} />
      <main className="pt-[68px]">
        <Commune commune={commune} />
        <Prestations />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
