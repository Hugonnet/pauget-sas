import { ArrowRight, Ruler, Shield, Star, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Platrerie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Plâtrerie et Aménagement Intérieur - Joël Pauget et ses fils</title>
        <meta 
          name="description" 
          content="Joël Pauget et ses fils, experts en plâtrerie, proposent des services de création de cloisons, faux plafonds, enduits et rénovations pour des intérieurs esthétiques et fonctionnels." 
        />
      </Helmet>

      {/* Hero Section avec Design Diagonal */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-bg-platrerie.webp')",
          }}
        />
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 w-full h-32 bg-background transform -skew-y-3 origin-bottom-right translate-y-16" />
        </div>
        
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6"
            >
              Expert en Plâtrerie<br />
              Traditionnelle et Moderne
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl opacity-90 mb-8"
            >
              Joël Pauget et ses fils est une entreprise familiale spécialisée dans les travaux de plâtrerie, offrant des services de qualité pour vos projets de construction et de rénovation. Notre équipe de professionnels expérimentés est dédiée à fournir des solutions sur mesure, alliant savoir-faire traditionnel et techniques modernes, pour créer des espaces intérieurs esthétiques et fonctionnels.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-32">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Nos Services en Plâtrerie
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Section CTA */}
      <section className="py-20">
        <div className="container">
          <div className="bg-card rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 max-w-2xl mx-auto mb-8"
              >
                Faites confiance à Joël Pauget et ses fils pour tous vos travaux de plâtrerie. Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
              </motion.p>
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
    title: "Création de Cloisons et Doublages",
    description: "Nous réalisons la pose de cloisons sèches et de doublages en plaques de plâtre, permettant de structurer vos espaces selon vos besoins. Ces installations offrent une excellente isolation thermique et acoustique, contribuant au confort de votre habitat.",
    icon: Shield
  },
  {
    title: "Faux Plafonds et Plafonds Suspendus",
    description: "Notre expertise inclut la conception et la mise en place de faux plafonds et de plafonds suspendus, idéaux pour dissimuler les installations techniques, améliorer l'acoustique et apporter une touche esthétique à vos pièces.",
    icon: Ruler
  },
  {
    title: "Enduits et Finitions",
    description: "Nous appliquons des enduits de lissage et de finition pour obtenir des surfaces parfaitement lisses et prêtes à peindre ou à tapisser. Nos techniques garantissent des murs et plafonds aux finitions impeccables, reflétant notre engagement envers la qualité.",
    icon: Star
  },
  {
    title: "Rénovation et Réparation",
    description: "Que ce soit pour la rénovation de bâtiments anciens ou la réparation de surfaces endommagées, nous intervenons avec soin pour restaurer l'intégrité et l'esthétique de vos intérieurs, tout en respectant le caractère original des lieux.",
    icon: Wrench
  }
];

export default Platrerie;