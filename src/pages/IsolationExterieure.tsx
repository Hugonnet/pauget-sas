import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const IsolationExterieure = () => {
  return (
    <div className="min-h-screen bg-background">
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

      {/* Section Expertise */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Notre Expertise en ITE</h2>
            <p className="text-lg text-gray-700 mb-12">
              Depuis plus de trois décennies, Pauget et Fils met son expertise au service de vos projets d'isolation thermique par l'extérieur. 
              Notre entreprise familiale combine savoir-faire traditionnel et techniques modernes pour des résultats exceptionnels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Diagnostic Complet</h3>
                <p className="text-white/90">
                  Analyse approfondie de votre bâtiment pour une solution d'isolation adaptée à vos besoins spécifiques.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Matériaux Performants</h3>
                <p className="text-white/90">
                  Utilisation de systèmes d'isolation certifiés et éco-responsables pour une efficacité maximale.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Installation Experte</h3>
                <p className="text-white/90">
                  Mise en œuvre par des professionnels qualifiés pour une finition impeccable et durable.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                alt="Expertise en isolation extérieure"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
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
                Prêt à Améliorer la Performance de Votre Habitat ?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts est à votre écoute 
                pour réaliser vos projets d'isolation dans les règles de l'art.
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
    title: "Système ITE Complet",
    description: "Une solution globale pour une isolation thermique optimale de vos façades.",
    features: [
      "Protection thermique totale",
      "Suppression des ponts thermiques",
      "Finitions personnalisables"
    ]
  },
  {
    title: "Bardage Isolant",
    description: "Une solution esthétique et performante pour l'isolation de vos murs extérieurs.",
    features: [
      "Large choix de finitions",
      "Ventilation optimale",
      "Protection durable"
    ]
  },
  {
    title: "Enduit Thermique",
    description: "Une solution complète alliant isolation et finition décorative.",
    features: [
      "Application professionnelle",
      "Résistance aux intempéries",
      "Aspect esthétique soigné"
    ]
  }
];

export default IsolationExterieure;
