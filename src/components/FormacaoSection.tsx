import { motion } from "framer-motion";
import { GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import estacioLogo from "@/assets/estacio-logo.png";
import pucLogo from "@/assets/puc-goias-logo.png";

const FormacaoSection = () => {
  return (
    <section id="formacao" className="min-h-[calc(100svh-4rem)] relative overflow-hidden flex flex-col">
      {/* Top color bar */}
      <div className="absolute top-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-autism-gold tracking-[0.25em] uppercase mb-3">Acadêmico</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">Formação</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-[3px] w-8 bg-autism-blue rounded-full" />
              <div className="h-[3px] w-8 bg-autism-gold rounded-full" />
              <div className="h-[3px] w-8 bg-autism-red rounded-full" />
              <div className="h-[3px] w-8 bg-autism-green rounded-full" />
            </div>
          </div>

          {/* Graduation - Estácio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="neon-hover flex flex-col sm:flex-row items-start gap-5 bg-card rounded-2xl p-6 sm:p-8 border border-border mb-4 group"
          >


            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-background border border-border flex items-center justify-center p-2 group-hover:border-autism-blue/30 transition-colors">
              <img src={estacioLogo} alt="Universidade Estácio de Sá" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-autism-blue" />
                <span className="text-xs font-semibold text-autism-blue uppercase tracking-wider">Graduação</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">Psicologia</h3>
              <p className="text-sm text-muted-foreground mt-1">Universidade Estácio de Sá</p>
            </div>
            
          </motion.div>

          {/* PUC Goiás - ABA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="neon-hover flex flex-col sm:flex-row items-start gap-5 bg-card rounded-2xl p-6 sm:p-8 border border-border mb-4 group"
          >


            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-background border border-border flex items-center justify-center p-2 group-hover:border-autism-gold/30 transition-colors">
              <img src={pucLogo} alt="PUC Goiás" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-autism-gold" />
                <span className="text-xs font-semibold text-autism-gold uppercase tracking-wider">Pós-graduação</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">Análise do Comportamento Aplicada (ABA)</h3>
              <p className="text-sm text-muted-foreground mt-1">PUC Goiás · Em andamento</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 self-center bg-autism-gold/10 text-autism-gold px-3 py-1 rounded-full text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-autism-gold animate-pulse" />
              Em curso
            </div>
          </motion.div>

          {/* Continuous learning - card style matching above */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="neon-hover flex flex-col sm:flex-row items-start gap-5 bg-card rounded-2xl p-6 sm:p-8 border border-border group"
          >
            

            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-background border border-border flex items-center justify-center p-3 group-hover:border-autism-red/30 transition-colors relative z-[1]">
              <TrendingUp className="w-8 h-8 text-autism-red" />
            </div>
            <div className="relative z-[1]">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-autism-red" />
                <span className="text-xs font-semibold text-autism-red uppercase tracking-wider">Desenvolvimento</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">Atualização Contínua</h3>
              <p className="text-sm text-muted-foreground mt-1">Práticas baseadas em evidências científicas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Bottom color bar */}
      <div className="absolute bottom-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>
    </section>
  );
};

export default FormacaoSection;
