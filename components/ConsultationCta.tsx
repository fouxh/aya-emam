import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { profile } from "@/data/profile";
import { whatsappUrl } from "@/lib/site";

export function ConsultationCta() {
  const whatsapp = whatsappUrl(profile.whatsapp, profile.whatsappMessage);

  return (
    <section className="relative overflow-hidden bg-ivory-deep py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full border border-champagne/40"
      />
      <Container>
        <SectionReveal className="max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            Private consultation
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
            {profile.consultation.title}
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-8 text-ink/80">
            {profile.consultation.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#contact">{profile.consultation.cta}</Button>
            {whatsapp ? (
              <Button href={whatsapp} variant="secondary">
                WhatsApp
              </Button>
            ) : null}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
