import { ArrowRight, PaintBucket, Brush, Home, Shield, Thermometer, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { KeyFiguresSection } from "@/components/KeyFiguresSection";
import { CTASection } from "@/components/CTASection";
import { CompanyPresentation } from "@/components/CompanyPresentation";

const services = [
  {
    title: "Création de Cloisons et Doublages",
    description: "Nous réalisons la pose de cloisons sèches et de doublages en plaques de plâtre, permettant de structurer vos espaces selon vos besoins. Ces installations offrent une excellente isolation thermique et acoustique, contribuant au confort de votre habitat.",
    icon: Home,
    iconColor: "#C4A484",
    link: "/platrerie",
  },
  {
    title: "Faux Plafonds et Plafonds Suspendus",
    description: "Notre expertise inclut la conception et la mise en place de faux plafonds et de plafonds suspendus, idéaux pour dissimuler les installations techniques, améliorer l'acoustique et apporter une touche esthétique à vos pièces.",
    icon: PaintBucket,
    iconColor: "#C4A484",
    link: "/peintures/interieures",
  },
  {
    title: "Enduits et Finitions",
    description: "Nous appliquons des enduits de lissage et de finition pour obtenir des surfaces parfaitement lisses et prêtes à peindre ou à tapisser. Nos techniques garantissent des murs et plafonds aux finitions impeccables, reflétant notre engagement envers la qualité.",
    icon: Brush,
    iconColor: "#C4A484",
    link: "/peintures/exterieures",
  },
  {
    title: "Rénovation et Réparation",
    description: "Que ce soit pour la rénovation de bâtiments anciens ou la réparation de surfaces endommagées, nous intervenons avec soin pour restaurer l'intégrité et l'esthétique de vos intérieurs, tout en respectant le caractère original des lieux.",
    icon: Shield,
    iconColor: "#C4A484",
    link: "/isolation/interieure",
  }
];

const Index = () => {
  return (
    <div className="flex flex-col space-y-0">
      <Helmet>
        <title>Plâtrerie et Aménagement Intérieur - Joël Pauget et ses fils</title>
        <meta 
          name="description" 
          content="Joël Pauget et ses fils, experts en plâtrerie, proposent des services de création de cloisons, faux plafonds, enduits et rénovations pour des intérieurs esthétiques et fonctionnels." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-bg-accueil.webp')",
          }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Experts en plâtrerie depuis plus de 30 ans
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slideUp md:text-justify">
              Joël Pauget et ses fils est une entreprise familiale spécialisée dans les travaux de plâtrerie, offrant des services de qualité pour vos projets de construction et de rénovation. Notre équipe de professionnels expérimentés est dédiée à fournir des solutions sur mesure, alliant savoir-faire traditionnel et techniques modernes, pour créer des espaces intérieurs esthétiques et fonctionnels.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors duration-200"
            >
              <span>Demander un devis</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Presentation Section */}
      <CompanyPresentation />

      {/* Services Section */}
      <section className="py-8 bg-[#F8EBDF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services en Plâtrerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-[#f1f1f1] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                style={{ borderTop: `4px solid ${service.iconColor}` }}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <service.icon
                      size={32}
                      color={service.iconColor}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 md:text-justify">{service.description}</p>
                  <div className="flex items-center text-primary group-hover:text-primary-hover transition-colors duration-200">
                    <span>En savoir plus</span>
                    <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-8 bg-[#F8EBDF]">
        <div className="container mx-auto px-4">
          <KeyFiguresSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F8EBDF]">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-card rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Concrétisez vos projets avec nous</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Faites confiance à Joël Pauget et ses fils pour tous vos travaux de plâtrerie. Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors duration-200"
            >
              <span>Nous contacter</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;