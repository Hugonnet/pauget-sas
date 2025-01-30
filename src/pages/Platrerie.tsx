import { ArrowRight, Ruler, Palette, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Platrerie = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Diagonal Design */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10 transform -skew-y-6 translate-y-[-10%]" />
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486718448742-163732cd1544')",
          filter: "grayscale(30%)"
        }} />
        <div className="container relative z-20 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">
              L'Art de la Plâtrerie Traditionnelle et Moderne
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Experts en plâtrerie depuis plus de 30 ans, nous donnons vie à vos projets avec précision et savoir-faire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards with Floating Animation */}
      <section className="py-20 -mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
              >
                <div className="text-primary mb-4">
                  <service.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Notre Processus de Travail</h2>
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start mb-12 relative"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-card rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">
                Prêt à Concrétiser Votre Projet de Plâtrerie ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts est à votre écoute pour réaliser vos projets dans les règles de l'art.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg transition-colors duration-200"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Plâtrerie Traditionnelle",
    description: "Techniques ancestrales et matériaux nobles pour des finitions authentiques qui traversent le temps.",
    icon: Ruler
  },
  {
    title: "Plâtrerie Décorative",
    description: "Création de moulures, corniches et rosaces pour sublimer vos intérieurs avec élégance.",
    icon: Palette
  },
  {
    title: "Isolation Acoustique",
    description: "Solutions performantes pour une isolation phonique optimale de vos espaces.",
    icon: Shield
  }
];

const process = [
  {
    title: "Étude et Conseil",
    description: "Analyse approfondie de vos besoins et proposition de solutions adaptées à votre projet."
  },
  {
    title: "Préparation",
    description: "Sélection des matériaux et préparation minutieuse des surfaces pour un résultat optimal."
  },
  {
    title: "Réalisation",
    description: "Mise en œuvre experte avec un souci constant du détail et de la qualité."
  },
  {
    title: "Finitions",
    description: "Soins particuliers apportés aux finitions pour un rendu impeccable."
  }
];

export default Platrerie;