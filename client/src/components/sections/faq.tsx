import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to set up delivery platforms?",
    answer: "The setup process typically takes 1-2 business days once we have all the required information from your business."
  },
  {
    question: "Can I integrate multiple delivery platforms?",
    answer: "Yes! We support integration with multiple platforms including DoorDash, Uber Eats, and Grubhub. Our professional and enterprise plans include multi-platform support."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer different levels of support based on your plan - from email support to 24/7 priority assistance. All clients get access to our knowledge base and regular check-ins."
  },
  {
    question: "How do you handle menu updates?",
    answer: "We manage menu updates across all platforms, ensuring consistency and optimal pricing. Our team can also provide recommendations for menu optimization based on performance data."
  }
];

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
