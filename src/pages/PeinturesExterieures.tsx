import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PeinturesExterieures = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Peinture Extérieure Professionnelle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Protégez et embellissez votre façade avec nos solutions de peinture extérieure durables.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slideUp">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Notre Expertise en Peinture Extérieure
              </h2>
              <p className="text-gray-600 mb-4">
                Pauget et Fils vous propose des solutions de peinture extérieure adaptées à tous types de surfaces. 
                Nos produits de haute qualité garantissent une protection optimale contre les intempéries.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Traitement des façades</li>
                <li>Protection contre l'humidité</li>
                <li>Résistance aux UV</li>
                <li>Finitions durables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Nos Services de Peinture Extérieure
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Ravalement de Façade</h3>
                  <p className="text-gray-600">
                    Rénovation complète de vos façades pour une nouvelle jeunesse.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Imperméabilisation</h3>
                  <p className="text-gray-600">
                    Protection efficace contre les infiltrations d'eau.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Décoration</h3>
                  <p className="text-gray-600">
                    Mise en valeur esthétique de votre extérieur.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg animate-fadeIn">
              <img
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840"
                alt="Façade peinte professionnellement"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                  alt="Détail de peinture extérieure"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                  alt="Finition de façade"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Rénover Votre Extérieur ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute pour réaliser vos projets de peinture extérieure.
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
    </div>
  );
};

export default PeinturesExterieures;