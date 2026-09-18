import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio | SM Marketing" },
      {
        name: "description",
        content:
          "Selected website, app, identity, and e-commerce work from SM Marketing.",
      },
    ],
  }),
});

const filters = ["All", "Website Design", "Mobile Apps", "Logo Design", "E-Commerce"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <main>
      <PageHero
        kicker="Portfolio"
        title="Work that has to perform in the wild."
        text="Websites, apps, identities, and stores. Filtered by the craft, not the industry fad."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "primary" : "outline"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {items.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">
            No projects in this category yet.
          </p>
        ) : null}
      </section>

      <CtaBand />
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-surface shadow-ring">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="size-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary uppercase">
          {project.category} · {project.year}
        </p>
        <h2 className="font-display mt-1 text-2xl text-fg">{project.title}</h2>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        <p className={cn("mt-3 text-xs text-faint")}>Client · {project.client}</p>
      </div>
    </article>
  );
}
