import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const IsolationInterieure = () => {
  return <div className="min-h-screen">
      <Helmet>
        <title>Isolation Intérieure & Phonique à Port | RGE | Pauget & Fils</title>
        <meta name="description" content="Expert en isolation thermique et phonique intérieure à Port (01). Laine de verre, laine de roche, solutions techniques certifiées RGE. Économies d'énergie garanties, confort optimal." />
        <meta name="keywords" content="isolation intérieure, isolation phonique, RGE, Port, économies énergie, confort thermique" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr/isolation/interieure" />
        <meta property="og:title" content="Isolation Intérieure Certifiée RGE | Pauget & Fils" />
        <meta property="og:description" content="Solutions d'isolation thermique et phonique intérieure sur mesure. Artisans certifiés RGE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.platrerie-peinture-pauget.fr/isolation/interieure" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
      </Helmet>

      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/hero-bg-isolation-interieure.webp')"
      }} />
        
        {/* Overlay diagonal avec dégradé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 w-full h-32 bg-background transform -skew-y-3 origin-bottom-right translate-y-16" />
        </div>
        
        {/* Contenu du hero */}
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-montserrat text-3xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6" contentEditable="true" suppressContentEditableWarning={true}>
              Isolation Intérieure Professionnelle
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 md:mb-8" contentEditable="true" suppressContentEditableWarning={true}>
              Optimisez le confort thermique de votre habitat avec nos solutions d'isolation intérieure sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-32 bg-[#f7efe8]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.2
          }} className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/90 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2 text-white/80">
                      <Star className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-10xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Notre Expertise en Isolation Intérieure</h2>
            <div className="grid md:grid-cols-1 gap-8 items-center">
              <p className="text-lg text-gray-700 mb-12 text-left">
                Depuis plus de trois décennies, Pauget et Fils met son savoir-faire au service de vos projets d'isolation intérieure. 
                Notre entreprise familiale combine expertise traditionnelle et techniques modernes pour des résultats exceptionnels.
              </p>
             
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Diagnostic Personnalisé</h3>
                <p className="text-white/90">
                  Nous réalisons une étude approfondie de votre habitat pour proposer les solutions d'isolation les plus adaptées à vos besoins.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Matériaux Performants</h3>
                <p className="text-white/90">
                  Utilisation exclusive de matériaux certifiés et éco-responsables pour une isolation durable et efficace.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-white">Installation Experte</h3>
                <p className="text-white/90">
                  Nos artisans qualifiés assurent une mise en œuvre irréprochable pour des résultats garantis.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
              <img src="/lovable-uploads/Isolation-interieure.webp" alt="Expertise en isolation intérieure" className="object-cover w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="bg-card rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Prêt à Améliorer Votre Confort Thermique ?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Contactez-nous pour un devis personnalisé et gratuit. Notre équipe d'experts est à votre écoute 
                pour réaliser vos projets d'isolation dans les règles de l'art.
              </p>
              <Link to="/contact" className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg transition-colors duration-200">
                <span>Demander un devis gratuit</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
const services = [{
  title: "Isolation des Murs",
  description: "Solutions complètes pour l'isolation thermique et phonique de vos murs intérieurs.",
  features: ["Doublage isolant", "Traitement des ponts thermiques", "Finitions soignées"]
}, {
  title: "Isolation des Combles",
  description: "Optimisation de l'isolation de vos combles pour une meilleure performance énergétique.",
  features: ["Isolation par soufflage", "Isolation des rampants", "Pose de pare-vapeur"]
}, {
  title: "Solutions Acoustiques",
  description: "Amélioration du confort acoustique de votre habitat.",
  features: ["Isolation phonique", "Correction acoustique", "Membranes acoustiques"]
}];
export default IsolationInterieure;