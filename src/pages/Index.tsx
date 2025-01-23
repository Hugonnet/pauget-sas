import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-image.jpg')",
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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
                <div className="p-6">
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

      {/* Contact CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir
            un devis personnalisé.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md transition-colors duration-200"
          >
            <span>Nous contacter</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Plâtrerie",
    description:
      "Des solutions sur-mesure pour vos travaux de plâtrerie, du traditionnel au contemporain.",
    image: "/services/platrerie.jpg",
    link: "/platrerie",
  },
  {
    title: "Peinture",
    description:
      "Une expertise reconnue en peinture intérieure et extérieure pour sublimer vos espaces.",
    image: "/services/peinture.jpg",
    link: "/peintures",
  },
  {
    title: "Isolation",
    description:
      "Des solutions d'isolation performantes pour un confort optimal et des économies d'énergie.",
    image: "/services/isolation.jpg",
    link: "/isolation",
  },
];

export default Index;