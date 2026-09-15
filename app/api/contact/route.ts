import { NextRequest, NextResponse } from "next/server";
import { validateContact } from "@/lib/contact";
import { sendLeadNotification } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`contact:${ip}`);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Please wait a few minutes before sending another request." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    String((body as { website?: string }).website ?? "").trim()
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = validateContact(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const delivered = await sendLeadNotification(parsed.data);
  if (!delivered.ok) {
    return NextResponse.json({ error: delivered.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
