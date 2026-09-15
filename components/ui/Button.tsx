import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-charcoal text-ivory hover:bg-ink focus-visible:outline-charcoal",
  secondary:
    "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  light: "bg-ivory text-charcoal hover:bg-ivory-deep",
  ghost:
    "text-charcoal hover:text-ink underline decoration-champagne/80 underline-offset-[6px] hover:decoration-gold",
} as const;

type Variant = keyof typeof variants;

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const className = props.className ?? "";
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] tracking-[0.14em] uppercase transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const extra = props.disabled ? "pointer-events-none opacity-60" : "";
    const external = props.href.startsWith("http");

    if (external) {
      return (
        <a
          href={props.href}
          className={`${classes} ${extra}`}
          target="_blank"
          rel="noreferrer"
          onClick={props.onClick}
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={`${classes} ${extra}`} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const { children, type = "button", variant: _v, className: _c, ...rest } =
    buttonProps;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
