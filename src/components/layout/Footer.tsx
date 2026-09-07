import { Link } from "@tanstack/react-router";
import { nav, services, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/emblem.png"
              alt=""
              className="h-14 w-auto"
              style={{ outline: "none" }}
            />
            <p className="mt-6 font-display text-2xl tracking-[0.18em]">SURESTE</p>
            <p className="mt-1 font-display text-sm tracking-[0.36em] text-sand">
              STUDIO
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand">
              {site.slogan}. Señalética y wayfinding para la hospitalidad del Caribe
              mexicano.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Navegar</p>
            <ul className="mt-4 space-y-2 text-sm text-sand">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="link-underline hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Servicios</p>
            <ul className="mt-4 space-y-2 text-sm text-sand">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicios/$slug"
                    params={{ slug: s.slug }}
                    className="link-underline hover:text-ivory"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Estudio</p>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-sand">
              <p>{site.address}</p>
              <p>{site.coverage}</p>
              <p>
                <a href={site.phoneHref} className="link-underline hover:text-ivory">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="link-underline hover:text-ivory">
                  {site.email}
                </a>
              </p>
              <p>{site.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-xs tracking-[0.16em] text-stone uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sureste Studio</p>
          <p>Cancún, México</p>
        </div>
      </div>
    </footer>
  );
}
