import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const lines = [
  "Escolhi a Psicologia porque compreendi que cuidar é mais do que atender.",
  "É assumir responsabilidade pelo processo do outro.",
  "",
  "Acredito que comportamento é comunicação.",
  "Que cada avanço, por menor que pareça, é uma conquista real.",
  "",
  "Acredito na ciência como ferramenta.",
  "Na estratégia como caminho.",
  "E no amor como princípio de cuidado.",
  "",
  "Não trabalho apenas com técnicas.",
  "Trabalho com potencial.",
  "",
  "Minha fé sustenta minha essência.",
  "A ciência sustenta minha prática.",
];

const wordMap: { lineIndex: number; wordIndex: number }[] = [];
lines.forEach((line, li) => {
  if (line === "") return;
  line.split(" ").forEach((_, wi) => {
    wordMap.push({ lineIndex: li, wordIndex: wi });
  });
});
const totalWords = wordMap.length;

const ManifestoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setShowContent(true);
    setTypedCount(0);
    setIsTyping(true);
    let current = 0;
    intervalRef.current = setInterval(() => {
      current++;
      setTypedCount(current);
      if (current >= totalWords) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsTyping(false);
      }
    }, 60);
  };

  const handleClose = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowContent(false);
    // Wait for content fade out, then collapse
    setTimeout(() => {
      setIsOpen(false);
      setTypedCount(0);
      setIsTyping(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="manifesto" className="min-h-[calc(100svh-4rem)] relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,45%,18%)] via-[hsl(350,30%,12%)] to-[hsl(340,25%,10%)]" />

      <div className="absolute top-0 left-0 w-full h-px flex z-20">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>

      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'28\' height=\'49\' viewBox=\'0 0 28 49\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-autism-red tracking-[0.25em] uppercase mb-3">Propósito</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-primary-foreground">Manifesto</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-[3px] w-8 bg-autism-blue rounded-full" />
              <div className="h-[3px] w-8 bg-autism-gold rounded-full" />
              <div className="h-[3px] w-8 bg-autism-red rounded-full" />
              <div className="h-[3px] w-8 bg-autism-green rounded-full" />
            </div>
          </div>

          <div className="neon-hover manifesto-card bg-primary-foreground/5 backdrop-blur-sm rounded-3xl border border-primary-foreground/10 relative overflow-hidden w-full max-w-3xl">
            {!isOpen && (
              <>
                <div className="manifesto-corner-tl absolute top-0 left-0 w-24 h-24 rounded-tl-3xl pointer-events-none" />
                <div className="manifesto-corner-br absolute bottom-0 right-0 w-24 h-24 rounded-br-3xl pointer-events-none" />
              </>
            )}

            {/* Closed state */}
            <div
              className="grid transition-[grid-template-rows] duration-[1500ms] ease-in-out"
              style={{ gridTemplateRows: !isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <button
                  onClick={handleOpen}
                  disabled={isOpen}
                  className="w-full p-8 sm:p-12 cursor-pointer relative z-10 group text-left"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-autism-gold/40" />
                    <p className="text-xs font-semibold text-autism-gold/60 tracking-[0.2em] uppercase">Carta pessoal</p>
                  </div>
                  <div className="space-y-2 mb-8">
                    <div className="h-[1px] w-full bg-primary-foreground/8" />
                    <div className="h-[1px] w-[85%] bg-primary-foreground/6" />
                    <div className="h-[1px] w-[92%] bg-primary-foreground/8" />
                    <div className="h-[1px] w-[78%] bg-primary-foreground/6" />
                    <div className="h-[1px] w-[88%] bg-primary-foreground/8" />
                    <div className="h-[1px] w-[70%] bg-primary-foreground/6" />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-primary-foreground/60 group-hover:text-autism-gold transition-colors">
                      <p className="font-display text-lg sm:text-xl font-semibold italic">Abrir Manifesto</p>
                      <motion.div animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-6 justify-end">
                    <p className="text-xs text-primary-foreground/30 italic">— Natan Florindo</p>
                    <div className="w-2 h-2 rounded-full bg-autism-gold/30" />
                  </div>
                </button>
              </div>
            </div>

            {/* Open state */}
            <div
              className="grid transition-[grid-template-rows] duration-[1500ms] ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="p-8 sm:p-12 relative z-10">
                  <div
                    className="space-y-1 transition-opacity duration-300"
                    style={{ opacity: showContent ? 1 : 0 }}
                  >
                    {lines.map((line, li) => {
                      if (line === "") return <div key={li} className="h-4" />;
                      const words = line.split(" ");
                      const wordsBeforeLine = wordMap.filter(w => w.lineIndex < li).length;
                      const visibleWordsInLine = Math.max(0, Math.min(words.length, typedCount - wordsBeforeLine));
                      const isLastTypedLine = typedCount > wordsBeforeLine && typedCount <= wordsBeforeLine + words.length;

                      return (
                        <p key={li} className="font-display text-base sm:text-lg leading-relaxed italic min-h-[1.75em]">
                          <span className="text-primary-foreground/80">
                            {words.slice(0, visibleWordsInLine).join(" ")}
                          </span>
                          <span className="text-transparent">
                            {visibleWordsInLine < words.length ? " " + words.slice(visibleWordsInLine).join(" ") : ""}
                          </span>
                          {isTyping && isLastTypedLine && (
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6 }}
                              className="inline-block w-[2px] h-5 bg-autism-gold ml-1 align-middle"
                            />
                          )}
                        </p>
                      );
                    })}
                  </div>

                  <div
                    className="mt-8 pt-6 border-t border-primary-foreground/10 flex items-center justify-between transition-opacity duration-500"
                    style={{ opacity: !isTyping && showContent ? 1 : 0 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-autism-gold" />
                      <p className="text-sm font-semibold text-primary-foreground/60">Psi. Natan Florindo</p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="flex items-center gap-2 text-primary-foreground/40 hover:text-autism-gold transition-colors text-sm font-medium group"
                    >
                      <span>Fechar Manifesto</span>
                      <svg
                        width="16" height="16" viewBox="0 0 20 20" fill="currentColor"
                        className="group-hover:rotate-180 transition-transform duration-300"
                      >
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

export default ManifestoSection;
