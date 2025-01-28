import { ArrowRight, PaintBucket, Brush, Home, Shield, Thermometer, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { KeyFiguresSection } from "@/components/KeyFiguresSection";

const services = [
  {
    title: "Plâtrerie",
    description: "Des solutions sur-mesure pour vos travaux de plâtrerie, du traditionnel au contemporain.",
    icon: Home,
    color: "#8B5CF6",
    link: "/platrerie",
  },
  {
    title: "Peintures intérieures",
    description: "Une expertise reconnue en peinture intérieure pour sublimer vos espaces de vie.",
    icon: PaintBucket,
    color: "#F97316",
    link: "/peintures/interieures",
  },
  {
    title: "Peintures extérieures",
    description: "Des solutions durables pour protéger et embellir vos façades.",
    icon: Brush,
    color: "#0EA5E9",
    link: "/peintures/exterieures",
  },
  {
    title: "Isolation intérieure",
    description: "Optimisez votre confort thermique avec nos solutions d'isolation intérieure.",
    icon: Shield,
    color: "#D946EF",
    link: "/isolation/interieure",
  },
  {
    title: "Isolation extérieure",
    description: "Protégez votre habitat avec nos solutions d'isolation par l'extérieur.",
    icon: Thermometer,
    color: "#7E69AB",
    link: "/isolation/exterieure",
  },
  {
    title: "Etanchéité à l'air",
    description: "Garantissez la performance énergétique de votre habitat avec nos solutions d'étanchéité.",
    icon: Wind,
    color: "#9b87f5",
    link: "/etancheite",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {Je vais mettre à jour la page d'accueil pour afficher les 6 services avec des icônes colorées et un design plus dynamique.

<lov-code>
Let's update the Index.tsx file to include all 6 services with custom icons and styling:

<lov-write file_path="src/pages/Index.tsx">
import { ArrowRight, PaintBucket, Brush, Home, Shield, Thermometer, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { KeyFiguresSection } from "@/components/KeyFiguresSection";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/hero-bg.png')",
          }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Experts en plâtrerie et peinture depuis plus de 30 ans
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slideUp">
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

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: "#f9ebde" }}>
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
                  <p className="text-gray-600 mb-4">{service.description}</p>
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
      <KeyFiguresSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};

const services = [
  {
    title: "Plâtrerie",
    description:
      "Des solutions sur-mesure pour vos travaux de plâtrerie, du traditionnel au contemporain.",
    icon: Home,
    iconColor: "#8B5CF6",
    link: "/platrerie",
  },
  {
    title: "Peintures intérieures",
    description:
      "Une expertise reconnue en peinture intérieure pour sublimer vos espaces de vie.",
    icon: PaintBucket,
    iconColor: "#F97316",
    link: "/peintures/interieures",
  },
  {
    title: "Peintures extérieures",
    description:
      "Des solutions durables et esthétiques pour la protection et l'embellissement de vos façades.",
    icon: Brush,
    iconColor: "#0EA5E9",
    link: "/peintures/exterieures",
  },
  {
    title: "Isolation intérieure",
    description:
      "Optimisez le confort thermique de votre intérieur avec nos solutions d'isolation performantes.",
    icon: Shield,
    iconColor: "#D946EF",
    link: "/isolation/interieure",
  },
  {
    title: "Isolation extérieure",
    description:
      "Améliorez l'efficacité énergétique de votre bâtiment avec nos solutions d'isolation par l'extérieur.",
    icon: Thermometer,
    iconColor: "#7E69AB",
    link: "/isolation/exterieure",
  },
  {
    title: "Etanchéité à l'air",
    description:
      "Garantissez la performance énergétique de votre habitat avec nos solutions d'étanchéité à l'air.",
    icon: Wind,
    iconColor: "#9b87f5",
    link: "/etancheite",
  },
];

export default Index;