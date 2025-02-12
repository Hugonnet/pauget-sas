
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à améliorer l'isolation de votre maison ?</h2>
        <p className="text-lg mb-8 text-white/90">
          Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
        </p>
        <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
          Demander un devis
        </Button>
      </div>
    </section>
  );
};
