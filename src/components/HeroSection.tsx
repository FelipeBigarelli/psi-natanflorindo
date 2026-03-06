import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import natanPhoto from "@/assets/natan-photo.png";
import logo from "@/assets/logo.png";

interface HeroSectionProps {
  isFloating: boolean;
  onCtaClick: () => void;
}

const HeroSection = ({ isFloating, onCtaClick }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-[100svh] flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Top color bar */}
      <div className="absolute top-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>
      {/* Subtle cross pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Soft gradient washes */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-autism-blue/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-autism-gold/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-10 md:gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1 relative overflow-visible"
          >
            {/* Logo watermark centered behind text content */}
            <motion.img
              src={logo}
              alt=""
              className="absolute -left-16 -translate-y-1/2 w-[420px] h-[420px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] opacity-[0.06] select-none pointer-events-none"
              style={{ zIndex: -1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.06, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
            <div className="flex items-center gap-2 mb-5">
              <div className="h-[3px] w-6 bg-autism-red rounded-full" />
              <div className="h-[3px] w-6 bg-autism-gold rounded-full" />
              <div className="h-[3px] w-6 bg-autism-blue rounded-full" />
              <div className="h-[3px] w-6 bg-autism-green rounded-full" />
            </div>

            <p className="text-xs sm:text-sm font-semibold text-autism-red tracking-[0.2em] uppercase mb-4">
              Psicólogo Clínico · CRP 05/85162
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-5">
              <span className="text-autism-blue">Psi. Natan</span>
              <br />
              <span className="text-foreground">Florindo</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground font-semibold leading-relaxed mb-2 max-w-lg">
              Atendimento Online para Adultos
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-8">
              As consultas são realizadas exclusivamente na modalidade particular. Atualmente, não há atendimento por
              convênios ou planos de saúde.
            </p>

            {/* Placeholder to keep layout stable when button is floating */}
            {isFloating ? (
              <div className="mb-8 h-[44px]" />
            ) : (
              <motion.button
                layoutId="cta-button"
                onClick={onCtaClick}
                className="mb-8 inline-flex items-center gap-2 bg-autism-blue text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-autism-blue/20 cursor-pointer"
              >
                Agende sua consulta
                <CalendarCheck size={18} />
              </motion.button>
            )}

            <blockquote className="neon-hover relative bg-autism-warm border-l-4 border-autism-gold rounded-r-xl px-5 py-4">
              <p className="text-sm italic text-foreground/80 leading-relaxed">
                "Pequenos avanços constroem grandes transformações"
              </p>
              <span className="block mt-2 not-italic font-semibold text-autism-blue text-xs">— Natan Florindo</span>
            </blockquote>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-autism-gold/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-autism-blue/15 via-autism-gold/10 to-autism-red/15 translate-x-3 translate-y-3" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl ring-2 ring-autism-blue/20 ring-offset-4 ring-offset-background">
                <img
                  src={natanPhoto}
                  alt="Psicólogo Natan Lança Florindo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Small accent dots */}
              <div className="absolute top-4 -right-2 w-4 h-4 rounded-full bg-autism-gold shadow-lg" />
              <div className="absolute bottom-8 -left-2 w-3 h-3 rounded-full bg-autism-red shadow-lg" />
              <div className="absolute -bottom-1 right-12 w-3 h-3 rounded-full bg-autism-blue shadow-lg" />
            </div>
          </motion.div>
        </div>
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

export default HeroSection;
