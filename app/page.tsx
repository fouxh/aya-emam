import { About } from "@/components/About";
import { ConsultationCta } from "@/components/ConsultationCta";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { Opportunities } from "@/components/Opportunities";
import { Timeline } from "@/components/Timeline";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyAya } from "@/components/WhyAya";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustStrip />
      <About />
      <Expertise />
      <Opportunities />
      <WhyAya />
      <Timeline />
      <Insights />
      <ConsultationCta />
      <Contact />
    </main>
  );
}
