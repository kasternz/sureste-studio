import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  processSteps,
  products,
  projects,
  sectors,
  services,
  site,
  stats,
  testimonials,
} from "@/data/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Sureste Studio — Dirección y diseño para tus proyectos" }],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Materials />
      <Sectors />
      <Testimonials />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-end overflow-hidden bg-espresso">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/galeria.jpg"
        style={{ outline: "none" }}
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/55 to-espresso/30" />
      <div className="container-wide relative z-10 pb-16 pt-28 md:pb-24">
        <p className="eyebrow text-copper-bright rise-in">
          Señalética · Wayfinding · Diseño
        </p>
        <h1 className="display-xl mt-6 text-ivory rise-in" style={{ animationDelay: "80ms" }}>
          Sureste
          <span className="mt-1 block tracking-[0.28em]">Studio</span>
        </h1>
        <p
          className="mt-6 max-w-lg text-lg font-light leading-relaxed text-sand md:text-xl rise-in"
          style={{ animationDelay: "160ms" }}
        >
          {site.slogan}
        </p>
        <div
          className="mt-10 flex flex-wrap items-center gap-3 rise-in"
          style={{ animationDelay: "240ms" }}
        >
          <Button asChild variant="copper" size="lg">
            <Link to="/contacto">
              Cotizar proyecto <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link to="/proyectos">Ver proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Wayfinding",
    "Letras corpóreas",
    "Tótems",
    "Luminosos",
    "Braille",
    "Fachadas",
    "Directorios",
    "Hospitalidad",
  ];
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line-dark bg-espresso py-4">
      <div className="marquee-track flex w-max gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-sm tracking-[0.28em] text-sand uppercase"
          >
            {item}
            <span className="text-copper">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
      <div className="md:col-span-5">
        <p className="eyebrow">El estudio</p>
        <h2 className="display-lg mt-4 text-ink">
          Dirección espacial para la hospitalidad del Caribe.
        </h2>
      </div>
      <div className="md:col-span-6 md:col-start-7 space-y-5 text-base leading-relaxed text-muted md:text-[1.05rem]">
        <p>
          Sureste Studio diseña, fabrica e instala señalética para hoteles, resorts,
          restaurantes, clínicas y desarrollos. Trabajamos como un estudio de
          arquitectura aplicada al recorrido: cada pieza tiene un lugar, un material
          y una razón.
        </p>
        <p>
          Cobre, piedra, madera y luz. Un lenguaje sobrio que resiste el clima del
          sureste y se lee a la distancia correcta.
        </p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/estudio">
            Conocer el estudio <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-espresso text-ivory">
      <div className="container-site grid grid-cols-2 gap-px md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-12 text-center md:py-16">
            <p className="font-display text-4xl tracking-[0.08em] md:text-5xl">
              {s.value}
              <span className="text-copper">{s.suffix}</span>
            </p>
            <p className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-sand">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Servicios especializados</p>
            <h2 className="display-lg mt-4 text-ink">Del plano a la fachada.</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/servicios">Todos los servicios</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/servicios/$slug"
              params={{ slug: s.slug }}
              className={`group relative isolate min-h-72 overflow-hidden bg-paper ${
                i === 0 ? "md:col-span-2 lg:col-span-1 lg:min-h-[22rem]" : ""
              }`}
            >
              <img
                src={s.image}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-espresso/50 transition-colors duration-300 group-hover:bg-espresso/40" />
              <div className="relative flex h-full min-h-72 flex-col justify-end p-7 text-ivory">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-copper-bright">
                  {s.kicker}
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-[0.12em]">{s.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand">{s.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Casos de éxito</p>
            <h2 className="display-lg mt-4 text-ink">Proyectos recientes.</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/proyectos">Ver más</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/proyectos/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="overflow-hidden bg-paper">
                <img
                  src={p.image}
                  alt={p.name}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                    i === 0 ? "aspect-[16/8] md:aspect-[21/9]" : "aspect-[16/11]"
                  }`}
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="eyebrow">
                    {p.place} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-[0.1em] text-ink md:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <p className="text-sm text-muted">{p.sector}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <p className="eyebrow">Método</p>
        <h2 className="display-lg mt-4 max-w-2xl text-ink">
          Un ciclo completo: de la visita al mantenimiento.
        </h2>
        <ol className="mt-14 grid gap-8 md:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="border-t border-line pt-6">
              <p className="font-display text-sm tracking-[0.2em] text-copper">{step.n}</p>
              <h3 className="mt-3 font-display text-xl tracking-[0.08em] text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Materials() {
  return (
    <section className="bg-espresso">
      <div className="grid md:grid-cols-2">
        <img
          src="/images/materiales.jpg"
          alt="Biblioteca de materiales: cobre, bronce, acrílico y piedra"
          className="h-full min-h-80 w-full object-cover"
          style={{ outline: "none" }}
        />
        <div className="flex flex-col justify-center px-8 py-16 text-ivory md:px-14 lg:px-20">
          <p className="eyebrow text-copper-bright">Materiales</p>
          <h2 className="display-lg mt-4">Cobre, piedra, luz.</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-sand md:text-base">
            Elegimos acabados que envejecen bien frente al sol y la sal. Cobre
            cepillado, bronce, acrílico mate, nogal y caliza. Cada sistema tiene su
            paleta, nunca un catálogo genérico.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-sand">
            {products.map((p) => (
              <li key={p.title} className="border-t border-ivory/10 pt-3">
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section className="container-site py-20 md:py-28">
      <p className="eyebrow">Sectores</p>
      <h2 className="display-lg mt-4 text-ink">Espacios que guiamos.</h2>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {sectors.map((s) => (
          <li
            key={s}
            className="flex items-center justify-between py-5 font-display text-xl tracking-[0.08em] text-ink md:text-2xl"
          >
            {s}
            <span className="text-copper">→</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-site">
        <p className="eyebrow">Confianza</p>
        <h2 className="display-lg mt-4 text-ink">Agradecemos su confianza.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="border border-line bg-ivory p-7 md:p-8">
              <p className="text-[0.95rem] leading-relaxed text-ink">“{t.quote}”</p>
              <footer className="mt-6">
                <p className="font-display text-sm tracking-[0.08em]">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                  {t.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative isolate overflow-hidden bg-espresso py-24 text-ivory">
      <img
        src="/images/restaurante.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-35"
        style={{ outline: "none" }}
      />
      <div className="absolute inset-0 bg-espresso/70" />
      <div className="container-site relative z-10 text-center">
        <p className="eyebrow text-copper-bright">Siguiente paso</p>
        <h2 className="display-lg mx-auto mt-4 max-w-2xl">
          {site.slogan}.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sand">
          Cuéntanos el espacio. Preparamos un brief de visita o una propuesta de
          sistema.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="copper" size="lg">
            <Link to="/contacto">Iniciar un proyecto</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={site.phoneHref}>{site.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
