import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const IsolationInterieure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Isolation Intérieure à Port (01) | Pauget & Fils - Certification RGE</title>
        <meta 
          name="description" 
          content="Experts en isolation thermique intérieure à Port. Solutions performantes pour murs, combles et plafonds. Certification RGE, éligible aux aides. Devis gratuit."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="isolation intérieure, isolation thermique, isolation phonique, Port, Ain, RGE" />
        <meta property="og:title" content="Isolation Intérieure - Solutions Thermiques | Pauget & Fils" />
        <meta property="og:description" content="Optimisez votre confort et réduisez vos factures avec nos solutions d'isolation intérieure certifiées RGE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.platrerie-peinture-pauget.fr/isolation/interieure" />
        <meta property="og:image" content="/lovable-uploads/Isolation-interieure.webp" />
        <meta property="og:image:alt" content="Travaux d'isolation intérieure professionnelle" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
        <meta name="geo.position" content="46.16690444946289;5.568050861358643" />
        <meta name="ICBM" content="46.16690444946289, 5.568050861358643" />
        <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr/isolation/interieure" />
      </Helmet>

      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/Isolation-interieure.webp')",
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
              Isolation Intérieure Performante
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 md:mb-8"
              contentEditable="true"
              suppressContentEditableWarning={true}
            >
              Améliorez votre confort thermique et réduisez vos dépenses énergétiques grâce à nos solutions d'isolation intérieure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f7efe8]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-accent/90 md:text-justify"
            >
              <p>
                L'isolation intérieure est essentielle pour garantir le confort thermique de votre habitation et réduire vos factures d'énergie. 
                Chez Pauget et Fils, nous vous proposons des solutions d'isolation adaptées à vos besoins et à votre budget.
              </p>
              <p className="mt-6">
                Nous intervenons sur tous types de surfaces : murs, combles, plafonds... 
                Nos artisans qualifiés vous conseillent et vous accompagnent dans le choix des matériaux les plus performants et les plus adaptés à votre projet.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px] rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/lovable-uploads/isolation-mur-interieur.webp" 
                alt="Isolation intérieure performante" 
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
            <h2 className="text-2xl font-semibold mb-6 text-white">Les Avantages de l'Isolation Intérieure</h2>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Confort Thermique :</span> Une température agréable en toutes saisons, grâce à une isolation performante.</p>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Économies d'Énergie :</span> Une réduction significative de vos dépenses de chauffage et de climatisation.</p>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Valorisation de votre Bien :</span> Une amélioration de la performance énergétique de votre logement, un atout pour la revente.</p>
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
              Confiez l'isolation intérieure de votre habitation à des experts qualifiés et certifiés RGE. 
              Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé.
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

export default IsolationInterieure;
