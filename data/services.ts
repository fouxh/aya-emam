export const services = [
  {
    number: "01",
    title: "Property Investment Advisory",
    description:
      "Helping investors evaluate opportunities based on objectives, budget, location and investment horizon.",
  },
  {
    number: "02",
    title: "Property Acquisition",
    description:
      "Supporting buyers throughout property discovery, evaluation and purchasing — with representation that puts the client's interests first.",
  },
  {
    number: "03",
    title: "UAE Market Guidance",
    description:
      "Helping international and UAE-based clients understand areas, developers, payment plans and market positioning, with particular depth in Abu Dhabi.",
  },
  {
    number: "04",
    title: "Portfolio & Opportunity Review",
    description:
      "Reviewing selected opportunities from an investment perspective rather than simply presenting listings.",
  },
  {
    number: "05",
    title: "Off-Plan Advisory",
    description:
      "Explaining payment plans, project positioning, developer reputation and exit considerations before a commitment is made.",
  },
] as const;

export type Service = (typeof services)[number];
