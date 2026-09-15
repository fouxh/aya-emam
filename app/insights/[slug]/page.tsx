import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getInsight, insights } from "@/data/insights";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `${siteConfig.url}/insights/${article.slug}`,
    },
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  return (
    <main id="main" className="pt-28 pb-24">
      <article>
        <Container className="max-w-[760px]">
          <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
            {article.category} · {article.readTime}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-[17px] leading-8 text-muted">{article.excerpt}</p>
        </Container>

        <div className="relative mx-auto mt-12 aspect-[16/8] w-full max-w-[1100px] overflow-hidden bg-ivory-deep">
          <Image
            src={article.image}
            alt=""
            fill
            priority
            sizes="1100px"
            className="object-cover"
          />
        </div>

        <Container className="mt-12 max-w-[760px] space-y-6 text-[17px] leading-8 text-ink/90">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pt-4 text-sm text-muted">
            Written as a market note from {profile.name}&apos;s desk. It is general
            information, not financial advice.
          </p>
          <div className="pt-4">
            <Button href="/#contact">Discuss this with Aya</Button>
          </div>
        </Container>
      </article>
    </main>
  );
}
