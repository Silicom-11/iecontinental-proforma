import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/plans';

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left glass-strong rounded-2xl p-5 md:p-6 transition-all hover:border-blue-500/20 ${
          open ? 'border-blue-500/30' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle
              size={18}
              className={`flex-shrink-0 mt-0.5 transition-colors ${
                open ? 'text-blue-400' : 'text-slate-500'
              }`}
            />
            <span className="text-white font-semibold text-sm md:text-base">
              {faq.question}
            </span>
          </div>
          <ChevronDown
            size={18}
            className={`flex-shrink-0 text-slate-500 transition-transform duration-300 ${
              open ? 'rotate-180 text-blue-400' : ''
            }`}
          />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-400 text-sm leading-relaxed mt-4 ml-7 md:ml-7">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-cyan-400 mb-4">
            ❓ PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-white mb-4">
            Resolvemos tus{' '}
            <span className="gradient-text">dudas</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Las preguntas más comunes sobre nuestra propuesta de transformación digital.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
