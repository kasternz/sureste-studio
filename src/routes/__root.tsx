import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/SiteShell";
import { AppToaster } from "@/components/AppToaster";
import appCss from "../styles.css?url";

const APP_NAME = "Sureste Studio";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sureste Studio — Dirección y diseño para tus proyectos" },
      {
        name: "description",
        content:
          "Estudio de señalética y wayfinding en Cancún. Diseño, fabricación e instalación para hotelería, retail, salud y desarrollos del sureste mexicano.",
      },
      { name: "theme-color", content: "#161310" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-ivory text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
          <AppToaster />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display-lg mt-4 text-ink">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-muted">
        El recorrido no existe. Volvamos al inicio o hablemos de tu proyecto.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-11 items-center bg-copper px-6 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory"
      >
        Ir al inicio
      </a>
    </section>
  );
}
