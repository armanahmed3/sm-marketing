import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-[transform,background-color,color,box-shadow,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg hover:bg-primary/90 shadow-[0_0_0_1px_rgb(18_196_138_/_0.4)]",
        outline:
          "border border-fg/15 bg-transparent text-fg hover:border-fg/35 hover:bg-fg/5",
        ghost: "text-fg hover:bg-fg/8",
        inverted: "bg-fg text-bg hover:bg-fg/90",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
