import { ArrowRight, PaintBucket, Brush, Home, Shield, Thermometer, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { KeyFiguresSection } from "@/components/KeyFiguresSection";
import { CTASection } from "@/components/CTASection";
import { CompanyPresentation } from "@/components/CompanyPresentation";

const services = [
  {
    title: "Plâtrerie",
    description: "Des solutions sur-mesure pour vos travaux de plâtrerie, du traditionnel au contemporain.",
    icon: Home,
    iconColor: "#C4A484",
    link: "/platrerie",
  },
  {
    title: "Peintures intérieures",
    description: "Une expertise reconnue en peinture intérieure pour sublimer vos espaces de vie.",
    icon: PaintBucket,
    iconColor: "#C4A484",
    link: "/peintures/interieures",
  },
  {
    title: "Peintures extérieures",
    description: "Des solutions durables pour protéger et embellir vos façades.",
    icon: Brush,
    iconColor: "#C4A484",
    link: "/peintures/exterieures",
  },
  {
    title: "Isolation intérieure",
    description: "Optimisez votre confort thermique avec nos solutions d'isolation intérieure.",
    icon: Shield,
    iconColor: "#C4A484",
    link: "/isolation/interieure",
  },
  {
    title: "Isolation extérieure",
    description: "Protégez votre habitat avec nos solutions d'isolation par l'extérieur.",
    icon: Thermometer,
    iconColor: "#C4A484",
    link: "/isolation/exterieure",
  },
  {
    title: "Etanchéité à l'air",
    description: "Garantissez la performance énergétique de votre habitat avec nos solutions d'étanchéité.",
    icon: Wind,
    iconColor: "#C4A484",
    link: "/etancheite",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col space-y-0">
      <Helmet>
        <title>Entreprise de Plâtrerie, Peinture et Isolation à Port - Joël Pauget et ses fils</title>
        <meta name="description" content="Joël Pauget et ses fils, experts en plâtrerie, peinture et isolation à Port, Ain. Depuis 1997, nous réalisons vos travaux de construction et rénovation avec savoir-faire et engagement environnemental." />
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
              Experts en plâtrerie et peinture depuis plus de 30 ans
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slideUp md:text-justify">
              Donnez vie à vos projets avec Pauget et Fils, votre partenaire de confiance
              pour tous vos travaux de rénovation et d'aménagement.
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
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-[#F8EBDF]">
        <div className="container mx-auto px-4">
          <KeyFiguresSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F8EBDF]">
        <CTASection />
      </section>
    </div>
  );
};

export default Index;
