import { a as products, c as sectors, d as stats, f as testimonials, i as processSteps, l as services, s as projects, u as site } from "./utils-DTsb-REj.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as Button } from "./router-QK5VLbxD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Zeu53Dt7.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Materials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sectors, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-dvh items-end overflow-hidden bg-espresso",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/images/galeria.jpg",
				style: { outline: "none" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/images/hero.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-espresso via-espresso/55 to-espresso/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide relative z-10 pb-16 pt-28 md:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-copper-bright rise-in",
						children: "Señalética · Wayfinding · Diseño"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-6 text-ivory rise-in",
						style: { animationDelay: "80ms" },
						children: ["Sureste", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block tracking-[0.28em]",
							children: "Studio"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-lg font-light leading-relaxed text-sand md:text-xl rise-in",
						style: { animationDelay: "160ms" },
						children: site.slogan
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-3 rise-in",
						style: { animationDelay: "240ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "copper",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contacto",
								children: ["Cotizar proyecto ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/proyectos",
								children: "Ver proyectos"
							})
						})]
					})
				]
			})
		]
	});
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
		"Hospitalidad"
	];
	const loop = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-line-dark bg-espresso py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-10",
			children: loop.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-10 font-display text-sm tracking-[0.28em] text-sand uppercase",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-copper",
					children: "·"
				})]
			}, `${item}-${i}`))
		})
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site grid gap-12 py-20 md:grid-cols-12 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "El estudio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg mt-4 text-ink",
				children: "Dirección espacial para la hospitalidad del Caribe."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-6 md:col-start-7 space-y-5 text-base leading-relaxed text-muted md:text-[1.05rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sureste Studio diseña, fabrica e instala señalética para hoteles, resorts, restaurantes, clínicas y desarrollos. Trabajamos como un estudio de arquitectura aplicada al recorrido: cada pieza tiene un lugar, un material y una razón." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cobre, piedra, madera y luz. Un lenguaje sobrio que resiste el clima del sureste y se lee a la distancia correcta." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/estudio",
						children: ["Conocer el estudio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-espresso text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site grid grid-cols-2 gap-px md:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-2 py-12 text-center md:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-4xl tracking-[0.08em] md:text-5xl",
					children: [s.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-copper",
						children: s.suffix
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-sand",
					children: s.label
				})]
			}, s.label))
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Servicios especializados"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-4 text-ink",
					children: "Del plano a la fachada."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/servicios",
						children: "Todos los servicios"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servicios/$slug",
					params: { slug: s.slug },
					className: `group relative isolate min-h-72 overflow-hidden bg-paper ${i === 0 ? "md:col-span-2 lg:col-span-1 lg:min-h-[22rem]" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: "",
							className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-espresso/50 transition-colors duration-300 group-hover:bg-espresso/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full min-h-72 flex-col justify-end p-7 text-ivory",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.68rem] uppercase tracking-[0.28em] text-copper-bright",
									children: s.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl tracking-[0.12em]",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-sm text-sm leading-relaxed text-sand",
									children: s.summary
								})
							]
						})
					]
				}, s.slug))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Casos de éxito"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-4 text-ink",
					children: "Proyectos recientes."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/proyectos",
						children: "Ver más"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-2",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/proyectos/$slug",
					params: { slug: p.slug },
					className: `group block ${i === 0 ? "md:col-span-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.name,
							className: `w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${i === 0 ? "aspect-[16/8] md:aspect-[21/9]" : "aspect-[16/11]"}`
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [
								p.place,
								" · ",
								p.year
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl tracking-[0.1em] text-ink md:text-3xl",
							children: p.name
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: p.sector
						})]
					})]
				}, p.slug))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Método"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-4 max-w-2xl text-ink",
					children: "Un ciclo completo: de la visita al mantenimiento."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-8 md:grid-cols-5",
					children: processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tracking-[0.2em] text-copper",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl tracking-[0.08em] text-ink",
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
		})
	});
}
function Materials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-espresso",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/materiales.jpg",
				alt: "Biblioteca de materiales: cobre, bronce, acrílico y piedra",
				className: "h-full min-h-80 w-full object-cover",
				style: { outline: "none" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center px-8 py-16 text-ivory md:px-14 lg:px-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-copper-bright",
						children: "Materiales"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4",
						children: "Cobre, piedra, luz."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-sm leading-relaxed text-sand md:text-base",
						children: "Elegimos acabados que envejecen bien frente al sol y la sal. Cobre cepillado, bronce, acrílico mate, nogal y caliza. Cada sistema tiene su paleta, nunca un catálogo genérico."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-sand",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-ivory/10 pt-3",
							children: p.title
						}, p.title))
					})
				]
			})]
		})
	});
}
function Sectors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-site py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Sectores"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-lg mt-4 text-ink",
				children: "Espacios que guiamos."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 divide-y divide-line border-y border-line",
				children: sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between py-5 font-display text-xl tracking-[0.08em] text-ink md:text-2xl",
					children: [s, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-copper",
						children: "→"
					})]
				}, s))
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Confianza"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-4 text-ink",
					children: "Agradecemos su confianza."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "border border-line bg-ivory p-7 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[0.95rem] leading-relaxed text-ink",
							children: [
								"“",
								t.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tracking-[0.08em]",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-[0.16em] text-muted",
								children: t.role
							})]
						})]
					}, t.name))
				})
			]
		})
	});
}
function Cta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-espresso py-24 text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/restaurante.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-35",
				style: { outline: "none" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-espresso/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site relative z-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-copper-bright",
						children: "Siguiente paso"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-lg mx-auto mt-4 max-w-2xl",
						children: [site.slogan, "."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-lg text-sand",
						children: "Cuéntanos el espacio. Preparamos un brief de visita o una propuesta de sistema."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "copper",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contacto",
								children: "Iniciar un proyecto"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.phoneHref,
								children: site.phone
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
