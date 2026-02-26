import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "../ScrollReveal";

const servicesData = [
  {
    id: "service-weddings",
    title: "Wedding Photography",
    description: "Full-day coverage to capture every moment of your special day, from getting ready to the final dance.",
    isPopular: true,
  },
  {
    id: "service-pre-weddings",
    title: "Pre-Wedding Sessions",
    description: "A relaxed and fun session to celebrate your engagement. Perfect for save-the-dates and getting comfortable in front of the camera.",
    isPopular: false,
  },
  {
    id: "service-landscapes",
    title: "Landscape & Travel",
    description: "Breathtaking fine art prints of landscapes from around the world, perfect for your home or office decor.",
    isPopular: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of photography services tailored to your needs. Each one crafted with passion and professionalism.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const image = PlaceHolderImages.find(p => p.id === service.id);
            return (
              <ScrollReveal key={service.id} delay={index * 150}>
                <Card className="bg-card border-border/60 overflow-hidden h-full flex flex-col group transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                   {service.isPopular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">Popular</Badge>
                  )}
                  {image && (
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={service.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
