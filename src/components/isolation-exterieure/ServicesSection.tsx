
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const services = [
  {
    title: "Diagnostic Complet",
    description: "Analyse approfondie de votre bâtiment pour une solution d'isolation adaptée à vos besoins spécifiques.",
    features: [
      "Évaluation thermique",
      "Analyse des ponts thermiques",
      "Rapport détaillé"
    ]
  },
  {
    title: "Matériaux Performants",
    description: "Utilisation de systèmes d'isolation certifiés et éco-responsables pour une efficacité maximale.",
    features: [
      "Isolation par l'extérieur",
      "Matériaux durables",
      "Conformité aux normes"
    ]
  },
  {
    title: "Installation Experte",
    description: "Mise en œuvre par des professionnels qualifiés pour une finition impeccable et durable.",
    features: [
      "Équipe certifiée",
      "Suivi de chantier",
      "Satisfaction garantie"
    ]
  }
];

export const ServicesSection = () => {
  return (
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
  );
};
