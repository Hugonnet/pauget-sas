import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Isolation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services d'Isolation Thermique à Port | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Expert en isolation thermique à Port. Solutions d'isolation intérieure et extérieure pour une meilleure performance énergétique. Devis gratuit et conseils personnalisés."
        />
      </Helmet>

      <section className="py-20">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nos Solutions d'Isolation
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Isolation Intérieure</h2>
              <p className="text-white/90 mb-6">
                Optimisez le confort thermique de votre intérieur avec nos solutions d'isolation. 
                Réduisez vos factures d'énergie tout en améliorant votre confort.
              </p>
              <Link 
                to="/isolation/interieure"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80"
              >
                <span>En savoir plus</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Isolation Extérieure</h2>
              <p className="text-white/90 mb-6">
                Protection thermique optimale avec notre isolation par l'extérieur. 
                Une solution durable pour des économies d'énergie significatives.
              </p>
              <Link 
                to="/isolation/exterieure"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80"
              >
                <span>En savoir plus</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Isolation;