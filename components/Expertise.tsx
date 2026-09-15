import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { services } from "@/data/services";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <Container>
        <SectionReveal className="max-w-xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            Expertise
          </p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
            How I Can Help
          </h2>
        </SectionReveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <SectionReveal key={service.number} delay={index * 0.05}>
              <article className="grid gap-4 py-8 sm:grid-cols-[92px_minmax(0,0.9fr)_minmax(0,1.2fr)] sm:items-baseline sm:gap-8 sm:py-10">
                <p className="font-serif text-2xl text-champagne">{service.number}</p>
                <h3 className="font-serif text-2xl text-charcoal sm:text-[1.7rem]">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-7 text-muted">{service.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
