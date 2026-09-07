import { s as projects } from "./utils-DTsb-REj.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button, r as Route$1 } from "./router-QK5VLbxD.mjs";
import { t as PageHero } from "./PageHero-BtAUCYdl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/proyectos._slug-OOIh_qRn.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { project } = Route$1.useLoaderData();
	const others = projects.filter((p) => p.slug !== project.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: `${project.place} · ${project.year}`,
			title: project.name,
			lead: project.summary,
			image: project.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid gap-12 py-20 md:grid-cols-12 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-muted md:text-lg",
					children: project.story
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.name,
					className: "mt-10 w-full object-cover"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "md:col-span-4 md:col-start-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-6 border-t border-line pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Lugar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-lg tracking-[0.06em]",
							children: project.place
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Sector"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-lg tracking-[0.06em]",
							children: project.sector
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Año"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-lg tracking-[0.06em]",
							children: project.year
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Alcance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 space-y-1 text-sm text-muted",
							children: project.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s }, s))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-10 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contacto",
						children: "Un proyecto similar"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Más proyectos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-3",
					children: others.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/proyectos/$slug",
						params: { slug: p.slug },
						className: "group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								className: "aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl tracking-[0.1em]",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									p.place,
									" · ",
									p.sector
								]
							})
						]
					}, p.slug))
				})]
			})
		})
	] });
}
//#endregion
export { ProjectDetail as component };
