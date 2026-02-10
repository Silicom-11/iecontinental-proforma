import {
  Globe,
  GraduationCap,
  Monitor,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────────────── TYPES ───────────────────────────── */

export interface PlanTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  popular: boolean;
  features: { text: string; included: boolean; highlight?: boolean }[];
  cta: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  emoji: string;
  colorAccent: string;
  gradientFrom: string;
  gradientTo: string;
  bgAccent: string;
  borderAccent: string;
  tiers: PlanTier[];
  deliveryWeeks: string;
}

export interface BundlePack {
  id: string;
  name: string;
  tagline: string;
  products: string[];
  priceSum: number;
  bundlePrice: number;
  popular: boolean;
  monthlyMaintenance: number;
  color: string;
}

/* ──────────────────── PRODUCT 1: PÁGINA WEB ──────────────────── */

const WEB_PAGE: Product = {
  id: 'web',
  name: 'Página Web Institucional',
  tagline: 'Tu colegio visible para todo Pichanaki',
  description: 'Presencia digital profesional con diseño moderno, adaptado a móviles y optimizado para Google.',
  icon: Globe,
  emoji: '🌐',
  colorAccent: 'text-blue-400',
  gradientFrom: 'from-blue-500',
  gradientTo: 'to-cyan-400',
  bgAccent: 'bg-blue-500/10',
  borderAccent: 'border-blue-500/30',
  deliveryWeeks: '3-4 semanas',
  tiers: [
    {
      id: 'web-basica',
      name: 'Básica',
      price: 3500,
      popular: false,
      cta: 'Elegir Básica',
      features: [
        { text: 'Hasta 5 secciones informativas', included: true },
        { text: 'Diseño responsive (móvil + escritorio)', included: true },
        { text: 'Formulario de contacto', included: true },
        { text: 'Hosting cloud (Hetzner VPS)', included: true },
        { text: 'Certificado SSL (HTTPS)', included: true },
        { text: 'Protección DDoS (Cloudflare)', included: true },
        { text: 'Dominio iecontinental.edu.pe', included: true },
        { text: 'Blog de noticias', included: false },
        { text: 'SEO avanzado + Google Analytics', included: false },
        { text: 'Galería de fotos y videos', included: false },
        { text: 'Portal de noticias dinámico', included: false },
        { text: 'Mapa interactivo de ubicación', included: false },
      ],
    },
    {
      id: 'web-profesional',
      name: 'Profesional',
      price: 5500,
      popular: true,
      cta: '⭐ Elegir Profesional',
      features: [
        { text: 'Hasta 12 secciones + páginas internas', included: true },
        { text: 'Diseño responsive premium', included: true },
        { text: 'Formulario de contacto + WhatsApp widget', included: true },
        { text: 'Hosting cloud (Hetzner VPS)', included: true },
        { text: 'Certificado SSL (HTTPS)', included: true },
        { text: 'Protección DDoS (Cloudflare)', included: true },
        { text: 'Dominio iecontinental.edu.pe', included: true },
        { text: 'Blog de noticias administrable', included: true, highlight: true },
        { text: 'SEO avanzado + Google Analytics', included: true, highlight: true },
        { text: 'Galería de fotos y videos', included: true, highlight: true },
        { text: 'Portal de noticias dinámico', included: false },
        { text: 'Mapa interactivo de ubicación', included: true },
      ],
    },
    {
      id: 'web-premium',
      name: 'Premium',
      price: 8000,
      popular: false,
      cta: 'Elegir Premium',
      features: [
        { text: 'Secciones ilimitadas + micrositios', included: true },
        { text: 'Diseño responsive premium + animaciones', included: true },
        { text: 'Formulario + WhatsApp + chatbot básico', included: true },
        { text: 'Hosting cloud (Hetzner VPS)', included: true },
        { text: 'Certificado SSL (HTTPS)', included: true },
        { text: 'Protección DDoS (Cloudflare)', included: true },
        { text: 'Dominio iecontinental.edu.pe', included: true },
        { text: 'Blog de noticias administrable', included: true },
        { text: 'SEO avanzado + Analytics + Search Console', included: true },
        { text: 'Galería de fotos y videos HD', included: true },
        { text: 'Portal de noticias dinámico', included: true, highlight: true },
        { text: 'Mapa interactivo + virtual tour', included: true, highlight: true },
      ],
    },
  ],
};

/* ──────────────────── PRODUCT 2: INTRANET ──────────────────── */

const INTRANET: Product = {
  id: 'intranet',
  name: 'Intranet Educativa',
  tagline: 'Aula virtual que conecta a toda la comunidad',
  description: 'Plataforma privada para docentes, alumnos y padres. Gestión de cursos, tareas, calificaciones y comunicaciones.',
  icon: GraduationCap,
  emoji: '🎓',
  colorAccent: 'text-amber-400',
  gradientFrom: 'from-amber-400',
  gradientTo: 'to-orange-500',
  bgAccent: 'bg-amber-500/10',
  borderAccent: 'border-amber-500/30',
  deliveryWeeks: '6-8 semanas',
  tiers: [
    {
      id: 'intranet-estandar',
      name: 'Estándar',
      price: 7500,
      popular: false,
      cta: 'Elegir Estándar',
      features: [
        { text: 'Panel de docente (cursos, tareas, material)', included: true },
        { text: 'Panel de alumno (entregas, calificaciones)', included: true },
        { text: 'Sistema de calificaciones en línea', included: true },
        { text: 'Gestión de semanas y lecciones', included: true },
        { text: 'Subida de archivos y tareas', included: true },
        { text: 'Login seguro con JWT (doble token)', included: true },
        { text: 'Roles: Director, Docente, Alumno', included: true },
        { text: 'Notificaciones por email', included: true },
        { text: 'Almacenamiento cloud (Cloudflare R2)', included: true },
        { text: 'Dashboard del director con estadísticas', included: false },
        { text: 'Notificaciones WhatsApp a padres', included: false },
        { text: 'Reportes PDF descargables', included: false },
        { text: 'Rol de padre/apoderado', included: false },
        { text: 'App informativa para padres (PWA)', included: false },
      ],
    },
    {
      id: 'intranet-avanzada',
      name: 'Avanzada',
      price: 12500,
      popular: true,
      cta: '🚀 Elegir Avanzada',
      features: [
        { text: 'Panel de docente (cursos, tareas, material)', included: true },
        { text: 'Panel de alumno (entregas, calificaciones)', included: true },
        { text: 'Sistema de calificaciones en línea', included: true },
        { text: 'Gestión de semanas y lecciones', included: true },
        { text: 'Subida de archivos y tareas', included: true },
        { text: 'Login seguro con JWT (doble token)', included: true },
        { text: 'Roles: Director, Docente, Alumno, Padre', included: true },
        { text: 'Notificaciones por email', included: true },
        { text: 'Almacenamiento cloud (Cloudflare R2)', included: true },
        { text: 'Dashboard del director con KPIs', included: true, highlight: true },
        { text: 'Notificaciones WhatsApp a padres', included: true, highlight: true },
        { text: 'Reportes PDF descargables', included: true, highlight: true },
        { text: 'Rol de padre/apoderado con acceso', included: true, highlight: true },
        { text: 'App informativa para padres (PWA)', included: false },
      ],
    },
    {
      id: 'intranet-enterprise',
      name: 'Enterprise',
      price: 18000,
      popular: false,
      cta: 'Elegir Enterprise',
      features: [
        { text: 'Panel de docente (cursos, tareas, material)', included: true },
        { text: 'Panel de alumno (entregas, calificaciones)', included: true },
        { text: 'Sistema de calificaciones en línea', included: true },
        { text: 'Gestión de semanas y lecciones', included: true },
        { text: 'Subida de archivos y tareas', included: true },
        { text: 'Login seguro con JWT (doble token)', included: true },
        { text: 'Roles: Director, Docente, Alumno, Padre', included: true },
        { text: 'Notificaciones por email', included: true },
        { text: 'Almacenamiento cloud ilimitado (R2)', included: true },
        { text: 'Dashboard del director con KPIs avanzados', included: true },
        { text: 'Notificaciones WhatsApp + Email automáticos', included: true },
        { text: 'Reportes PDF + exportación Excel', included: true },
        { text: 'Rol de padre/apoderado con acceso completo', included: true },
        { text: 'App informativa para padres (PWA)', included: true, highlight: true },
      ],
    },
  ],
};

/* ──────────────────── PRODUCT 3: MATRÍCULA ──────────────────── */

const MATRICULA: Product = {
  id: 'matricula',
  name: 'App de Matrícula',
  tagline: 'Matrícula en segundos, no en horas',
  description: 'Aplicación de escritorio para secretaría. Trabaja sin internet y sincroniza cuando hay conexión. Consulta DNI automática.',
  icon: Monitor,
  emoji: '💻',
  colorAccent: 'text-emerald-400',
  gradientFrom: 'from-emerald-400',
  gradientTo: 'to-teal-500',
  bgAccent: 'bg-emerald-500/10',
  borderAccent: 'border-emerald-500/30',
  deliveryWeeks: '4-5 semanas',
  tiers: [
    {
      id: 'matricula-basica',
      name: 'Básica',
      price: 4000,
      popular: false,
      cta: 'Elegir Básica',
      features: [
        { text: 'App de escritorio Windows (Electron)', included: true },
        { text: 'Registro de alumnos y apoderados', included: true },
        { text: 'Proceso de matrícula paso a paso', included: true },
        { text: 'Base de datos local (SQLite)', included: true },
        { text: 'Funciona sin internet (offline)', included: true },
        { text: 'Búsqueda rápida de alumnos', included: true },
        { text: 'Consulta DNI automática (RENIEC)', included: false },
        { text: 'Sincronización con la nube (API)', included: false },
        { text: 'Reportes de matrícula en PDF', included: false },
        { text: 'Historial académico por alumno', included: false },
        { text: 'Migración de datos antiguos (FoxPro)', included: false },
        { text: 'Multi-sede (varias sedes/turnos)', included: false },
      ],
    },
    {
      id: 'matricula-completa',
      name: 'Completa',
      price: 6500,
      popular: true,
      cta: '✅ Elegir Completa',
      features: [
        { text: 'App de escritorio Windows (Electron)', included: true },
        { text: 'Registro de alumnos y apoderados', included: true },
        { text: 'Proceso de matrícula paso a paso', included: true },
        { text: 'Base de datos local (SQLite)', included: true },
        { text: 'Funciona sin internet (offline)', included: true },
        { text: 'Búsqueda rápida de alumnos', included: true },
        { text: 'Consulta DNI automática (RENIEC)', included: true, highlight: true },
        { text: 'Sincronización con la nube (API)', included: true, highlight: true },
        { text: 'Reportes de matrícula en PDF', included: true, highlight: true },
        { text: 'Historial académico por alumno', included: true, highlight: true },
        { text: 'Migración de datos antiguos (FoxPro)', included: false },
        { text: 'Multi-sede (varias sedes/turnos)', included: false },
      ],
    },
    {
      id: 'matricula-enterprise',
      name: 'Enterprise',
      price: 9500,
      popular: false,
      cta: 'Elegir Enterprise',
      features: [
        { text: 'App de escritorio Windows (Electron)', included: true },
        { text: 'Registro de alumnos y apoderados', included: true },
        { text: 'Proceso de matrícula paso a paso', included: true },
        { text: 'Base de datos local (SQLite)', included: true },
        { text: 'Funciona sin internet (offline)', included: true },
        { text: 'Búsqueda rápida de alumnos', included: true },
        { text: 'Consulta DNI automática (RENIEC)', included: true },
        { text: 'Sincronización con la nube (API)', included: true },
        { text: 'Reportes de matrícula en PDF + Excel', included: true },
        { text: 'Historial académico completo', included: true },
        { text: 'Migración de datos antiguos (FoxPro)', included: true, highlight: true },
        { text: 'Multi-sede (varias sedes/turnos)', included: true, highlight: true },
      ],
    },
  ],
};

/* ──────────────────── PRODUCT 4: MARKETING ──────────────────── */

const MARKETING: Product = {
  id: 'marketing',
  name: 'Marketing Digital',
  tagline: 'Más alumnos con campañas inteligentes',
  description: 'Campañas en Facebook y TikTok + analista de métricas que optimiza cada sol invertido en publicidad.',
  icon: Megaphone,
  emoji: '📣',
  colorAccent: 'text-pink-400',
  gradientFrom: 'from-pink-500',
  gradientTo: 'to-rose-500',
  bgAccent: 'bg-pink-500/10',
  borderAccent: 'border-pink-500/30',
  deliveryWeeks: '1-2 semanas',
  tiers: [
    {
      id: 'mkt-starter',
      name: 'Starter',
      price: 2500,
      popular: false,
      cta: 'Elegir Starter',
      features: [
        { text: 'Configuración Facebook Ads + TikTok Ads', included: true },
        { text: 'Creación página Facebook profesional', included: true },
        { text: 'Creación cuenta TikTok profesional', included: true },
        { text: '1 campaña publicitaria (admisión)', included: true },
        { text: 'Diseño de 5 anuncios gráficos', included: true },
        { text: 'Segmentación: Pichanaki y alrededores', included: true },
        { text: 'Pixel de Meta + TikTok Pixel', included: false },
        { text: 'Analista de métricas (1er mes)', included: false },
        { text: 'A/B testing de anuncios', included: false },
        { text: 'Reporte mensual de rendimiento', included: false },
        { text: 'Calendario de contenido (3 meses)', included: false },
        { text: 'Gestión continua de redes sociales', included: false },
      ],
    },
    {
      id: 'mkt-growth',
      name: 'Growth',
      price: 4500,
      popular: true,
      cta: '📈 Elegir Growth',
      features: [
        { text: 'Configuración Facebook Ads + TikTok Ads', included: true },
        { text: 'Creación página Facebook profesional', included: true },
        { text: 'Creación cuenta TikTok profesional', included: true },
        { text: '3 campañas publicitarias', included: true },
        { text: 'Diseño de 15 anuncios (fotos + videos)', included: true },
        { text: 'Segmentación: Pichanaki + Selva Central', included: true },
        { text: 'Pixel de Meta + TikTok Pixel', included: true, highlight: true },
        { text: 'Analista de métricas (1er mes)', included: true, highlight: true },
        { text: 'A/B testing de anuncios', included: true, highlight: true },
        { text: 'Reporte mensual de rendimiento', included: true, highlight: true },
        { text: 'Calendario de contenido (3 meses)', included: false },
        { text: 'Gestión continua de redes sociales', included: false },
      ],
    },
    {
      id: 'mkt-scale',
      name: 'Scale',
      price: 7500,
      popular: false,
      cta: 'Elegir Scale',
      features: [
        { text: 'Configuración Facebook Ads + TikTok Ads completa', included: true },
        { text: 'Creación página Facebook profesional', included: true },
        { text: 'Creación cuenta TikTok profesional', included: true },
        { text: '5 campañas publicitarias avanzadas', included: true },
        { text: 'Diseño de 30 anuncios (fotos + videos TikTok)', included: true },
        { text: 'Segmentación: Junín + Regiones vecinas', included: true },
        { text: 'Pixel de Meta + TikTok Pixel avanzado', included: true },
        { text: 'Analista de métricas permanente', included: true, highlight: true },
        { text: 'A/B testing continuo', included: true },
        { text: 'Reportes semanales de rendimiento', included: true },
        { text: 'Calendario de contenido (6 meses)', included: true, highlight: true },
        { text: 'Gestión continua de redes sociales', included: true, highlight: true },
      ],
    },
  ],
};

/* ──────────────────── ALL PRODUCTS ──────────────────── */

export const PRODUCTS: Product[] = [WEB_PAGE, INTRANET, MATRICULA, MARKETING];

/* ──────────────────── BUNDLE PACKS ──────────────────── */

export const BUNDLES: BundlePack[] = [
  {
    id: 'pack-digital',
    name: 'Pack Presencia Digital',
    tagline: 'Web + Marketing',
    products: ['web', 'marketing'],
    priceSum: 5500 + 4500,
    bundlePrice: 8900,
    popular: false,
    monthlyMaintenance: 200,
    color: 'blue',
  },
  {
    id: 'pack-completo',
    name: 'Pack Transformación Total',
    tagline: 'Los 4 servicios — La inversión definitiva',
    products: ['web', 'intranet', 'matricula', 'marketing'],
    priceSum: 5500 + 12500 + 6500 + 4500,
    bundlePrice: 22900,
    popular: true,
    monthlyMaintenance: 350,
    color: 'gold',
  },
  {
    id: 'pack-educativo',
    name: 'Pack Educativo',
    tagline: 'Web + Intranet + Matrícula',
    products: ['web', 'intranet', 'matricula'],
    priceSum: 5500 + 12500 + 6500,
    bundlePrice: 19500,
    popular: false,
    monthlyMaintenance: 300,
    color: 'purple',
  },
];

/* ──────────────────── MONTHLY COSTS ──────────────────── */

export const MONTHLY_COSTS_BUNDLE = {
  items: [
    {
      category: 'Servidor Cloud + Base de Datos',
      cost: 100,
      description: 'Infraestructura empresarial con monitoreo 24/7',
      includes: ['VPS Hetzner Cloud (Virginia, USA)', 'MongoDB Atlas con réplicas', 'Monitoreo UptimeRobot 24/7', 'Actualizaciones de seguridad'],
    },
    {
      category: 'Almacenamiento Cloud + Respaldos',
      cost: 45,
      description: 'Archivos, imágenes y backups automáticos diarios',
      includes: ['Cloudflare R2 (almacenamiento)', 'Backups diarios automáticos', 'CDN global Cloudflare', 'Certificado SSL/HTTPS'],
    },
    {
      category: '2 Dominios .edu.pe',
      cost: 20,
      description: 'Renovación anual prorrateada — registrados en NIC.pe',
      includes: ['iecontinental.edu.pe (principal)', 'Segundo dominio .edu.pe', 'Gestión DNS Cloudflare', 'Protección DDoS incluida'],
    },
    {
      category: 'WhatsApp Business + Email',
      cost: 50,
      description: 'Comunicación directa y automatizada con padres',
      includes: ['API oficial WhatsApp Business', 'Email transaccional (Resend)', 'Consulta DNI vía RENIEC', 'Notificaciones automáticas'],
    },
    {
      category: 'Soporte Técnico + Actualizaciones',
      cost: 135,
      description: 'Equipo de desarrollo disponible para tu colegio',
      includes: ['Corrección de errores (bugs)', 'Consultas técnicas ilimitadas', 'Actualización de dependencias', 'Mejoras menores incluidas'],
    },
  ],
  total: 350,
  comparison: 'Empresas similares cobran S/800 — S/1,500/mes por servicios equivalentes.',
};

/* ──────────────────── MARKETING DETAILS ──────────────────── */

export const MARKETING_DETAILS = {
  platforms: [
    {
      name: 'Facebook',
      icon: '📘',
      audience: 'Padres de familia 25-50 años',
      reach: 'Pichanaki, Chanchamayo, La Merced, Satipo',
      adTypes: ['Anuncios de imagen', 'Videos cortos', 'Carrusel de fotos', 'Historias'],
    },
    {
      name: 'TikTok',
      icon: '🎵',
      audience: 'Padres jóvenes 18-40 años + estudiantes',
      reach: 'Selva Central + Junín + Nacional',
      adTypes: ['Videos virales educativos', 'TikTok Ads In-Feed', 'Contenido trending educativo', 'Testimonios de alumnos'],
    },
  ],
  metricsAnalyst: {
    title: 'Analista de Métricas Digital',
    responsibilities: [
      'Monitoreo de rendimiento de campañas publicitarias',
      'Análisis de tráfico web y comportamiento de visitantes',
      'Optimización de costo por clic (CPC) y costo por lead',
      'Reportes mensuales con KPIs de marketing',
      'A/B testing de anuncios y landing pages',
      'Seguimiento de conversiones (visitas → matrículas)',
      'Recomendaciones de contenido basadas en datos',
    ],
    kpis: [
      { metric: 'Alcance mensual', target: '5,000 - 15,000 personas' },
      { metric: 'Costo por clic', target: 'S/ 0.15 - 0.40' },
      { metric: 'Tasa de conversión', target: '3% - 8%' },
      { metric: 'Leads mensuales', target: '30 - 80 consultas' },
    ],
  },
  adBudget: {
    recommended: 'S/ 300 - 500 / mes',
    note: 'Presupuesto publicitario adicional que el colegio invierte directamente en Facebook y TikTok Ads. No incluido en nuestros planes.',
  },
};

/* ──────────────────── TECH STACK ──────────────────── */

export const TECH_STACK = [
  { name: 'React', category: 'Frontend', logo: '⚛️' },
  { name: 'Next.js', category: 'Frontend', logo: '▲' },
  { name: 'NestJS', category: 'Backend', logo: '🐈' },
  { name: 'MongoDB', category: 'Database', logo: '🍃' },
  { name: 'Tailwind CSS', category: 'Estilos', logo: '🎨' },
  { name: 'TypeScript', category: 'Lenguaje', logo: '📘' },
  { name: 'Electron', category: 'Desktop', logo: '⚡' },
  { name: 'Cloudflare', category: 'Cloud', logo: '☁️' },
  { name: 'Nginx', category: 'Servidor', logo: '🔧' },
  { name: 'Redis', category: 'Cache', logo: '🔴' },
  { name: 'PM2', category: 'Procesos', logo: '🔄' },
  { name: 'GitHub Actions', category: 'CI/CD', logo: '🚀' },
];

/* ──────────────────── FAQS ──────────────────── */

export const FAQS = [
  {
    question: '¿Puedo contratar solo un servicio sin los demás?',
    answer: '¡Sí! Cada servicio es independiente. Puedes contratar solo la Página Web, solo la Intranet, o la combinación que necesites. Los paquetes te dan mejor precio si eliges varios.',
  },
  {
    question: '¿Cuánto tiempo toma el desarrollo?',
    answer: 'Depende de lo que contrates: Página Web (3-4 semanas), Intranet (6-8 semanas), App Matrícula (4-5 semanas), Marketing (1-2 semanas). Si contratas el Pack Completo, trabajamos en paralelo y en ~10-12 semanas está todo listo.',
  },
  {
    question: '¿Qué incluye el mantenimiento mensual?',
    answer: 'Hosting del servidor, base de datos, almacenamiento cloud, SSL, monitoreo 24/7, actualizaciones de seguridad, soporte técnico y respaldo de datos. Todo para que funcione sin interrupciones.',
  },
  {
    question: '¿Cómo funciona la consulta de DNI con RENIEC?',
    answer: 'Al ingresar el DNI en la App de Matrícula, el sistema consulta automáticamente la base de datos de RENIEC y autocompleta nombres, apellidos y datos de verificación. Elimina errores y acelera la matrícula.',
  },
  {
    question: '¿Cómo llegan las notificaciones por WhatsApp?',
    answer: 'Usamos la API oficial de WhatsApp Business (Meta). Los padres reciben mensajes automáticos sobre calificaciones, comunicados y recordatorios desde el número oficial del colegio.',
  },
  {
    question: '¿Dónde se almacenan los datos?',
    answer: 'En MongoDB Atlas (Virginia, USA) con encriptación, réplicas automáticas y backups diarios. Los archivos se guardan en Cloudflare R2, servicio empresarial con 0 costo por descarga.',
  },
  {
    question: '¿Cómo funciona el marketing en Facebook y TikTok?',
    answer: 'Configuramos Facebook Ads Manager y TikTok Ads con Pixel de seguimiento en tu web. Creamos campañas segmentadas por ubicación (Pichanaki y alrededores), edad e intereses educativos. El analista optimiza para maximizar matrículas.',
  },
  {
    question: '¿El colegio necesita contratar algo adicional?',
    answer: 'No. Todo incluido. El único costo adicional opcional es el presupuesto de Facebook y TikTok Ads (recomendamos S/300-500/mes) que el colegio controla directamente.',
  },
];
