import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Platforms from "@/components/sections/platforms";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Platforms />
      <Pricing />
      <FAQ />
    </main>
  );
}
