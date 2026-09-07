import { i as __toESM } from "../_runtime.mjs";
import { o as projectTypes, t as cn, u as site } from "./utils-DTsb-REj.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Button } from "./router-QK5VLbxD.mjs";
import { t as PageHero } from "./PageHero-BtAUCYdl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-CGb3akJk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-12 w-full border border-line bg-cream px-4 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-stone focus:border-copper", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full resize-y border border-line bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-stone focus:border-copper", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted", className),
		...props
	});
}
var KEY = "sureste-cotizaciones";
function ContactForm() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [pending, setPending] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form).entries());
		if (!String(data.nombre).trim() || !String(data.email).trim()) {
			toast.error("Nombre y correo son necesarios.");
			return;
		}
		setPending(true);
		const prev = JSON.parse(localStorage.getItem(KEY) ?? "[]");
		localStorage.setItem(KEY, JSON.stringify([{
			...data,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev].slice(0, 20)));
		window.setTimeout(() => {
			setPending(false);
			setSent(true);
			toast.success("Recibimos tu solicitud.");
			form.reset();
		}, 600);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-cream p-8 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Enviado"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-2xl tracking-[0.08em] text-ink",
				children: "Gracias. Te escribimos en menos de 24 horas."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-sm leading-relaxed text-muted",
				children: "Un coordinador de proyecto revisará tu brief y te propondrá una visita o una videollamada, según el tipo de encargo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				type: "button",
				variant: "outline",
				onClick: () => setSent(false),
				children: "Enviar otra solicitud"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-5 md:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "nombre",
				children: "Nombre"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "nombre",
				name: "nombre",
				required: true,
				autoComplete: "name"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "empresa",
				children: "Empresa o desarrollo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "empresa",
				name: "empresa",
				autoComplete: "organization"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "email",
				children: "Correo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "email",
				name: "email",
				type: "email",
				required: true,
				autoComplete: "email"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "telefono",
				children: "Teléfono"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "telefono",
				name: "telefono",
				type: "tel",
				autoComplete: "tel"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "tipo",
				children: "Tipo de proyecto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: "tipo",
				name: "tipo",
				className: "h-12 w-full border border-line bg-cream px-3 text-sm text-ink outline-none focus:border-copper",
				defaultValue: "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					disabled: true,
					children: "Selecciona"
				}), projectTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: t,
					children: t
				}, t))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "ciudad",
				children: "Ciudad"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "ciudad",
				name: "ciudad",
				placeholder: "Cancún, Tulum, Mérida…"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "mensaje",
					children: "Cuéntanos el proyecto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "mensaje",
					name: "mensaje",
					placeholder: "Tipo de espacio, fechas de apertura, si ya hay identidad de marca…"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: pending,
					size: "lg",
					children: pending ? "Enviando…" : "Solicitar cotización"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Respuesta en horario de estudio, Lun–Vie."
				})]
			})
		]
	});
}
function ContactoPage() {
	const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Sureste Studio, me interesa cotizar un proyecto.")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Contacto",
		title: "Hablemos de tu proyecto.",
		lead: "Un brief, una visita o un plano. Respondemos en horario de estudio.",
		image: "/images/clinica.jpg",
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site grid gap-14 py-16 md:grid-cols-12 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Cotización"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl tracking-[0.08em] text-ink",
					children: "Cuéntanos el espacio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 mb-10 max-w-lg text-sm leading-relaxed text-muted",
					children: "No hay formularios genéricos que se pierden. Cada solicitud llega al coordinador de proyecto."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "md:col-span-4 md:col-start-9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-cream p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Estudio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "mt-5 space-y-4 text-sm not-italic leading-relaxed text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: site.address }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.phoneHref,
								className: "link-underline",
								children: site.phone
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "link-underline",
								children: site.email
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: site.hours
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: site.coverage
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: wa,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex h-11 items-center bg-copper px-5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ivory hover:bg-copper-deep",
						children: "WhatsApp"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-hidden border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Ubicación Sureste Studio en Cancún",
					className: "h-56 w-full grayscale",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					src: "https://www.openstreetmap.org/export/embed.html?bbox=-86.835%2C21.145%2C-86.78%2C21.175&layer=mapnik&marker=21.161%2C-86.808"
				})
			})]
		})]
	})] });
}
//#endregion
export { ContactoPage as component };
