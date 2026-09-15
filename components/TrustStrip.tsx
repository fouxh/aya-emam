import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { profile } from "@/data/profile";

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper py-16 sm:py-20">
      <Container>
        <SectionReveal className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <p className="max-w-2xl font-serif text-3xl leading-snug text-charcoal sm:text-[2.35rem]">
            {profile.trust.quote}
          </p>
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {profile.trust.values.map((item) => (
              <div key={item.title} className="lg:text-right">
                <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
