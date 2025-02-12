
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Pencil } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface Realisation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  location: string;
  image: string;
  gallery: string[];
  tags: string[];
  meta_description: string;
  slug: string;
}

const RealisationDetail = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const [realisation, setRealisation] = useState<Realisation | null>(null);
  const [loading, setLoading] = useState(true);

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
        <title>{realisation.title} | Réalisations Pauget & Fils</title>
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
            {realisation.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {realisation.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {user && (
              <Link to={`/realisations/edit/${realisation.slug}`}>
                <Button variant="secondary" className="flex items-center gap-2">
                  <Pencil className="h-4 w-4" />
                  Modifier
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            {realisation.subtitle && (
              <h2 className="text-2xl font-semibold mb-4">{realisation.subtitle}</h2>
            )}
            
            {realisation.location && (
              <p className="text-lg text-gray-600 mb-4">
                📍 {realisation.location}
              </p>
            )}

            <p className="text-lg text-gray-700 mb-8">{realisation.description}</p>
            
            <div className="text-gray-700 mb-12 whitespace-pre-wrap">
              {realisation.content}
            </div>
          </div>

          {realisation.gallery && realisation.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {realisation.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[300px] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm bg-white/10"
                >
                  <img
                    src={image}
                    alt={`${realisation.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealisationDetail;
