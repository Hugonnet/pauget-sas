import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
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
const defaultTags = ["Plâtrerie", "Peinture intérieure", "Peinture extérieure", "Isolation intérieure", "Isolation extérieure", "Etanchéité à l'air"];
const Realisations = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [realisations, setRealisations] = useState<Realisation[]>([]);
  const [loading, setLoading] = useState(true);
  const {
    user
  } = useAuth();
  const {
    toast
  } = useToast();
  useEffect(() => {
    fetchRealisations();
  }, []);
  const fetchRealisations = async () => {
    try {
      const {
        data,
        error
      } = await supabase.from('realizations').select('*');
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
  const handleDelete = async (id: string) => {
    try {
      const {
        error
      } = await supabase.from('realizations').delete().eq('id', id);
      if (error) throw error;
      toast({
        title: "Succès",
        description: "La réalisation a été supprimée"
      });

      // Refresh the list
      fetchRealisations();
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la réalisation",
        variant: "destructive"
      });
    }
  };
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  const filteredRealisations = selectedTags.length > 0 ? realisations.filter(r => selectedTags.every(tag => r.tags?.includes(tag))) : realisations;
  return <div className="min-h-screen">
      <div className="relative h-[40vh] bg-gradient-to-br from-primary/80 to-primary overflow-hidden">
        <div className="absolute inset-0 transform -skew-y-6 bg-gradient-to-r from-background to-primary/10 translate-y-1/3" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-bold text-white mb-4 text-3xl">Nos Réalisations</h1>
            <p className="text-xl text-white/90">Découvrez nos projets en plâtrerie, peinture et isolation</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          {user && <Link to="/realisations/new">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Ajouter une réalisation
              </Button>
            </Link>}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {defaultTags.map(tag => <Badge key={tag} variant={selectedTags.includes(tag) ? "default" : "outline"} className="cursor-pointer hover:bg-primary/80" onClick={() => toggleTag(tag)}>
              {tag}
            </Badge>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRealisations.map(realisation => <div key={realisation.id} className="relative group">
              <Link to={`/realisations/${realisation.slug}`} className="block">
                <div className="relative h-[400px] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] backdrop-blur-sm bg-white/10">
                  <div className="absolute inset-0">
                    <img src={realisation.image} alt={realisation.title} className="w-full h-full object-cover" />
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
                      {realisation.tags?.map(tag => <Badge key={tag} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>)}
                    </div>
                  </div>
                </div>
              </Link>
              {user && <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={`/realisations/edit/${realisation.slug}`}>
                    <Button size="icon" variant="secondary">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="icon" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Cette action est irréversible. Cette réalisation sera définitivement supprimée.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(realisation.id)} className="bg-red-500 hover:bg-red-600">
                          Supprimer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>}
            </div>)}
        </div>
      </div>
    </div>;
};
export default Realisations;