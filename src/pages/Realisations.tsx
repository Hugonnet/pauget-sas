import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";

interface Realisation {
  title: string;
  description: string;
  slug: string;
  image: string;
  tags: string[];
}

const realisations: Realisation[] = [
  {
    title: "Rénovation complète d'un appartement haussmannien",
    description: "Plâtrerie, peinture et isolation thermique pour un appartement de 120m²",
    slug: "renovation-appartement-haussmannien",
    image: "/lovable-uploads/63aa80be-f2ba-47b4-984f-a6f43e14e62f.png",
    tags: ["Rénovation", "Plâtrerie", "Peinture", "Isolation"]
  },
  {
    title: "Isolation extérieure d'une maison individuelle",
    description: "Isolation thermique par l'extérieur et ravalement de façade",
    slug: "isolation-exterieure-maison",
    image: "/lovable-uploads/hero-bg.png",
    tags: ["Isolation", "Extérieur", "Ravalement"]
  }
];

const Realisations = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = Array.from(new Set(realisations.flatMap(r => r.tags)));

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredRealisations = selectedTags.length > 0
    ? realisations.filter(r => 
        selectedTags.every(tag => r.tags.includes(tag))
      )
    : realisations;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <Helmet>
        <title>Nos Réalisations - Pauget & Fils</title>
        <meta name="description" content="Découvrez nos réalisations en plâtrerie, peinture et isolation. Des projets de qualité réalisés par nos artisans qualifiés." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Réalisations</h1>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/80"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRealisations.map((realisation) => (
            <Link
              key={realisation.slug}
              to={`/realisations/${realisation.slug}`}
              className="group"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] backdrop-blur-sm bg-white/10">
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
                  <p className="text-white/90 mb-3">
                    {realisation.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {realisation.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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