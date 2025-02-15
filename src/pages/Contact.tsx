import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Map from "@/components/Map";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form data:", data);
      toast.success("Message envoyé avec succès !");
      form.reset();
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Pauget & Fils | Artisan Plâtrier-Peintre à Port</title>
        <meta 
          name="description" 
          content="Contactez Pauget & Fils à Port (01). Devis gratuit pour vos travaux de plâtrerie, peinture et isolation. Intervention sur l'Ain et la Haute-Savoie." 
        />
        <meta name="keywords" content="contact, devis, plâtrerie, peinture, isolation, Port, Ain" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Pauget & Fils | Port" />
        <meta property="og:description" content="Demandez un devis gratuit pour vos travaux. Réponse rapide et conseils personnalisés." />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">Contact</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <p className="text-base sm:text-lg md:text-base">
                Nous sommes à votre écoute pour tous vos projets de plâtrerie, peinture et isolation.
                N'hésitez pas à nous contacter pour obtenir un devis gratuit.
              </p>

              <div className="bg-[#CAB9AB] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Adresse:</span>
                    <span>4 Rue du Commerce, 01460 Port</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Téléphone:</span>
                    <a href="tel:0672019849" className="text-white hover:underline">
                      06 72 01 98 49
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:contact@platrerie-peinture-pauget" className="text-white hover:underline">
                      contact@platrerie-peinture-pauget.fr
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-[#CAB9AB] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({
                      field
                    }) => <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} className="bg-white/90" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="email" render={({
                      field
                    }) => <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" {...field} className="bg-white/90" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="phone" render={({
                      field
                    }) => <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Votre numéro de téléphone" {...field} className="bg-white/90" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="subject" render={({
                      field
                    }) => <FormItem>
                          <FormLabel>Sujet</FormLabel>
                          <FormControl>
                            <Input placeholder="Sujet de votre message" {...field} className="bg-white/90" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="message" render={({
                      field
                    }) => <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Votre message" className="min-h-[150px] bg-white/90" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isSubmitting}>
                      {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="bg-[#CAB9AB] rounded-xl">
              <FAQSection />
            </div>
          </div>
        </div>

        <CTASection />
        
        <div className="h-[480px]">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;
