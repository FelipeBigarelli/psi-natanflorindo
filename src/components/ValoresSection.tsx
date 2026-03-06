import { motion } from "framer-motion";
import { Heart, Brain, Target, Shield, Lightbulb, Sparkles } from "lucide-react";

const valores = [
  { icon: Shield, label: "Ética profissional", color: "text-autism-blue", bg: "bg-autism-blue/10" },
  { icon: Brain, label: "Base científica sólida", color: "text-autism-red", bg: "bg-autism-red/10" },
  { icon: Target, label: "Individualização do atendimento", color: "text-autism-gold", bg: "bg-autism-gold/10" },
  { icon: Sparkles, label: "Excelência técnica", color: "text-autism-green", bg: "bg-autism-green/10" },
  { icon: Lightbulb, label: "Atualização constante", color: "text-autism-blue", bg: "bg-autism-blue/10" },
  { icon: Heart, label: "Compromisso com resultados reais", color: "text-autism-red", bg: "bg-autism-red/10" },
];

const ValoresSection = () => {
  return (
    <section id="valores" className="min-h-[calc(100svh-4rem)] relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-autism-blue tracking-[0.25em] uppercase mb-3">Princípios</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">Valores</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {["bg-autism-red", "bg-autism-gold", "bg-autism-blue", "bg-autism-green"].map((c, i) => (
                <motion.div
                  key={i}
                  className={`h-[3px] rounded-full ${c}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valores.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="neon-hover flex items-center gap-4 bg-background rounded-xl p-5 border border-border cursor-default group"
              >
                <motion.div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg ${v.bg} flex items-center justify-center`}
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                </motion.div>
                <p className="text-sm font-medium text-foreground leading-snug">{v.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>
    </section>
  );
};

export default ValoresSection;
