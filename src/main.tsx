
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

// Définir les meta tags par défaut
const defaultMetaTags = document.createElement('meta');
defaultMetaTags.setAttribute('name', 'description');
defaultMetaTags.setAttribute('content', 'Entreprise familiale spécialisée en plâtrerie, peinture et isolation à Port (01). Plus de 25 ans d'expertise, certifiée RGE.');
document.head.appendChild(defaultMetaTags);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
