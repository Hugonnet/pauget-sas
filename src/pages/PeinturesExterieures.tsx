import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const PeinturesExterieures = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Peinture Extérieure & Ravalement de Façade à Port | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Experts en peinture extérieure et ravalement de façade à Port. Protection durable, embellissement et valorisation de votre patrimoine. Devis gratuit."
        />
      </Helmet>

      {/* Hero Section avec Design Diagonal */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-peintures-exterieures.webp')",
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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              Peinture Extérieure Professionnelle
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl opacity-90"
            >
              Embellissez et protégez durablement vos façades avec nos services de peinture sur mesure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-accent/90 max-w-3xl mx-auto mb-12 md:text-justify"
          >
            Joël Pauget et ses fils est une entreprise familiale spécialisée dans les travaux de peinture extérieure. Depuis 1997, nous mettons notre expertise au service de vos projets de rénovation et d'embellissement de façades dans l'Ain (01) et la Haute-Savoie (74), notamment autour de Saint-Julien-en-Genevois, Annemasse et Annecy.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Peinture Extérieure</h2>
              <p className="text-white/90">
                Notre équipe de peintres professionnels intervient pour protéger et embellir vos façades, boiseries et autres surfaces extérieures. Nous vous conseillons sur le choix des peintures adaptées à chaque support, en tenant compte des contraintes climatiques locales et de vos préférences esthétiques.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Ravalement de Façade</h2>
              <p className="text-white/90">
                Nous réalisons des travaux de ravalement de façade, incluant le nettoyage, la réparation des fissures et l'application de revêtements protecteurs. Ces interventions permettent de préserver l'intégrité de votre bâtiment tout en améliorant son apparence.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Traitement et Protection des Supports</h2>
              <p className="text-white/90">
                Nous proposons des solutions de traitement et de protection pour vos surfaces extérieures, telles que l'application de produits anti-mousse, hydrofuges ou anti-graffitis, afin de garantir la durabilité et la propreté de vos ouvrages.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-card p-8 rounded-xl shadow-lg mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">Pourquoi Choisir Joël Pauget et ses fils ?</h2>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-2">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Expérience et Savoir-Faire :</span> Avec plus de 20 ans d'expérience, nous maîtrisons les techniques de peinture extérieure et utilisons des matériaux de qualité pour des résultats durables.</p>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Engagement Environnemental :</span> Labellisés RGE, nous sommes engagés dans le respect de l'environnement et veillons au tri et au traitement des déchets de nos chantiers.</p>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Proximité et Réactivité :</span> Entreprise familiale, nous offrons un accompagnement personnalisé et une communication transparente tout au long de vos projets.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <p className="text-lg text-accent/90 max-w-3xl mx-auto mb-8">
              Confiez vos travaux de peinture extérieure à une équipe de professionnels passionnés. Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg transition-colors duration-200"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PeinturesExterieures;
