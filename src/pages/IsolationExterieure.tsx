
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const IsolationExterieure = () => {
  return (
    <div className="min-h-screen bg-[#f7efe8]">
      <Helmet>
        <title>Isolation Thermique par l'Extérieur (ITE) à Port | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Spécialiste de l'isolation thermique par l'extérieur à Port. Économies d'énergie garanties, protection durable de vos façades. Entreprise certifiée, devis gratuit."
        />
      </Helmet>

      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-isolation-exterieure.webp')"
          }}
        />
        
        {/* Overlay diagonal avec dégradé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 w-full h-32 bg-[#f7efe8] transform -skew-y-3 origin-bottom-right translate-y-16" />
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
              Optimisez l'efficacité énergétique de votre maison avec notre expertise en isolation thermique par l'extérieur. Solutions durables et économies d'énergie garanties.
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
      <section className="py-20 bg-gradient-to-b from-[#f7efe8] to-card/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-10xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Notre Expertise en Isolation Extérieure</h2>
            <p className="text-lg text-gray-700 mb-12">
              L'isolation thermique par l'extérieur est une solution efficace pour améliorer la performance énergétique de votre habitat. 
              Notre équipe d'experts utilise des techniques et matériaux de pointe pour garantir une 
              isolation optimale et une réduction significative de votre consommation énergétique.
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
                <h3 className="text-xl font-semibold mb-3 text-white">Diagnostic Thermique</h3>
                <p className="text-white/90">
                  Nous réalisons une analyse complète de votre habitation pour identifier les points de déperdition thermique et vous proposer les meilleures solutions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Solutions Personnalisées</h3>
                <p className="text-white/90">
                  Chaque projet bénéficie d'une approche sur mesure pour garantir une isolation optimale adaptée à votre habitat.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Qualité Certifiée</h3>
                <p className="text-white/90">
                  Nos interventions respectent les normes en vigueur et sont réalisées avec des matériaux de haute qualité.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/lovable-uploads/isolation-exterieure.jpg"
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
                Optimisez la Performance Énergétique de Votre Habitat
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Contactez-nous pour un diagnostic personnalisé de votre isolation extérieure. 
                Nos experts sont à votre disposition pour vous conseiller et vous proposer les meilleures solutions.
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
    title: "Diagnostic et Conseil",
    description: "Analyse approfondie de votre habitation et recommandations personnalisées.",
    features: [
      "Étude thermique complète",
      "Recommandations adaptées",
      "Estimation des économies"
    ]
  },
  {
    title: "Installation ITE",
    description: "Mise en œuvre professionnelle de votre isolation extérieure.",
    features: [
      "Matériaux haute performance",
      "Pose par des experts",
      "Finitions soignées"
    ]
  },
  {
    title: "Suivi et Garantie",
    description: "Accompagnement complet et garantie de nos prestations.",
    features: [
      "Garantie décennale",
      "Service après-vente",
      "Suivi personnalisé"
    ]
  }
];

export default IsolationExterieure;
