
import { ArrowRight, Hammer, Building, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Platrerie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Plâtrerie Peinture Isolation à Port (01) | Pauget & Fils - Artisans depuis 1997</title>
        <meta 
          name="description" 
          content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation à Port (01). Plus de 25 ans d'expertise, certifiée RGE. Devis gratuit pour vos travaux de rénovation et construction." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr/platrerie" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
        <meta name="geo.position" content="46.16690444946289;5.568050861358643" />
        <meta name="ICBM" content="46.16690444946289, 5.568050861358643" />
        <meta name="keywords" content="plâtrerie, peinture, isolation, Port, Ain, rénovation, construction, artisan" />
        <meta property="og:title" content="Plâtrerie Peinture Isolation à Port (01) | Pauget & Fils" />
        <meta property="og:description" content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation. Plus de 25 ans d'expertise, certifiée RGE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.platrerie-peinture-pauget.fr/platrerie" />
      </Helmet>

      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-bg-platrerie.webp')",
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
            <h1 
              className="font-montserrat text-3xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Plâtrerie Traditionnelle et Moderne
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 md:mb-8"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Des solutions sur-mesure pour vos projets de cloisons, plafonds et finitions intérieures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f7efe8]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Plâtrerie Traditionnelle</h2>
              <p className="text-white/90">
                Réalisation de cloisons, enduits et finitions à base de plâtre traditionnel, pour un rendu authentique et chaleureux.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Plâtrerie Moderne</h2>
              <p className="text-white/90">
                Pose de plaques de plâtre, création de faux-plafonds et réalisation deStaff pour des espaces contemporains et fonctionnels.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Isolation Intérieure</h2>
              <p className="text-white/90">
                Intégration de solutions d'isolation thermique et phonique pour un confort optimal et des économies d'énergie.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-accent/90 md:text-justify"
            >
              <p>
                Depuis 1997, Pauget et Fils met son expertise en plâtrerie au service de vos projets de construction et de rénovation. 
                Notre équipe d'artisans qualifiés vous accompagne dans la réalisation de vos espaces intérieurs, en vous proposant des solutions sur-mesure et adaptées à vos besoins.
              </p>
              <p className="mt-6">
                Nous intervenons sur tous types de chantiers, de la maison individuelle à l'immeuble collectif, en passant par les locaux commerciaux et industriels. 
                Notre savoir-faire nous permet de répondre aux exigences les plus spécifiques, tout en respectant les normes en vigueur et les délais convenus.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px] rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/lovable-uploads/platrerie-traditionnelle.webp" 
                alt="Plâtrerie traditionnelle et moderne" 
                className="object-cover w-full h-full" 
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-card p-8 rounded-xl shadow-lg mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">Pourquoi Choisir Pauget et Fils ?</h2>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-2">
                <Hammer className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Expérience et Savoir-Faire :</span> Plus de 20 ans d'expérience en plâtrerie traditionnelle et moderne.</p>
              </li>
              <li className="flex items-start gap-2">
                <Building className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Qualité et Fiabilité :</span> Des matériaux sélectionnés pour leur performance et leur durabilité.</p>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Conseil Personnalisé :</span> Un accompagnement sur-mesure pour vous aider à concrétiser vos projets.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <p className="text-lg text-accent/90 max-w-10xl mx-auto mb-8">
              Confiez vos travaux de plâtrerie à des experts passionnés par leur métier. 
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
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

export default Platrerie;
