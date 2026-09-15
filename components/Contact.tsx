"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { profile } from "@/data/profile";
import { budgetOptions, interestOptions } from "@/lib/contact";
import { whatsappUrl } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent py-3 text-sm text-charcoal placeholder:text-muted/70";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const whatsapp = whatsappUrl(profile.whatsapp, profile.whatsappMessage);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Unable to send your request just now. Please try again.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal sm:text-5xl">
              Begin with a conversation.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-muted">
              Share a little context — what you are considering, where you are
              based, and the budget you have in mind. Aya will follow up
              personally.
            </p>
            <div className="mt-8 space-y-3 text-sm text-ink/80">
              <p>{profile.location}</p>
              <p>
                <a href={`mailto:${profile.email}`} className="hover:text-charcoal">
                  {profile.email}
                </a>
              </p>
              <p>
                <a href={`tel:${profile.phone}`} className="hover:text-charcoal">
                  {profile.phoneDisplay}
                </a>
              </p>
              {whatsapp ? (
                <p>
                  <a href={whatsapp} className="hover:text-charcoal">
                    WhatsApp {profile.phoneDisplay}
                  </a>
                </p>
              ) : null}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            {status === "success" ? (
              <div className="border border-line bg-paper px-8 py-16 text-center">
                <p className="font-serif text-3xl text-charcoal">Thank you.</p>
                <p className="mt-4 text-[15px] leading-7 text-muted">
                  Aya will get back to you shortly.
                </p>
                <Button
                  className="mt-8"
                  variant="secondary"
                  onClick={() => setStatus("idle")}
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6" noValidate>
                <div className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0" aria-hidden="true">
                  <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <Field label="Full Name" name="name" required autoComplete="name" />
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                  <Field
                    label="Phone / WhatsApp"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                  />
                </div>
                <Field label="Country" name="country" required autoComplete="country-name" />
                <div className="grid gap-6 sm:grid-cols-2">
                  <SelectField
                    label="I'm interested in"
                    name="interest"
                    options={interestOptions}
                  />
                  <SelectField
                    label="Approximate Budget"
                    name="budget"
                    options={budgetOptions}
                  />
                </div>
                <label className="block">
                  <span className="text-[11px] tracking-[0.18em] text-muted uppercase">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    className={`${fieldClass} mt-1 resize-y`}
                  />
                </label>

                {status === "error" ? (
                  <p className="text-sm text-red-800" role="alert">
                    {error}
                  </p>
                ) : null}

                <div>
                  <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending…" : "Send My Request"}
                  </Button>
                </div>
              </form>
            )}
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.18em] text-muted uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`${fieldClass} mt-1`}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.18em] text-muted uppercase">
        {label}
      </span>
      <select name={name} required defaultValue="" className={`${fieldClass} mt-1`}>
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
