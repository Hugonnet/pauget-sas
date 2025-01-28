import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IsolationInterieure = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Isolation Intérieure Performante
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Optimisez le confort thermique de votre habitat avec nos solutions d'isolation intérieure.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slideUp">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Notre Expertise en Isolation Intérieure
              </h2>
              <p className="text-gray-600 mb-4">
                Pauget et Fils vous accompagne dans vos projets d'isolation intérieure pour améliorer 
                la performance énergétique de votre habitat tout en réduisant vos factures.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Isolation des murs</li>
                <li>Isolation des combles</li>
                <li>Traitement des ponts thermiques</li>
                <li>Solutions acoustiques</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Nos Solutions d'Isolation
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Isolation Thermique</h3>
                  <p className="text-gray-600">
                    Matériaux performants pour une isolation optimale.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Isolation Phonique</h3>
                  <p className="text-gray-600">
                    Protection contre les nuisances sonores.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Rénovation Énergétique</h3>
                  <p className="text-gray-600">
                    Amélioration de la performance énergétique.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg animate-fadeIn">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Isolation intérieure professionnelle"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                  alt="Détail d'isolation"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                  alt="Finition d'isolation"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Améliorer Votre Confort ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute pour réaliser vos projets d'isolation intérieure.
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

export default IsolationInterieure;