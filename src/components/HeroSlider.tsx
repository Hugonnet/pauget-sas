
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Experts en plâtrerie et peinture depuis plus de 30 ans",
    description: "Donnez vie à vos projets avec Pauget et Fils, votre partenaire de confiance pour tous vos travaux de rénovation et d'aménagement.",
    image: "/lovable-uploads/hero-bg-accueil.webp",
    link: "/contact"
  },
  {
    title: "Solutions d'isolation performantes",
    description: "Optimisez le confort et l'efficacité énergétique de votre habitat avec nos solutions d'isolation intérieure et extérieure.",
    image: "/lovable-uploads/hero-bg-isolation-exterieure.webp",
    link: "/isolation"
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-8000"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/90 mb-8 md:text-justify"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  to={slide.link}
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors duration-200"
                >
                  <span>Demander un devis</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSlide === index ? "bg-primary" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
