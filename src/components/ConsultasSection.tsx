import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import natanFormal from "@/assets/natan-formal.png";

const bulletItems = [
  "compreender sua principal queixa",
  "conhecer aspectos importantes da sua história de vida",
  "identificar padrões emocionais e comportamentais",
  "definir objetivos para o processo terapêutico",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ConsultasSection = () => {
  return (
    <section
      id="consultas"
      className="min-h-[calc(100svh-4rem)] relative overflow-hidden flex"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,60%,18%)] via-[hsl(220,40%,12%)] to-[hsl(230,30%,10%)]" />

      <div className="absolute top-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] items-stretch min-h-[calc(100svh-4rem)]">
          {/* Text content with stagger */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 flex flex-col justify-center"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-autism-gold">
              O Que Esperar Das
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Consultas
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mb-8 group rounded-2xl p-5 -mx-5 transition-all duration-500 hover:bg-primary-foreground/[0.05] hover:backdrop-blur-sm"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-autism-gold mb-4 transition-transform duration-300 group-hover:translate-x-2">
                Como funciona o atendimento psicológico
              </h3>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed">
                A psicoterapia é um espaço seguro para falar sobre emoções, pensamentos e dificuldades da vida.
              </p>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed mt-3">
                O objetivo do acompanhamento psicológico é ajudar você a compreender melhor suas experiências, desenvolver novas estratégias e promover mudanças que contribuam para sua qualidade de vida.
              </p>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed mt-3">
                Os atendimentos são realizados de forma ética, confidencial e respeitosa, seguindo as orientações do Conselho Federal de Psicologia.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="group rounded-2xl p-5 -mx-5 transition-all duration-500 hover:bg-primary-foreground/[0.05] hover:backdrop-blur-sm"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-autism-gold mb-4 transition-transform duration-300 group-hover:translate-x-2">
                Como funciona a primeira sessão?
              </h3>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed">
                A primeira consulta tem como objetivo conhecer melhor você, sua história e as dificuldades que motivaram a busca por atendimento psicológico.
              </p>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed mt-3 mb-4">
                Nesse encontro inicial iremos:
              </p>
              <ul className="space-y-3">
                {bulletItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <CheckCircle2 className="w-[18px] h-[18px] text-autism-gold flex-shrink-0" />
                    <span className="text-primary-foreground/70 text-[15px] leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed mt-4">
                A partir dessa conversa inicial, começamos a construir um plano de acompanhamento psicológico.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-2 mt-10">
              {["bg-autism-blue", "bg-autism-gold", "bg-autism-red", "bg-autism-green"].map((c, i) => (
                <motion.div
                  key={i}
                  className={`h-[3px] rounded-full ${c}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            className="relative hidden lg:flex items-end justify-center overflow-hidden"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-autism-blue/15 blur-3xl rounded-full" />
            <motion.img
              src={natanFormal}
              alt="Psicólogo Natan Florindo em traje formal"
              className="relative z-10 w-auto max-w-full object-contain object-bottom drop-shadow-2xl"
              style={{ height: "100%", maxHeight: "780px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
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

export default ConsultasSection;
