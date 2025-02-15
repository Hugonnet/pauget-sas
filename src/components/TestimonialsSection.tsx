
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Propriétaire",
    content: "Un travail de qualité, des finitions impeccables. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Marie Martin",
    role: "Architecte d'intérieur",
    content: "Professionnalisme et respect des délais. Une équipe à l'écoute de nos besoins.",
    rating: 5,
  },
  {
    name: "Pierre Durand",
    role: "Particulier",
    content: "Excellent rapport qualité-prix. Des artisans passionnés par leur métier.",
    rating: 5,
  },
  {
    name: "Sophie Bernard",
    role: "Décoratrice",
    content: "Une entreprise sérieuse qui réalise un travail de grande qualité.",
    rating: 5,
  },
  {
    name: "Laurent Petit",
    role: "Promoteur immobilier",
    content: "Partenaire de confiance pour tous nos projets de rénovation.",
    rating: 5,
  },
  {
    name: "Anne Richard",
    role: "Propriétaire",
    content: "Des conseils avisés et un résultat à la hauteur de nos attentes.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
