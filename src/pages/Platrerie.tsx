import { ArrowRight, Ruler, Shield, Star, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Platrerie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Plâtrerie - Pauget & Fils | Expert en plâtrerie traditionnelle</title>
        <meta 
          name="description" 
          content="Découvrez notre expertise en plâtrerie traditionnelle et moderne. Plus de 30 ans d'expérience dans la réalisation de plafonds, cloisons et doublages dans la région de Bourg-en-Bresse." 
        />
      </Helmet>

      {/* Hero Section avec Design Diagonal */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Image de fond avec overlay diagonal */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-bg-platrerie.webp')",
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
            <h1 className="text-5xl font-bold mb-6">
              Expert en Plâtrerie<br />
              Traditionnelle et Moderne
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Plus de 30 ans d'expertise dans la réalisation de vos projets de plâtrerie, 
              avec un savoir-faire artisanal transmis de génération en génération.
            </p>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#CAB9AB] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Section Expertise */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Notre Expertise en Plâtrerie</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Depuis plus de trois décennies, Pauget et Fils met son expertise au service de vos projets de plâtrerie. 
                Notre entreprise familiale perpétue un savoir-faire artisanal tout en intégrant les techniques modernes 
                pour des réalisations de qualité.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Star className="text-primary" />
                  <span>Plafonds traditionnels et suspendus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="text-primary" />
                  <span>Cloisons et doublages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="text-primary" />
                  <span>Isolation thermique et acoustique</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="text-primary" />
                  <span>Finitions soignées</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Expertise en plâtrerie"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20">
        <div className="container">
          <div className="bg-[#CAB9AB] rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">
                Prêt à Concrétiser Votre Projet de Plâtrerie ?
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts est à votre écoute 
                pour réaliser vos projets dans les règles de l'art.
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
    title: "Plafonds & Cloisons",
    description: "Solutions sur mesure pour vos plafonds suspendus et cloisons, alliant esthétique et fonctionnalité.",
    icon: Wrench
  },
  {
    title: "Isolation Acoustique",
    description: "Expertise en isolation phonique pour un confort acoustique optimal dans vos espaces.",
    icon: Shield
  }
];

export default Platrerie;
