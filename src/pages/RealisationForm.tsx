
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Plus, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";

const defaultTags = [
  "Plâtrerie",
  "Peinture intérieure",
  "Peinture extérieure",
  "Isolation intérieure",
  "Isolation extérieure",
  "Étanchéité à l'air"
];

interface RealisationFormData {
  title: string;
  description: string;
  tags: string[];
}

const RealisationForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);

  const form = useForm<RealisationFormData>({
    defaultValues: {
      title: "",
      description: "",
      tags: []
    }
  });

  const generateUniqueSlug = (title: string) => {
    const baseSlug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    
    const timestamp = new Date().getTime();
    const random = Math.random().toString(36).substring(2, 8);
    return `${baseSlug}-${timestamp}-${random}`;
  };

  const onSubmit = async (data: RealisationFormData) => {
    if (!user) {
      toast({
        title: "Erreur",
        description: "Vous devez être connecté pour ajouter une réalisation",
        variant: "destructive"
      });
      return;
    }

    try {
      setUploading(true);

      const uniqueSlug = generateUniqueSlug(data.title);

      // Upload des images
      const uploadedImages = await Promise.all(
        images.map(async (image) => {
          const filePath = `${crypto.randomUUID()}.${image.file.name.split('.').pop()}`;
          const { error: uploadError } = await supabase.storage
            .from('realizations-images')
            .upload(filePath, image.file);

          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = supabase.storage
            .from('realizations-images')
            .getPublicUrl(filePath);

          return publicUrl;
        })
      );

      // Créer la réalisation dans la base de données
      const { error } = await supabase.from('realizations').insert({
        title: data.title,
        description: data.description,
        tags: data.tags,
        slug: uniqueSlug,
        image: uploadedImages[0] || "", // Première image comme image principale
        gallery: uploadedImages,
        image_order: uploadedImages
      });

      if (error) throw error;

      toast({
        title: "Succès",
        description: "La réalisation a été ajoutée avec succès"
      });

      navigate("/realisations");
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'ajout de la réalisation",
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

  const removeImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/10">
      <Helmet>
        <title>Ajouter une réalisation | Pauget & Fils</title>
        <meta 
          name="description" 
          content="Ajoutez une nouvelle réalisation à notre portfolio de travaux en plâtrerie, peinture et isolation."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Ajouter une réalisation</h1>

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

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Types de travaux</FormLabel>
                    <div className="flex flex-wrap gap-2">
                      {defaultTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={field.value.includes(tag) ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary/80"
                          onClick={() => {
                            const newTags = field.value.includes(tag)
                              ? field.value.filter((t) => t !== tag)
                              : [...field.value, tag];
                            field.onChange(newTags);
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormLabel>Images</FormLabel>
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
                        onClick={() => removeImage(index)}
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
                    Envoi en cours...
                  </>
                ) : (
                  "Ajouter la réalisation"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RealisationForm;
