import { motion } from "framer-motion";

export const CompanyPresentation = () => {
  return (
    <section className="py-8 bg-[#F8EBDF]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto bg-card rounded-2xl p-8 md:p-12 text-white shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8">Notre entreprise</h2>
          
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

            <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <p className="md:text-justify">
                  Notre entreprise est certifiée Qualibat RGE : le label Qualibat RGE (Reconnu Garant de l'Environnement) est une certification délivrée aux entreprises du bâtiment qui répondent à des critères stricts de qualité et de performance énergétique. Il garantit le sérieux et le savoir-faire des professionnels dans la réalisation de travaux de rénovation énergétique, d'isolation et d'amélioration thermique des bâtiments. Pour les clients, faire appel à une entreprise certifiée <strong>Qualibat RGE</strong> permet non seulement d'assurer des prestations conformes aux normes en vigueur, mais aussi de bénéficier d'aides financières comme MaPrimeRénov' ou l'éco-prêt à taux zéro.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="/lovable-uploads/qualibat-rge.webp" 
                  alt="Certification Qualibat RGE" 
                  className="w-48 h-48 object-contain"
                />
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