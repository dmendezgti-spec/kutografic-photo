import { z } from "zod";

export type GalleryItem = {
  id: string;
  type: 'photo' | 'video';
  category: 'weddings' | 'pre-weddings' | 'sessions' | 'landscapes';
  title: string;
  description: string;
  url: string;
  thumb: string;
  createdAt: string;
  hint?: string;
};

export const quoteSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type QuoteFormState = {
  success: boolean;
  message: string;
};
