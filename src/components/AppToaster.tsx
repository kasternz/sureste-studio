"use client";

import { Toaster } from "sonner";

export function AppToaster() {
  return (
    <Toaster
      theme="light"
      position="top-center"
      toastOptions={{ className: "font-sans text-sm" }}
    />
  );
}
