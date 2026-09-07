import { l as services } from "./utils-DTsb-REj.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button, n as Route } from "./router-QK5VLbxD.mjs";
import { t as PageHero } from "./PageHero-BtAUCYdl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicios._slug-CjWRTxEM.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const { service } = Route.useLoaderData();
	const others = services.filter((s) => s.slug !== service.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: service.kicker,
		title: service.title,
		lead: service.summary,
		image: service.image
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site grid gap-12 py-20 md:grid-cols-12 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-muted md:text-lg",
					children: service.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 space-y-3",
					children: service.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 border-t border-line pt-3 text-sm text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-copper",
							children: "—"
						}), p]
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							children: "Cotizar este servicio"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicios",
							children: "Todos los servicios"
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "md:col-span-4 md:col-start-9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "También"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line border-y border-line",
				children: others.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servicios/$slug",
					params: { slug: s.slug },
					className: "flex min-h-12 items-center justify-between py-3 font-display tracking-[0.08em] text-ink hover:text-copper-deep",
					children: [s.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-copper",
						children: "→"
					})]
				}) }, s.slug))
			})]
		})]
	})] });
}
//#endregion
export { ServiceDetail as component };
