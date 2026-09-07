import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/data/content";

export const Route = createFileRoute("/servicios/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.service.title ?? "Servicio"} — Sureste Studio`,
      },
    ],
  }),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        kicker={service.kicker}
        title={service.title}
        lead={service.summary}
        image={service.image}
      />
      <section className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-muted md:text-lg">{service.body}</p>
          <ul className="mt-10 space-y-3">
            {service.points.map((p) => (
              <li
                key={p}
                className="flex gap-3 border-t border-line pt-3 text-sm text-ink"
              >
                <span className="text-copper">—</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contacto">Cotizar este servicio</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/servicios">Todos los servicios</Link>
            </Button>
          </div>
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <p className="eyebrow">También</p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/servicios/$slug"
                  params={{ slug: s.slug }}
                  className="flex min-h-12 items-center justify-between py-3 font-display tracking-[0.08em] text-ink hover:text-copper-deep"
                >
                  {s.title}
                  <span className="text-copper">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
