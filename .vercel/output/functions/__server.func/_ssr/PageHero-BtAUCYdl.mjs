import { t as cn } from "./utils-DTsb-REj.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-BtAUCYdl.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, lead, image, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative isolate flex items-end overflow-hidden bg-espresso", compact ? "min-h-[46vh] pt-28 pb-12" : "min-h-[62vh] pt-32 pb-16"),
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 size-full object-cover",
				style: { outline: "none" }
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-espresso/62" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site relative z-10",
				children: [
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-copper-bright",
						children: kicker
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-lg mt-4 max-w-3xl text-ivory",
						children: title
					}),
					lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-sand md:text-lg",
						children: lead
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
