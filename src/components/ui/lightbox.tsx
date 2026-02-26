"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X as CloseIcon, Loader2 } from "lucide-react";
import type { GalleryItem } from "@/types";

type LightboxProps = {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
};

export function Lightbox({ items, startIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);
  
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    } else if (e.key === "Escape") {
        onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [items.length]);

  const currentItem = items[currentIndex];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent 
        className="bg-black/80 backdrop-blur-md border-0 p-0 w-full h-full max-w-full max-h-full sm:rounded-none flex items-center justify-center"
        aria-describedby={currentItem.description}
        aria-labelledby={currentItem.title}
        >
        
        <div className="relative w-full h-full flex items-center justify-center" onClick={onClose}>
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 hover:text-white"
                onClick={onClose}
                aria-label="Close"
            >
                <CloseIcon className="h-8 w-8" />
            </Button>

            {items.length > 1 && (
                 <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 hover:text-white h-12 w-12"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-10 w-10" />
                </Button>
            )}

            <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <Loader2 className="h-12 w-12 animate-spin text-white" />
                    </div>
                )}
                <Image
                    src={currentItem.url}
                    alt={currentItem.title}
                    data-ai-hint={currentItem.hint}
                    width={1200}
                    height={800}
                    className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                    style={{ maxWidth: '90vw', maxHeight: '80vh', width: 'auto', height: 'auto' }}
                />
            </div>
            
             <div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-white text-center bg-black/50 p-3 rounded-lg max-w-[80vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="font-bold text-lg font-headline">{currentItem.title}</h3>
                <p className="text-sm text-gray-300">{currentItem.description}</p>
            </div>

            {items.length > 1 && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 hover:text-white h-12 w-12"
                    onClick={goToNext}
                    aria-label="Next image"
                >
                    <ChevronRight className="h-10 w-10" />
                </Button>
            )}

        </div>
      </DialogContent>
    </Dialog>
  );
}
