import { motion } from 'framer-motion';
import { MARKETING_DETAILS } from '../data/plans';
import { Target, TrendingUp, BarChart3, Users, Eye, MousePointerClick, UserPlus } from 'lucide-react';

export default function Marketing() {
  const { platforms, metricsAnalyst } = MARKETING_DETAILS;

  return (
    <section id="marketing" className="relative py-24 md:py-32 mesh-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-pink-400 mb-4">
            📣 MARKETING DIGITAL
          </span>
          <h2 className="text-white mb-4">
            Facebook & TikTok Ads +{' '}
            <span className="gradient-text">Analista de Métricas</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Campañas publicitarias profesionales para captar más alumnos
            con seguimiento de métricas en tiempo real.
          </p>
        </motion.div>

        {/* Platforms */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong rounded-3xl p-6 md:p-8 hover:border-pink-500/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{platform.icon}</div>
                <div>
                  <h3 className="text-white text-xl font-bold">{platform.name}</h3>
                  <p className="text-slate-400 text-sm">{platform.audience}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-slate-500 font-medium mb-2">ALCANCE GEOGRÁFICO</div>
                <div className="flex items-center gap-2">
                  <Target size={14} className="text-pink-400" />
                  <span className="text-slate-300 text-sm">{platform.reach}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-500 font-medium mb-2">TIPOS DE ANUNCIOS</div>
                <div className="flex flex-wrap gap-2">
                  {platform.adTypes.map((type, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-pink-500/10 text-pink-300 border border-pink-500/20"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Analyst */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 md:p-10 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-4">
                <BarChart3 size={14} />
                INCLUIDO EN PLAN GROWTH Y SCALE
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {metricsAnalyst.title}
              </h3>
              <div className="space-y-3">
                {metricsAnalyst.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp size={11} />
                    </div>
                    <span className="text-slate-300 text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: KPIs */}
            <div className="md:w-80">
              <div className="text-xs text-slate-500 font-bold mb-4">KPIs OBJETIVO</div>
              <div className="grid grid-cols-2 gap-3">
                {metricsAnalyst.kpis.map((kpi, i) => {
                  const icons = [Users, Eye, MousePointerClick, UserPlus];
                  const KpiIcon = icons[i];
                  return (
                    <div key={i} className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/50">
                      <KpiIcon size={18} className="text-amber-400 mb-2" />
                      <div className="text-white font-bold text-sm">{kpi.target}</div>
                      <div className="text-slate-500 text-xs mt-1">{kpi.metric}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
