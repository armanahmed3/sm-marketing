import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type QuoteContextValue = {
  quoteOpen: boolean;
  consultOpen: boolean;
  setQuoteOpen: (open: boolean) => void;
  setConsultOpen: (open: boolean) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const value = useMemo(
    () => ({ quoteOpen, consultOpen, setQuoteOpen, setConsultOpen }),
    [quoteOpen, consultOpen],
  );
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}
