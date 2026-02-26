import { Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-headline font-bold text-primary">
              Kutografic
            </Link>
            <p className="text-muted-foreground text-sm mt-1">Capturing life's most precious moments.</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Kutografic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
