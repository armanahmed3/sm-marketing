import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    const existing = JSON.parse(localStorage.getItem("sm-inquiries") || "[]") as unknown[];
    localStorage.setItem(
      "sm-inquiries",
      JSON.stringify([{ ...payload, at: new Date().toISOString() }, ...existing]),
    );
    setSent(true);
    e.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8">
        <p className="eyebrow">Message sent</p>
        <h3 className="font-display mt-2 text-3xl text-fg">
          We will be in touch shortly.
        </h3>
        <p className="mt-2 text-sm text-muted">
          A specialist reviews every inquiry. Expect a reply within two working
          hours.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "space-y-4" : "space-y-5 rounded-2xl bg-surface p-6 shadow-ring sm:p-8"}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" required placeholder="Full name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="+92 …" />
        </div>
        <div>
          <Label htmlFor="service">Requested service</Label>
          <Input id="service" name="service" placeholder="Website, ads, app…" />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Project details</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us what you want to build or grow."
        />
      </div>
      <Button type="submit" size="lg">
        Send a message
      </Button>
    </form>
  );
}
