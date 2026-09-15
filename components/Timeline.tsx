import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { journey } from "@/data/experience";

export function Timeline() {
  return (
    <section id="journey" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionReveal className="max-w-xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            History
          </p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
            Professional Journey
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            From enterprise sales to UAE real estate advisory — a path defined
            by listening first, then recommending with care.
          </p>
        </SectionReveal>

        <ol className="relative mt-14 border-l border-line pl-8 sm:pl-12">
          {journey.map((item, index) => (
            <SectionReveal key={`${item.role}-${item.company}`} delay={index * 0.06}>
              <li className="relative pb-12 last:pb-0">
                <span className="absolute top-1.5 -left-[39px] h-2.5 w-2.5 rounded-full bg-gold sm:-left-[55px]" />
                <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-ink/80">
                  {item.company}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
                  {item.description}
                </p>
              </li>
            </SectionReveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
