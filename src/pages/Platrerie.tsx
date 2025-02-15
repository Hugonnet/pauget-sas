import { ArrowRight, Hammer, Building, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Platrerie = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Plâtrerie Traditionnelle à Port (01) | Cloisons & Plafonds | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Artisans plâtriers qualifiés à Port. Spécialistes en plâtrerie traditionnelle, cloisons, doublages et faux-plafonds. Devis gratuit, conseil personnalisé pour vos travaux de plâtrerie." 
        />
        <meta name="keywords" content="plâtrerie, cloisons, doublages, faux-plafonds, Port, Ain, plâtrier traditionnel" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Expert en Plâtrerie Traditionnelle | Pauget & Fils" />
        <meta property="og:description" content="Plus de 25 ans d'expertise en plâtrerie traditionnelle. Travaux de qualité pour vos cloisons, plafonds et doublages." />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
      </Helmet>

      {/* Hero Section avec Design Diagonal */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/hero-bg-platrerie.webp')"
      }} />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 w-full h-32 bg-background transform -skew-y-3 origin-bottom-right translate-y-16" />
        </div>
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-3xl">
              Expert en Plâtrerie<br />
              Traditionnelle et Moderne
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 md:mb-8">
              Plus de 30 ans d'expertise dans la réalisation de vos projets de plâtrerie, 
              avec un savoir-faire artisanal transmis de génération en génération.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.2
          }} className="bg-[#CAB9AB] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-primary mb-4">
                  <service.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Notre Expertise en Plâtrerie</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 text-justify">
                Joël Pauget et ses fils est une entreprise familiale spécialisée dans les travaux de plâtrerie, offrant des services de qualité pour vos projets de construction et de rénovation. 
                Notre équipe de professionnels expérimentés est dédiée à fournir des solutions sur mesure, alliant savoir-faire traditionnel et techniques modernes, pour créer des espaces intérieurs esthétiques et fonctionnels.
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
              <img src="/lovable-uploads/platrerie.webp" alt="Expertise en plâtrerie" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

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
              <Link to="/contact" className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg transition-colors duration-200">
                <span>Demander un devis gratuit</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

const services = [{
  title: "Création de Cloisons et Doublages",
  description: "Nous réalisons la pose de cloisons sèches et de doublages en plaques de plâtre, permettant de structurer vos espaces selon vos besoins. Ces installations offrent une excellente isolation thermique et acoustique, contribuant au confort de votre habitat.",
  icon: Building
}, {
  title: "Faux Plafonds et Plafonds Suspendus",
  description: "Notre expertise inclut la conception et la mise en place de faux plafonds et de plafonds suspendus, idéaux pour dissimuler les installations techniques, améliorer l'acoustique et apporter une touche esthétique à vos pièces.",
  icon: Hammer
}, {
  title: "Enduits et Finitions",
  description: "Nous appliquons des enduits de lissage et de finition pour obtenir des surfaces parfaitement lisses et prêtes à peindre ou à tapisser. Nos techniques garantissent des murs et plafonds aux finitions impeccables, reflétant notre engagement envers la qualité.",
  icon: Shield
}];

export default Platrerie;
