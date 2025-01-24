import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Platrerie from "./pages/Platrerie";
import Peintures from "./pages/Peintures";
import PeinturesInterieures from "./pages/PeinturesInterieures";
import PeinturesExterieures from "./pages/PeinturesExterieures";
import Isolation from "./pages/Isolation";
import IsolationInterieure from "./pages/IsolationInterieure";
import IsolationExterieure from "./pages/IsolationExterieure";
import Etancheite from "./pages/Etancheite";
import Partenaires from "./pages/Partenaires";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
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
              <Route path="/partenaires" element={<Partenaires />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;