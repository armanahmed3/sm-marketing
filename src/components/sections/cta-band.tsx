import { Button } from "@/components/ui/button";
import { useQuote } from "@/lib/quote-context";
import { site } from "@/lib/site";

export function CtaBand() {
  const { setQuoteOpen, setConsultOpen } = useQuote();
  return (
    <section className="border-t border-fg/8 bg-elevated">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Accepting new client projects · Karachi HQ</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl leading-none text-fg sm:text-6xl">
            Ready to build the next high-impact digital asset?
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={() => setConsultOpen(true)}>
            Schedule discovery call
          </Button>
          <Button size="lg" variant="outline" onClick={() => setQuoteOpen(true)}>
            Request custom quote
          </Button>
        </div>
      </div>
      <p className="sr-only">{site.phone}</p>
    </section>
  );
}
