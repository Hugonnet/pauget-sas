import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Etancheite = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Étanchéité à l'Air Professionnelle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Optimisez la performance énergétique de votre habitat avec nos solutions d'étanchéité à l'air.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slideUp">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Notre Expertise en Étanchéité
              </h2>
              <p className="text-gray-600 mb-4">
                Pauget et Fils vous accompagne dans l'optimisation de l'étanchéité à l'air de votre habitat 
                pour une meilleure efficacité énergétique et un confort optimal.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Test d'infiltrométrie</li>
                <li>Traitement des fuites d'air</li>
                <li>Solutions sur mesure</li>
                <li>Conformité RT2012</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Nos Services d'Étanchéité
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Diagnostic</h3>
                  <p className="text-gray-600">
                    Identification précise des points de fuite.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Traitement</h3>
                  <p className="text-gray-600">
                    Solutions adaptées pour chaque type de fuite.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Contrôle</h3>
                  <p className="text-gray-600">
                    Vérification de l'efficacité des travaux.
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
                alt="Test d'étanchéité à l'air"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                  alt="Détail d'étanchéité"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                  alt="Mesure d'étanchéité"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Optimiser Votre Habitat ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute pour réaliser vos projets d'étanchéité à l'air.
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

export default Etancheite;