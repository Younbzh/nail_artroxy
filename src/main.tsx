import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const racine = document.getElementById('root') as HTMLElement;

const arbre = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*
  Les pages livrées contiennent déjà leur HTML (voir scripts/prerendre.mjs) :
  on l'hydrate au lieu de tout reconstruire. En développement, le conteneur est
  vide et un rendu classique s'impose.
*/
if (racine.hasChildNodes()) {
  hydrateRoot(racine, arbre);
} else {
  createRoot(racine).render(arbre);
}
