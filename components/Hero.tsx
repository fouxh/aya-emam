"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:pb-20 lg:items-center lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-[-12%] right-[-8%] h-[520px] w-[520px] rounded-full border border-champagne/35" />
        <div className="absolute top-[18%] right-[6%] h-[340px] w-[340px] rotate-[18deg] border border-charcoal/10" />
        <div className="absolute right-[18%] bottom-[8%] h-40 w-40 rounded-full bg-champagne/20 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <div className="order-1 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-[11px] tracking-[0.28em] text-muted uppercase"
          >
            {profile.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-5 font-serif text-[2.55rem] leading-[1.08] text-charcoal sm:text-5xl lg:text-[3.65rem]"
          >
            {profile.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-6 max-w-[34rem] text-[15px] leading-7 text-ink/80 sm:text-base"
          >
            {profile.hero.lede}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/#contact">{profile.hero.primaryCta}</Button>
            <Button href="/#opportunities" variant="secondary">
              {profile.hero.secondaryCta}
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-6 text-[11px] tracking-[0.16em] text-muted uppercase"
          >
            {profile.hero.trustLine}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease }}
          className="relative order-2 mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          <div className="absolute top-8 left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-[40%_60%_55%_45%] border border-champagne/40" />
          <div className="absolute top-16 right-[8%] h-2/3 w-2/3 rotate-6 border border-charcoal/10" />
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[460px]">
            <Image
              src={profile.images.hero}
              alt={`${profile.name}, ${profile.title} in Abu Dhabi`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-contain object-bottom"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
          </div>
        </motion.div>
      </Container>

      <a
        href="/#about"
        aria-label="Scroll to about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.28em] text-muted uppercase sm:flex"
      >
        Scroll
        <span className="relative h-9 w-px overflow-hidden bg-charcoal/15">
          <motion.span
            className="absolute inset-x-0 h-3 bg-charcoal"
            animate={{ y: ["-100%", "220%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </section>
  );
}
