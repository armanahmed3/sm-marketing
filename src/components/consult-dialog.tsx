import { useState, type FormEvent } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuote } from "@/lib/quote-context";
import { site } from "@/lib/site";

export function ConsultDialog() {
  const { consultOpen, setConsultOpen } = useQuote();
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
  }

  return (
    <Dialog
      open={consultOpen}
      onOpenChange={(open) => {
        setConsultOpen(open);
        if (!open) setSent(false);
      }}
    >
      <DialogContent>
        <DialogTitle className="font-display pr-10 text-3xl text-fg">
          {sent ? "Inquiry received" : "Book a discovery call"}
        </DialogTitle>
        <DialogDescription className="text-sm text-muted">
          {sent
            ? "Our lead will reply within two working hours on weekdays."
            : `Direct to ${site.email}. NDA-protected. Complimentary first session.`}
        </DialogDescription>

        {sent ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm text-muted">
              Prefer the phone? Call{" "}
              <a className="text-primary" href={site.phoneHref}>
                {site.phone}
              </a>
              .
            </p>
            <Button onClick={() => setConsultOpen(false)}>Done</Button>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="c-name">Full name</Label>
              <Input id="c-name" name="name" required placeholder="Your name" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="c-email">Email</Label>
                <Input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <Label htmlFor="c-phone">Phone</Label>
                <Input id="c-phone" name="phone" required placeholder="+92 …" />
              </div>
            </div>
            <div>
              <Label htmlFor="c-notes">Project notes</Label>
              <Textarea
                id="c-notes"
                name="notes"
                placeholder="Goals, timeline, anything we should know"
              />
            </div>
            <Button type="submit" className="w-full">
              Confirm consultation
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
