
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { hydrate, render } from "react-dom";

const helmetContext = { helmet: undefined }; 

const rootElement = document.getElementById('root')!;

const app = (
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
);

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// Ajout de la configuration pour react-snap
if (typeof document !== 'undefined') {
  const rootElement = document.getElementById("root")!;
  if (rootElement.hasChildNodes()) {
    hydrate(app, rootElement);
  } else {
    render(app, rootElement);
  }
}

// Pour le pre-rendering
export default app;
