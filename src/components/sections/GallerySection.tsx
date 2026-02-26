"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox";
import type { GalleryItem } from "@/types";
import { ScrollReveal } from "../ScrollReveal";
import { Camera, Video } from "lucide-react";

const categories = [
  { name: "All", slug: "all" },
  { name: "Weddings", slug: "weddings" },
  { name: "Pre-Weddings", slug: "pre-weddings" },
  { name: "Sessions", slug: "sessions" },
  { name: "Landscapes", slug: "landscapes" },
];

export default function GallerySection() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch("/content/gallery.json");
        if (!res.ok) throw new Error("Failed to fetch gallery data");
        const data: GalleryItem[] = await res.json();
        setGalleryItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGallery();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter, galleryItems]);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of our favorite moments. Explore by category to see our work.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200} className="my-12 flex justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.slug}
              variant={activeFilter === category.slug ? "default" : "outline"}
              onClick={() => setActiveFilter(category.slug)}
              className="transition-all"
            >
              {category.name}
            </Button>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
              <button
                onClick={() => openLightbox(index)}
                className="group relative block w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.thumb}
                  alt={item.title}
                  data-ai-hint={item.hint}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                   <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                    {item.type === 'video' ? <Video className="h-8 w-8 mx-auto" /> : <Camera className="h-8 w-8 mx-auto" />}
                    <h3 className="font-bold mt-2 font-headline">{item.title}</h3>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {lightboxOpen && filteredItems.length > 0 && (
          <Lightbox
            items={filteredItems}
            startIndex={selectedItemIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </div>
    </section>
  );
}
