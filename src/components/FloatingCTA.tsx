import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

interface FloatingCTAProps {
  onOpen: () => void;
}

const FloatingCTA = ({ onOpen }: FloatingCTAProps) => {
  return (
    <motion.button
      layoutId="cta-button"
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-autism-blue text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold shadow-lg shadow-autism-blue/30 hover:opacity-90 transition-opacity cursor-pointer"
    >
      Agendar consulta
      <CalendarCheck size={18} />
    </motion.button>
  );
};

export default FloatingCTA;
