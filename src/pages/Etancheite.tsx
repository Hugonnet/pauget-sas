import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Etancheite = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/etancheite-a-l-air.png')",
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
              Étanchéité à l'Air
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl opacity-90"
            >
              Optimisez la performance énergétique de votre habitat avec nos solutions d'étanchéité à l'air professionnelles.
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
            <h2 className="text-3xl font-bold mb-8">Notre Expertise en Étanchéité à l'Air</h2>
            <p className="text-lg text-gray-700 mb-12">
              L'étanchéité à l'air est un élément crucial pour l'efficacité énergétique de votre habitat. 
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
                <h3 className="text-xl font-semibold mb-3 text-white">Test d'Infiltrométrie</h3>
                <p className="text-white/90">
                  Nous réalisons des tests précis pour identifier les points de fuite d'air et mesurer 
                  la performance énergétique de votre bâtiment.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Solutions Personnalisées</h3>
                <p className="text-white/90">
                  Chaque projet bénéficie d'une approche sur mesure pour garantir une étanchéité 
                  optimale adaptée à votre habitat.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Conformité RT2012</h3>
                <p className="text-white/90">
                  Nos interventions respectent les normes RT2012 et les dernières réglementations 
                  thermiques en vigueur.
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
                src="/lovable-uploads/74a83115-7afa-4489-bc0d-6ff5037638f0.png"
                alt="Expertise en étanchéité à l'air"
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
                Contactez-nous pour un diagnostic personnalisé de l'étanchéité à l'air de votre habitat. 
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
    title: "Test d'Étanchéité",
    description: "Mesure précise des fuites d'air pour identifier les points d'amélioration.",
    features: [
      "Test de la porte soufflante",
      "Mesure du débit de fuite",
      "Rapport détaillé"
    ]
  },
  {
    title: "Traitement des Fuites",
    description: "Solutions efficaces pour éliminer les pertes d'énergie.",
    features: [
      "Colmatage des fuites",
      "Pose de membranes",
      "Joints d'étanchéité"
    ]
  },
  {
    title: "Certification RT2012",
    description: "Validation de la conformité aux normes en vigueur.",
    features: [
      "Test final",
      "Rapport de conformité",
      "Certification officielle"
    ]
  }
];

export default Etancheite;
