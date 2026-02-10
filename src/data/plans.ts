import {
  Globe,
  GraduationCap,
  BarChart3,
  Shield,
  Cloud,
  MessageCircle,
  Monitor,
  Megaphone,
  Layout,
  type LucideIcon,
} from 'lucide-react';

export interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  currency: string;
  period: string;
  description: string;
  popular: boolean;
  color: string;
  colorFrom: string;
  colorTo: string;
  icon: LucideIcon;
  features: PlanFeature[];
  monthlyMaintenance: number;
  deliveryWeeks: number;
  highlights: string[];
}

export interface ServiceCategory {
  title: string;
  icon: LucideIcon;
  items: ServiceItem[];
}

export interface ServiceItem {
  name: string;
  description: string;
  plans: ('esencial' | 'profesional' | 'empresarial')[];
}

export const PLANS: Plan[] = [
  {
    id: 'esencial',
    name: 'Esencial',
    subtitle: 'Presencia Digital Básica',
    price: 8500,
    currency: 'S/',
    period: 'único',
    description: 'Ideal para iniciar la transformación digital con una presencia web profesional y gestión básica.',
    popular: false,
    color: 'blue',
    colorFrom: 'from-blue-500',
    colorTo: 'to-cyan-400',
    icon: Globe,
    deliveryWeeks: 6,
    monthlyMaintenance: 250,
    highlights: [
      'Página web institucional',
      'Dominio .edu.pe',
      'Hosting en la nube',
    ],
    features: [
      { text: 'Landing page institucional responsive', included: true },
      { text: 'Dominio iecontinental.edu.pe', included: true },
      { text: 'Hosting cloud (Hetzner VPS)', included: true },
      { text: 'Certificado SSL (HTTPS)', included: true },
      { text: 'Protección DDoS (Cloudflare)', included: true },
      { text: 'Hasta 5 secciones informativas', included: true },
      { text: 'Formulario de contacto', included: true },
      { text: 'Diseño adaptado a móviles', included: true },
      { text: 'SEO básico (Google)', included: true },
      { text: 'Intranet educativa completa', included: false },
      { text: 'App de matrícula desktop', included: false },
      { text: 'Consulta DNI (RENIEC)', included: false },
      { text: 'Notificaciones WhatsApp', included: false },
      { text: 'Almacenamiento en la nube (R2)', included: false },
      { text: 'Marketing digital (Meta Ads)', included: false },
      { text: 'Analista de métricas', included: false },
      { text: 'Reportes y estadísticas', included: false },
      { text: 'Soporte prioritario 24/7', included: false },
    ],
  },
  {
    id: 'profesional',
    name: 'Profesional',
    subtitle: 'Plataforma Educativa Completa',
    price: 18900,
    originalPrice: 24000,
    currency: 'S/',
    period: 'único',
    description: 'La solución integral que transforma completamente la gestión educativa. Incluye web, intranet, app de matrícula y marketing digital.',
    popular: true,
    color: 'gold',
    colorFrom: 'from-amber-400',
    colorTo: 'to-orange-500',
    icon: GraduationCap,
    deliveryWeeks: 10,
    monthlyMaintenance: 350,
    highlights: [
      'Todo del plan Esencial',
      'Intranet educativa completa',
      'App de matrícula + RENIEC',
      'Marketing en Facebook/Instagram',
      'Almacenamiento cloud ilimitado',
    ],
    features: [
      { text: 'Landing page institucional responsive', included: true },
      { text: 'Dominio iecontinental.edu.pe', included: true },
      { text: 'Hosting cloud (Hetzner VPS)', included: true },
      { text: 'Certificado SSL (HTTPS)', included: true },
      { text: 'Protección DDoS (Cloudflare)', included: true },
      { text: 'Hasta 15 secciones + blog', included: true },
      { text: 'Formulario de contacto + chat', included: true },
      { text: 'SEO avanzado + Google Analytics', included: true },
      { text: 'Intranet educativa (aula virtual)', included: true, highlight: true },
      { text: 'Sistema de calificaciones en línea', included: true, highlight: true },
      { text: 'App de matrícula desktop (Windows)', included: true, highlight: true },
      { text: 'Consulta DNI automática (RENIEC)', included: true, highlight: true },
      { text: 'Notificaciones WhatsApp a padres', included: true, highlight: true },
      { text: 'Notificaciones por Email', included: true },
      { text: 'Almacenamiento cloud (Cloudflare R2)', included: true, highlight: true },
      { text: 'Facebook & Instagram Ads (config.)', included: true, highlight: true },
      { text: 'Analista de métricas (1er mes)', included: true, highlight: true },
      { text: 'Reportes y estadísticas en dashboard', included: true },
      { text: 'Soporte prioritario', included: true },
      { text: 'Capacitación al personal (8 hrs)', included: true },
    ],
  },
  {
    id: 'empresarial',
    name: 'Empresarial',
    subtitle: 'Ecosistema Digital Total',
    price: 32000,
    currency: 'S/',
    period: 'único',
    description: 'Para instituciones que buscan el máximo nivel tecnológico con IA, automatización avanzada y soporte dedicado.',
    popular: false,
    color: 'purple',
    colorFrom: 'from-purple-500',
    colorTo: 'to-pink-500',
    icon: BarChart3,
    deliveryWeeks: 14,
    monthlyMaintenance: 500,
    highlights: [
      'Todo del plan Profesional',
      'Módulo con asistencia de IA',
      'App móvil para padres',
      'Analista de métricas permanente',
      'Soporte 24/7 dedicado',
    ],
    features: [
      { text: 'Landing page institucional responsive', included: true },
      { text: 'Dominio iecontinental.edu.pe', included: true },
      { text: 'Hosting cloud premium (Hetzner VPS)', included: true },
      { text: 'Certificado SSL (HTTPS)', included: true },
      { text: 'Protección DDoS (Cloudflare)', included: true },
      { text: 'Secciones ilimitadas + blog + noticias', included: true },
      { text: 'SEO avanzado + Analytics + Search Console', included: true },
      { text: 'Intranet educativa (aula virtual)', included: true },
      { text: 'Sistema de calificaciones en línea', included: true },
      { text: 'App de matrícula desktop (Windows)', included: true },
      { text: 'Consulta DNI automática (RENIEC)', included: true },
      { text: 'Notificaciones WhatsApp + Email', included: true },
      { text: 'Almacenamiento cloud ilimitado (R2)', included: true },
      { text: 'Facebook & Instagram Ads (gestión completa)', included: true },
      { text: 'Analista de métricas permanente', included: true, highlight: true },
      { text: 'Asistente IA para consultas frecuentes', included: true, highlight: true },
      { text: 'App móvil informativa para padres (PWA)', included: true, highlight: true },
      { text: 'Panel de director con KPIs', included: true, highlight: true },
      { text: 'Automatización de reportes MINEDU', included: true, highlight: true },
      { text: 'Soporte 24/7 dedicado', included: true },
      { text: 'Capacitación completa (16 hrs)', included: true },
      { text: 'Garantía extendida 12 meses', included: true },
    ],
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'Plataforma Web',
    icon: Layout,
    items: [
      {
        name: 'Landing Page Institucional',
        description: 'Página web pública con información del colegio, admisión, contacto y noticias',
        plans: ['esencial', 'profesional', 'empresarial'],
      },
      {
        name: 'Intranet Educativa (Aula Virtual)',
        description: 'Plataforma privada para docentes, alumnos y padres con gestión de cursos, tareas y calificaciones',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'API Backend (NestJS)',
        description: 'Servidor de aplicación robusto que conecta todos los servicios con seguridad JWT',
        plans: ['profesional', 'empresarial'],
      },
    ],
  },
  {
    title: 'Aplicaciones',
    icon: Monitor,
    items: [
      {
        name: 'App de Matrícula (Desktop)',
        description: 'Aplicación de escritorio para secretaría con sistema de matrícula offline y sincronización',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Consulta DNI (RENIEC)',
        description: 'Autocompletado de datos personales ingresando solo el DNI del alumno o apoderado',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'App Móvil para Padres (PWA)',
        description: 'Aplicación web progresiva para que padres consulten notas y comunicados desde su celular',
        plans: ['empresarial'],
      },
    ],
  },
  {
    title: 'Infraestructura Cloud',
    icon: Cloud,
    items: [
      {
        name: 'Servidor VPS (Hetzner Cloud)',
        description: 'Servidor dedicado en Virginia, USA con 2 vCPU, 8GB RAM, 80GB NVMe SSD',
        plans: ['esencial', 'profesional', 'empresarial'],
      },
      {
        name: 'Base de Datos (MongoDB Atlas)',
        description: 'Base de datos NoSQL administrada con backups automáticos y réplicas',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Almacenamiento Cloud (Cloudflare R2)',
        description: 'Almacenamiento de archivos, fotos, tareas y documentos sin límite de descarga',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'CDN + SSL + DDoS (Cloudflare)',
        description: 'Red de distribución global, certificado HTTPS y protección contra ataques',
        plans: ['esencial', 'profesional', 'empresarial'],
      },
    ],
  },
  {
    title: 'Comunicaciones',
    icon: MessageCircle,
    items: [
      {
        name: 'Notificaciones WhatsApp',
        description: 'Mensajes automáticos a padres sobre calificaciones, asistencia y comunicados',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Email Transaccional',
        description: 'Emails automáticos de bienvenida, recuperación de contraseña y reportes',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Chat Interno',
        description: 'Sistema de mensajería entre docentes y administración',
        plans: ['empresarial'],
      },
    ],
  },
  {
    title: 'Marketing Digital',
    icon: Megaphone,
    items: [
      {
        name: 'Configuración Meta Business',
        description: 'Creación y configuración de página de Facebook, Instagram y Meta Business Suite',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Campañas Facebook & Instagram Ads',
        description: 'Diseño y publicación de anuncios para captar alumnos en Pichanaki y alrededores',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Pixel de Meta + Conversiones',
        description: 'Tracking de visitantes web para remarketing y optimización de anuncios',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Analista de Métricas',
        description: 'Profesional dedicado al análisis de rendimiento de campañas, tráfico web y conversiones',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Gestión Continua de Redes',
        description: 'Administración permanente de redes sociales con calendario de contenido',
        plans: ['empresarial'],
      },
    ],
  },
  {
    title: 'Seguridad & Monitoreo',
    icon: Shield,
    items: [
      {
        name: 'Autenticación JWT (doble token)',
        description: 'Sistema de login seguro con tokens de acceso y refresco',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Firewall + Fail2ban',
        description: 'Protección del servidor contra intentos de intrusión',
        plans: ['esencial', 'profesional', 'empresarial'],
      },
      {
        name: 'Monitoreo 24/7 (UptimeRobot)',
        description: 'Vigilancia continua del estado del servidor con alertas inmediatas',
        plans: ['profesional', 'empresarial'],
      },
      {
        name: 'Backups Automáticos',
        description: 'Copias de seguridad diarias de base de datos y archivos críticos',
        plans: ['profesional', 'empresarial'],
      },
    ],
  },
];

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

export const FAQS = [
  {
    question: '¿Cuánto tiempo toma el desarrollo?',
    answer: 'El Plan Esencial se entrega en 6 semanas, el Profesional en 10 semanas y el Empresarial en 14 semanas. Cada fase incluye revisiones y aprobación del colegio antes de avanzar.',
  },
  {
    question: '¿Qué incluye el mantenimiento mensual?',
    answer: 'Incluye hosting del servidor, base de datos, almacenamiento cloud, SSL, monitoreo 24/7, actualizaciones de seguridad, soporte técnico y respaldo de datos. Es todo lo necesario para que la plataforma funcione sin interrupciones.',
  },
  {
    question: '¿Cómo funciona la consulta de DNI con RENIEC?',
    answer: 'Al ingresar el número de DNI de un alumno o apoderado, el sistema consulta automáticamente la base de datos de RENIEC y autocompleta nombres, apellidos y datos de verificación. Esto elimina errores de tipeo y acelera el proceso de matrícula.',
  },
  {
    question: '¿Cómo llegan las notificaciones por WhatsApp?',
    answer: 'Usamos la API oficial de WhatsApp Business (Meta). Los padres reciben mensajes automáticos cuando se publican calificaciones, cuando hay comunicados importantes, o recordatorios de pagos. Todo desde el número oficial del colegio.',
  },
  {
    question: '¿Dónde se almacenan los datos de los alumnos?',
    answer: 'Los datos se almacenan en MongoDB Atlas (Virginia, USA) con encriptación, réplicas automáticas y backups diarios. Los archivos y fotos se guardan en Cloudflare R2, un servicio de almacenamiento empresarial con 0 costo por descarga.',
  },
  {
    question: '¿Qué pasa si quiero cambiar de plan después?',
    answer: 'Siempre puedes escalar. Si inicias con el Plan Esencial y luego necesitas la Intranet, pagamos solo la diferencia para agregar los módulos faltantes. La arquitectura está diseñada para crecer.',
  },
  {
    question: '¿Cómo funciona el marketing en Facebook e Instagram?',
    answer: 'Configuramos Meta Business Suite con el Pixel de seguimiento en tu web. Creamos campañas segmentadas por ubicación (Pichanaki y alrededores), edad de padres, e intereses educativos. El analista de métricas optimiza las campañas para maximizar matrículas con el menor costo por clic.',
  },
  {
    question: '¿El colegio necesita contratar algo adicional?',
    answer: 'No. Todo está incluido: dominio, hosting, base de datos, almacenamiento, WhatsApp, emails y marketing. El único costo adicional es el presupuesto de Meta Ads que el colegio decida invertir en publicidad (recomendamos S/200-500/mes).',
  },
];

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
      name: 'Instagram',
      icon: '📸',
      audience: 'Padres jóvenes 20-40 años',
      reach: 'Selva Central + Junín',
      adTypes: ['Reels educativos', 'Stories interactivas', 'Posts de logros', 'Infografías'],
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
    note: 'Presupuesto publicitario adicional que el colegio invierte directamente en Meta. No incluido en nuestros planes.',
  },
};

export const MONTHLY_COSTS = {
  esencial: {
    items: [
      { service: 'Servidor VPS (Hetzner)', cost: 35, note: '~$9/mes' },
      { service: 'Dominio .edu.pe', cost: 8, note: 'Anual prorrateado' },
      { service: 'Cloudflare (CDN + SSL)', cost: 0, note: 'Plan Free' },
      { service: 'Monitoreo (UptimeRobot)', cost: 0, note: 'Plan Free' },
      { service: 'Soporte técnico remoto', cost: 207, note: 'Incluido' },
    ],
    total: 250,
  },
  profesional: {
    items: [
      { service: 'Servidor VPS (Hetzner)', cost: 35, note: '~$9/mes' },
      { service: 'MongoDB Atlas (M2)', cost: 36, note: '~$9/mes' },
      { service: 'Dominio .edu.pe', cost: 8, note: 'Anual prorrateado' },
      { service: 'Cloudflare R2 (Almacenamiento)', cost: 0, note: 'Free tier' },
      { service: 'Cloudflare (CDN + SSL)', cost: 0, note: 'Plan Free' },
      { service: 'WhatsApp Business API', cost: 15, note: '~500 msgs/mes' },
      { service: 'Resend (Emails)', cost: 0, note: '3,000 gratis/mes' },
      { service: 'RENIEC API', cost: 0, note: '2,000 consultas gratis/mes' },
      { service: 'Monitoreo (UptimeRobot)', cost: 0, note: 'Plan Free' },
      { service: 'Soporte técnico + Actualizaciones', cost: 256, note: 'Incluido' },
    ],
    total: 350,
  },
  empresarial: {
    items: [
      { service: 'Servidor VPS (Hetzner Premium)', cost: 55, note: '~$14/mes' },
      { service: 'MongoDB Atlas (M5)', cost: 100, note: '~$25/mes' },
      { service: 'Dominio .edu.pe', cost: 8, note: 'Anual prorrateado' },
      { service: 'Cloudflare R2 (Premium)', cost: 0, note: 'Free tier' },
      { service: 'Cloudflare (CDN + SSL)', cost: 0, note: 'Plan Free' },
      { service: 'WhatsApp Business API', cost: 30, note: '~1,000 msgs/mes' },
      { service: 'Resend (Emails)', cost: 0, note: '3,000 gratis/mes' },
      { service: 'RENIEC API Premium', cost: 30, note: 'Ilimitadas' },
      { service: 'Monitoreo (UptimeRobot)', cost: 0, note: 'Plan Free' },
      { service: 'Soporte 24/7 + Analista métricas', cost: 277, note: 'Dedicado' },
    ],
    total: 500,
  },
};
