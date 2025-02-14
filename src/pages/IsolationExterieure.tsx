
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/isolation-exterieure/HeroSection";
import { ServicesSection } from "@/components/isolation-exterieure/ServicesSection";
import { ExpertiseSection } from "@/components/isolation-exterieure/ExpertiseSection";
import { CTASection } from "@/components/isolation-exterieure/CTASection";

const IsolationExterieure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Isolation Thermique par l'Extérieur à Port | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Expert en isolation thermique par l'extérieur à Port. Solutions durables pour une meilleure efficacité énergétique. Devis gratuit et conseils personnalisés."
        />
      </Helmet>

      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-isolation-exterieure.webp')"
          }}
        />
        
        {/* Overlay diagonal avec dégradé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 w-full h-32 bg-background transform -skew-y-3 origin-bottom-right translate-y-16" />
        </div>
        
        {/* Contenu du hero */}
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 
              className="font-montserrat text-3xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Isolation Thermique par l'Extérieur
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 md:mb-8"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Optimisez l'efficacité énergétique de votre maison avec notre expertise en isolation thermique par l'extérieur. Solutions durables et économies d'énergie garanties.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ExpertiseSection />
      <CTASection />
    </div>
  );
};

export default IsolationExterieure;
