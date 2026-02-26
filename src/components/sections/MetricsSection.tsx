import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Camera, Star } from "lucide-react";
import { ScrollReveal } from "../ScrollReveal";

const metrics = [
  {
    icon: Camera,
    value: "150+",
    label: "Weddings Captured",
  },
  {
    icon: Users,
    value: "300+",
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: "5-Star",
    label: "Average Rating",
  },
];

export default function MetricsSection() {
  return (
    <section className="py-20 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 150}>
                <Card className="bg-background/40 border-border/60 text-center p-6 shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                <CardHeader className="items-center p-0 pb-4">
                  <metric.icon className="w-12 h-12 text-primary mb-2" />
                  <CardTitle className="text-5xl font-bold font-headline text-foreground">
                    {metric.value}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
