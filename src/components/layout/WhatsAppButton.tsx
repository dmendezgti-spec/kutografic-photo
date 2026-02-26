"use client";

import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 10.99C13.59 12.48 11.95 14.11 10 15c-1.55.72-3.13 1.03-4.5 1" transform="scale(0.8) translate(4, 3)"/>
    </svg>
  );

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;

  if (!phoneNumber) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message || '')}`;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg z-40 animate-bounce hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </a>
    </Button>
  );
}
