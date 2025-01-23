import { motion } from "framer-motion";

const figures = [
  {
    number: "30+",
    label: "Années d'expérience",
  },
  {
    number: "1000+",
    label: "Projets réalisés",
  },
  {
    number: "100%",
    label: "Clients satisfaits",
  },
  {
    number: "15",
    label: "Artisans qualifiés",
  },
];

export const KeyFiguresSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos chiffres clés</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {figures.map((figure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-2">{figure.number}</p>
              <p className="text-gray-600">{figure.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};