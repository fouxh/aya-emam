"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { navItems } from "@/lib/site";
import { profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`pointer-events-auto mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled || open
            ? "border-charcoal/10 bg-ivory/80 shadow-[0_10px_40px_rgba(27,25,22,0.08)] backdrop-blur-xl"
            : "border-transparent bg-ivory/25 backdrop-blur-[2px]"
        }`}
      >
        <Link href="/#home" className="wordmark shrink-0 text-[12px] text-charcoal">
          Aya Emam
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] tracking-[0.12em] text-ink/80 uppercase transition-colors hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="hidden xl:block">
            <SocialLinks />
          </div>
          <Button href="/#contact" className="!px-5 !py-2.5">
            {profile.consultationLabel}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button href="/#contact" className="!px-4 !py-2 text-[11px]">
            Consult
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span className={`h-px w-full bg-charcoal transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-charcoal transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-charcoal transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1180px] rounded-[28px] border border-charcoal/10 bg-ivory/95 p-6 shadow-[0_20px_60px_rgba(27,25,22,0.12)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-charcoal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <SocialLinks />
            <Button href="/#contact" onClick={() => setOpen(false)}>
              {profile.consultationLabel}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
