import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { opportunities, opportunitiesIntro } from "@/data/opportunities";

export function Opportunities() {
  return (
    <section id="opportunities" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionReveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Curated, not catalogued
            </p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
              {opportunitiesIntro.title}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              {opportunitiesIntro.subtitle}
            </p>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted md:text-right">
            {opportunitiesIntro.note}
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {opportunities.map((item, index) => (
            <SectionReveal key={item.slug} delay={index * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <p className="absolute top-4 left-4 bg-ivory/90 px-3 py-1 text-[10px] tracking-[0.16em] text-charcoal uppercase backdrop-blur-sm">
                    {item.label}
                  </p>
                </div>
                <div className="pt-5">
                  <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                    {item.location}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-charcoal">
                    {item.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-sm text-ink/80">
                    <span>{item.price}</span>
                    <span>{item.type}</span>
                  </div>
                  <Button
                    href="/#contact"
                    variant="ghost"
                    className="mt-4 !px-0 !py-0"
                  >
                    View Opportunity
                  </Button>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12 text-center">
          <Button href="/#contact">{opportunitiesIntro.cta}</Button>
        </SectionReveal>
      </Container>
    </section>
  );
}
