import { Link } from "react-router-dom";

const realisations = [
  {
    title: "Rénovation complète d'un appartement haussmannien",
    description: "Plâtrerie, peinture et isolation thermique pour un appartement de 120m²",
    slug: "renovation-appartement-haussmannien",
    image: "/lovable-uploads/63aa80be-f2ba-47b4-984f-a6f43e14e62f.png"
  },
  {
    title: "Isolation extérieure d'une maison individuelle",
    description: "Isolation thermique par l'extérieur et ravalement de façade",
    slug: "isolation-exterieure-maison",
    image: "/lovable-uploads/hero-bg.png"
  },
  // Ajoutez d'autres réalisations ici
];

const Realisations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Réalisations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((realisation) => (
            <Link
              key={realisation.slug}
              to={`/realisations/${realisation.slug}`}
              className="group"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-0">
                  <img
                    src={realisation.image}
                    alt={realisation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-white/10">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {realisation.title}
                  </h3>
                  <p className="text-white/90">
                    {realisation.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realisations;