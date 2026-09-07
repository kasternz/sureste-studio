import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/content";

export const Route = createFileRoute("/proyectos/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.project.name ?? "Proyecto"} — Sureste Studio`,
      },
    ],
  }),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <PageHero
        kicker={`${project.place} · ${project.year}`}
        title={project.name}
        lead={project.summary}
        image={project.image}
      />
      <section className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-muted md:text-lg">{project.story}</p>
          <img
            src={project.image}
            alt={project.name}
            className="mt-10 w-full object-cover"
          />
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <dl className="space-y-6 border-t border-line pt-6">
            <div>
              <dt className="eyebrow">Lugar</dt>
              <dd className="mt-2 font-display text-lg tracking-[0.06em]">{project.place}</dd>
            </div>
            <div>
              <dt className="eyebrow">Sector</dt>
              <dd className="mt-2 font-display text-lg tracking-[0.06em]">{project.sector}</dd>
            </div>
            <div>
              <dt className="eyebrow">Año</dt>
              <dd className="mt-2 font-display text-lg tracking-[0.06em]">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">Alcance</dt>
              <dd className="mt-2 space-y-1 text-sm text-muted">
                {project.services.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </dd>
            </div>
          </dl>
          <Button asChild className="mt-10 w-full">
            <Link to="/contacto">Un proyecto similar</Link>
          </Button>
        </aside>
      </section>
      <section className="border-t border-line py-16">
        <div className="container-site">
          <p className="eyebrow">Más proyectos</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/proyectos/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <h3 className="mt-3 font-display text-xl tracking-[0.1em]">{p.name}</h3>
                <p className="text-sm text-muted">
                  {p.place} · {p.sector}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
