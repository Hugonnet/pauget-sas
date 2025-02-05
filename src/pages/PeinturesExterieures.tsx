import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const PeinturesExterieures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Peinture Extérieure & Ravalement de Façade à Port | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Experts en peinture extérieure et ravalement de façade à Port. Protection durable, embellissement et valorisation de votre patrimoine. Devis gratuit."
        />
      </Helmet>

      <section className="py-20">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nos Services de Peinture Extérieure
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Ravalement de Façade</h2>
              <p className="text-white/90 mb-6">
                Redonnez vie à vos façades avec notre service de ravalement. 
                Une protection durable contre les intempéries.
              </p>
              <Link 
                to="/ravalement-facade"
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
              <h2 className="text-2xl font-semibold mb-4 text-white">Peinture de Façade</h2>
              <p className="text-white/90 mb-6">
                Protégez et embellissez vos façades avec nos solutions de peinture extérieure. 
                Une finition impeccable pour un résultat durable.
              </p>
              <Link 
                to="/peinture-facade"
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

export default PeinturesExterieures;
