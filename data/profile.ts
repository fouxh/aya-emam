/**
 * Public profile for Aya Emam.
 *
 * Verified from publicly available LinkedIn information
 * (https://www.linkedin.com/in/ayasalam/) plus contact details provided
 * for the website. Empty social URLs stay hidden until filled.
 */
export const profile = {
  name: "Aya Emam",
  /** Name as listed on LinkedIn. */
  linkedinName: "Aya Emam",
  title: "Real Estate Consultant",
  headline:
    "Sales Leader · Real Estate Consultant · Investment Portfolio Manager",
  company: "PSI",
  companyFull: "Property Shop Investment",
  location: "Abu Dhabi, United Arab Emirates",
  locationShort: "United Arab Emirates",
  email: "aya.emam@gmail.com",
  phone: "+971585495504",
  phoneDisplay: "+971 58 549 5504",
  /** WhatsApp in international digits only. */
  whatsapp: "971585495504",
  images: {
    portrait: "/images/aya/portrait.jpg",
    hero: "/images/aya/hero.png",
    standing: "/images/aya/standing.png",
  },
  linkedin: "https://www.linkedin.com/in/ayasalam/",
  instagram: "",
  facebook: "",
  tiktok: "",
  x: "",
  youtube: "",
  /**
   * Public GitHub username associated with the LinkedIn profile.
   * Not shown in the UI unless you choose to surface it.
   */
  github: "https://github.com/ayasalam",
  consultationLabel: "Book a Consultation",
  whatsappMessage:
    "Hello Aya, I would like to book a consultation about UAE real estate.",
  hero: {
    eyebrow: "Abu Dhabi · Personal Advisory",
    title: "Real Estate, With a More Personal Perspective.",
    lede:
      "I help clients understand the UAE property market, evaluate investment opportunities, and make considered decisions — with advice shaped around your objectives, not a catalogue of listings.",
    primaryCta: "Book a Consultation",
    secondaryCta: "Explore Opportunities",
    trustLine: "UAE Real Estate · Investment Advisory · Client Representation",
  },
  about: {
    eyebrow: "About",
    title: "Meet Aya",
    paragraphs: [
      "Aya Emam is a real estate consultant and investment portfolio manager based in Abu Dhabi. She works with PSI, advising clients who want clarity in the UAE property market rather than a high-pressure sales process.",
      "Her approach is consultative: understand the person, the objective and the horizon first — then identify opportunities that actually fit. That may mean an investment, a home, an off-plan purchase, or simply a clearer reading of the market.",
      "Before real estate, Aya built her career in enterprise sales at Oracle, working with customers on technology and cloud solutions. She holds an MBA from Heriot-Watt University and a BSc in Digital Media Engineering and Technology from the German University in Cairo.",
      "She writes about Abu Dhabi as an investment destination, including branded residences and districts such as Saadiyat Island, Yas Island and Al Maryah Island — always with the same emphasis: look beyond advertised yield, and choose with intention.",
    ],
    linkedinCta: "View LinkedIn Profile",
  },
  trust: {
    quote:
      "Property decisions are personal. My role is to simplify the market, identify the right opportunities, and help clients make confident decisions.",
    values: [
      {
        title: "Market Knowledge",
        text: "A clear reading of areas, developers and positioning — especially across Abu Dhabi.",
      },
      {
        title: "Personal Advisory",
        text: "Every recommendation starts with your objectives, budget and timeline.",
      },
      {
        title: "Investment Perspective",
        text: "Opportunities are reviewed for fit and horizon, not simply presented as inventory.",
      },
    ],
  },
  why: {
    title: "Beyond Finding a Property",
    lede:
      "Most clients are not looking for another list of units. They want clarity, a grounded understanding of the market, access to relevant opportunities, and someone who represents their interests while they decide.",
    pillars: [
      {
        title: "Personal",
        text: "Every conversation starts with the client's objectives.",
      },
      {
        title: "Selective",
        text: "Focus on relevant opportunities rather than overwhelming clients with inventory.",
      },
      {
        title: "Transparent",
        text: "Clear explanation of price, payment plans, potential advantages and considerations.",
      },
      {
        title: "Long-Term",
        text: "Relationships should continue beyond a single transaction.",
      },
    ],
  },
  consultation: {
    title: "Tell Me What You're Looking For.",
    text: "Whether you're exploring an investment, buying a home or simply trying to understand the UAE property market, start with a conversation.",
    cta: "Start a Conversation",
  },
  disclaimer:
    "Information presented on this website is for general informational purposes and does not constitute financial or investment advice.",
} as const;

export type Profile = typeof profile;
