import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos chiffres clés</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {figures.map((figure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.p
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1,
                }}
              >
                {figure.number}
              </motion.p>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                {figure.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};