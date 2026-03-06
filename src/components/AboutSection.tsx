import { motion } from "framer-motion";
import natanSuit from "@/assets/natan-suit.png";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="min-h-[calc(100svh-4rem)] relative overflow-hidden flex"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(42,50%,18%)] via-[hsl(30,30%,12%)] to-[hsl(20,40%,10%)]" />

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
            'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] items-stretch min-h-[calc(100svh-4rem)]">
          {/* Photo with parallax */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            className="relative hidden lg:flex items-end justify-center overflow-hidden"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-autism-gold/15 blur-3xl rounded-full" />
            <motion.img
              src={natanSuit}
              alt="Psicólogo Natan Florindo"
              className="relative z-10 w-auto max-w-full object-contain object-bottom drop-shadow-2xl"
              style={{ height: "92%", maxHeight: "640px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Text content with stagger */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24 flex flex-col justify-center"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-autism-gold">
              Conheça
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-10">
              Sobre Minha<br />Atuação
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                variants={fadeUp}
                className="group rounded-2xl p-5 -mx-5 transition-all duration-500 hover:bg-primary-foreground/[0.05] hover:backdrop-blur-sm"
              >
                <h3 className="font-display text-xl sm:text-2xl font-bold text-autism-gold mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  Apresentação
                </h3>
                <p className="text-primary-foreground/70 text-[15px] leading-relaxed">
                  Acredito que nenhuma criança é definida por um diagnóstico. Cada comportamento comunica algo, e cada avanço — por menor que pareça — representa uma conquista real.
                </p>
                <p className="text-primary-foreground/70 text-[15px] leading-relaxed mt-3">
                  Minha atuação em Psicologia é fundamentada na ciência, na estratégia e no cuidado humano.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="group rounded-2xl p-5 -mx-5 transition-all duration-500 hover:bg-primary-foreground/[0.05] hover:backdrop-blur-sm"
              >
                <h3 className="font-display text-xl sm:text-2xl font-bold text-autism-gold mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  Direcionamento
                </h3>
                <p className="text-primary-foreground/70 text-[15px] leading-relaxed">
                  Minha escolha pela Psicologia nasceu de uma experiência pessoal marcante: em um sonho, me vi ajudando pessoas a viverem melhor. Com o tempo, compreendi que ali havia mais do que uma ideia, havia um direcionamento claro de propósito.
                </p>
              </motion.div>
            </div>

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

export default AboutSection;
