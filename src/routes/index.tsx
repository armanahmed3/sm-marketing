import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Timer,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { useQuote } from "@/lib/quote-context";
import {
  articles,
  faqs,
  pillars,
  process,
  projects,
  reasons,
  services,
  site,
  skills,
  testimonials,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "SM Marketing | Innovative Software House for Business Growth" }],
  }),
});

function Home() {
  const { setQuoteOpen, setConsultOpen } = useQuote();

  return (
    <main>
      <section className="relative min-h-[min(92vh,920px)] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover outline-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="relative mx-auto flex min-h-[min(92vh,920px)] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <div className="stagger-in max-w-3xl">
            <p className="eyebrow">Karachi software house · {site.addressShort}</p>
            <h1 className="font-display mt-4 text-5xl leading-[0.9] text-fg sm:text-7xl lg:text-8xl">
              Innovative software house for business growth
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
              {site.description} Complimentary consultation. Direct access to
              the people who build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => setConsultOpen(true)}>
                Discover more
              </Button>
              <Button size="lg" variant="outline" onClick={() => setQuoteOpen(true)}>
                Get a quote
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {["Complimentary consult", "Fast service", "Free support"].map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-full border border-fg/12 bg-bg/40 px-3 py-1.5 text-xs font-semibold text-fg backdrop-blur-sm"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-fg/8 bg-surface">
        <div className="marquee-track flex w-max gap-10 py-4 pr-10 text-xs font-semibold tracking-[0.22em] text-muted uppercase">
          {[...skills, ...skills].map((skill, i) => (
            <span key={`${skill}-${i}`} className="flex items-center gap-10">
              {skill}
              <span className="text-primary">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-3">
        {pillars.map((item, i) => {
          const Icon = [Zap, Headphones, Timer][i] ?? Zap;
          return (
            <article
              key={item.title}
              className="rounded-2xl bg-surface p-6 shadow-ring transition-[box-shadow] duration-150 hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.14)]"
            >
              <Icon className="size-5 text-primary" />
              <h2 className="font-display mt-5 text-3xl text-fg">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          );
        })}
      </section>

      <section className="border-t border-fg/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="font-display mt-3 text-4xl text-fg sm:text-6xl">
                Comprehensive work, tailored to the brief
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">
                All services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                to="/services/$slug"
                params={{ slug: svc.slug }}
                className="group flex flex-col rounded-2xl bg-surface p-6 shadow-ring transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.14)]"
              >
                <span className="font-display text-5xl text-fg/15 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-3xl text-fg">{svc.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{svc.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-primary">
                  View specs <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-fg/8 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow">How we build</p>
          <h2 className="font-display mt-3 text-4xl text-fg sm:text-6xl">
            A 4-step agile process
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((step) => (
              <li key={step.step}>
                <p className="font-display text-5xl text-primary">{step.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-fg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-fg/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Latest work</p>
              <h2 className="font-display mt-3 text-4xl text-fg sm:text-6xl">
                Showcasing recent projects
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/portfolio">View full portfolio</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <Link
                key={project.slug}
                to="/portfolio"
                className="group overflow-hidden rounded-2xl bg-surface shadow-ring"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary uppercase">
                    {project.category}
                  </p>
                  <h3 className="font-display mt-1 text-2xl text-fg">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{project.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-fg/8 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2 className="font-display mt-3 text-4xl text-fg sm:text-6xl">
              Why you should choose SM Marketing
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              Expert-driven strategies and results that accelerate brand growth.
              We deliver tailored solutions with a focus on visibility,
              engagement, and conversions.
            </p>
            <Button className="mt-8" onClick={() => setConsultOpen(true)}>
              Complimentary consultation
            </Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <li key={item.title} className="rounded-2xl bg-elevated p-5 shadow-ring">
                <BadgeCheck className="size-5 text-primary" />
                <h3 className="mt-3 font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-fg/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Client testimonials</p>
          <h2 className="font-display mt-3 text-4xl text-fg sm:text-6xl">
            Success stories and feedback
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="flex flex-col rounded-2xl bg-surface p-6 shadow-ring"
              >
                <p className="flex-1 text-sm leading-relaxed text-fg">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-fg/8 pt-4">
                  <cite className="not-italic">
                    <span className="block font-semibold text-fg">{item.name}</span>
                    <span className="text-xs text-muted">{item.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-fg/8 bg-elevated">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            ["100%", "Code & IP ownership"],
            ["2 hrs", "Weekday response SLA"],
            ["Karachi", "In-house specialist team"],
            ["Free", "Strategy consultation"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-display text-5xl text-fg tabular-nums">{stat}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-fg/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Articles</p>
          <h2 className="font-display mt-3 text-4xl text-fg sm:text-6xl">
            Insights and trends
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {articles.map((post) => (
              <article key={post.title} className="border-t border-fg/12 pt-5">
                <p className="text-xs text-faint">{post.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-fg">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-fg/8 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Questions</p>
          <h2 className="font-display mt-3 text-4xl text-fg sm:text-5xl">
            Frequently asked
          </h2>
          <dl className="mt-10 divide-y divide-fg/8 border-y border-fg/8">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-fg">
                  {item.q}
                  <span className="text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm text-muted">{item.a}</p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
