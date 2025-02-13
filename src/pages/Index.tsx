
import { ArrowRight, PaintBucket, Brush, Home, Shield, Thermometer, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { KeyFiguresSection } from "@/components/KeyFiguresSection";
import { CTASection } from "@/components/CTASection";
import { CompanyPresentation } from "@/components/CompanyPresentation";
import { HeroSlider } from "@/components/HeroSlider";

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
        <title>Plâtrerie Peinture Isolation à Port (01) | Pauget & Fils - Artisans depuis 1997</title>
        <meta 
          name="description" 
          content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation à Port (01). Plus de 25 ans d'expertise, artisans qualifiés, entreprise certifiée RGE. Devis gratuit pour vos travaux de rénovation et construction neuve."
        />
        <meta name="keywords" content="plâtrerie, peinture, isolation, Port, Ain, rénovation, construction, artisan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr" />
        <meta property="og:title" content="Plâtrerie Peinture Isolation à Port (01) | Pauget & Fils" />
        <meta property="og:description" content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation. Plus de 25 ans d'expertise à votre service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.platrerie-peinture-pauget.fr" />
        <meta property="og:image" content="/logo.png" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
        <meta name="geo.position" content="46.16690444946289;5.568050861358643" />
        <meta name="ICBM" content="46.16690444946289, 5.568050861358643" />
      </Helmet>

      {/* Hero Slider Section */}
      <HeroSlider />

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
