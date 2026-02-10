import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight, Clock, Wrench } from 'lucide-react';
import { PLANS } from '../data/plans';
import type { Plan } from '../data/plans';

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${
        plan.popular
          ? 'gradient-border lg:scale-105 lg:-my-4 z-10'
          : ''
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-center py-2 text-sm font-bold flex items-center justify-center gap-2 badge-pulse">
            <Star size={16} fill="currentColor" />
            MÁS ELEGIDO — MEJOR RELACIÓN VALOR/PRECIO
            <Star size={16} fill="currentColor" />
          </div>
        </div>
      )}

      <div
        className={`flex flex-col flex-1 p-6 md:p-8 ${
          plan.popular
            ? 'bg-gradient-to-b from-slate-800 to-slate-900 pt-14'
            : 'glass-strong'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-3 ${
              plan.popular
                ? 'bg-amber-400/20 text-amber-300'
                : 'bg-blue-500/10 text-blue-400'
            }`}>
              <Icon size={14} />
              {plan.subtitle}
            </div>
            <h3 className={`text-2xl md:text-3xl font-black ${
              plan.popular ? 'gradient-text-gold' : 'text-white'
            }`}>
              {plan.name}
            </h3>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          {plan.originalPrice && (
            <div className="text-slate-500 line-through text-lg mb-1">
              {plan.currency}{plan.originalPrice.toLocaleString()}
            </div>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-slate-400 text-lg">{plan.currency}</span>
            <span className={`text-4xl md:text-5xl font-black ${
              plan.popular ? 'text-amber-400' : 'text-white'
            }`}>
              {plan.price.toLocaleString()}
            </span>
            <span className="text-slate-500 text-sm ml-2">pago {plan.period}</span>
          </div>
          {plan.originalPrice && (
            <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold">
              Ahorras {plan.currency}{(plan.originalPrice - plan.price).toLocaleString()}
            </div>
          )}
        </div>

        {/* Monthly maintenance */}
        <div className={`flex items-center gap-3 p-4 rounded-2xl mb-6 ${
          plan.popular ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-slate-800/50 border border-slate-700/50'
        }`}>
          <Wrench size={18} className={plan.popular ? 'text-amber-400' : 'text-blue-400'} />
          <div>
            <div className="text-xs text-slate-400">Mantenimiento mensual</div>
            <div className={`font-bold ${plan.popular ? 'text-amber-300' : 'text-white'}`}>
              {plan.currency}{plan.monthlyMaintenance}/mes
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-slate-500 text-xs">
            <Clock size={13} />
            {plan.deliveryWeeks} semanas
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {plan.description}
        </p>

        {/* Key highlights */}
        <div className="space-y-2 mb-6">
          {plan.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                plan.popular
                  ? 'bg-amber-400/20 text-amber-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-white text-sm font-medium">{h}</span>
            </div>
          ))}
        </div>

        {/* Expand/collapse full feature list */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
        >
          <ArrowRight size={14} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
          {expanded ? 'Ocultar' : 'Ver'} todos los {plan.features.length} servicios
        </button>

        {/* Full features list */}
        <div className={`transition-all duration-500 overflow-hidden ${
          expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-2 pb-4 border-b border-slate-700/50 mb-6">
            {plan.features.map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 text-sm ${
                  f.included ? '' : 'opacity-40'
                } ${f.highlight ? 'font-medium' : ''}`}
              >
                {f.included ? (
                  <Check
                    size={16}
                    className={f.highlight
                      ? (plan.popular ? 'text-amber-400' : 'text-purple-400')
                      : 'text-green-400'
                    }
                  />
                ) : (
                  <X size={16} className="text-slate-600" />
                )}
                <span className={f.included ? 'text-slate-300' : 'text-slate-600'}>
                  {f.text}
                </span>
                {f.highlight && f.included && (
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 font-bold">
                    NUEVO
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA - pushed to bottom */}
        <div className="mt-auto">
          <a
            href="https://wa.me/51999999999?text=Hola!%20Me%20interesa%20el%20plan%20" 
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-4 rounded-2xl font-bold text-center transition-all hover:scale-[1.02] hover:shadow-xl ${
              plan.popular
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 shadow-lg shadow-amber-500/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {plan.popular ? '🚀 Elegir Plan Profesional' : `Elegir ${plan.name}`}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Plans() {
  return (
    <section id="planes" className="relative py-24 md:py-32 mesh-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-amber-400 mb-4">
            💎 PLANES Y PRECIOS
          </span>
          <h2 className="text-white mb-4">
            Elige el plan perfecto para{' '}
            <span className="gradient-text-gold">tu institución</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Tres opciones diseñadas para cada etapa de transformación digital.
            Todos los precios en Soles peruanos.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-start max-w-6xl mx-auto">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-2"
        >
          <p className="text-slate-500 text-sm">
            * Todos los planes incluyen código fuente. Sin contratos de permanencia.
          </p>
          <p className="text-slate-500 text-sm">
            * El presupuesto de Meta Ads (Facebook/Instagram) es adicional y lo controla el colegio directamente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
