
import { motion } from "framer-motion";

export const CompanyPresentation = () => {
  return (
    <section className="py-32 bg-[#F8EBDF]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto bg-card rounded-2xl p-8 md:p-12 text-white shadow-lg"
        >
          <div className="space-y-6">
            <p className="md:text-justify">
              Joël Pauget et ses fils est une entreprise familiale spécialisée dans les travaux de peinture, plâtrerie traditionnelle et en placoplâtre, ainsi que l'isolation intérieure et l'isolation thermique par l'extérieur (ITE). Depuis 1997, nous mettons notre expertise au service de vos projets de construction et de rénovation dans l'Ain (01) et la Haute-Savoie (74), notamment autour de Saint-Julien-en-Genevois, Annemasse et Annecy.
            </p>

            <p className="md:text-justify">
              Nous réalisons des travaux de plâtrerie traditionnelle et de pose de placoplâtre, assurant des finitions impeccables pour vos murs et plafonds. Que ce soit pour des cloisons, des doublages ou des plafonds suspendus, nous utilisons des matériaux de qualité pour garantir durabilité et esthétisme.
            </p>

            <p className="md:text-justify">
              Notre équipe de peintres professionnels intervient pour embellir vos espaces intérieurs et extérieurs. Nous vous conseillons sur le choix des couleurs et des types de peinture adaptés à vos surfaces, tout en tenant compte de vos préférences esthétiques et des contraintes techniques.
            </p>

            <p className="md:text-justify">
              Améliorez le confort thermique de votre habitation grâce à nos solutions d'isolation intérieure et d'isolation thermique par l'extérieur (ITE). Nous mettons en œuvre des techniques performantes pour réduire vos consommations énergétiques et améliorer votre confort.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="md:text-justify mb-6">
                  Notre entreprise est certifiée Qualibat RGE, un gage de qualité et de professionnalisme reconnu dans le secteur du bâtiment. En tant qu'artisans plâtriers expérimentés, nous maîtrisons aussi bien les techniques traditionnelles que les solutions modernes comme le placoplâtre. Notre expertise nous permet de vous proposer des solutions adaptées à vos besoins, qu'il s'agisse de travaux de rénovation ou de construction neuve. Nos interventions garantissent une excellente isolation thermique et acoustique, une protection efficace contre l'incendie et une régulation optimale de l'humidité. Notre savoir-faire s'étend de la réalisation de cloisons distributives à l'installation de plafonds suspendus, en passant par la pose de portes intérieures. Chaque projet bénéficie d'une finition soignée, préparant parfaitement les surfaces pour les travaux de peinture ultérieurs.
                </p>
                <div className="space-y-4 md:flex md:items-center md:space-x-8 md:space-y-0">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold">Engagement Environnemental</h3>
                    <p className="md:text-justify">
                      Labellisés RGE, nous sommes engagés dans le respect de l'environnement et veillons au tri et au traitement des déchets de nos chantiers.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/qualibat-rge.webp" 
                      alt="Certification Qualibat RGE" 
                      className="w-32 h-32 object-contain" // Réduction supplémentaire de 20% (précédemment w-40 h-40)
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Expérience et Savoir-Faire</h3>
                <p className="text-white/90 md:text-justify">
                  Avec plus de 20 ans d'expérience, nous allions techniques traditionnelles et matériaux innovants pour des prestations de qualité.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Proximité et Réactivité</h3>
                <p className="text-white/90 md:text-justify">
                  Entreprise familiale, nous offrons un accompagnement personnalisé et une communication transparente tout au long de vos projets.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
