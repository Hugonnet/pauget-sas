
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/isolation-exterieure.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Isolation Thermique par l'Extérieur
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Optimisez l'efficacité énergétique de votre maison avec notre expertise en isolation thermique par l'extérieur. Solutions durables et économies d'énergie garanties.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Demander un devis gratuit
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
};
