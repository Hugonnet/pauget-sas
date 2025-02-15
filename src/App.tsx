
import { HashRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { AuthProvider } from "@/hooks/useAuth";
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
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <AuthProvider>
          <div className="flex flex-col min-h-screen w-full">
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
  );
};

export default App;
