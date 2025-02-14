import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
const IsolationExterieure = () => {
  return <div className="min-h-screen">
      <Helmet>
        <title>Expert Isolation Extérieure à Port (01) | ITE Certifiée | Pauget & Fils</title>
        <meta name="description" content="Spécialiste isolation thermique par l'extérieur à Port (01). Solutions ITE performantes, entreprise certifiée RGE. Rénovation énergétique globale, devis gratuit pour vos travaux." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr/isolation/exterieure" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
        <meta name="geo.position" content="46.16690444946289;5.568050861358643" />
        <meta name="ICBM" content="46.16690444946289, 5.568050861358643" />
      </Helmet>

      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/hero-isolation-exterieure.webp')"
      }} />
        
        {/* Overlay diagonal avec dégradé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-0 w-full h-32 bg-background transform -skew-y-3 origin-bottom-right translate-y-16" />
        </div>
        
        {/* Contenu du hero */}
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-montserrat text-3xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6" contentEditable="true" suppressContentEditableWarning={true}>
              Isolation Thermique par l'Extérieur (ITE)
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 md:mb-8" contentEditable="true" suppressContentEditableWarning={true}>
              Améliorez le confort de votre habitat et réduisez vos factures d'énergie grâce à nos solutions d'isolation extérieure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f7efe8]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="bg-card p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">Isolation Thermique</h2>
              <p className="text-white/90">
                L'isolation thermique par l'extérieur (ITE) est une solution efficace pour améliorer le confort de votre habitat et réduire vos dépenses énergétiques. Elle consiste à envelopper votre bâtiment d'un isolant performant, limitant ainsi les déperditions de chaleur en hiver et maintenant la fraîcheur en été.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="bg-card p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">Rénovation Énergétique</h2>
              <p className="text-white/90">
                En optant pour l'isolation extérieure, vous contribuez à la rénovation énergétique de votre logement et valorisez votre patrimoine. Nos solutions sont adaptées à tous types de bâtiments, neufs ou anciens, et vous permettent de bénéficier d'aides financières et de crédits d'impôt.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="bg-card p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">Esthétique et Durabilité</h2>
              <p className="text-white/90">
                L'isolation extérieure ne se limite pas à l'amélioration thermique de votre bâtiment. Elle vous offre également la possibilité de personnaliser l'apparence de votre façade grâce à un large choix de revêtements et de finitions. Nos matériaux sont sélectionnés pour leur durabilité et leur résistance aux intempéries, garantissant ainsi la pérennité de votre investissement.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-lg text-accent/90 md:text-justify">
              <p>Joël Pauget et ses fils est une entreprise familiale spécialisée dans l'isolation thermique par l'extérieur (ITE), mettant son expertise au service des particuliers et des professionnels depuis 1997. Nous intervenons pour améliorer le confort de votre habitat et réduire vos dépenses énergétiques, en vous proposant des solutions performantes et adaptées à vos besoins.

Grâce à notre certification RGE (Reconnu Garant de l'Environnement), vous pouvez bénéficier d'aides financières et de crédits d'impôt pour la réalisation de vos travaux d'isolation extérieure. Nous vous accompagnons dans toutes les étapes de votre projet, de l'étude thermique à la réalisation des travaux, en vous garantissant un résultat de qualité et conforme aux normes en vigueur.

Nous intervenons dans l'Ain (01) et la Haute-Savoie (74), notamment dans les secteurs de Saint-Julien-en-Genevois, Annemasse, Annecy et leurs environs. Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit.</p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="relative h-[480px] rounded-xl overflow-hidden shadow-lg">
              <img src="/lovable-uploads/isolation-exterieure.jpg" alt="Isolation extérieure professionnelle" className="object-cover w-full h-full" />
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }} className="bg-card p-8 rounded-xl shadow-lg mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-white">Pourquoi Choisir Joël Pauget et ses fils ?</h2>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-2">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Expertise et Savoir-Faire :</span> Forts de notre expérience, nous maîtrisons les techniques d'isolation extérieure et vous garantissons un résultat de qualité, durable et esthétique.</p>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Certification RGE :</span> Notre certification RGE vous permet de bénéficier d'aides financières et de crédits d'impôt pour la réalisation de vos travaux d'isolation extérieure.</p>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-6 h-6 flex-shrink-0 mt-1" />
                <p><span className="font-semibold">Accompagnement Personnalisé :</span> Nous vous accompagnons dans toutes les étapes de votre projet, de l'étude thermique à la réalisation des travaux, en vous conseillant sur les meilleures solutions et les matériaux les plus adaptés à vos besoins.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1
        }} className="text-center">
            <p className="text-lg text-accent/90 max-w-10xl mx-auto mb-8">
              Confiez vos travaux d'isolation extérieure à une équipe de professionnels qualifiés et expérimentés. Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Link to="/contact" className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg transition-colors duration-200">
              <span>Demander un devis gratuit</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default IsolationExterieure;
