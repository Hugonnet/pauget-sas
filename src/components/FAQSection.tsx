
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels types de travaux réalisez-vous ?",
    answer: "Nous sommes spécialisés dans les travaux de plâtrerie, peinture intérieure et extérieure, ainsi que l'isolation thermique par l'intérieur et l'extérieur (ITE). Nous intervenons aussi bien en construction neuve qu'en rénovation pour les particuliers et les professionnels.",
  },
  {
    question: "Intervenez-vous uniquement dans l'Ain ?",
    answer: "Nous réalisons nos prestations principalement dans l'Ain (01) et en Haute-Savoie (74), notamment autour de Saint-Julien-en-Genevois, Annemasse et Annecy. N'hésitez pas à nous contacter pour vérifier la faisabilité de votre projet dans votre secteur.",
  },
  {
    question: "Quels sont les avantages de la peinture extérieure pour ma maison ?",
    answer: "Une peinture extérieure de qualité protège votre façade contre les intempéries, les UV, la pollution et l'humidité, tout en améliorant son aspect esthétique. Nous utilisons des produits adaptés aux conditions climatiques locales pour garantir une durabilité optimale.",
  },
  {
    question: "Pourquoi choisir l'isolation thermique par l'extérieur (ITE) ?",
    answer: "L'ITE permet d'améliorer les performances énergétiques de votre habitation en limitant les pertes de chaleur. Elle offre également un gain esthétique en rénovant votre façade et peut donner accès à des aides financières pour la rénovation énergétique.",
  },
  {
    question: "Quelle est la différence entre plâtrerie traditionnelle et placoplâtre ?",
    answer: "La plâtrerie traditionnelle consiste à appliquer du plâtre directement sur les murs pour une finition lisse et durable. Le placoplâtre (Placo®) est une solution plus rapide, utilisée pour la création de cloisons, faux plafonds et doublages, avec d'excellentes performances en isolation phonique et thermique.",
  },
  {
    question: "Proposez-vous des conseils pour choisir les couleurs et les finitions ?",
    answer: "Oui, nous vous accompagnons dans le choix des couleurs, textures et finitions adaptées à votre intérieur et extérieur. Nous prenons en compte votre style, l'ambiance souhaitée et les contraintes techniques pour un rendu harmonieux et durable.",
  },
  {
    question: "Quelle est la durée moyenne d'un chantier ?",
    answer: "La durée dépend de la nature des travaux (plâtrerie, peinture, isolation) et de la surface concernée. Nous établissons un planning précis avant chaque intervention afin de garantir un travail rapide et efficace, tout en respectant les délais convenus.",
  },
  {
    question: "Vos travaux ouvrent-ils droit à des aides financières ?",
    answer: "Oui, certains travaux d'isolation thermique peuvent être éligibles aux aides de l'État (MaPrimeRénov', éco-prêt à taux zéro, aides locales). En tant qu'entreprise RGE (Reconnu Garant de l'Environnement), nous vous accompagnons dans les démarches pour bénéficier de ces aides.",
  },
  {
    question: "Travaillez-vous avec des produits respectueux de l'environnement ?",
    answer: "Nous privilégions des matériaux et peintures écologiques, sans solvants nocifs, garantissant un environnement sain tout en respectant les normes environnementales en vigueur.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer: "Vous pouvez nous contacter par téléphone ou via notre formulaire en ligne pour une demande de devis gratuit. Nous analysons votre projet et vous proposons une estimation détaillée et personnalisée.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-[#F8EBDF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Foire aux questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg overflow-hidden border-none"
              >
                <AccordionTrigger className="p-6 text-white hover:no-underline hover:bg-primary/10">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-white/90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
