import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "../ScrollReveal";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
      <div className="absolute inset-0 bg-background/50"></div>
      
      <div className="relative z-10 p-4">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline leading-tight tracking-tighter">
            Timeless Photography
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Crafting beautiful, authentic, and emotive stories through the art of photography.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg py-7 px-8 transition-all duration-300 hover:shadow-primary/40 hover:shadow-[0_0_20px] active:scale-95">
            <Link href="#gallery">View Gallery</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg py-7 px-8 bg-black/20 backdrop-blur-sm border-primary/50 hover:bg-primary/20 hover:text-white transition-all duration-300 active:scale-95">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
