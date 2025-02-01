import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/CTASection";

const services = [
  {
    title: "Plâtrerie traditionnelle",
    description: "Techniques ancestrales pour des finitions authentiques",
    image: "/lovable-uploads/platrerie-traditionnelle.jpg",
  },
  {
    title: "Cloisons sèches",
    description: "Solutions modernes pour l'aménagement intérieur",
    image: "/lovable-uploads/cloisons-seches.jpg",
  },
  {
    title: "Faux plafonds",
    description: "Création d'espaces fonctionnels et esthétiques",
    image: "/lovable-uploads/faux-plafonds.jpg",
  },
];

const Platrerie = () => {
  return (
    <div className="min-h-screen bg-[#FDE1D3]">
      <Helmet>
        <title>Plâtrerie | Travaux de plâtrerie | Joël Pauget et ses fils</title>
        <meta 
          name="description" 
          content="Experts en travaux de plâtrerie traditionnelle et contemporaine. Rénovation, aménagement et finition de qualité pour vos espaces intérieurs." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Services de Plâtrerie</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Découvrez notre expertise en plâtrerie, alliant techniques traditionnelles
          et solutions modernes pour donner vie à vos projets d'aménagement intérieur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f1f1f1] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors duration-200"
          >
            <span>Demander un devis</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <CTASection />
      </div>
    </div>
  );
};

export default Platrerie;