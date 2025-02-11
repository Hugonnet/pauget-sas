
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

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
}

const RealisationDetail = () => {
  const { slug } = useParams();
  const { toast } = useToast();
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
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <Helmet>
        <title>{realisation.title} | Réalisations Pauget & Fils</title>
        <meta 
          name="description" 
          content={realisation.meta_description || realisation.description}
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{realisation.title}</h1>
          
          {realisation.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {realisation.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {realisation.image && (
            <div className="relative h-[500px] rounded-xl overflow-hidden mb-8">
              <img
                src={realisation.image}
                alt={realisation.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

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
          )}
        </div>
      </div>
    </div>
  );
};

export default RealisationDetail;
