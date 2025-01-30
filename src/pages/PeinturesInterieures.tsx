import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PeinturesInterieures = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with diagonal */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent" />
        <div className="absolute inset-0 clip-diagonal bg-primary/90" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Peinture Intérieure Professionnelle
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transformez votre intérieur avec notre expertise en peinture. Des finitions impeccables pour un résultat qui dure.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content with increased spacing */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Notre Savoir-Faire en Peinture Intérieure
              </h2>
              <p className="text-gray-600 mb-4">
                Depuis plus de 30 ans, Pauget et Fils met son expertise au service de vos projets de peinture intérieure. 
                Nous utilisons des techniques éprouvées et des produits de haute qualité pour garantir des résultats durables.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Préparation minutieuse des surfaces</li>
                <li>Application professionnelle</li>
                <li>Finitions soignées</li>
                <li>Respect des délais</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Nos Services de Peinture Intérieure
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-card hover:bg-card-hover rounded-lg transition-colors duration-300">
                  <h3 className="font-medium mb-2 text-white">Peinture Décorative</h3>
                  <p className="text-white/90">
                    Donnez du caractère à vos pièces avec nos techniques décoratives personnalisées.
                  </p>
                </div>
                <div className="p-6 bg-card hover:bg-card-hover rounded-lg transition-colors duration-300">
                  <h3 className="font-medium mb-2 text-white">Peinture Traditionnelle</h3>
                  <p className="text-white/90">
                    Des finitions classiques et élégantes pour tous vos espaces de vie.
                  </p>
                </div>
                <div className="p-6 bg-card hover:bg-card-hover rounded-lg transition-colors duration-300">
                  <h3 className="font-medium mb-2 text-white">Rénovation</h3>
                  <p className="text-white/90">
                    Rafraîchissez vos intérieurs avec nos solutions de rénovation complètes.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14"
                alt="Intérieur peint avec finition professionnelle"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-48 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                  alt="Détail de peinture intérieure"
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative h-48 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f"
                  alt="Finition de peinture murale"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Transformer Votre Intérieur ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute pour réaliser vos projets de peinture intérieure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors duration-200"
          >
            <span>Demander un devis</span>
            <ArrowRight size={20} />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default PeinturesInterieures;