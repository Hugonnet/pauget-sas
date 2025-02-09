
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Prêt à Améliorer la Performance de Votre Habitat ?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts est à votre écoute 
              pour réaliser vos projets d'isolation dans les règles de l'art.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg transition-colors duration-200"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
