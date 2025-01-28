import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IsolationExterieure = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Isolation Extérieure Durable
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Protégez votre habitat des variations thermiques avec nos solutions d'isolation par l'extérieur.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slideUp">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Notre Expertise en Isolation Extérieure
              </h2>
              <p className="text-gray-600 mb-4">
                Pauget et Fils vous propose des solutions d'isolation thermique par l'extérieur (ITE) 
                pour une efficacité énergétique maximale et une valorisation de votre patrimoine.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Protection thermique complète</li>
                <li>Suppression des ponts thermiques</li>
                <li>Rénovation esthétique</li>
                <li>Durabilité garantie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Nos Solutions d'Isolation Extérieure
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Système ITE Complet</h3>
                  <p className="text-gray-600">
                    Solution globale pour une isolation optimale.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Bardage Isolant</h3>
                  <p className="text-gray-600">
                    Protection et esthétique pour vos façades.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Enduit Thermique</h3>
                  <p className="text-gray-600">
                    Finition décorative et isolante.
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
                alt="Isolation extérieure professionnelle"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                  alt="Détail d'isolation extérieure"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                  alt="Finition d'isolation extérieure"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Isoler Votre Maison ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute pour réaliser vos projets d'isolation extérieure.
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

export default IsolationExterieure;