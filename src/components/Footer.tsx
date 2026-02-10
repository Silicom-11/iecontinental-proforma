import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="relative py-24 md:py-32 mesh-gradient">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 blur-3xl rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              ¿Listo para transformar
              <br />
              <span className="gradient-text-gold">tu institución?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Agenda una reunión gratuita para presentar la propuesta completa
              y resolver todas tus dudas. Sin compromisos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/51999999999?text=Hola!%20Me%20interesa%20la%20propuesta%20digital%20para%20el%20colegio"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:contacto@silicom.dev"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl text-white font-semibold hover:bg-white/10 transition-all"
              >
                <Mail size={20} />
                Enviar Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom footer */}
      <div className="bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <span className="text-white font-bold">Silicom</span>
                  <span className="block text-xs text-slate-500">Desarrollo de Software</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Equipo especializado en soluciones digitales para instituciones educativas.
                Tecnología de clase mundial al alcance de tu colegio.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Contacto</h4>
              <div className="space-y-3">
                <a href="tel:+51999999999" className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                  <Phone size={14} />
                  +51 999 999 999
                </a>
                <a href="mailto:contacto@silicom.dev" className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                  <Mail size={14} />
                  contacto@silicom.dev
                </a>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <MapPin size={14} />
                  Perú
                </div>
              </div>
            </div>

            {/* Proyecto */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Proyecto</h4>
              <div className="space-y-3">
                <span className="block text-slate-400 text-sm">
                  I.E. Continental Americano
                </span>
                <span className="block text-slate-500 text-sm">
                  Pichanaki, Junín, Perú
                </span>
                <a
                  href="https://github.com/Silicom-11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors"
                >
                  <Github size={14} />
                  github.com/Silicom-11
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800/50 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Silicom. Propuesta exclusiva para I.E. Continental Americano.
            </p>
            <p className="text-slate-700 text-xs">
              Documento confidencial • Válido por 60 días desde la fecha de emisión
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
