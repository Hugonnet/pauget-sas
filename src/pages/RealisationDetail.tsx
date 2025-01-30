import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { KeyFiguresSection } from "@/components/KeyFiguresSection";
import { Badge } from "@/components/ui/badge";

const realisations = {
  "renovation-appartement-haussmannien": {
    title: "Rénovation complète d'un appartement haussmannien",
    description: "Plâtrerie, peinture et isolation thermique pour un appartement de 120m²",
    content: `
      Notre équipe a réalisé une rénovation complète d'un appartement haussmannien,
      comprenant des travaux de plâtrerie traditionnelle, la réfection des peintures
      et la mise en place d'une isolation thermique performante.
    `,
    metaDescription: "Découvrez notre projet de rénovation d'un appartement haussmannien à Lyon. Travaux de plâtrerie, peinture et isolation thermique réalisés par nos artisans.",
    image: "/lovable-uploads/63aa80be-f2ba-47b4-984f-a6f43e14e62f.png",
    gallery: [
      "/lovable-uploads/63aa80be-f2ba-47b4-984f-a6f43e14e62f.png",
      "/lovable-uploads/hero-bg.png",
    ],
    tags: ["Rénovation", "Plâtrerie", "Peinture", "Isolation"]
  },
  "isolation-exterieure-maison": {
    title: "Isolation extérieure d'une maison individuelle",
    description: "Isolation thermique par l'extérieur et ravalement de façade",
    content: `
      Réalisation d'une isolation thermique par l'extérieur pour une maison individuelle,
      permettant d'améliorer significativement les performances énergétiques du bâtiment
      tout en rénovant l'aspect extérieur.
    `,
    metaDescription: "Découvrez notre projet d'isolation thermique par l'extérieur d'une maison individuelle. Amélioration énergétique et ravalement de façade.",
    image: "/lovable-uploads/hero-bg.png",
    gallery: [
      "/lovable-uploads/hero-bg.png",
      "/lovable-uploads/63aa80be-f2ba-47b4-984f-a6f43e14e62f.png",
    ],
    tags: ["Isolation", "Extérieur", "Ravalement"]
  },
};

const RealisationDetail = () => {
  const { slug } = useParams();
  const realisation = slug ? realisations[slug as keyof typeof realisations] : null;

  if (!realisation) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Réalisation non trouvée</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <Helmet>
        <title>{realisation.title} - Pauget & Fils</title>
        <meta name="description" content={realisation.metaDescription} />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{realisation.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {realisation.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden mb-8">
            <img
              src={realisation.image}
              alt={realisation.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">{realisation.description}</p>
            <div className="text-gray-700 mb-12">{realisation.content}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realisation.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] rounded-xl overflow-hidden backdrop-blur-sm bg-white/10"
              >
                <img
                  src={image}
                  alt={`${realisation.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <KeyFiguresSection />
        </div>
      </div>
    </div>
  );
};

export default RealisationDetail;