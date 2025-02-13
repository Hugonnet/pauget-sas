
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Plus, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface RealisationFormData {
  title: string;
  description: string;
  tags: string[];
}

const RealisationEdit = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<{ file: File | null; preview: string }[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const form = useForm<RealisationFormData>({
    defaultValues: {
      title: "",
      description: "",
      tags: []
    }
  });

  useEffect(() => {
    const fetchRealisation = async () => {
      try {
        const { data, error } = await supabase
          .from('realizations')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (error) throw error;
        
        if (!data) {
          toast({
            title: "Erreur",
            description: "Réalisation non trouvée",
            variant: "destructive"
          });
          navigate('/realisations');
          return;
        }

        form.reset({
          title: data.title,
          description: data.description,
          tags: data.tags || []
        });

        setCurrentImages(data.gallery || []);
      } catch (error) {
        console.error('Erreur:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger la réalisation",
          variant: "destructive"
        });
        navigate('/realisations');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchRealisation();
    }
  }, [slug, form, navigate, toast]);

  const onSubmit = async (data: RealisationFormData) => {
    if (!user || !slug) {
      toast({
        title: "Erreur",
        description: "Vous devez être connecté pour modifier une réalisation",
        variant: "destructive"
      });
      return;
    }

    try {
      setUploading(true);

      // Upload des nouvelles images
      const newUploadedImages = await Promise.all(
        images
          .filter(img => img.file)
          .map(async (image) => {
            const filePath = `${crypto.randomUUID()}.${image.file!.name.split('.').pop()}`;
            const { error: uploadError } = await supabase.storage
              .from('realizations-images')
              .upload(filePath, image.file!);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
              .from('realizations-images')
              .getPublicUrl(filePath);

            return publicUrl;
          })
      );

      // Combine existing and new images
      const allImages = [...currentImages, ...newUploadedImages];

      // Mettre à jour la réalisation
      const { error } = await supabase
        .from('realizations')
        .update({
          ...data,
          gallery: allImages,
          image: allImages[0] || "", // First image as main image
        })
        .eq('slug', slug);

      if (error) throw error;

      toast({
        title: "Succès",
        description: "La réalisation a été mise à jour"
      });

      navigate(`/realisations/${slug}`);
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la modification",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeNewImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const removeCurrentImage = (index: number) => {
    setCurrentImages(prev => {
      const newImages = [...prev];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <Helmet>
        <title>{form.getValues("title")} - Modifier | Pauget & Fils</title>
        <meta 
          name="description" 
          content={form.getValues("description")}
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Modifier la réalisation</h1>

        <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre avec localisation</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Rénovation complète à Oyonnax" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Description détaillée de la réalisation"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormLabel>Images actuelles</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {currentImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Current ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => removeCurrentImage(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <FormLabel>Nouvelles images</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => removeNewImage(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg">
                    <label className="cursor-pointer">
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <Plus className="h-8 w-8 text-gray-400" />
                    </label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={uploading}>
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mise à jour en cours...
                  </>
                ) : (
                  "Mettre à jour la réalisation"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RealisationEdit;
