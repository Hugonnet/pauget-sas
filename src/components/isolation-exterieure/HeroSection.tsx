
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/isolation-exterieure.png')",
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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Isolation Thermique par l'Extérieur
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Optimisez la performance énergétique de votre habitat avec nos solutions d'isolation extérieure professionnelles.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
