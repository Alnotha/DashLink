import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings2, LineChart, BadgeHelp, Clock } from "lucide-react";

const services = [
  {
    title: "Platform Setup",
    description: "Complete setup and configuration of your delivery platform integrations",
    icon: Settings2
  },
  {
    title: "Performance Analytics",
    description: "Track orders, revenue, and customer satisfaction across all platforms",
    icon: LineChart
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for any platform-related issues",
    icon: Clock
  },
  {
    title: "Menu Optimization",
    description: "Expert guidance on menu pricing and item optimization",
    icon: BadgeHelp
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
