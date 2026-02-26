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

export type QuoteFormState = {
  success: boolean;
  message: string;
};
