import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PeinturesExterieures = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Rénovation et Protection de vos Façades
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Donnez une nouvelle vie à vos façades avec nos solutions de peinture extérieure professionnelles et durables.
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
                Depuis plus de 30 ans, Pauget et Fils met son savoir-faire au service de vos projets de rénovation extérieure. 
                Nos solutions de peinture sont spécialement sélectionnées pour leur qualité et leur durabilité face aux conditions climatiques.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Diagnostic complet de vos façades</li>
                <li>Préparation minutieuse des surfaces</li>
                <li>Application de peintures haute performance</li>
                <li>Finitions soignées et durables</li>
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
                    Un traitement complet pour restaurer et protéger vos murs extérieurs, incluant le nettoyage, la réparation et la mise en peinture.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Protection Hydrofuge</h3>
                  <p className="text-gray-600">
                    Application de revêtements imperméabilisants pour protéger durablement vos façades contre les infiltrations d'eau.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Finitions Décoratives</h3>
                  <p className="text-gray-600">
                    Large gamme de finitions et de teintes pour personnaliser l'aspect de votre façade selon vos préférences.
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
                alt="Façade rénovée par nos soins"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                  alt="Travaux de peinture en cours"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                  alt="Détail d'une finition de façade"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Transformer votre Façade ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour bénéficier d'un diagnostic gratuit et d'un devis personnalisé. Notre équipe d'experts est à votre écoute pour vous conseiller sur les meilleures solutions adaptées à vos besoins.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md transition-colors duration-200"
          >
            <span>Demander un devis gratuit</span>
            <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default PeinturesExterieures;