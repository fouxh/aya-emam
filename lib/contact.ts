export const interestOptions = [
  "Investment",
  "Buying a Home",
  "Off-Plan Property",
  "UAE Property Market Consultation",
  "Other",
] as const;

export const budgetOptions = [
  "Under AED 1M",
  "AED 1M – 2.5M",
  "AED 2.5M – 5M",
  "AED 5M – 10M",
  "AED 10M+",
  "Prefer to discuss",
] as const;

export type InterestOption = (typeof interestOptions)[number];
export type BudgetOption = (typeof budgetOptions)[number];

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  country: string;
  interest: InterestOption;
  budget: BudgetOption;
  message: string;
};

export type ContactRequest = ContactPayload & {
  website?: string;
};

function isInterest(value: string): value is InterestOption {
  return (interestOptions as readonly string[]).includes(value);
}

function isBudget(value: string): value is BudgetOption {
  return (budgetOptions as readonly string[]).includes(value);
}

export function validateContact(
  input: unknown,
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const body = input as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const country = String(body.country ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return { ok: false, error: "Please enter your full name." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (phone.replace(/\D/g, "").length < 7 || phone.length > 30) {
    return { ok: false, error: "Please enter a valid phone or WhatsApp number." };
  }

  if (country.length < 2 || country.length > 56) {
    return { ok: false, error: "Please enter your country." };
  }

  if (!isInterest(interest)) {
    return { ok: false, error: "Please select what you are interested in." };
  }

  if (!isBudget(budget)) {
    return { ok: false, error: "Please select an approximate budget." };
  }

  if (message.length < 10 || message.length > 2000) {
    return { ok: false, error: "Please add a short message (at least 10 characters)." };
  }

  return {
    ok: true,
    data: { name, email, phone, country, interest, budget, message },
  };
}

export function formatEnquiryEmail(data: ContactPayload, submittedAt: Date) {
  const when = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Dubai",
  }).format(submittedAt);

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country}`,
    `Interest: ${data.interest}`,
    `Budget: ${data.budget}`,
    `Message: ${data.message}`,
    `Date/time: ${when} (Gulf Standard Time)`,
  ];

  return {
    subject: `New Website Enquiry — ${data.name}`,
    text: lines.join("\n"),
    html: `
      <div style="font-family: Georgia, 'Times New Roman', serif; color: #1c1a17; line-height: 1.6;">
        <p style="letter-spacing: 0.18em; text-transform: uppercase; font-size: 12px; color: #7a7368;">Aya Emam · Website enquiry</p>
        <h1 style="font-weight: 400; font-size: 22px;">New enquiry from ${escapeHtml(data.name)}</h1>
        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
          ${row("Name", data.name)}
          ${row("Email", data.email)}
          ${row("Phone", data.phone)}
          ${row("Country", data.country)}
          ${row("Interest", data.interest)}
          ${row("Budget", data.budget)}
          ${row("Message", data.message)}
          ${row("Date/time", `${when} (Gulf Standard Time)`)}
        </table>
      </div>
    `,
  };
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px 10px 0; border-bottom: 1px solid #e6e0d6; width: 140px; color: #7a7368; vertical-align: top;">${escapeHtml(label)}</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6e0d6; white-space: pre-wrap;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
