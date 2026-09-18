import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-fg/12 bg-elevated px-3.5 text-sm text-fg placeholder:text-faint outline-none transition-[border-color,box-shadow] duration-150 focus:border-primary/50 focus:ring-2 focus:ring-primary/25",
        className,
      )}
      {...props}
    />
  );
}
