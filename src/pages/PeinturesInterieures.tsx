import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PeinturesInterieures = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Peinture Intérieure Professionnelle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Transformez votre intérieur avec notre expertise en peinture. Des finitions impeccables pour un résultat qui dure.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slideUp">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Notre Savoir-Faire en Peinture Intérieure
              </h2>
              <p className="text-gray-600 mb-4">
                Depuis plus de 30 ans, Pauget et Fils met son expertise au service de vos projets de peinture intérieure. 
                Nous utilisons des techniques éprouvées et des produits de haute qualité pour garantir des résultats durables.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Préparation minutieuse des surfaces</li>
                <li>Application professionnelle</li>
                <li>Finitions soignées</li>
                <li>Respect des délais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">
                Nos Services de Peinture Intérieure
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Peinture Décorative</h3>
                  <p className="text-gray-600">
                    Donnez du caractère à vos pièces avec nos techniques décoratives personnalisées.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Peinture Traditionnelle</h3>
                  <p className="text-gray-600">
                    Des finitions classiques et élégantes pour tous vos espaces de vie.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Rénovation</h3>
                  <p className="text-gray-600">
                    Rafraîchissez vos intérieurs avec nos solutions de rénovation complètes.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg animate-fadeIn">
              <img
                src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14"
                alt="Intérieur peint avec finition professionnelle"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                  alt="Détail de peinture intérieure"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f"
                  alt="Finition de peinture murale"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-xl shadow-sm text-center animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à Transformer Votre Intérieur ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe est à votre écoute pour réaliser vos projets de peinture intérieure.
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

export default PeinturesInterieures;