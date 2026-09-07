import { i as __toESM } from "../_runtime.mjs";
import { s as projects, t as cn } from "./utils-DTsb-REj.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./PageHero-BtAUCYdl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/proyectos-BvFieSm0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = ["Todos", ...Array.from(new Set(projects.map((p) => p.sector)))];
function ProjectFilter() {
	const [active, setActive] = (0, import_react.useState)("Todos");
	const list = (0, import_react.useMemo)(() => active === "Todos" ? projects : projects.filter((p) => p.sector === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setActive(f),
			className: cn("h-10 px-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors duration-150", active === f ? "bg-espresso text-ivory" : "border border-line text-muted hover:text-ink"),
			children: f
		}, f))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid gap-8 md:grid-cols-2",
		children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/proyectos/$slug",
			params: { slug: p.slug },
			className: "group block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					className: "aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex items-end justify-between gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [
							p.place,
							" · ",
							p.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl tracking-[0.1em] text-ink",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: p.sector
					})
				] })
			})]
		}, p.slug))
	})] });
}
function ProyectosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Proyectos",
		title: "Casos de éxito en el sureste.",
		lead: "Hotelería, gastronomía, salud y retail. Sistemas de señalética que se leen como parte de la arquitectura.",
		image: "/images/galeria.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-site py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFilter, {})
	})] });
}
//#endregion
export { ProyectosPage as component };
