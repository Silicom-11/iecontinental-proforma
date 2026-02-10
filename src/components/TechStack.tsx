import { motion } from 'framer-motion';
import { TECH_STACK } from '../data/plans';
import { Server, Database, Globe, Shield, Monitor, Smartphone } from 'lucide-react';

export default function TechStack() {
  return (
    <section id="tecnologia" className="relative py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold text-green-400 mb-4">
            ⚡ STACK TECNOLÓGICO
          </span>
          <h2 className="text-white mb-4">
            Arquitectura de{' '}
            <span className="gradient-text">clase mundial</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Tecnologías modernas, probadas y escalables usadas por las mejores empresas del mundo.
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-4 text-center hover:border-blue-500/30 transition-all cursor-default"
            >
              <div className="text-3xl mb-2">{tech.logo}</div>
              <div className="text-white text-sm font-bold">{tech.name}</div>
              <div className="text-slate-500 text-xs">{tech.category}</div>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 md:p-10"
        >
          <h3 className="text-white text-xl font-bold mb-8 text-center">
            Arquitectura del Sistema
          </h3>

          {/* Visual architecture */}
          <div className="max-w-4xl mx-auto">
            {/* Users layer */}
            <div className="flex justify-center gap-4 mb-6">
              {[
                { icon: Monitor, label: 'Director', color: 'text-purple-400' },
                { icon: Globe, label: 'Docentes', color: 'text-blue-400' },
                { icon: Smartphone, label: 'Padres', color: 'text-green-400' },
                { icon: Monitor, label: 'Secretaría', color: 'text-amber-400' },
              ].map((user, i) => (
                <div key={i} className="text-center">
                  <div className={`w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-1 ${user.color}`}>
                    <user.icon size={20} />
                  </div>
                  <div className="text-xs text-slate-400">{user.label}</div>
                </div>
              ))}
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent" />
            </div>

            {/* Cloudflare layer */}
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-4 mb-4">
              <div className="text-center text-xs font-bold text-orange-400 mb-3">
                ☁️ CLOUDFLARE — CDN + SSL + DDoS + DNS
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <div className="px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-300">
                  iecontinental.edu.pe
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-300">
                  aula.iecontinental.edu.pe
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-300">
                  api.iecontinental.edu.pe
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-gradient-to-b from-orange-400 to-blue-400" />
            </div>

            {/* VPS layer */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 mb-4">
              <div className="text-center text-xs font-bold text-blue-400 mb-4">
                🖥️ HETZNER VPS — Ashburn, Virginia (2 vCPU, 8GB RAM, 80GB NVMe)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                  <div className="text-xs font-bold text-blue-300 mb-1">Nginx</div>
                  <div className="text-[10px] text-slate-500">Reverse Proxy</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                  <div className="text-xs font-bold text-white mb-1">Landing</div>
                  <div className="text-[10px] text-slate-500">Next.js :3000</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                  <div className="text-xs font-bold text-amber-300 mb-1">Intranet</div>
                  <div className="text-[10px] text-slate-500">Next.js :3001</div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                  <div className="text-xs font-bold text-green-300 mb-1">API</div>
                  <div className="text-[10px] text-slate-500">NestJS :4000</div>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-3">
                <div className="bg-red-900/30 rounded-lg px-3 py-1.5 text-[10px] text-red-400 border border-red-500/20">
                  Redis (Bull Queues)
                </div>
                <div className="bg-green-900/30 rounded-lg px-3 py-1.5 text-[10px] text-green-400 border border-green-500/20">
                  PM2 (Process Manager)
                </div>
                <div className="bg-purple-900/30 rounded-lg px-3 py-1.5 text-[10px] text-purple-400 border border-purple-500/20">
                  UFW + Fail2ban
                </div>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-green-400" />
            </div>

            {/* External services */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { icon: Database, name: 'MongoDB Atlas', detail: 'US East Virginia', color: 'text-green-400', bg: 'bg-green-500/5 border-green-500/20' },
                { icon: Shield, name: 'Cloudflare R2', detail: 'Object Storage', color: 'text-orange-400', bg: 'bg-orange-500/5 border-orange-500/20' },
                { icon: Server, name: 'RENIEC API', detail: 'Consulta DNI', color: 'text-red-400', bg: 'bg-red-500/5 border-red-500/20' },
                { icon: Smartphone, name: 'WhatsApp', detail: 'Meta Cloud API', color: 'text-emerald-400', bg: 'bg-emerald-500/5 border-emerald-500/20' },
                { icon: Globe, name: 'Resend', detail: 'Email API', color: 'text-blue-400', bg: 'bg-blue-500/5 border-blue-500/20' },
              ].map((service, i) => (
                <div key={i} className={`${service.bg} border rounded-xl p-3 text-center`}>
                  <service.icon size={18} className={`${service.color} mx-auto mb-1.5`} />
                  <div className="text-xs font-bold text-white">{service.name}</div>
                  <div className="text-[10px] text-slate-500">{service.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
