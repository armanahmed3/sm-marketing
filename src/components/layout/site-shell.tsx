import type { ReactNode } from "react";
import { ConsultDialog } from "@/components/consult-dialog";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { QuoteEstimator } from "@/components/quote-estimator";
import { QuoteProvider } from "@/lib/quote-context";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <QuoteProvider>
      <div className="flex min-h-dvh flex-col bg-bg text-fg">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
      <QuoteEstimator />
      <ConsultDialog />
    </QuoteProvider>
  );
}
