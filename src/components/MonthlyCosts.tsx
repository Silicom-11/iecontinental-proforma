import { motion } from 'framer-motion';
import { MONTHLY_COSTS_BUNDLE } from '../data/plans';
import { DollarSign, Shield, Info, Megaphone, TrendingUp } from 'lucide-react';

export default function MonthlyCosts() {
  const costs = MONTHLY_COSTS_BUNDLE;
  const paidItems = costs.items.filter((i) => i.paid);
  const freeItems = costs.items.filter((i) => !i.paid);
  const { optionalMarketing } = costs;

  return (
    <section id="mantenimiento" className="relative py-24 md:py-32 mesh-gradient">
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

        {/* ─── MAIN COST CARD ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl overflow-hidden"
        >
          {/* Paid items */}
          <div className="divide-y divide-slate-800/50">
            {paidItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between px-6 md:px-8 py-4 hover:bg-slate-800/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div>
                    <div className="text-white text-sm font-medium">{item.service}</div>
                    <div className="text-slate-500 text-xs">{item.note}</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <span className="text-white font-bold">S/{item.cost}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Free items */}
          <div className="border-t border-slate-800/50 bg-emerald-500/[0.03]">
            <div className="px-6 md:px-8 pt-3 pb-1">
              <span className="text-emerald-400 text-[10px] font-bold tracking-widest">
                SERVICIOS GRATUITOS INCLUIDOS
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {freeItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 md:px-8 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div>
                      <div className="text-slate-300 text-sm">{item.service}</div>
                      <div className="text-slate-600 text-xs">{item.note}</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-bold text-xs ml-3 flex-shrink-0">GRATIS</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="px-6 md:px-8 py-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-t border-amber-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DollarSign size={24} className="text-amber-400" />
                <div>
                  <div className="text-white font-bold text-lg">Total Mensual</div>
                  <div className="text-slate-400 text-xs">
                    Infraestructura + soporte — facturado al colegio
                  </div>
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

        {/* ─── OPTIONAL MARKETING MANAGEMENT ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="glass-strong rounded-3xl overflow-hidden border border-pink-500/20">
            {/* Header */}
            <div className="px-6 md:px-8 py-4 bg-pink-500/5 border-b border-pink-500/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <Megaphone size={16} className="text-pink-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Gestión de Marketing Digital</div>
                <div className="text-pink-400/80 text-xs font-medium">Opcional — Solo si contratas el servicio de Marketing</div>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold">
                OPCIONAL
              </span>
            </div>

            {/* Management */}
            <div className="px-6 md:px-8 py-4 flex items-center justify-between border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400" />
                <div>
                  <div className="text-white text-sm font-medium">{optionalMarketing.management.label}</div>
                  <div className="text-slate-500 text-xs">{optionalMarketing.management.note}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <span className="text-white font-bold">S/{optionalMarketing.management.cost}</span>
                <span className="text-slate-500 text-xs block">/mes</span>
              </div>
            </div>

            {/* Ad Budget */}
            <div className="px-6 md:px-8 py-4 flex items-center justify-between hover:bg-slate-800/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div>
                  <div className="text-white text-sm font-medium">{optionalMarketing.adBudget.label}</div>
                  <div className="text-slate-500 text-xs">{optionalMarketing.adBudget.note}</div>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <span className="text-white font-bold">
                  S/{optionalMarketing.adBudget.min}-{optionalMarketing.adBudget.max}
                </span>
                <span className="text-slate-500 text-xs block">/mes</span>
              </div>
            </div>

            {/* Optional Total */}
            <div className="px-6 md:px-8 py-4 bg-pink-500/5 border-t border-pink-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-pink-400" />
                  <span className="text-slate-300 text-sm font-semibold">
                    Total marketing (si se contrata)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-pink-400 font-bold">
                    S/{optionalMarketing.management.cost + optionalMarketing.adBudget.min} — S/{optionalMarketing.management.cost + optionalMarketing.adBudget.max}/mes
                  </span>
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
              almacenamiento cloud, consulta DNI vía RENIEC, soporte directo del
              desarrollador y actualizaciones continuas de seguridad.
            </p>
          </div>
        </motion.div>

        {/* Info note */}
        <div className="flex items-start gap-3 mt-4 text-slate-500 text-xs">
          <Info size={14} className="flex-shrink-0 mt-0.5" />
          <p>
            Costos mensuales para el Pack Transformación Total. Otros paquetes tienen costos menores.
            Dominios .edu.pe registrados ante NIC.pe (S/110 c/u por año). MongoDB Atlas facturado por uso
            real (promedio ~$15/mes para colegios pequeños, máximo $30/mes). RENIEC API contratada vía
            apis.net.pe — proveedor peruano autorizado. Precios en dólares/euros convertidos a soles al TC vigente.
          </p>
        </div>
      </div>
    </section>
  );
}
