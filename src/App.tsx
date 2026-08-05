import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HautDePage from './components/HautDePage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DevisModal from './components/DevisModal';

import Hero from './sections/Hero';
import Prestations from './sections/Prestations';
import Portfolio from './sections/Portfolio';
import Apropos from './sections/Apropos';
import Diplomes from './sections/Diplomes';
import Evenements from './sections/Evenements';
import Articles from './sections/Articles';
import Contact from './sections/Contact';

import PageCommune from './pages/PageCommune';
import NonTrouvee from './pages/NonTrouvee';
import { communes, cheminCommune } from './data/communes';

// Chargées à la demande : react-markdown ne pèse plus sur l'accueil
const Blog = lazy(() => import('./pages/blog'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));

function Accueil() {
  const [devisOuvert, setDevisOuvert] = useState(false);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Prestations />
        <Portfolio />
        <Apropos />
        <Diplomes />
        <Evenements onDevis={() => setDevisOuvert(true)} />
        <Articles />
        <Contact />
      </main>
      <Footer />
      {devisOuvert && <DevisModal onClose={() => setDevisOuvert(false)} />}
    </>
  );
}

/**
 * Les routes, sans routeur.
 *
 * Le routeur est fourni par-dessus : `BrowserRouter` dans le navigateur,
 * `StaticRouter` au prérendu. C'est ce découplage qui permet d'écrire le site
 * dans le HTML livré.
 */
export default function App() {
  return (
    <>
      <HautDePage />
      <Suspense fallback={<div className="min-h-screen bg-paper" />}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />

          {/*
            Une route par commune, déclarée explicitement.
            React Router exige qu'un paramètre occupe un segment d'URL entier :
            « /onglerie-proche-:slug » ne correspondrait à rien, puisque le
            paramètre y partage son segment avec du texte fixe.
          */}
          {communes.map((c) => (
            <Route key={c.nom} path={cheminCommune(c.nom)} element={<PageCommune commune={c} />} />
          ))}

          <Route path="*" element={<NonTrouvee />} />
        </Routes>
      </Suspense>
    </>
  );
}
