import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "199",
    features: [
      "Single platform integration",
      "Basic menu management",
      "Email support",
      "Monthly performance reports"
    ]
  },
  {
    name: "Professional",
    price: "399",
    features: [
      "Multiple platform integrations",
      "Advanced menu optimization",
      "Priority email & phone support",
      "Weekly performance analytics",
      "Dedicated account manager"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited platform integrations",
      "Custom menu strategies",
      "24/7 priority support",
      "Daily analytics & insights",
      "Dedicated success team",
      "Custom integration solutions"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4 text-3xl font-bold">
                  ${plan.price}
                  {plan.price !== "Custom" && <span className="text-lg font-normal">/mo</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
