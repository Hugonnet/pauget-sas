
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

      {/* Hero Section avec Design Diagonal */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-peintures-exterieures.webp')",
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
              Peinture Extérieure Professionnelle
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl opacity-90"
            >
              Embellissez et protégez durablement vos façades avec nos services de peinture sur mesure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-accent/90 max-w-3xl mx-auto mb-12 md:text-justify"
          >
            Joël Pauget et ses fils est une entreprise familiale spécialisée dans les travaux de peinture extérieure. Depuis 1997, nous mettons notre expertise au service de vos projets de rénovation et d'embellissement de façades dans l'Ain (01) et la Haute-Savoie (74), notamment autour de Saint-Julien-en-Genevois, Annemasse et Annecy.
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 text-accent"
          >
            Nos Services de Peinture Extérieure
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent">Ravalement de Façade</h2>
              <p className="text-accent/90 mb-6">
                Redonnez vie à vos façades avec notre service de ravalement. 
                Une protection durable contre les intempéries.
              </p>
              <Link 
                to="/ravalement-facade"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors duration-200"
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
              <h2 className="text-2xl font-semibold mb-4 text-accent">Peinture de Façade</h2>
              <p className="text-accent/90 mb-6">
                Protégez et embellissez vos façades avec nos solutions de peinture extérieure. 
                Une finition impeccable pour un résultat durable.
              </p>
              <Link 
                to="/peinture-facade"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors duration-200"
              >
                <span>En savoir plus</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {realisations.map((realisation, index) => (
              <motion.div
                key={realisation.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img 
                    src={realisation.image} 
                    alt={realisation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-accent">{realisation.title}</h3>
                  <p className="text-accent/80 mb-4">{realisation.description}</p>
                  <ul className="space-y-2 mb-4">
                    {realisation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-accent/70">
                        <Star className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const realisations = [
  {
    title: "Ravalement Complet",
    description: "Rénovation complète de façade avec traitement des fissures",
    image: "/lovable-uploads/realisation-joints-plafond-placo.jpeg",
    features: [
      "Nettoyage haute pression",
      "Traitement des fissures",
      "Finition imperméable"
    ]
  },
  {
    title: "Peinture Décorative",
    description: "Application de peinture décorative sur façade",
    image: "/lovable-uploads/hero-peintures-exterieures.webp",
    features: [
      "Préparation du support",
      "Peinture minérale",
      "Protection UV"
    ]
  },
  {
    title: "Isolation Thermique",
    description: "Isolation thermique par l'extérieur avec enduit décoratif",
    image: "/lovable-uploads/isolation-exterieure.png",
    features: [
      "Pose des panneaux isolants",
      "Enduit de finition",
      "Économies d'énergie"
    ]
  }
];

export default PeinturesExterieures;

