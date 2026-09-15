import { profile } from "@/data/profile";
import { whatsappUrl } from "@/lib/site";

export function MobileStickyCta() {
  const whatsapp = whatsappUrl(profile.whatsapp, profile.whatsappMessage);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/92 p-3 backdrop-blur-xl lg:hidden">
      <div className={`grid gap-2 ${whatsapp ? "grid-cols-2" : "grid-cols-1"}`}>
        {whatsapp ? (
          <a
            href={whatsapp}
            className="inline-flex items-center justify-center rounded-full bg-[#1f6b4a] px-4 py-3 text-[12px] tracking-[0.14em] text-ivory uppercase"
          >
            WhatsApp
          </a>
        ) : null}
        <a
          href="/#contact"
          className="inline-flex items-center justify-center rounded-full bg-charcoal px-4 py-3 text-[12px] tracking-[0.14em] text-ivory uppercase"
        >
          Contact Aya
        </a>
      </div>
    </div>
  );
}
