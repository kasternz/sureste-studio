//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-XCSRmong.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/contacto",
			"/estudio",
			"/proyectos",
			"/servicios"
		],
		preloads: [
			"/assets/index-DPylWVBP.js",
			"/assets/utils-B6iBigKm.js",
			"/assets/link-wOlBoHkh.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-DPylWVBP.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-YL1GJJzK.js"]
	},
	"/contacto": {
		filePath: "/workspace/src/routes/contacto.tsx",
		children: void 0,
		preloads: ["/assets/contacto-CNmPPLCf.js", "/assets/PageHero-Ctm91wW6.js"]
	},
	"/estudio": {
		filePath: "/workspace/src/routes/estudio.tsx",
		children: void 0,
		preloads: ["/assets/estudio-D8_R-O6F.js", "/assets/PageHero-Ctm91wW6.js"]
	},
	"/proyectos": {
		filePath: "/workspace/src/routes/proyectos.tsx",
		children: ["/proyectos/$slug"],
		preloads: ["/assets/proyectos-CbEY9Bpk.js", "/assets/PageHero-Ctm91wW6.js"]
	},
	"/servicios": {
		filePath: "/workspace/src/routes/servicios.tsx",
		children: ["/servicios/$slug"],
		preloads: ["/assets/servicios-vO38gcgl.js", "/assets/PageHero-Ctm91wW6.js"]
	},
	"/proyectos/$slug": {
		filePath: "/workspace/src/routes/proyectos.$slug.tsx",
		children: void 0,
		preloads: ["/assets/proyectos._slug-_GOYbmiz.js"]
	},
	"/servicios/$slug": {
		filePath: "/workspace/src/routes/servicios.$slug.tsx",
		children: void 0,
		preloads: ["/assets/servicios._slug-C8MT_5TJ.js"]
	}
} });
//#endregion
export { tsrStartManifest };
