import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { nav, site } from "@/lib/site";

export function Footer() {
  const [joined, setJoined] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setJoined(true);
  }

  return (
    <footer className="border-t border-fg/8 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl text-fg">SM Marketing</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            We are a team of developers and marketers passionate about software
            that still looks like a brand. We study the latest trends, adapt to
            new solutions, and ship with the technology the work deserves.
          </p>
          <form onSubmit={onSubmit} className="mt-6 flex max-w-md gap-2">
            <Input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="flex-1"
            />
            <Button type="submit" size="sm" className="shrink-0 px-4">
              {joined ? "Joined" : <ArrowRight className="size-4" />}
            </Button>
          </form>
          <p className="mt-2 text-xs text-faint">
            Engineering updates. No spam.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted">
            <p>{site.address}</p>
            <p>
              <a className="hover:text-fg" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-fg" href={site.emailHref}>
                {site.email}
              </a>
            </p>
            <p className="flex gap-4 pt-2">
              <a
                className="hover:text-fg"
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="hover:text-fg"
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-fg/8 py-5 text-center text-xs text-faint">
        © {new Date().getFullYear()} SM Marketing. All rights reserved.
      </div>
    </footer>
  );
}
