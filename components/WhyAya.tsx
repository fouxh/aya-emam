import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { profile } from "@/data/profile";

export function WhyAya() {
  return (
    <section className="bg-charcoal py-20 text-ivory sm:py-28">
      <Container>
        <SectionReveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-champagne uppercase">
              Why work with Aya
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {profile.why.title}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-ivory/72">
              {profile.why.lede}
            </p>
          </div>
          <div className="grid gap-px bg-ivory/10 sm:grid-cols-2">
            {profile.why.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="bg-charcoal px-6 py-8 sm:px-8"
              >
                <h3 className="font-serif text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/68">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
