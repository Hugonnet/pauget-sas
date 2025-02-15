
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = { helmet: undefined }; // Créez un contexte explicite avec une valeur initiale

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Retirons le StrictMode qui peut causer des problèmes avec react-helmet-async
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
)
