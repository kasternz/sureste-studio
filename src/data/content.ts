export const site = {
  name: "Sureste Studio",
  short: "SURESTE",
  slogan: "Dirección y diseño para tus proyectos",
  tagline: "Señalética, wayfinding y diseño espacial para hospitalidad, retail y desarrollos del sureste mexicano.",
  phone: "+52 998 251 4090",
  phoneHref: "tel:+529982514090",
  whatsapp: "529982514090",
  email: "hola@surestestudio.mx",
  address: "Av. Bonampak, SM 4, Cancún, Quintana Roo",
  hours: "Lunes a viernes, 9:00 – 18:00",
  instagram: "https://instagram.com/surestestudio",
  coverage: "Cancún · Riviera Maya · Mérida · Campeche",
} as const;

export const nav = [
  { label: "Estudio", href: "/estudio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
] as const;

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  body: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "wayfinding",
    title: "Wayfinding",
    kicker: "Orientación",
    summary:
      "Sistemas de orientación visual que guían a las personas de forma intuitiva a través del espacio.",
    body: "Estudiamos flujos, perfiles de usuario y arquitectura para definir una jerarquía clara de señales. El resultado es un recorrido sin fricción: menos preguntas en recepción, menos estrés, más tiempo en el lugar correcto.",
    points: [
      "Diagnóstico de flujos y puntos de decisión",
      "Directorios, tótems, banderolas y numeración",
      "Manual de señalética y nomenclatura",
      "Señalética inclusiva con braille y alto contraste",
    ],
    image: "/images/clinica.jpg",
  },
  {
    slug: "diseno",
    title: "Diseño",
    kicker: "Identidad en el espacio",
    summary:
      "Creatividad y función para una señalética única, coherente con la arquitectura y el clima de cada destino.",
    body: "Traducimos la identidad de marca a materiales, tipografía y escala. Diseñamos para el Caribe: salinidad, sol, humedad y el lenguaje visual de la hospitalidad contemporánea.",
    points: [
      "Concepto y familia tipográfica de señalética",
      "Prototipos y renders de implantación",
      "Paleta de materiales y acabados",
      "Adaptación a normativa y accesibilidad",
    ],
    image: "/images/materiales.jpg",
  },
  {
    slug: "produccion",
    title: "Producción",
    kicker: "Oficio y precisión",
    summary:
      "Fabricación de señalética de calidad, funcional y resistente, con un amplio abanico de materiales.",
    body: "Taller propio con corte CNC, láser y acabados de metalistería. Letras corpóreas, luminosos, tótems, placas, gran formato y piezas especiales en cobre, bronce, acrílico, piedra y madera.",
    points: [
      "Letras corpóreas y letreros luminosos",
      "Tótems, monumentos y directorios",
      "Placas, braille y numeración de habitación",
      "Gran formato y ambientación gráfica",
    ],
    image: "/images/instalacion.jpg",
  },
  {
    slug: "instalacion",
    title: "Instalación",
    kicker: "Obra y montaje",
    summary:
      "Equipos formados en carpintería, albañilería y herrería para un montaje preciso y seguro.",
    body: "Coordinamos con obra, gerencia de hotel y proveedores. Instalamos en altura, en piedra, chukum, cristal y madera, respetando tiempos de apertura y estándares de seguridad.",
    points: [
      "Levantamiento y anclajes estructurales",
      "Montaje en fachada, interior y paisaje",
      "Supervisión de obra y punch list",
      "Entrega con bitácora fotográfica",
    ],
    image: "/images/instalacion.jpg",
  },
  {
    slug: "mantenimiento",
    title: "Mantenimiento",
    kicker: "Permanencia",
    summary:
      "Programas preventivos para conservar el funcionamiento y la imagen de cada pieza instalada.",
    body: "El clima del sureste exige un plan. Limpiamos, reparamos luminarias, reponemos vinilos y renovamos acabados para que la marca se vea como el día de la inauguración.",
    points: [
      "Contratos preventivos por temporada",
      "Reposición de módulos y luminarias LED",
      "Limpieza de metales y acrílicos",
      "Auditoría anual de wayfinding",
    ],
    image: "/images/restaurante.jpg",
  },
];

export const products = [
  { title: "Letras corpóreas", text: "Volumen en cobre, bronce, acero y acrílico, con o sin iluminación halo." },
  { title: "Letreros luminosos", text: "Cajas de luz, front-lit y back-lit para fachada y porte-cochère." },
  { title: "Tótems y monumentos", text: "Piezas de llegada a escala arquitectónica, interior y exterior." },
  { title: "Señalética inclusiva", text: "Braille, alto relieve y contraste para una lectura universal." },
  { title: "Ambientación gráfica", text: "Muros, celosías y gran formato que extienden la identidad." },
  { title: "Numeración hotelera", text: "Habitaciones, suites y directorios con el mismo lenguaje." },
];

export type Project = {
  slug: string;
  name: string;
  place: string;
  sector: string;
  year: string;
  image: string;
  summary: string;
  story: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "palmar",
    name: "Palmar",
    place: "Tulum",
    sector: "Gastronomía",
    year: "2025",
    image: "/images/restaurante.jpg",
    summary: "Identidad de fachada y señalética de un restaurante de costa sobre chukum y cobre.",
    story:
      "Para Palmar diseñamos una familia de letras corpóreas en cobre cepillado, una placa de llegada y la numeración de terrazas. El criterio: que el letrero se lea como parte de la arquitectura, no como un añadido. El cobre se oxida con el salitre del Caribe y gana carácter con las temporadas.",
    services: ["Diseño", "Producción", "Instalación"],
  },
  {
    slug: "galeria-brisa",
    name: "Galería Brisa",
    place: "Cancún",
    sector: "Retail",
    year: "2025",
    image: "/images/galeria.jpg",
    summary: "Sistema de wayfinding suspendido y tótems de directorio para un paseo comercial.",
    story:
      "Un recorrido de 180 metros con tres niveles y once locales. Resolvimos la orientación con directorios de piso, banderolas de cobre y una nomenclatura que el visitante aprende en el primer cruce. Menos personal de información, más tiempo de permanencia.",
    services: ["Wayfinding", "Diseño", "Producción", "Instalación"],
  },
  {
    slug: "clinica-almendros",
    name: "Clínica Almendros",
    place: "Mérida",
    sector: "Salud",
    year: "2024",
    image: "/images/clinica.jpg",
    summary: "Señalética clínica con directorio mural, braille y una paleta de madera y cobre.",
    story:
      "En un recinto de salud la claridad no es estética: es cuidado. Definimos códigos de color por especialidad, placas táctiles y un muro directorio que se lee a diez metros. El cobre aparece como acento, nunca como ruido.",
    services: ["Wayfinding", "Diseño", "Señalética inclusiva"],
  },
  {
    slug: "costa-norte",
    name: "Costa Norte",
    place: "Isla Mujeres",
    sector: "Hotelería",
    year: "2024",
    image: "/images/instalacion.jpg",
    summary: "Letras de fachada de gran formato e instalación en piedra caliza a 8 metros de altura.",
    story:
      "Un resort de playa necesitaba presencia desde la marina. Fabricamos letras de 1.4 m en cobre con halo LED e instalamos sobre cantera con anclajes químicos. Coordinación con obra civil, ventanas de marea y un punch list de 48 horas antes de soft opening.",
    services: ["Producción", "Instalación", "Mantenimiento"],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Recorremos el predio o leemos el plano. Mapeamos flujos, puntos de decisión y la identidad del proyecto.",
  },
  {
    n: "02",
    title: "Diseño",
    text: "Concepto, familia de piezas, materiales y prototipos. Todo queda en un manual de señalética.",
  },
  {
    n: "03",
    title: "Producción",
    text: "Taller, control de calidad y pruebas de iluminación. Cada pieza sale con su ficha técnica.",
  },
  {
    n: "04",
    title: "Instalación",
    text: "Montaje coordinado con obra. Nivel, plomo y bitácora fotográfica de cada anclaje.",
  },
  {
    n: "05",
    title: "Cuidado",
    text: "Plan de mantenimiento para el clima del sureste: sal, sol y temporada de lluvias.",
  },
];

export const stats = [
  { value: "12", suffix: "+", label: "años de oficio en el sureste" },
  { value: "180", suffix: "+", label: "propiedades señalizadas" },
  { value: "4", suffix: "", label: "estados de cobertura" },
  { value: "1.2", suffix: "k", label: "m² de taller de producción" },
];

export const sectors = [
  "Hotelería y resorts",
  "Gastronomía",
  "Desarrollos inmobiliarios",
  "Salud y clínica",
  "Retail y corporativo",
  "Institucional",
];

export const testimonials = [
  {
    quote:
      "Entendieron el hotel como lo entiende un arquitecto. La señalética no compite con el espacio: lo completa.",
    name: "Mariana Solís",
    role: "Directora de diseño, Costa Norte",
  },
  {
    quote:
      "Pasamos de tres personas en información a un sistema que se explica solo. El directorio de Galería Brisa es ahora parte de la marca.",
    name: "Héctor Villareal",
    role: "Gerencia de operaciones, Cancún",
  },
  {
    quote:
      "Cobre, braille y madera en una clínica no es sencillo. Lo resolvieron con una calma que se siente en cada pasillo.",
    name: "Dra. Elena Paredes",
    role: "Clínica Almendros, Mérida",
  },
];

export const faqs = [
  {
    q: "¿En qué ciudades trabajan?",
    a: "El estudio está en Cancún. Instalamos en Quintana Roo, Yucatán y Campeche, y coordinamos proyectos en el resto del país cuando el encargo lo pide.",
  },
  {
    q: "¿Fabrican e instalan, o solo diseñan?",
    a: "Las tres cosas. Podemos entrar desde el concepto, producir e instalar, o fabricar un paquete que el cliente monta. Lo habitual es el ciclo completo.",
  },
  {
    q: "¿Qué materiales usan?",
    a: "Cobre, bronce, acero inoxidable, aluminio, acrílico, chukum, piedra, nogal y vinil de alta durabilidad. Elegimos según arquitectura, clima y presupuesto.",
  },
  {
    q: "¿Hacen señalética inclusiva y braille?",
    a: "Sí. Placas táctiles, alto relieve, contraste y nomenclatura accesible forman parte de nuestros sistemas de wayfinding, especialmente en salud y hospedaje.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Un paquete de fachada, de tres a cinco semanas. Un sistema hotelero completo, de ocho a catorce, según obra y permisos de montaje.",
  },
];

export const projectTypes = [
  "Wayfinding hotelero",
  "Fachada y letras corpóreas",
  "Tótem / monumento",
  "Señalética clínica",
  "Retail y corporativo",
  "Mantenimiento",
  "Otro",
];
