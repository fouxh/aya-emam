import { profile } from "@/data/profile";

type SocialKey = "linkedin" | "instagram" | "facebook" | "tiktok" | "x" | "youtube";

type SocialItem = {
  key: SocialKey;
  label: string;
  href: string;
};

const catalog: { key: SocialKey; label: string }[] = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "tiktok", label: "TikTok" },
  { key: "x", label: "X" },
  { key: "youtube", label: "YouTube" },
];

export function getActiveSocials(): SocialItem[] {
  return catalog
    .map((item) => ({
      ...item,
      href: String(profile[item.key] ?? "").trim(),
    }))
    .filter((item) => item.href.length > 0);
}

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  tone?: "dark" | "light";
};

export function SocialLinks({
  className = "",
  iconClassName = "h-[18px] w-[18px]",
  tone = "dark",
}: SocialLinksProps) {
  const items = getActiveSocials();
  if (items.length === 0) return null;

  const color =
    tone === "light"
      ? "text-ivory/70 hover:text-ivory"
      : "text-charcoal/70 hover:text-charcoal";

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/15 transition-colors duration-300 ${color}`}
          >
            <SocialIcon name={item.key} className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({
  name,
  className,
}: {
  name: SocialKey;
  className?: string;
}) {
  switch (name) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.98 3.5A2.48 2.48 0 1 1 2.5 6a2.48 2.48 0 0 1 2.48-2.5M3 8.75h3.96V21H3zm7.22 0H14v1.67h.05c.55-1.04 1.9-2.14 3.91-2.14 4.18 0 4.95 2.75 4.95 6.33V21H19V15.3c0-1.36-.02-3.1-1.89-3.1-1.89 0-2.18 1.47-2.18 2.99V21h-3.96z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8M12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2m0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8M17.35 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.5 21v-8.1h2.72l.41-3.16H13.5V7.72c0-.91.25-1.53 1.56-1.53h1.67V3.36A22 22 0 0 0 14.3 3C11.76 3 10 4.55 10 7.39v2.35H7.5v3.16H10V21z"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M14.5 3c.4 2.4 1.8 4.1 4.2 4.3v2.6c-1.45-.07-2.75-.55-3.9-1.4v6.32A5.85 5.85 0 1 1 11.1 8.7v2.72a3.22 3.22 0 1 0 2.25 3.07V3z"
          />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.32 11.16 20.1 3h-1.6l-5.88 7.08L7.93 3H3.5l7.1 10.73L3.5 21h1.6l6.2-7.47L16.07 21h4.43zM5.68 4.24h2.47l10.16 15.52h-2.47z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M23 12.3s0-3.13-.4-4.52a2.9 2.9 0 0 0-2.05-2.06C18.3 5.3 12 5.3 12 5.3s-6.3 0-8.55.42A2.9 2.9 0 0 0 1.4 7.78C1 9.17 1 12.3 1 12.3s0 3.13.4 4.52a2.9 2.9 0 0 0 2.05 2.06c2.25.42 8.55.42 8.55.42s6.3 0 8.55-.42a2.9 2.9 0 0 0 2.05-2.06c.4-1.39.4-4.52.4-4.52M9.75 15.54V9.06l6.12 3.24z"
          />
        </svg>
      );
    default:
      return null;
  }
}
