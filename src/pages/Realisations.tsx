
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface Realisation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  slug: string;
  image: string;
  tags: string[];
}

const defaultTags = [
  "Plâtrerie",
  "Peinture intérieure",
  "Peinture extérieure",
  "Isolation intérieure",
  "Isolation extérieure",
  "Etanchéité à l'air"
];

const Realisations = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchRealisations();
  }, []);

  const fetchRealisations = async () => {
    try {
      const { data, error } = await supabase
        .from('realizations')
        .select('*');

      if (error) throw error;

      setRealisations(data || []);
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les réalisations",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredRealisations = selectedTags.length > 0
    ? realisations.filter(r => 
        selectedTags.every(tag => r.tags?.includes(tag))
      )
    : realisations;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <Helmet>
        <title>Nos Réalisations en Plâtrerie & Peinture | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Découvrez nos réalisations en plâtrerie, peinture et isolation à Port. Projets résidentiels et commerciaux, avant/après, témoignages clients. Plus de 30 ans d'expertise."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Nos Réalisations</h1>
          {user && (
            <Link to="/realisations/new">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Ajouter une réalisation
              </Button>
            </Link>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {defaultTags.map(tag => (
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
              key={realisation.id}
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
                    {realisation.tags?.map(tag => (
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
