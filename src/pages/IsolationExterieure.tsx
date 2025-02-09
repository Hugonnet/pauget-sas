
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../components/isolation-exterieure/HeroSection";
import { ServicesSection } from "../components/isolation-exterieure/ServicesSection";
import { ExpertiseSection } from "../components/isolation-exterieure/ExpertiseSection";
import { CTASection } from "../components/isolation-exterieure/CTASection";

const IsolationExterieure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Isolation Thermique par l'Extérieur (ITE) à Port | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Spécialiste de l'isolation thermique par l'extérieur à Port. Économies d'énergie garanties, protection durable de vos façades. Entreprise certifiée, devis gratuit."
        />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <CTASection />
    </div>
  );
};

export default IsolationExterieure;
