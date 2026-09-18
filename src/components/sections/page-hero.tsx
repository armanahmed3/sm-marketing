import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  text,
  actions,
}: {
  kicker: string;
  title: string;
  text?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-fg/8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="eyebrow">{kicker}</p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[0.92] text-fg sm:text-7xl">
          {title}
        </h1>
        {text ? (
          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{text}</p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
