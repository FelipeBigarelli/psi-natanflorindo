import { motion } from "framer-motion";
import { Crosshair, Eye } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const MissaoSection = () => {
  return (
    <section id="missao" className="min-h-[calc(100svh-4rem)] relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'20\' viewBox=\'0 0 100 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z\' fill=\'%23000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Missão */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="neon-hover bg-gradient-to-br from-autism-blue to-primary rounded-3xl p-8 sm:p-10 text-primary-foreground relative group cursor-default"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-autism-gold/10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-autism-red/10" />
            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Crosshair className="w-6 h-6 text-autism-gold" />
              </motion.div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Minha Missão</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-[15px]">
                Promover o desenvolvimento emocional e comportamental de crianças por meio de intervenções baseadas em ciência, contribuindo para autonomia, adaptação e qualidade de vida, com responsabilidade técnica e sensibilidade humana.
              </p>
            </div>
          </motion.div>

          {/* Visão */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="neon-hover bg-gradient-to-br from-autism-red to-accent rounded-3xl p-8 sm:p-10 text-primary-foreground relative group cursor-default"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-autism-gold/10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-autism-blue/10" />
            <div className="relative z-10">
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: -12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Eye className="w-6 h-6 text-autism-gold" />
              </motion.div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Minha Visão</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-[15px]">
                Ser referência no atendimento psicológico infantil, especialmente no acompanhamento de crianças atípicas, integrando ciência, humanização e cuidado individualizado.
              </p>
            </div>
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

export default MissaoSection;
