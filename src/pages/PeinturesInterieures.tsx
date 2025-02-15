import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const PeinturesInterieures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Peinture Intérieure à Port | Décoration & Finitions | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Expert en peinture intérieure à Port (01). Peintures écologiques, finitions haut de gamme, conseils déco personnalisés. Rénovation et décoration d'intérieur." 
        />
        <meta name="keywords" content="peinture intérieure, décoration, finitions, Port, peintre décorateur, rénovation intérieure" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Expert Peinture Intérieure & Décoration | Pauget & Fils" />
        <meta property="og:description" content="Transformez votre intérieur avec nos services de peinture professionnelle. Conseils personnalisés et finitions soignées." />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
      </Helmet>

      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-peintures-interieures.webp')",
          }}
        />
        
        {/* Overlay diagonal avec dégradé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 w-full h-32 bg-background transform -skew-y-3 origin-bottom-right translate-y-16" />
        </div>
        
        {/* Contenu du hero */}
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 
              className="font-montserrat text-3xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Peinture Intérieure Professionnelle
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 md:mb-8"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Transformez vos espaces intérieurs avec nos services de peinture sur mesure.
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
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/90 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-white/80">
                      <Star className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Sublimez Vos Espaces avec Joël Pauget et ses fils
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Spécialistes en peinture intérieure, nous apportons élégance et modernité à vos espaces. Que ce soit pour une rénovation ou une construction neuve, nous appliquons des peintures de qualité adaptées à chaque surface : murs, plafonds, boiseries. Grâce à notre expertise, nous vous conseillons sur les finitions et les teintes idéales pour harmoniser votre intérieur. Nous utilisons des produits durables et respectueux de l'environnement pour un rendu impeccable et pérenne. Faites confiance à Joël Pauget et ses fils pour embellir votre habitat avec professionnalisme et savoir-faire.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[430px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/lovable-uploads/Peinture-interieure.webp"
                alt="Peinture intérieure professionnelle"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA */}
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
                Prêt à Embellir Votre Intérieur ?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts est à votre écoute 
                pour réaliser vos projets de peinture intérieure.
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
    </div>
  );
};

const services = [
  {
    title: "Peinture Murs",
    description: "Finitions soignées pour vos murs intérieurs.",
    features: [
      "Peinture acrylique",
      "Peinture satinée",
      "Peinture mate"
    ]
  },
  {
    title: "Peinture Plafonds",
    description: "Solutions adaptées pour vos plafonds.",
    features: [
      "Peinture blanche",
      "Peinture anti-moisissure",
      "Peinture acoustique"
    ]
  },
  {
    title: "Peinture Décorative",
    description: "Ajoutez une touche personnelle à vos espaces.",
    features: [
      "Effets de matière",
      "Peinture à effet",
      "Faux finis"
    ]
  }
];

export default PeinturesInterieures;
