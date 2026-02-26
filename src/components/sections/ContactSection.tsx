import ContactForm from "@/components/ContactForm";
import { ScrollReveal } from "../ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or want to book a session? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-12 max-w-4xl mx-auto">
          <div className="bg-background/30 p-8 rounded-lg shadow-2xl">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
