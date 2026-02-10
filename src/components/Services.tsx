import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/plans';

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-blue-400 mb-4">
            🔧 SERVICIOS INCLUIDOS
          </span>
          <h2 className="text-white mb-4">
            Comparativa detallada de{' '}
            <span className="gradient-text">servicios</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Cada servicio está pensado para aportar valor real a la gestión educativa.
          </p>
        </motion.div>

        {/* Mobile: Cards view */}
        <div className="lg:hidden space-y-8">
          {SERVICE_CATEGORIES.map((category, ci) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-white text-lg font-bold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, ii) => (
                    <div key={ii} className="glass rounded-2xl p-4">
                      <div className="font-medium text-white text-sm mb-1">{item.name}</div>
                      <div className="text-slate-500 text-xs mb-3">{item.description}</div>
                      <div className="flex gap-3">
                        {(['esencial', 'profesional', 'empresarial'] as const).map((plan) => (
                          <div key={plan} className="flex items-center gap-1.5">
                            {item.plans.includes(plan) ? (
                              <Check size={14} className={
                                plan === 'profesional' ? 'text-amber-400' : 'text-green-400'
                              } />
                            ) : (
                              <Minus size={14} className="text-slate-700" />
                            )}
                            <span className={`text-[10px] font-medium ${
                              item.plans.includes(plan)
                                ? 'text-slate-300'
                                : 'text-slate-700'
                            }`}>
                              {plan.charAt(0).toUpperCase() + plan.slice(1)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Table view */}
        <div className="hidden lg:block">
          <div className="glass-strong rounded-3xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_2fr_100px_100px_100px] gap-4 px-8 py-5 border-b border-slate-700/50 bg-slate-800/50">
              <div className="text-slate-400 text-sm font-semibold">Categoría</div>
              <div className="text-slate-400 text-sm font-semibold">Servicio</div>
              <div className="text-center text-blue-400 text-sm font-bold">Esencial</div>
              <div className="text-center text-amber-400 text-sm font-bold">Profesional</div>
              <div className="text-center text-purple-400 text-sm font-bold">Empresarial</div>
            </div>

            {/* Table body */}
            {SERVICE_CATEGORIES.map((category, ci) => {
              const Icon = category.icon;
              return category.items.map((item, ii) => (
                <motion.div
                  key={`${ci}-${ii}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (ci * category.items.length + ii) * 0.02 }}
                  className={`grid grid-cols-[1fr_2fr_100px_100px_100px] gap-4 px-8 py-4 items-center border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${
                    ii === 0 ? 'border-t border-slate-700/30' : ''
                  }`}
                >
                  {/* Category (only show on first item) */}
                  <div>
                    {ii === 0 && (
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-blue-400" />
                        <span className="text-white text-sm font-semibold">{category.title}</span>
                      </div>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <div className="text-slate-200 text-sm font-medium">{item.name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{item.description}</div>
                  </div>

                  {/* Plan columns */}
                  {(['esencial', 'profesional', 'empresarial'] as const).map((plan) => (
                    <div key={plan} className="text-center">
                      {item.plans.includes(plan) ? (
                        <div className={`inline-flex w-7 h-7 rounded-full items-center justify-center ${
                          plan === 'profesional'
                            ? 'bg-amber-400/20 text-amber-400'
                            : plan === 'empresarial'
                            ? 'bg-purple-400/20 text-purple-400'
                            : 'bg-green-400/20 text-green-400'
                        }`}>
                          <Check size={16} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="inline-flex w-7 h-7 rounded-full items-center justify-center bg-slate-800 text-slate-700">
                          <Minus size={14} />
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              ));
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
