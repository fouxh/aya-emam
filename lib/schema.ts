import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";

export function personJsonLd() {
  const sameAs = [
    profile.linkedin,
    profile.instagram,
    profile.facebook,
    profile.tiktok,
    profile.x,
    profile.youtube,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: profile.name,
        alternateName: profile.linkedinName,
        jobTitle: profile.title,
        url: siteConfig.url,
        image: `${siteConfig.url}${profile.images.portrait}`,
        email: profile.email,
        telephone: profile.phone,
        worksFor: {
          "@type": "Organization",
          name: profile.companyFull,
          alternateName: profile.company,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Abu Dhabi",
          addressCountry: "AE",
        },
        sameAs,
        knowsAbout: [
          "UAE real estate",
          "Property investment advisory",
          "Abu Dhabi property market",
          "Off-plan advisory",
        ],
      },
      {
        "@type": "RealEstateAgent",
        "@id": `${siteConfig.url}#agent`,
        name: profile.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${profile.images.portrait}`,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "United Arab Emirates",
        },
        employee: { "@id": `${siteConfig.url}#person` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#service`,
        name: `${profile.name} Real Estate Advisory`,
        url: siteConfig.url,
        image: `${siteConfig.url}${profile.images.portrait}`,
        description: siteConfig.description,
        provider: { "@id": `${siteConfig.url}#person` },
        areaServed: "AE",
        serviceType: [
          "Real estate consulting",
          "Property investment advisory",
          "Buyer representation",
        ],
      },
    ],
  };
}
