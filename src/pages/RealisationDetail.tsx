
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Pencil, Copy } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const defaultTags = [
  "Plâtrerie",
  "Peinture intérieure",
  "Peinture extérieure",
  "Isolation intérieure",
  "Isolation extérieure",
  "Étanchéité à l'air"
];

interface Realisation {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  gallery: string[];
  tags: string[];
  meta_description: string;
  meta_title: string;
  slug: string;
}

const RealisationDetail = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [realisation, setRealisation] = useState<Realisation | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingTags, setEditingTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchRealisation = async () => {
      try {
        const { data, error } = await supabase
          .from('realizations')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setRealisation(data);
        setSelectedTags(data.tags || []);
      } catch (error) {
        console.error('Erreur:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger la réalisation",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchRealisation();
    }
  }, [slug, toast]);

  const handleTagsUpdate = async () => {
    if (!realisation) return;

    try {
      const { error } = await supabase
        .from('realizations')
        .update({ tags: selectedTags })
        .eq('id', realisation.id);

      if (error) throw error;

      setRealisation(prev => prev ? { ...prev, tags: selectedTags } : null);
      setEditingTags(false);
      
      toast({
        title: "Succès",
        description: "Les tags ont été mis à jour"
      });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour les tags",
        variant: "destructive"
      });
    }
  };

  const handleDuplicate = async () => {
    if (!realisation) return;

    try {
      // Générer un nouveau slug unique
      const timestamp = new Date().getTime();
      const random = Math.random().toString(36).substring(2, 8);
      const newSlug = `${realisation.slug}-copie-${timestamp}-${random}`;

      // Créer la copie
      const { data, error } = await supabase
        .from('realizations')
        .insert({
          ...realisation,
          id: undefined, // Laisser Supabase générer un nouvel ID
          title: `${realisation.title} (copie)`,
          slug: newSlug,
          meta_title: `${realisation.title} (copie) | Réalisations Pauget & Fils`,
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Succès",
        description: "La réalisation a été dupliquée"
      });

      // Rediriger vers la nouvelle réalisation
      navigate(`/realisations/${data.slug}`);
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Impossible de dupliquer la réalisation",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!realisation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Réalisation non trouvée</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{realisation.meta_title || `${realisation.title} | Réalisations Pauget & Fils`}</title>
        <meta 
          name="description" 
          content={realisation.meta_description || realisation.description}
        />
      </Helmet>

      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={realisation.image} 
            alt={realisation.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 transform -skew-y-6 bg-gradient-to-r from-background to-primary/10 translate-y-1/3" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-4">{realisation.title}</h1>
            {editingTags ? (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {defaultTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/80"
                      onClick={() => {
                        setSelectedTags(prev =>
                          prev.includes(tag)
                            ? prev.filter(t => t !== tag)
                            : [...prev, tag]
                        );
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleTagsUpdate} variant="default">
                    Enregistrer
                  </Button>
                  <Button onClick={() => {
                    setEditingTags(false);
                    setSelectedTags(realisation.tags || []);
                  }} variant="outline">
                    Annuler
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 mb-4">
                {realisation.tags?.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {user && (
              <div className="flex gap-2">
                <Link to={`/realisations/edit/${realisation.slug}`}>
                  <Button variant="secondary" className="flex items-center gap-2">
                    <Pencil className="h-4 w-4" />
                    Modifier
                  </Button>
                </Link>
                <Button variant="secondary" className="flex items-center gap-2" onClick={handleDuplicate}>
                  <Copy className="h-4 w-4" />
                  Dupliquer
                </Button>
                {!editingTags && (
                  <Button variant="secondary" onClick={() => setEditingTags(true)}>
                    Modifier les tags
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-6">{realisation.title}</h2>
            <p className="text-lg text-gray-700 mb-12">{realisation.description}</p>
          </div>

          {realisation.gallery && realisation.gallery.length > 0 && (
            <PhotoProvider>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {realisation.gallery.map((image, index) => (
                  <PhotoView key={index} src={image}>
                    <div className="relative h-[300px] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm bg-white/10 cursor-pointer">
                      <img
                        src={image}
                        alt={`${realisation.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealisationDetail;
