
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const figures = [
  {
    number: 30,
    suffix: "+",
    label: "Années d'expérience",
  },
  {
    number: 850,
    suffix: "+",
    label: "Projets réalisés",
  },
  {
    number: 100,
    suffix: "%",
    label: "Clients satisfaits",
  },
  {
    number: 15,
    label: "Ouvriers qualifiés",
  },
];

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

export const KeyFiguresSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="container mx-auto bg-[#F1F1F1] rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-center mb-12">Chiffres clés</h2>
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
              <CountUp end={figure.number} suffix={figure.suffix || ""} />
            </motion.p>
            <motion.p
              className="text-gray-600 text-center"
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
  );
};

