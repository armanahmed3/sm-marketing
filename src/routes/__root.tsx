import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import appCss from "../styles.css?url";

const APP_NAME = "SM Marketing";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} | Digital Solutions Tailored for Growth` },
      {
        name: "description",
        content:
          "SM Marketing is a Karachi software house for websites, modern design, and marketing strategy. Complimentary consultation. Office at Ruby Heights, Sharfabad.",
      },
      { name: "theme-color", content: "#05070c" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-3 text-5xl text-fg">Page not found</h1>
      <p className="mt-3 text-sm text-muted">
        That route does not exist. Head back to the studio homepage.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Return home</Link>
      </Button>
    </main>
  );
}
