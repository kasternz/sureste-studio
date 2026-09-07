import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-[0.72rem] font-medium tracking-[0.22em] uppercase transition-[background-color,color,border-color,transform] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        copper:
          "bg-copper text-ivory hover:bg-copper-deep",
        dark: "bg-espresso text-ivory hover:bg-ink",
        outline:
          "border border-line bg-transparent text-ink hover:border-copper hover:text-copper-deep",
        ghost:
          "border border-ivory/40 bg-transparent text-ivory hover:border-ivory hover:bg-ivory/10",
        ivory: "bg-ivory text-espresso hover:bg-paper",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-12 px-8",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: { variant: "copper", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
