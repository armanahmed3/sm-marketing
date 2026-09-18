import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { useQuote } from "@/lib/quote-context";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | SM Marketing" },
      {
        name: "description",
        content:
          "Website development, modern design, marketing strategy, SEO, apps, and UI/UX from SM Marketing in Karachi.",
      },
    ],
  }),
});

function ServicesPage() {
  const { setQuoteOpen } = useQuote();

  return (
    <main>
      <PageHero
        kicker="Services"
        title="Digital products engineered to perform."
        text="We serve diverse industries with customized digital solutions — latest technology, serious support, no theatre."
        actions={
          <Button size="lg" onClick={() => setQuoteOpen(true)}>
            Launch price estimator
          </Button>
        }
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6">
        {services.map((svc, i) => (
          <article
            key={svc.slug}
            className="grid overflow-hidden rounded-2xl bg-surface shadow-ring lg:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <img
                src={svc.image}
                alt=""
                className="h-full min-h-56 w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="eyebrow">{svc.kicker}</p>
              <h2 className="font-display mt-3 text-4xl text-fg sm:text-5xl">
                {svc.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{svc.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-fg">
                {svc.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-primary">/</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-fit" variant="outline">
                <Link to="/services/$slug" params={{ slug: svc.slug }}>
                  Read more <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </section>

      <CtaBand />
    </main>
  );
}
