import { motion } from 'framer-motion';
import { MONTHLY_COSTS_BUNDLE } from '../data/plans';
import { DollarSign, Shield, Info, Server, HardDrive, Globe, MessageCircle, Wrench } from 'lucide-react';

const CATEGORY_ICONS = [Server, HardDrive, Globe, MessageCircle, Wrench];

export default function MonthlyCosts() {
  const costs = MONTHLY_COSTS_BUNDLE;

  return (
    <section id="costos" className="relative py-24 md:py-32 mesh-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="divide-y divide-slate-800/50">
            {costs.items.map((item, i) => {
              const Icon = CATEGORY_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-6 md:px-8 py-5 hover:bg-slate-800/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-amber-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-white font-semibold">{item.category}</div>
                        <div className="text-slate-500 text-sm mt-0.5">{item.description}</div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                          {item.includes.map((inc, j) => (
                            <span key={j} className="text-slate-600 text-xs flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-700" />
                              {inc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-white font-bold text-lg">S/{item.cost}</span>
                      <span className="text-slate-600 text-xs block">/mes</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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

        {/* Competitive comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 glass rounded-2xl p-5 mt-6 border-l-4 border-emerald-500"
        >
          <Shield size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white text-sm font-semibold mb-1">
              Precio competitivo garantizado
            </p>
            <p className="text-slate-400 text-xs">
              {costs.comparison} Nuestro precio incluye servidores enterprise,
              almacenamiento cloud, soporte directo del desarrollador y
              actualizaciones de seguridad continuas.
            </p>
          </div>
        </motion.div>

        {/* Info note */}
        <div className="flex items-start gap-3 mt-4 text-slate-500 text-xs">
          <Info size={14} className="flex-shrink-0 mt-0.5" />
          <p>
            Los costos mensuales varían según el paquete elegido. Este ejemplo corresponde al
            Pack Transformación Total. Todos los precios en soles peruanos. Dominios .edu.pe
            renovados anualmente ante NIC.pe (S/110 c/u por año).
          </p>
        </div>
      </div>
    </section>
  );
}
