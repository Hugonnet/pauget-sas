
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Peintures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services de Peinture Intérieure et Extérieure à Port | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Découvrez nos services de peinture à Port (01). Experts en peinture intérieure, décoration et ravalement de façade. Devis gratuit pour vos projets."
        />
        <meta name="keywords" content="peinture intérieure, peinture extérieure, décoration, ravalement façade, Port, Ain" />
        <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr/peintures" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Peinture Intérieure et Extérieure | Pauget & Fils" />
        <meta property="og:description" content="Artisan peintre à Port. Solutions personnalisées pour l'intérieur et l'extérieur de votre habitat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.platrerie-peinture-pauget.fr/peintures" />
        <meta property="og:image" content="/lovable-uploads/hero-peintures-interieures.webp" />
        <meta property="og:image:alt" content="Services de peinture professionnelle Pauget & Fils" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
        <meta name="geo.position" content="46.16690444946289;5.568050861358643" />
        <meta name="ICBM" content="46.16690444946289, 5.568050861358643" />
      </Helmet>

      <section className="py-20">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nos Services de Peinture
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Peinture Intérieure</h2>
              <p className="text-white/90 mb-6">
                Transformez vos espaces intérieurs avec nos services de peinture professionnelle. 
                Des finitions impeccables pour un résultat qui dure.
              </p>
              <Link 
                to="/peintures/interieures"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <span>En savoir plus</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Peinture Extérieure</h2>
              <p className="text-white/90 mb-6">
                Protégez et embellissez vos façades avec nos solutions de peinture extérieure. 
                Une protection durable contre les intempéries.
              </p>
              <Link 
                to="/peintures/exterieures"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
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

export default Peintures;
