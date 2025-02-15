
import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = { helmet: undefined }; 
const rootElement = document.getElementById('root')!;

const app = (
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Si le script s'exécute côté client
if (typeof window !== 'undefined') {
  // Si la page a été pré-rendue par react-snap
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
}

export default app;
