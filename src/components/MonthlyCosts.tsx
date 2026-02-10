import { motion } from 'framer-motion';
import { MONTHLY_COSTS_BUNDLE } from '../data/plans';
import { DollarSign, TrendingDown, Info } from 'lucide-react';

export default function MonthlyCosts() {
  const costs = MONTHLY_COSTS_BUNDLE;
  const realCost = costs.items.reduce((sum, item) => sum + item.cost, 0);
  const margin = costs.total - realCost;
  const marginPercent = Math.round((margin / costs.total) * 100);

  return (
    <section id="costos" className="relative py-24 md:py-32 mesh-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-emerald-400 mb-4">
            💰 TRANSPARENCIA DE COSTOS
          </span>
          <h2 className="text-white mb-4">
            Desglose del{' '}
            <span className="gradient-text">mantenimiento mensual</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ejemplo del Pack Transformación Total. Sin costos ocultos, sin sorpresas.
          </p>
        </motion.div>

        {/* Cost breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl overflow-hidden"
        >
          {/* Items */}
          <div className="divide-y divide-slate-800/50">
            {costs.items.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-6 md:px-8 py-4 hover:bg-slate-800/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.cost > 0 ? 'bg-amber-400' : 'bg-green-400'}`} />
                  <div>
                    <div className="text-white text-sm font-medium">{item.service}</div>
                    <div className="text-slate-500 text-xs">{item.note}</div>
                  </div>
                </div>
                <div className="text-right">
                  {item.cost > 0 ? (
                    <span className="text-white font-bold">S/{item.cost}</span>
                  ) : (
                    <span className="text-green-400 font-bold text-sm">GRATIS</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="px-6 md:px-8 py-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-t border-amber-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DollarSign size={24} className="text-amber-400" />
                <div>
                  <div className="text-white font-bold text-lg">Total Mensual</div>
                  <div className="text-slate-400 text-xs">Facturado al colegio</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-amber-400">
                  S/{costs.total}/mes
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Savings callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 glass rounded-2xl p-5 mt-6 border-l-4 border-green-500"
        >
          <TrendingDown size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white text-sm font-semibold mb-1">
              Costo real de infraestructura: S/{realCost}/mes
            </p>
            <p className="text-slate-400 text-xs">
              El margen de S/{margin}/mes ({marginPercent}%) cubre soporte técnico, actualizaciones de seguridad,
              monitoreo y garantía de funcionamiento continuo. Competitivo frente a servicios similares que cobran S/800-1,500/mes.
            </p>
          </div>
        </motion.div>

        {/* Info note */}
        <div className="flex items-start gap-3 mt-4 text-slate-500 text-xs">
          <Info size={14} className="flex-shrink-0 mt-0.5" />
          <p>
            Precios en dólares convertidos a soles (TC S/3.80).
            Muchos servicios son gratuitos gracias a free tiers de proveedores enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
