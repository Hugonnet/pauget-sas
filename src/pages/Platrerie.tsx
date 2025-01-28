import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Platrerie = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Plâtrerie Professionnelle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Des solutions sur-mesure pour vos travaux de plâtrerie, du traditionnel au contemporain.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slideUp">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Notre Expertise en Plâtrerie
              </h2>
              <p className="text-gray-600 mb-4">
                Depuis plus de 30 ans, Pauget et Fils met son savoir-faire au service de vos projets de plâtrerie. 
                Nous utilisons des techniques éprouvées et des matériaux de qualité pour garantir des résultats durables.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cloisons et doublages</li>
                <li>Plafonds suspendus</li>
                <li>Isolation phonique</li>
                <li>Finitions soignées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Nos Services de Plâtrerie
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Plâtrerie Traditionnelle</h3>
                  <p className="text-gray-600">
                    Techniques ancestrales pour des finitions authentiques et durables.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Plâtrerie Moderne</h3>
                  <p className="text-gray-600">
                    Solutions contemporaines adaptées aux nouvelles constructions.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Rénovation</h3>
                  <p className="text-gray-600">
                    Restauration et réparation de vos surfaces en plâtre.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg animate-fadeIn">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                alt="Travaux de plâtrerie professionnelle"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                  alt="Détail de finition en plâtre"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                  alt="Plafond en plâtre"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Démarrer Votre Projet de Plâtrerie ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute pour réaliser vos projets de plâtrerie.
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

export default Platrerie;