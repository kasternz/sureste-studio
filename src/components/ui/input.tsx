import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full border border-line bg-cream px-4 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-stone focus:border-copper",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-stone focus:border-copper",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted",
        className,
      )}
      {...props}
    />
  );
}
