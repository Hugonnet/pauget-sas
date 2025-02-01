import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Edit2 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [editingTagIndex, setEditingTagIndex] = useState<number | null>(null);
  const [editedTagValue, setEditedTagValue] = useState("");
  const [localTags, setLocalTags] = useState<string[]>([]);
  const realisation = slug ? realisations[slug as keyof typeof realisations] : null;

  // Initialize localTags with realisation tags when component mounts or slug changes
  useState(() => {
    if (realisation) {
      setLocalTags(realisation.tags);
    }
  });

  if (!realisation) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center">Réalisation non trouvée</h1>
      </div>
    );
  }

  const handleDeleteTag = (indexToDelete: number) => {
    const newTags = localTags.filter((_, index) => index !== indexToDelete);
    setLocalTags(newTags);
    toast({
      title: "Tag supprimé",
      description: "Le tag a été supprimé avec succès",
    });
  };

  const handleEditTag = (index: number) => {
    setEditingTagIndex(index);
    setEditedTagValue(localTags[index]);
  };

  const handleSaveTag = (index: number) => {
    if (editedTagValue.trim()) {
      const newTags = [...localTags];
      newTags[index] = editedTagValue.trim();
      setLocalTags(newTags);
      setEditingTagIndex(null);
      setEditedTagValue("");
      toast({
        title: "Tag modifié",
        description: "Le tag a été modifié avec succès",
      });
    }
  };

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
            {localTags.map((tag, index) => (
              <div key={index} className="flex items-center gap-1">
                {editingTagIndex === index ? (
                  <div className="flex gap-2">
                    <Input
                      value={editedTagValue}
                      onChange={(e) => setEditedTagValue(e.target.value)}
                      className="h-7 w-32"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSaveTag(index);
                        }
                      }}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSaveTag(index)}
                    >
                      Sauvegarder
                    </Button>
                  </div>
                ) : (
                  <Badge
                    variant="secondary"
                    className="pr-1 flex items-center gap-1"
                  >
                    {tag}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0 hover:bg-transparent"
                      onClick={() => handleEditTag(index)}
                    >
                      <Edit2 className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 p-0 hover:bg-transparent"
                      onClick={() => handleDeleteTag(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default RealisationDetail;