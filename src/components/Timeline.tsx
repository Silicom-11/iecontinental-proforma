import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ArrowRight, Rocket, Code2, TestTube, Presentation } from 'lucide-react';

const PHASES = [
  {
    icon: Presentation,
    title: 'Fase 1: Diseño y Planificación',
    duration: '1-2 semanas',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    tasks: [
      'Reunión de requerimientos con el colegio',
      'Diseño de interfaces (UI/UX) en Figma',
      'Definición de arquitectura técnica',
      'Aprobación de diseños por el director',
    ],
  },
  {
    icon: Code2,
    title: 'Fase 2: Desarrollo Core',
    duration: '3-6 semanas',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    tasks: [
      'Desarrollo del backend (API NestJS)',
      'Desarrollo de la landing page',
      'Desarrollo de la intranet educativa',
      'App de matrícula desktop',
      'Integración RENIEC + WhatsApp',
    ],
  },
  {
    icon: TestTube,
    title: 'Fase 3: Testing y Ajustes',
    duration: '1-2 semanas',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    tasks: [
      'Pruebas funcionales de cada módulo',
      'Pruebas de carga y rendimiento',
      'Corrección de errores reportados',
      'Ajustes de diseño solicitados',
    ],
  },
  {
    icon: Rocket,
    title: 'Fase 4: Lanzamiento',
    duration: '1 semana',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    tasks: [
      'Deploy en servidor de producción',
      'Configuración de dominio y SSL',
      'Capacitación al personal del colegio',
      'Configuración de Meta Ads y campañas',
      'Monitoreo post-lanzamiento',
    ],
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-purple-400 mb-4">
            📅 METODOLOGÍA DE TRABAJO
          </span>
          <h2 className="text-white mb-4">
            Proceso de{' '}
            <span className="gradient-text">desarrollo</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Metodología ágil con entregas incrementales y aprobación
            del colegio en cada fase.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-0.5" />

          <div className="space-y-8">
            {PHASES.map((phase, i) => {
              const Icon = phase.icon;
              const isRight = i % 2 === 1;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 ${
                    isRight ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 md:left-1/2 w-12 h-12 -ml-6 md:-ml-6 rounded-xl ${phase.bg} border ${phase.borderColor} flex items-center justify-center z-10 bg-slate-950`}>
                    <Icon size={20} className={phase.color} />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isRight ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
                    <div className="glass-strong rounded-2xl p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className={`font-bold ${phase.color}`}>
                          {phase.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={14} className="text-slate-500" />
                        <span className="text-slate-400 text-sm font-medium">{phase.duration}</span>
                      </div>
                      <div className="space-y-2">
                        {phase.tasks.map((task, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className={`${phase.color} flex-shrink-0 mt-0.5`} />
                            <span className="text-slate-300 text-sm">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-6 md:left-1/2 -ml-5 md:-ml-5 mt-8"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
              <ArrowRight size={18} className="text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
