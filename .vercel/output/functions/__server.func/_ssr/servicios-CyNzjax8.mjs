import { a as products, i as processSteps, l as services, n as faqs } from "./utils-DTsb-REj.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-QK5VLbxD.mjs";
import { t as PageHero } from "./PageHero-BtAUCYdl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicios-CyNzjax8.js
var import_jsx_runtime = require_jsx_runtime();
function ServiciosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Servicios",
			title: "Diseño, producción e instalación de señalética.",
			lead: "Un estudio que cubre el ciclo completo: wayfinding, identidad en el espacio, taller e instalación en obra.",
			image: "/images/instalacion.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servicios/$slug",
					params: { slug: s.slug },
					className: `group grid overflow-hidden border border-line bg-cream md:grid-cols-12 ${i % 2 === 1 ? "md:direction-rtl" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: s.title,
							className: "aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex flex-col justify-center p-8 md:col-span-7 md:p-12 ${i % 2 === 1 ? "md:order-1" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: s.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl tracking-[0.1em] text-ink md:text-4xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-muted leading-relaxed",
								children: s.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-[0.72rem] uppercase tracking-[0.22em] text-copper",
								children: "Ver servicio →"
							})
						]
					})]
				}, s.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-espresso py-20 text-ivory md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-copper-bright",
						children: "Producción"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4",
						children: "Piezas que fabricamos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-ivory/10 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl tracking-[0.08em]",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-sand",
								children: p.text
							})]
						}, p.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site py-20 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Método"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-4 text-ink",
					children: "Cinco pasos, un responsable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-8 md:grid-cols-5",
					children: processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tracking-[0.2em] text-copper",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl tracking-[0.08em]",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: step.text
							})
						]
					}, step.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Preguntas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4 text-ink",
						children: "Antes de cotizar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 divide-y divide-line border-y border-line",
						children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg tracking-[0.04em] text-ink",
								children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-copper transition-transform duration-200 group-open:rotate-45",
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
								children: f.a
							})]
						}, f.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							children: "Hablar de un proyecto"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { ServiciosPage as component };
