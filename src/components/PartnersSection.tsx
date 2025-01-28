import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "Weber", logo: "/lovable-uploads/748088dd-9eb3-4d2a-ba04-2953ffdd00a4.png" },
  { name: "Zolpan", logo: "/lovable-uploads/459a21ce-f9b4-4ef3-8530-2f918b95fae8.png" },
  { name: "Placoplatre", logo: "/lovable-uploads/74a83115-7afa-4489-bc0d-6ff5037638f0.png" },
  { name: "Knauf", logo: "/lovable-uploads/9dccdd9e-61ea-425c-96af-8e7f9242ede2.png" },
  { name: "Tollens", logo: "/lovable-uploads/a9b52115-b61b-4e22-82b6-57b5fd44b3ab.png" },
  { name: "PPG", logo: "/lovable-uploads/45177932-0c62-496a-8f4d-dde994c690ba.png" },
];

export const PartnersSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos partenaires</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/6">
                <Card className="h-full border-none shadow-none bg-transparent">
                  <CardContent className="flex items-center justify-center p-6">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
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