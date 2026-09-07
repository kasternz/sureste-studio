import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/content";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [{ title: "Contacto — Sureste Studio" }],
  }),
});

function ContactoPage() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hola Sureste Studio, me interesa cotizar un proyecto.",
  )}`;

  return (
    <>
      <PageHero
        kicker="Contacto"
        title="Hablemos de tu proyecto."
        lead="Un brief, una visita o un plano. Respondemos en horario de estudio."
        image="/images/clinica.jpg"
        compact
      />
      <section className="container-site grid gap-14 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow">Cotización</p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-ink">
            Cuéntanos el espacio.
          </h2>
          <p className="mt-3 mb-10 max-w-lg text-sm leading-relaxed text-muted">
            No hay formularios genéricos que se pierden. Cada solicitud llega al
            coordinador de proyecto.
          </p>
          <ContactForm />
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <div className="border border-line bg-cream p-7">
            <p className="eyebrow">Estudio</p>
            <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed text-ink">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="link-underline">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </p>
              <p className="text-muted">{site.hours}</p>
              <p className="text-muted">{site.coverage}</p>
            </address>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-11 items-center bg-copper px-5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ivory hover:bg-copper-deep"
            >
              WhatsApp
            </a>
          </div>
          <div className="mt-6 overflow-hidden border border-line">
            <iframe
              title="Ubicación Sureste Studio en Cancún"
              className="h-56 w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-86.835%2C21.145%2C-86.78%2C21.175&layer=mapnik&marker=21.161%2C-86.808"
            />
          </div>
        </aside>
      </section>
    </>
  );
}
