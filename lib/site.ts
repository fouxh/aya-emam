import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  title: "Aya Emam | Real Estate Consultant UAE",
  description:
    "Personal real estate advisory and property investment guidance in the UAE.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_AE",
} as const;

export const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#opportunities", label: "Properties / Opportunities" },
  { href: "/#insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
] as const;

export function whatsappUrl(number: string, message: string) {
  const digits = number.replace(/\D/g, "");
  if (!digits) return "";
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}
