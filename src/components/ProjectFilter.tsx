"use client";

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/content";
import { cn } from "@/lib/utils";

const filters = ["Todos", ...Array.from(new Set(projects.map((p) => p.sector)))];

export function ProjectFilter() {
  const [active, setActive] = useState("Todos");
  const list = useMemo(
    () => (active === "Todos" ? projects : projects.filter((p) => p.sector === active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              "h-10 px-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors duration-150",
              active === f
                ? "bg-espresso text-ivory"
                : "border border-line text-muted hover:text-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {list.map((p) => (
          <Link
            key={p.slug}
            to="/proyectos/$slug"
            params={{ slug: p.slug }}
            className="group block"
          >
            <div className="overflow-hidden bg-paper">
              <img
                src={p.image}
                alt={p.name}
                className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">{p.place} · {p.year}</p>
                <h3 className="mt-2 font-display text-2xl tracking-[0.1em] text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{p.sector}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
