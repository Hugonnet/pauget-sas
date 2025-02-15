
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quels sont vos délais d'intervention ?
            </AccordionTrigger>
            <AccordionContent>
              Nos délais d'intervention varient selon la période et l'ampleur des travaux. Nous nous engageons à vous donner un planning précis lors de notre premier rendez-vous.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Êtes-vous certifiés RGE ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, nous sommes certifiés RGE (Reconnu Garant de l'Environnement), ce qui vous permet de bénéficier d'aides financières pour vos travaux de rénovation énergétique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Proposez-vous des devis gratuits ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, nous réalisons gratuitement les devis après une visite sur site pour évaluer précisément vos besoins et les contraintes du chantier.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Quelle est la garantie sur vos travaux ?
            </AccordionTrigger>
            <AccordionContent>
              Tous nos travaux sont garantis. La durée de garantie varie selon le type de prestation, de 2 ans pour la garantie de parfait achèvement à 10 ans pour la garantie décennale.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
