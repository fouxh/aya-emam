import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { insights } from "@/data/insights";

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <Container>
        <SectionReveal className="max-w-xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            Thinking
          </p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
            Market Insights
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            Short notes on how to read the UAE property market — written to
            inform a conversation, not to sell a unit.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {insights.map((article, index) => (
            <SectionReveal key={article.slug} delay={index * 0.08}>
              <article>
                <Link href={`/insights/${article.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ivory-deep">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="mt-5 text-[11px] tracking-[0.18em] text-gold uppercase">
                    {article.category} · {article.readTime}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug text-charcoal group-hover:text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {article.excerpt}
                  </p>
                </Link>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
