import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { site } from "@/data/content";

export const Route = createFileRoute("/estudio")({
  component: EstudioPage,
  head: () => ({
    meta: [{ title: "El estudio — Sureste Studio" }],
  }),
});

const values = [
  {
    title: "Dirección",
    text: "Antes de dibujar, recorremos. El wayfinding empieza en el flujo, no en el letrero.",
  },
  {
    title: "Diseño",
    text: "Tipografía, material y escala al servicio de la arquitectura. Nada que no pertenezca.",
  },
  {
    title: "Oficio",
    text: "Taller propio. Cortes limpios, soldaduras invisibles, cobre que envejece con dignidad.",
  },
  {
    title: "Lugar",
    text: "Trabajamos para el sureste: sol, salitre, chukum, caliza y hospitalidad contemporánea.",
  },
];

function EstudioPage() {
  return (
    <>
      <PageHero
        kicker="Estudio"
        title="Un taller de señalética con oficio de arquitectura."
        lead={site.slogan}
        image="/images/materiales.jpg"
      />

      <section className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">Origen</p>
          <h2 className="display-lg mt-4 text-ink">Hecho en Cancún, para el Caribe.</h2>
        </div>
        <div className="space-y-5 text-muted leading-relaxed md:col-span-6 md:col-start-7">
          <p>
            Sureste Studio nace de la necesidad de un interlocutor único entre el
            arquitecto, el operador hotelero y el taller. Demasiados letreros se
            resuelven como un accesorio. Nosotros los tratamos como parte de la
            obra.
          </p>
          <p>
            Diseñamos sistemas, no piezas sueltas. Una familia de señales —fachada,
            tótem, directorio, habitación, braille— que comparte tipografía,
            proporciones y metal.
          </p>
          <p>
            El estudio cubre Quintana Roo, Yucatán y Campeche. Cuando el proyecto lo
            pide, viajamos.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container-site grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <article key={v.title} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl tracking-[0.1em] text-ink">{v.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img
          src="/images/instalacion.jpg"
          alt="Instalación de letras corpóreas"
          className="h-full min-h-80 w-full object-cover"
          style={{ outline: "none" }}
        />
        <div className="flex flex-col justify-center bg-espresso px-8 py-16 text-ivory md:px-14">
          <p className="eyebrow text-copper-bright">Taller</p>
          <h2 className="display-lg mt-4">Producción a un lado del estudio.</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-sand">
            CNC, láser, metalistería y control de calidad bajo el mismo techo. El
            diseñador camina veinte metros y toca la pieza. Eso se nota en la
            fachada.
          </p>
          <p className="mt-6 text-sm text-sand">{site.coverage}</p>
        </div>
      </section>

      <section className="container-site py-20 md:py-24">
        <p className="eyebrow">Oficinas</p>
        <h2 className="display-lg mt-4 text-ink">Dónde estamos.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <article className="border border-line p-7">
            <p className="eyebrow">Corporativa</p>
            <h3 className="mt-3 font-display text-xl tracking-[0.08em]">Cancún</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.address}</p>
          </article>
          <article className="border border-line p-7">
            <p className="eyebrow">Operativa</p>
            <h3 className="mt-3 font-display text-xl tracking-[0.08em]">Taller</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Producción, almacén de metales y bahía de carga. Visitas con cita.
            </p>
          </article>
          <article className="border border-line p-7">
            <p className="eyebrow">Cobertura</p>
            <h3 className="mt-3 font-display text-xl tracking-[0.08em]">Sureste</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.coverage}</p>
          </article>
        </div>
        <Button asChild className="mt-12">
          <Link to="/contacto">Agendar una visita</Link>
        </Button>
      </section>
    </>
  );
}
