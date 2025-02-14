import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import './App.css';
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
import Admin from './pages/Admin';
import RealisationEdit from './pages/RealisationEdit';
import Login from './pages/Login';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/admin/Dashboard';
import { RealisationsAdmin } from './pages/admin/RealisationsAdmin';
import { RealisationCreate } from './pages/admin/RealisationCreate';
import { UsersAdmin } from './pages/admin/UsersAdmin';
import { SettingsAdmin } from './pages/admin/SettingsAdmin';
import { LegalMentions } from './pages/LegalMentions';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { Sitemap } from './pages/Sitemap';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <ScrollToTop />
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
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/realisations/edit/:slug" element={<RealisationEdit />} />
                <Route path="/mentions-legales" element={<LegalMentions />} />
                <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
                <Route path="/politique-de-cookies" element={<CookiePolicy />} />
                <Route path="/plan-du-site" element={<Sitemap />} />

                {/* Admin Routes - Protected */}
                <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/admin/realisations" element={<ProtectedRoute><RealisationsAdmin /></ProtectedRoute>} />
                <Route path="/admin/realisations/create" element={<ProtectedRoute><RealisationCreate /></ProtectedRoute>} />
                <Route path="/admin/realisations/edit/:slug" element={<ProtectedRoute><RealisationEdit /></ProtectedRoute>} />
                <Route path="/admin/users" element={<ProtectedRoute><UsersAdmin /></ProtectedRoute>} />
                <Route path="/admin/settings" element={<ProtectedRoute><SettingsAdmin /></ProtectedRoute>} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
            <Toaster position="top-right" />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
