import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/lib/quote-context";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | SM Marketing" },
      {
        name: "description",
        content: `Reach SM Marketing at ${site.phone} or ${site.email}. ${site.address}.`,
      },
    ],
  }),
});

function ContactPage() {
  const { setQuoteOpen } = useQuote();

  return (
    <main>
      <PageHero
        kicker="Contact with us"
        title="Reach out for expert assistance today."
        text="Write us a message, book a consult, or call the studio. Under two-hour response on weekdays."
        actions={
          <Button size="lg" variant="outline" onClick={() => setQuoteOpen(true)}>
            Open quote estimator
          </Button>
        }
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <Info
            icon={<Phone className="size-4 text-primary" />}
            label="Call anytime"
            value={site.phone}
            href={site.phoneHref}
          />
          <Info
            icon={<Mail className="size-4 text-primary" />}
            label="Send email"
            value={site.email}
            href={site.emailHref}
          />
          <Info
            icon={<MapPin className="size-4 text-primary" />}
            label="Visit anytime"
            value={site.address}
          />
          <Info
            icon={<Clock className="size-4 text-primary" />}
            label="Hours"
            value={site.hours}
          />
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="SM Marketing office map"
              className="h-56 w-full border-0 grayscale contrast-125"
              loading="lazy"
              src="https://maps.google.com/maps?q=Ruby%20Heights%20Sharfabad%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

function Info({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = href ? (
    <a href={href} className="text-sm font-semibold text-fg hover:text-primary">
      {value}
    </a>
  ) : (
    <p className="text-sm font-semibold text-fg">{value}</p>
  );
  return (
    <div className="flex gap-4 rounded-2xl bg-surface p-5 shadow-ring">
      <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <div>
        <p className="eyebrow">{label}</p>
        <div className="mt-1">{inner}</div>
      </div>
    </div>
  );
}
