import { ArrowRight, Shield, Brush, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const PeinturesExterieures = () => {
  const services = [
    {
      icon: Shield,
      title: "Protection Durable",
      description: "Nos peintures extérieures offrent une protection optimale contre les intempéries, les UV et l'humidité, garantissant la longévité de vos façades.",
    },
    {
      icon: Brush,
      title: "Expertise Technique",
      description: "Notre équipe maîtrise les techniques de préparation et d'application pour assurer une finition impeccable et durable sur tous types de supports.",
    },
    {
      icon: Sun,
      title: "Résistance UV",
      description: "Nos solutions de peinture sont spécialement formulées pour résister aux rayons UV, préservant l'éclat des couleurs année après année.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section avec clip diagonal */}
      <section className="relative h-[60vh] clip-diagonal bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
                Peinture Extérieure Professionnelle
              </h1>
              <p className="text-xl text-white/90 mb-8 animate-slideUp">
                Protégez et embellissez durablement vos façades avec nos solutions
                de peinture extérieure haute performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Notre Expertise en Peinture Extérieure
            </h2>
            <p className="text-lg text-gray-600">
              Pauget et Fils vous propose des solutions complètes de peinture
              extérieure, adaptées à tous types de surfaces et conçues pour
              résister aux conditions climatiques les plus exigeantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 animate-float"
              >
                <div className="mb-4">
                  <service.icon
                    size={32}
                    className="text-primary"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Section Prestations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nos Prestations</h2>
              <div className="space-y-4">
                <div className="p-4 bg-card hover:bg-card-hover rounded-lg transition-colors duration-200">
                  <h3 className="font-medium mb-2">Ravalement de Façade</h3>
                  <p className="text-gray-600">
                    Un traitement complet de vos façades, incluant le nettoyage,
                    la réparation des surfaces et l'application de peintures
                    protectrices.
                  </p>
                </div>
                <div className="p-4 bg-card hover:bg-card-hover rounded-lg transition-colors duration-200">
                  <h3 className="font-medium mb-2">Imperméabilisation</h3>
                  <p className="text-gray-600">
                    Des solutions d'étanchéité performantes pour protéger vos murs
                    contre les infiltrations d'eau et l'humidité.
                  </p>
                </div>
                <div className="p-4 bg-card hover:bg-card-hover rounded-lg transition-colors duration-200">
                  <h3 className="font-medium mb-2">Finitions Décoratives</h3>
                  <p className="text-gray-600">
                    Une large gamme de finitions et de teintes pour personnaliser
                    l'aspect de vos façades tout en assurant leur protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
                alt="Application de peinture extérieure"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* CTA Section */}
          <section className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Prêt à Rénover Votre Extérieur ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et personnalisé. Notre équipe
              d'experts est à votre écoute pour réaliser vos projets de peinture
              extérieure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors duration-200"
            >
              <span>Demander un devis</span>
              <ArrowRight size={20} />
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PeinturesExterieures;