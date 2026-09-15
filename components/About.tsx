import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <SectionReveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -top-6 -left-6 hidden h-full w-full border border-champagne/50 sm:block" />
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                <Image
                  src={profile.images.portrait}
                  alt={`${profile.name}, ${profile.title}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-4 text-[11px] tracking-[0.18em] text-muted uppercase">
                {profile.headline}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              {profile.about.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
              {profile.about.title}
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-7 text-ink/85">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={profile.linkedin} variant="secondary">
                {profile.about.linkedinCta}
              </Button>
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
