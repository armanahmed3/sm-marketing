import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQuote } from "@/lib/quote-context";
import { cn } from "@/lib/utils";

const pages = [
  { id: "1", label: "1 page landing", extra: 0 },
  { id: "5", label: "Up to 5 pages", extra: 45000 },
  { id: "10", label: "Up to 10 pages", extra: 95000 },
  { id: "20", label: "20+ enterprise", extra: 180000 },
] as const;

const designs = [
  { id: "ess", label: "Essential system", extra: 0 },
  { id: "custom", label: "Custom art direction", extra: 40000 },
  { id: "premium", label: "Premium brand + motion", extra: 90000 },
] as const;

const addons = [
  { id: "seo", label: "SEO foundation", extra: 25000 },
  { id: "shop", label: "E-commerce", extra: 85000 },
  { id: "cms", label: "Managed CMS", extra: 35000 },
  { id: "app", label: "Companion app", extra: 160000 },
  { id: "ads", label: "90-day campaigns", extra: 70000 },
] as const;

const speeds = [
  { id: "std", label: "Standard (4–6 weeks)", mult: 1 },
  { id: "fast", label: "Priority (2–3 weeks)", mult: 1.25 },
  { id: "rush", label: "Rush (7–14 days)", mult: 1.5 },
] as const;

const BASE = 55000;

function formatPkr(n: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function QuoteEstimator() {
  const { quoteOpen, setQuoteOpen, setConsultOpen } = useQuote();
  const [page, setPage] = useState<(typeof pages)[number]["id"]>("5");
  const [design, setDesign] = useState<(typeof designs)[number]["id"]>("custom");
  const [speed, setSpeed] = useState<(typeof speeds)[number]["id"]>("std");
  const [selected, setSelected] = useState<string[]>(["seo"]);

  const total = useMemo(() => {
    const p = pages.find((x) => x.id === page)?.extra ?? 0;
    const d = designs.find((x) => x.id === design)?.extra ?? 0;
    const a = addons
      .filter((x) => selected.includes(x.id))
      .reduce((sum, x) => sum + x.extra, 0);
    const m = speeds.find((x) => x.id === speed)?.mult ?? 1;
    return Math.round((BASE + p + d + a) * m);
  }, [page, design, speed, selected]);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  return (
    <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
      <DialogContent>
        <DialogTitle className="font-display pr-10 text-3xl text-fg">
          Custom WebScope Estimator
        </DialogTitle>
        <DialogDescription className="text-sm text-muted">
          Configure features and get a live PKR range. Final proposals follow a
          complimentary consult.
        </DialogDescription>

        <fieldset className="mt-6 space-y-2">
          <Label>Number of pages</Label>
          <div className="grid grid-cols-2 gap-2">
            {pages.map((opt) => (
              <Choice
                key={opt.id}
                active={page === opt.id}
                onClick={() => setPage(opt.id)}
                label={opt.label}
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5 space-y-2">
          <Label>Visual design architecture</Label>
          <div className="grid gap-2">
            {designs.map((opt) => (
              <Choice
                key={opt.id}
                active={design === opt.id}
                onClick={() => setDesign(opt.id)}
                label={opt.label}
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5 space-y-2">
          <Label>Integrated capabilities</Label>
          <div className="grid grid-cols-2 gap-2">
            {addons.map((opt) => (
              <Choice
                key={opt.id}
                active={selected.includes(opt.id)}
                onClick={() => toggle(opt.id)}
                label={opt.label}
                check
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5 space-y-2">
          <Label>Delivery turnaround</Label>
          <div className="grid gap-2">
            {speeds.map((opt) => (
              <Choice
                key={opt.id}
                active={speed === opt.id}
                onClick={() => setSpeed(opt.id)}
                label={opt.label}
              />
            ))}
          </div>
        </fieldset>

        <div className="mt-6 rounded-xl bg-elevated px-5 py-4">
          <p className="eyebrow">Estimated total investment</p>
          <p className="font-display mt-1 text-4xl text-fg tabular-nums">
            {formatPkr(total)}
          </p>
          <p className="mt-1 text-xs text-faint">
            Includes SSL, launch support, and a complimentary strategy session.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button
            className="flex-1"
            onClick={() => {
              setQuoteOpen(false);
              setConsultOpen(true);
            }}
          >
            Transfer quote to inquiry
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setQuoteOpen(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Choice({
  active,
  onClick,
  label,
  check,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  check?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-11 items-center gap-2 rounded-lg border px-3 text-left text-xs font-semibold transition-colors",
        active
          ? "border-primary/50 bg-primary/10 text-fg"
          : "border-fg/10 bg-elevated text-muted hover:border-fg/20 hover:text-fg",
      )}
    >
      {check ? (
        <span
          className={cn(
            "flex size-4 items-center justify-center rounded-xs border",
            active
              ? "border-primary bg-primary text-primary-fg"
              : "border-fg/20",
          )}
        >
          {active ? <Check className="size-3" strokeWidth={3} /> : null}
        </span>
      ) : null}
      {label}
    </button>
  );
}
