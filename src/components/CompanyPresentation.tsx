import { motion } from "framer-motion";

export const CompanyPresentation = () => {
  return (
    <section className="py-20 bg-[#F8EBDF]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[1280px] mx-auto bg-card rounded-2xl p-8 md:p-12 text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8">Notre entreprise</h2>
          
          <div className="space-y-6">
            <p>
              Joël Pauget et ses fils est une entreprise familiale spécialisée dans les travaux de peinture, plâtrerie traditionnelle et en placoplâtre, ainsi que l'isolation intérieure et l'isolation thermique par l'extérieur (ITE). Depuis 1997, nous mettons notre expertise au service de vos projets de construction et de rénovation dans l'Ain (01) et la Haute-Savoie (74), notamment autour de Saint-Julien-en-Genevois, Annemasse et Annecy.
            </p>

            <p>
              Nous réalisons des travaux de plâtrerie traditionnelle et de pose de placoplâtre, assurant des finitions impeccables pour vos murs et plafonds. Que ce soit pour des cloisons, des doublages ou des plafonds suspendus, nous utilisons des matériaux de qualité pour garantir durabilité et esthétisme.
            </p>

            <p>
              Notre équipe de peintres professionnels intervient pour embellir vos espaces intérieurs et extérieurs. Nous vous conseillons sur le choix des couleurs et des types de peinture adaptés à vos surfaces, tout en tenant compte de vos préférences esthétiques et des contraintes techniques.
            </p>

            <p>
              Améliorez le confort thermique de votre habitation grâce à nos solutions d'isolation intérieure et d'isolation thermique par l'extérieur (ITE). Nous mettons en œuvre des techniques performantes pour réduire vos consommations énergétiques et améliorer votre confort.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Expérience et Savoir-Faire</h3>
                <p className="text-white/90">
                  Avec plus de 20 ans d'expérience, nous allions techniques traditionnelles et matériaux innovants pour des prestations de qualité.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Engagement Environnemental</h3>
                <p className="text-white/90">
                  Labellisés RGE, nous sommes engagés dans la rénovation énergétique et veillons au tri et au traitement des déchets de nos chantiers.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Proximité et Réactivité</h3>
                <p className="text-white/90">
                  Entreprise familiale, nous offrons un accompagnement personnalisé et une communication transparente tout au long de vos projets.
                </p>
              </div>
            </div>

            <p className="mt-8 font-medium">
              Confiez vos travaux de plâtrerie, peinture et isolation à une équipe de professionnels passionnés. Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};