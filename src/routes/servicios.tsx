import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { faqs, processSteps, products, services } from "@/data/content";

export const Route = createFileRoute("/servicios")({
  component: ServiciosPage,
  head: () => ({
    meta: [{ title: "Servicios — Sureste Studio" }],
  }),
});

function ServiciosPage() {
  return (
    <>
      <PageHero
        kicker="Servicios"
        title="Diseño, producción e instalación de señalética."
        lead="Un estudio que cubre el ciclo completo: wayfinding, identidad en el espacio, taller e instalación en obra."
        image="/images/instalacion.jpg"
      />

      <section className="container-site py-20 md:py-24">
        <div className="grid gap-10">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/servicios/$slug"
              params={{ slug: s.slug }}
              className={`group grid overflow-hidden border border-line bg-cream md:grid-cols-12 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div
                className={`flex flex-col justify-center p-8 md:col-span-7 md:p-12 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="eyebrow">{s.kicker}</p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.1em] text-ink md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-lg text-muted leading-relaxed">{s.summary}</p>
                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.22em] text-copper">
                  Ver servicio →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-espresso py-20 text-ivory md:py-24">
        <div className="container-site">
          <p className="eyebrow text-copper-bright">Producción</p>
          <h2 className="display-lg mt-4">Piezas que fabricamos.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.title} className="border border-ivory/10 p-6">
                <h3 className="font-display text-xl tracking-[0.08em]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-24">
        <p className="eyebrow">Método</p>
        <h2 className="display-lg mt-4 text-ink">Cinco pasos, un responsable.</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="border-t border-line pt-6">
              <p className="font-display text-sm tracking-[0.2em] text-copper">{step.n}</p>
              <h3 className="mt-3 font-display text-xl tracking-[0.08em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Preguntas</p>
          <h2 className="display-lg mt-4 text-ink">Antes de cotizar.</h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg tracking-[0.04em] text-ink">
                  {f.q}
                  <span className="text-copper transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link to="/contacto">Hablar de un proyecto</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
