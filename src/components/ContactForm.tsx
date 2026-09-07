"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { projectTypes } from "@/data/content";

const KEY = "sureste-cotizaciones";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!String(data.nombre).trim() || !String(data.email).trim()) {
      toast.error("Nombre y correo son necesarios.");
      return;
    }
    setPending(true);
    const prev = JSON.parse(localStorage.getItem(KEY) ?? "[]") as unknown[];
    localStorage.setItem(
      KEY,
      JSON.stringify([{ ...data, at: new Date().toISOString() }, ...prev].slice(0, 20)),
    );
    window.setTimeout(() => {
      setPending(false);
      setSent(true);
      toast.success("Recibimos tu solicitud.");
      form.reset();
    }, 600);
  }

  if (sent) {
    return (
      <div className="border border-line bg-cream p-8 md:p-10">
        <p className="eyebrow">Enviado</p>
        <h3 className="mt-3 font-display text-2xl tracking-[0.08em] text-ink">
          Gracias. Te escribimos en menos de 24 horas.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Un coordinador de proyecto revisará tu brief y te propondrá una visita o
          una videollamada, según el tipo de encargo.
        </p>
        <Button className="mt-8" type="button" variant="outline" onClick={() => setSent(false)}>
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <Label htmlFor="nombre">Nombre</Label>
        <Input id="nombre" name="nombre" required autoComplete="name" />
      </div>
      <div>
        <Label htmlFor="empresa">Empresa o desarrollo</Label>
        <Input id="empresa" name="empresa" autoComplete="organization" />
      </div>
      <div>
        <Label htmlFor="email">Correo</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <Label htmlFor="telefono">Teléfono</Label>
        <Input id="telefono" name="telefono" type="tel" autoComplete="tel" />
      </div>
      <div>
        <Label htmlFor="tipo">Tipo de proyecto</Label>
        <select
          id="tipo"
          name="tipo"
          className="h-12 w-full border border-line bg-cream px-3 text-sm text-ink outline-none focus:border-copper"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="ciudad">Ciudad</Label>
        <Input id="ciudad" name="ciudad" placeholder="Cancún, Tulum, Mérida…" />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="mensaje">Cuéntanos el proyecto</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Tipo de espacio, fechas de apertura, si ya hay identidad de marca…"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={pending} size="lg">
          {pending ? "Enviando…" : "Solicitar cotización"}
        </Button>
        <p className="text-xs text-muted">Respuesta en horario de estudio, Lun–Vie.</p>
      </div>
    </form>
  );
}
