
import { motion } from "framer-motion";

export const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-10xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Notre Savoir-Faire en ITE</h2>
          <p className="text-lg text-gray-700 mb-12">
            Fort de notre expertise technique et de notre connaissance approfondie des matériaux, nous garantissons une isolation thermique par l'extérieur parfaitement adaptée à votre habitat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Préparation et Protection</h3>
              <p className="text-white/90">
                Protection minutieuse de vos ouvertures et végétation, préparation soignée des supports pour une adhérence optimale.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Finitions Personnalisées</h3>
              <p className="text-white/90">
                Large gamme d'enduits et de revêtements décoratifs pour personnaliser l'aspect final de vos façades.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-white">Suivi et Garanties</h3>
              <p className="text-white/90">
                Accompagnement complet du projet et garanties décennales sur nos travaux d'isolation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/lovable-uploads/isolation-exterieure.jpg"
              alt="Expertise en isolation extérieure"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
