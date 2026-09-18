import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { useQuote } from "@/lib/quote-context";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.service.title ?? "Service"} | SM Marketing`,
      },
    ],
  }),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const { setQuoteOpen, setConsultOpen } = useQuote();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="absolute inset-0 size-full object-cover outline-none"
        />
        <div className="absolute inset-0 bg-bg/80" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-muted hover:text-fg"
          >
            <ArrowLeft className="size-3.5" /> Back to all services
          </Link>
          <p className="eyebrow mt-8">{service.kicker} · SM Marketing</p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-none text-fg sm:text-7xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted">{service.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => setConsultOpen(true)}>
              Architectural consultation
            </Button>
            <Button size="lg" variant="outline" onClick={() => setQuoteOpen(true)}>
              View pricing packages
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2 className="font-display mt-3 text-4xl text-fg">
            Master deliverables in scope
          </h2>
          <ul className="mt-6 space-y-3">
            {service.points.map((p) => (
              <li
                key={p}
                className="rounded-xl bg-surface px-4 py-3 text-sm text-fg shadow-ring"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-surface p-8 shadow-ring">
          <p className="eyebrow">Investment tier</p>
          <p className="mt-3 text-sm text-muted">
            Custom scoped from project complexity, integrations, and the
            performance you need. Use the estimator for a live PKR range, then
            we lock a written proposal after consult.
          </p>
          <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Deployment · global edge / cloud native
          </p>
        </div>
      </section>

      <section className="border-t border-fg/8 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="eyebrow">Explore other disciplines</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((svc) => (
              <Link
                key={svc.slug}
                to="/services/$slug"
                params={{ slug: svc.slug }}
                className="rounded-2xl bg-elevated p-6 shadow-ring transition-colors hover:bg-elevated/80"
              >
                <h3 className="font-display text-2xl text-fg">{svc.title}</h3>
                <p className="mt-2 text-sm text-muted">{svc.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
