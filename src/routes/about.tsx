import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { useQuote } from "@/lib/quote-context";
import { reasons, team, testimonials } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | SM Marketing" },
      {
        name: "description",
        content:
          "SM Marketing is a Karachi software house dedicated to original digital work, trained specialists, and complimentary strategy.",
      },
    ],
  }),
});

function AboutPage() {
  const { setConsultOpen } = useQuote();

  return (
    <main>
      <PageHero
        kicker="About us"
        title="Create work that still looks expensive in five years."
        text="We are dedicated to outstanding service and top-tier training for our team. We believe in original, impactful solutions that stand the test of time."
        actions={
          <Button size="lg" onClick={() => setConsultOpen(true)}>
            Free consultation
          </Button>
        }
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/images/about.jpg"
            alt="SM Marketing studio"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Innovative solutions</p>
          <h2 className="font-display mt-3 text-4xl text-fg sm:text-5xl">
            Dedicated service. Customer-focused.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            At SM Marketing we craft customized marketing strategies and
            software so businesses can reach their full potential. Fast results,
            tailored to unique needs — growth, brand, and a competitive market
            presence.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Great achievements are never the work of one individual. They are
            the result of a dedicated team.
          </p>
        </div>
      </section>

      <section className="border-t border-fg/8 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Best team members</p>
          <h2 className="font-display mt-3 text-4xl text-fg sm:text-6xl">
            Meet the expert team
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="rounded-2xl bg-elevated p-6 shadow-ring"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 font-display text-2xl text-primary">
                  {person.name
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-fg">{person.name}</h3>
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-fg/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Why us</p>
          <h2 className="font-display mt-3 text-4xl text-fg">What we stand on</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <article key={item.title} className="rounded-2xl bg-surface p-6 shadow-ring">
                <h3 className="font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-fg/8 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Customers</p>
          <h2 className="font-display mt-3 text-4xl text-fg sm:text-5xl">
            What our customers are saying
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-2xl bg-elevated p-6 shadow-ring">
                <p className="text-sm text-fg">“{item.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-muted">
                  {item.name} · {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
