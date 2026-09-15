/**
 * Professional journey compiled from publicly available LinkedIn information.
 * Periods marked TODO were not reliably dated on the public profile.
 * Do not invent missing dates, titles or employers.
 */
export const experience = [
  {
    period: "Present",
    role: "Sales Leader · Real Estate Consultant · Investment Portfolio Manager",
    company: "PSI",
    location: "Abu Dhabi, United Arab Emirates",
    description:
      "Client advisory across UAE property, with a focus on Abu Dhabi investment opportunities, branded residences and considered acquisition decisions.",
  },
  {
    period: "Previous",
    role: "Territory Sales Manager",
    company: "Oracle",
    location: "",
    description:
      "Enterprise technology sales covering Oracle technologies and cloud solutions, working with customers on fit, reliability and long-term value.",
  },
] as const;

export const education = [
  {
    period: "2021",
    role: "Master of Business Administration (MBA)",
    company: "Heriot-Watt University",
    location: "",
    description:
      "Completed a full-time MBA programme over eighteen months.",
  },
  {
    period: "Earlier",
    role: "BSc, Digital Media Engineering and Technology",
    company: "The German University in Cairo",
    location: "",
    description:
      "Bachelor of Science. Graduation project assessed as Very Good.",
  },
] as const;

export const journey = [...experience, ...education];

export type JourneyItem = (typeof journey)[number];
