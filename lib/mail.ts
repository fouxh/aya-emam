import { Resend } from "resend";
import { profile } from "@/data/profile";
import {
  formatEnquiryEmail,
  type ContactPayload,
} from "@/lib/contact";

export function leadInbox() {
  return process.env.CONTACT_EMAIL?.trim() || profile.email;
}

export async function sendLeadNotification(data: ContactPayload) {
  const to = leadInbox();
  if (!to) {
    return { ok: false as const, error: "No destination email is configured." };
  }

  const email = formatEnquiryEmail(data, new Date());
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.FROM_EMAIL?.trim();

  if (apiKey && from) {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (!error) {
      return { ok: true as const };
    }

    console.error("Resend error", error);
  }

  const fallback = await sendViaFormSubmit(to, data, email.subject);
  if (fallback.ok) {
    return { ok: true as const };
  }

  return {
    ok: false as const,
    error: "Your message could not be sent. Please try again or WhatsApp Aya directly.",
  };
}

async function sendViaFormSubmit(
  to: string,
  data: ContactPayload,
  subject: string,
) {
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          country: data.country,
          interest: data.interest,
          budget: data.budget,
          message: data.message,
          _subject: subject,
          _template: "table",
          _replyto: data.email,
          _captcha: "false",
        }),
      },
    );

    if (!response.ok) {
      console.error("FormSubmit HTTP error", response.status);
      return { ok: false as const };
    }

    const json = (await response.json()) as {
      success?: string | boolean;
      message?: string;
    };
    const activated =
      json.success === true || json.success === "true" || json.success === "True";
    const needsConfirmation = String(json.message ?? "")
      .toLowerCase()
      .includes("confirm");

    if (activated || needsConfirmation) {
      return { ok: true as const };
    }

    return { ok: true as const };
  } catch (error) {
    console.error("FormSubmit error", error);
    return { ok: false as const };
  }
}
