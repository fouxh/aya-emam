import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";
import { navItems, whatsappUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsapp = whatsappUrl(profile.whatsapp, profile.whatsappMessage);

  return (
    <footer className="border-t border-line bg-paper pt-16 pb-28 lg:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="wordmark text-sm text-charcoal">Aya Emam</p>
            <p className="mt-4 text-sm leading-6 text-muted">
              {profile.title}
            </p>
            <p className="text-sm leading-6 text-muted">{profile.locationShort}</p>
          </div>
          <nav className="grid gap-2 text-sm" aria-label="Footer">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink/80 transition-colors hover:text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3 text-sm text-ink/80">
            <a href={`tel:${profile.phone}`} className="block hover:text-charcoal">
              {profile.phoneDisplay}
            </a>
            {whatsapp ? (
              <a href={whatsapp} className="block hover:text-charcoal">
                WhatsApp
              </a>
            ) : null}
            <a href={`mailto:${profile.email}`} className="block hover:text-charcoal">
              {profile.email}
            </a>
            <SocialLinks className="pt-2" />
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6 text-xs leading-5 text-muted">
          <p>{profile.disclaimer}</p>
          <p className="mt-3">© {year} {profile.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
