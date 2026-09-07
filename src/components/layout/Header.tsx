"use client";

import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 24);
  }, [pathname]);

  const dark = pathname === "/" && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        !dark
          ? "border-b border-line bg-ivory/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link to="/" className="flex items-center gap-3" aria-label={site.name}>
          <img
            src="/emblem.png"
            alt=""
            className="h-10 w-auto md:h-11"
            style={{ outline: "none" }}
          />
          <span className="hidden leading-none sm:block">
            <span
              className={cn(
                "block font-display text-[0.82rem] tracking-[0.32em]",
                dark ? "text-ivory" : "text-ink",
              )}
            >
              SURESTE
            </span>
            <span
              className={cn(
                "mt-0.5 block font-display text-[0.58rem] tracking-[0.42em]",
                dark ? "text-ivory/70" : "text-muted",
              )}
            >
              STUDIO
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors duration-150",
                  dark
                    ? active
                      ? "text-ivory"
                      : "text-ivory/70 hover:text-ivory"
                    : active
                      ? "text-copper-deep"
                      : "text-ink/70 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant={dark ? "ghost" : "copper"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link to="/contacto">Cotizar</Link>
          </Button>
          <button
            type="button"
            className={cn(
              "flex size-11 items-center justify-center lg:hidden",
              dark ? "text-ivory" : "text-ink",
            )}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-line bg-ivory lg:hidden">
          <nav className="container-wide flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-12 items-center font-display text-xl tracking-[0.12em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link to="/contacto">Cotizar proyecto</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
