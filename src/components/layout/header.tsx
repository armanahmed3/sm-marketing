import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/lib/quote-context";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { setQuoteOpen, setConsultOpen } = useQuote();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-[background-color,box-shadow] duration-200",
          scrolled || open
            ? "bg-bg/92 shadow-[0_1px_0_0_rgb(255_255_255_/_0.08)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:h-[4.5rem] sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <img
              src="/images/sm-logo.png"
              alt=""
              className="size-10 rounded-full outline-none sm:size-11"
            />
            <span className="min-w-0">
              <span className="font-display block text-xl leading-none text-fg sm:text-2xl">
                SM Marketing
              </span>
              <span className="hidden text-[0.625rem] tracking-[0.18em] text-muted uppercase sm:block">
                Software · Design · Growth
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-fg/12 px-3 py-2 text-xs font-semibold text-muted transition-colors hover:border-fg/25 hover:text-fg xl:flex"
            >
              <Phone className="size-3.5 text-primary" />
              {site.phone}
            </a>
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => setQuoteOpen(true)}
            >
              Get a quote
            </Button>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-fg/12 text-fg lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 bg-bg/70 transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 flex h-dvh w-[min(100%,22rem)] flex-col bg-surface p-6 shadow-ring transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl">Menu</p>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-fg/12"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl px-3 py-3 text-lg font-semibold text-fg hover:bg-fg/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-3 pt-8">
          <p className="text-xs text-muted">{site.address}</p>
          <a href={site.phoneHref} className="block text-sm font-semibold text-primary">
            {site.phone}
          </a>
          <Button className="w-full" onClick={() => { setOpen(false); setQuoteOpen(true); }}>
            Get a quote
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => { setOpen(false); setConsultOpen(true); }}
          >
            Book consultation
          </Button>
        </div>
      </aside>
    </>
  );
}
