import { motion } from 'framer-motion';
import { Shield, Award, Clock, HeadphonesIcon, Code, RefreshCcw } from 'lucide-react';

const GUARANTEES = [
  {
    icon: Code,
    title: 'Código fuente tuyo',
    description: 'Al finalizar, recibes todo el código fuente del proyecto. Es 100% de propiedad del colegio.',
  },
  {
    icon: Shield,
    title: 'Sin vendor lock-in',
    description: 'No estás atado a nosotros. Puedes migrar a otro proveedor cuando quieras con tu código.',
  },
  {
    icon: RefreshCcw,
    title: 'Revisiones ilimitadas',
    description: 'Durante el desarrollo, hacemos todas las revisiones necesarias hasta que estés satisfecho.',
  },
  {
    icon: Clock,
    title: 'Entrega puntual',
    description: 'Nos comprometemos con fechas de entrega que respetamos. Penalidad de 5% por semana de atraso.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte post-entrega',
    description: 'Soporte técnico incluido los primeros 3 meses después de la entrega sin costo adicional.',
  },
  {
    icon: Award,
    title: 'Garantía de calidad',
    description: 'Si encuentras un bug dentro de los primeros 6 meses, lo corregimos sin costo.',
  },
];

export default function Guarantees() {
  return (
    <section className="relative py-24 md:py-32 mesh-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-amber-400 mb-4">
            🛡️ GARANTÍAS
          </span>
          <h2 className="text-white mb-4">
            Nuestro compromiso{' '}
            <span className="gradient-text-gold">contigo</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Trabajamos con transparencia y profesionalismo.
            Estas son nuestras garantías para tu tranquilidad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUARANTEES.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-strong rounded-2xl p-6 hover:border-amber-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                  <Icon size={22} className="text-amber-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{g.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{g.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
