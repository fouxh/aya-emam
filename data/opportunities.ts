/**
 * Curated sample presentations — not a live inventory feed.
 * Replace images, names and prices with current opportunities before launch.
 */
export const opportunitiesIntro = {
  title: "Selected Opportunities",
  subtitle: "A curated selection rather than an endless property search.",
  note: "Examples of how opportunities are presented. Availability and pricing change; request a current shortlist.",
  cta: "Request Current Opportunities",
} as const;

export const opportunities = [
  {
    slug: "saadiyat-waterfront",
    name: "Saadiyat Waterfront Residences",
    location: "Saadiyat Island, Abu Dhabi",
    price: "From AED 2.8M",
    type: "Branded residence",
    label: "Lifestyle & long-term hold",
    image: "/images/properties/saadiyat.png",
    alt: "Waterfront luxury residences on Saadiyat Island at golden hour",
  },
  {
    slug: "yas-island-suites",
    name: "Yas Island Suites",
    location: "Yas Island, Abu Dhabi",
    price: "From AED 1.9M",
    type: "Off-plan apartment",
    label: "Entry with payment-plan flexibility",
    image: "/images/properties/yas.png",
    alt: "Contemporary residential towers on Yas Island at dusk",
  },
  {
    slug: "maryah-city-residences",
    name: "Al Maryah City Residences",
    location: "Al Maryah Island, Abu Dhabi",
    price: "From AED 2.2M",
    type: "Ready / near-ready",
    label: "Urban investment & rental demand",
    image: "/images/properties/maryah.png",
    alt: "Refined apartment interior with city views on Al Maryah Island",
  },
] as const;

export type Opportunity = (typeof opportunities)[number];
