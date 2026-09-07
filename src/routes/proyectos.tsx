import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";

export const Route = createFileRoute("/proyectos")({
  component: ProyectosPage,
  head: () => ({
    meta: [{ title: "Proyectos — Sureste Studio" }],
  }),
});

function ProyectosPage() {
  return (
    <>
      <PageHero
        kicker="Proyectos"
        title="Casos de éxito en el sureste."
        lead="Hotelería, gastronomía, salud y retail. Sistemas de señalética que se leen como parte de la arquitectura."
        image="/images/galeria.jpg"
      />
      <section className="container-site py-16 md:py-24">
        <ProjectFilter />
      </section>
    </>
  );
}
