import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Clock, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../data/plans';
import type { Product, PlanTier } from '../data/plans';

/* ─── Single tier card ─── */
function TierCard({ tier, product, index }: { tier: PlanTier; product: Product; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const included = tier.features.filter((f) => f.included);
  const excluded = tier.features.filter((f) => !f.included);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        tier.popular
          ? 'gradient-border lg:scale-[1.03] z-10'
          : ''
      }`}
    >
      {/* Popular ribbon */}
      {tier.popular && (
        <div className={`bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} text-slate-900 text-center py-2 text-xs font-black flex items-center justify-center gap-1.5 badge-pulse`}>
          <Star size={13} fill="currentColor" />
          RECOMENDADO
          <Star size={13} fill="currentColor" />
        </div>
      )}

      <div className={`flex flex-col flex-1 p-5 md:p-6 ${
        tier.popular ? 'bg-slate-800/90' : 'glass-strong'
      }`}>
        {/* Tier name + price */}
        <div className="mb-4">
          <h4 className={`text-lg font-bold mb-1 ${tier.popular ? product.colorAccent : 'text-slate-300'}`}>
            {tier.name}
          </h4>
          <div className="flex items-baseline gap-1">
            <span className="text-slate-500 text-sm">S/</span>
            <span className={`text-3xl font-black ${tier.popular ? 'text-white' : 'text-slate-200'}`}>
              {tier.price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Included features (always visible) */}
        <div className="space-y-2 mb-3 flex-1">
          {included.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check
                size={15}
                className={`flex-shrink-0 mt-0.5 ${
                  f.highlight ? product.colorAccent : 'text-green-400'
                }`}
                strokeWidth={2.5}
              />
              <span className={`text-sm ${f.highlight ? 'text-white font-medium' : 'text-slate-300'}`}>
                {f.text}
              </span>
              {f.highlight && (
                <span className={`ml-auto text-[9px] px-1.5 py-0.5 rounded-full ${product.bgAccent} ${product.colorAccent} font-bold flex-shrink-0`}>
                  +
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Excluded features (collapsible) */}
        {excluded.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 mb-3"
            >
              <ChevronDown size={12} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
              {excluded.length} no incluido{excluded.length > 1 ? 's' : ''}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[400px] opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-1.5">
                {excluded.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 opacity-40">
                    <X size={14} className="text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        <button
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] mt-auto ${
            tier.popular
              ? `bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} text-slate-900 shadow-lg`
              : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-slate-700/50'
          }`}
        >
          {tier.cta}
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Product section ─── */
function ProductSection({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;

  return (
    <div className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-slate-950' : 'mesh-gradient'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-2xl ${product.bgAccent} border ${product.borderAccent} flex items-center justify-center`}>
              <Icon size={26} className={product.colorAccent} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{product.emoji}</span>
                <h2 className={`text-2xl md:text-3xl font-black text-white`}>
                  {product.name}
                </h2>
              </div>
              <p className={`${product.colorAccent} text-sm font-semibold`}>{product.tagline}</p>
            </div>
            <div className="sm:ml-auto flex items-center gap-2 text-slate-500 text-sm">
              <Clock size={14} />
              {product.deliveryWeeks}
            </div>
          </div>
          <p className="text-slate-400 max-w-2xl text-sm md:text-base">{product.description}</p>
        </motion.div>

        {/* Tiers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
          {product.tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Plans component ─── */
export default function Plans() {
  return (
    <section id="planes">
      {/* Section intro */}
      <div className="bg-slate-950 pt-24 md:pt-32 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-amber-400 mb-4">
              💎 4 SERVICIOS INDEPENDIENTES
            </span>
            <h2 className="text-white mb-4 text-3xl md:text-4xl font-black">
              Elige exactamente{' '}
              <span className="gradient-text-gold">lo que necesitas</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              Cada servicio tiene sus propios planes. Contrata uno, varios, o todos.
              Al final, los paquetes combinados te dan el mejor precio.
            </p>
          </motion.div>

          {/* Quick nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {PRODUCTS.map((p) => {
              const PIcon = p.icon;
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 ${p.bgAccent} ${p.colorAccent} border ${p.borderAccent} hover:bg-opacity-20`}
                >
                  <PIcon size={16} />
                  {p.name}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Product sections */}
      {PRODUCTS.map((product, i) => (
        <div key={product.id} id={product.id}>
          <ProductSection product={product} index={i} />
        </div>
      ))}
    </section>
  );
}
