
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

// Définir les meta tags par défaut
const defaultMetaTags = document.createElement('meta');
defaultMetaTags.setAttribute('name', 'description');
defaultMetaTags.setAttribute('content', 'Entreprise familiale specialisee en platrerie, peinture et isolation a Port (01). Plus de 25 ans expertise, certifiee RGE.');
document.head.appendChild(defaultMetaTags);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
