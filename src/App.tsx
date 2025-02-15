
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { AuthProvider } from "@/hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Platrerie from './pages/Platrerie';
import Peintures from './pages/Peintures';
import PeinturesInterieures from './pages/PeinturesInterieures';
import PeinturesExterieures from './pages/PeinturesExterieures';
import Isolation from './pages/Isolation';
import IsolationInterieure from './pages/IsolationInterieure';
import IsolationExterieure from './pages/IsolationExterieure';
import Etancheite from './pages/Etancheite';
import Realisations from './pages/Realisations';
import RealisationDetail from './pages/RealisationDetail';
import Contact from './pages/Contact';
import RealisationEdit from './pages/RealisationEdit';

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <AuthProvider>
            <div className="flex flex-col min-h-screen w-full">
              <Helmet prioritizeSeoTags>
                <title>TEST HELMET PRIORITIZED - Pauget & Fils</title>
                <html lang="fr" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation à Port (01). Plus de 25 ans d'expertise, certifiée RGE. Devis gratuit pour vos travaux de rénovation et construction." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr" />
                <meta name="theme-color" content="#FDE1D3" />
                <meta property="og:title" content="Plâtrerie Peinture Isolation à Port (01) | Pauget & Fils - Artisans depuis 1997" />
                <meta property="og:description" content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation. Plus de 25 ans d'expertise, certifiée RGE. Devis gratuit pour vos travaux." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.platrerie-peinture-pauget.fr" />
                <meta name="geo.region" content="FR-ARA" />
                <meta name="geo.placename" content="Port" />
                <meta name="geo.position" content="46.16690444946289;5.568050861358643" />
                <meta name="ICBM" content="46.16690444946289, 5.568050861358643" />
              </Helmet>
              <Header />
              <main className="flex-grow w-full">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/platrerie" element={<Platrerie />} />
                  <Route path="/peintures" element={<Peintures />} />
                  <Route path="/peintures/interieures" element={<PeinturesInterieures />} />
                  <Route path="/peintures/exterieures" element={<PeinturesExterieures />} />
                  <Route path="/isolation" element={<Isolation />} />
                  <Route path="/isolation/interieure" element={<IsolationInterieure />} />
                  <Route path="/isolation/exterieure" element={<IsolationExterieure />} />
                  <Route path="/etancheite" element={<Etancheite />} />
                  <Route path="/realisations" element={<Realisations />} />
                  <Route path="/realisations/:slug" element={<RealisationDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/realisations/edit/:slug" element={<RealisationEdit />} />
                </Routes>
              </main>
              <Footer />
              <CookieBanner />
              <Toaster position="top-right" />
            </div>
          </AuthProvider>
        </HashRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
