type Bucket = number[];

const hits = new Map<string, Bucket>();

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 10 * 60 * 1000,
) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return { ok: false as const, retryAfterMs: windowMs - (now - recent[0]) };
  }

  recent.push(now);
  hits.set(key, recent);
  return { ok: true as const };
}
