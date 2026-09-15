import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center pt-24">
      <Container>
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">404</p>
        <h1 className="mt-4 font-serif text-5xl text-charcoal">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          The page you were looking for does not exist. Return home to continue
          exploring Aya&apos;s advisory work.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </main>
  );
}
