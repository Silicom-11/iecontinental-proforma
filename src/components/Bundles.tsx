import { motion } from 'framer-motion';
import { BUNDLES, PRODUCTS } from '../data/plans';
import { Star, ArrowRight, Zap, TrendingDown, Package } from 'lucide-react';

export default function Bundles() {
  return (
    <section id="paquetes" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-amber-400 mb-4">
            🎁 PAQUETES COMBINADOS
          </span>
          <h2 className="text-white mb-4 text-3xl md:text-4xl font-black">
            Ahorra más{' '}
            <span className="gradient-text-gold">combinando servicios</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Contrata varios servicios juntos y obtén descuentos exclusivos.
            El nivel recomendado de cada servicio ya viene incluido.
          </p>
        </motion.div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {BUNDLES.map((bundle, i) => {
            const savings = bundle.priceSum - bundle.bundlePrice;
            const savingsPercent = Math.round((savings / bundle.priceSum) * 100);
            const bundleProducts = PRODUCTS.filter((p) => bundle.products.includes(p.id));

            return (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-3xl overflow-hidden ${
                  bundle.popular ? 'gradient-border lg:scale-105 z-10' : ''
                }`}
              >
                {/* Popular banner */}
                {bundle.popular && (
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-center py-2.5 text-sm font-black flex items-center justify-center gap-2 badge-pulse">
                    <Star size={14} fill="currentColor" />
                    MEJOR INVERSIÓN — AHORRAS S/{savings.toLocaleString()}
                    <Star size={14} fill="currentColor" />
                  </div>
                )}

                <div className={`p-6 md:p-8 ${
                  bundle.popular
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900'
                    : 'glass-strong'
                }`}>
                  {/* Name */}
                  <div className="flex items-start gap-3 mb-1">
                    <Package size={22} className={
                      bundle.popular ? 'text-amber-400' :
                      bundle.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                    } />
                    <div>
                      <h3 className={`text-xl font-black ${
                        bundle.popular ? 'gradient-text-gold' : 'text-white'
                      }`}>
                        {bundle.name}
                      </h3>
                      <p className="text-slate-500 text-sm">{bundle.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-5 mb-5">
                    <div className="text-slate-500 line-through text-base">
                      S/{bundle.priceSum.toLocaleString()} por separado
                    </div>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-slate-400">S/</span>
                      <span className={`text-4xl md:text-5xl font-black ${
                        bundle.popular ? 'text-amber-400' : 'text-white'
                      }`}>
                        {bundle.bundlePrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold">
                        <TrendingDown size={12} />
                        -{savingsPercent}%
                      </span>
                      <span className="text-green-400 text-sm font-semibold">
                        Ahorras S/{savings.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Included products */}
                  <div className="mb-5">
                    <div className="text-xs text-slate-500 font-bold mb-3">INCLUYE (nivel recomendado):</div>
                    <div className="space-y-2.5">
                      {bundleProducts.map((p) => {
                        const Icon = p.icon;
                        const recommended = p.tiers.find((t) => t.popular)!;
                        return (
                          <div key={p.id} className={`flex items-center gap-3 p-3 rounded-xl ${p.bgAccent} border ${p.borderAccent}`}>
                            <Icon size={18} className={p.colorAccent} />
                            <div className="flex-1 min-w-0">
                              <div className="text-white text-sm font-semibold truncate">{p.name}</div>
                              <div className="text-slate-500 text-xs">Plan {recommended.name}</div>
                            </div>
                            <div className="text-slate-400 text-xs font-medium">
                              S/{recommended.price.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Maintenance */}
                  <div className={`flex items-center justify-between p-3 rounded-xl mb-6 ${
                    bundle.popular ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-slate-800/50 border border-slate-700/50'
                  }`}>
                    <div className="text-xs text-slate-400">Mantenimiento mensual</div>
                    <div className={`font-bold text-sm ${bundle.popular ? 'text-amber-300' : 'text-white'}`}>
                      S/{bundle.monthlyMaintenance}/mes
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-4 rounded-2xl font-bold text-center transition-all hover:scale-[1.02] flex items-center justify-center gap-2 ${
                    bundle.popular
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 shadow-lg shadow-amber-500/20 text-base'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}>
                    {bundle.popular ? (
                      <>
                        <Zap size={18} />
                        Quiero el Pack Completo
                      </>
                    ) : (
                      <>
                        Elegir {bundle.name}
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-slate-500 text-sm">
            * Los paquetes incluyen el nivel <strong className="text-slate-400">recomendado</strong> de cada servicio.
            Puedes personalizar niveles contactándonos.
          </p>
          <p className="text-slate-500 text-sm">
            * Todos los planes incluyen código fuente. Sin contratos de permanencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
