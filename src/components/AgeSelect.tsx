import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface AgeSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  variant?: "light" | "dark";
}

const AgeSelect = ({ value, onChange, error, variant = "light" }: AgeSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isLight = variant === "light";

  const base = isLight
    ? "w-full bg-autism-warm border rounded-xl px-3 py-3 text-sm cursor-pointer flex items-center justify-between transition-all"
    : "w-full bg-primary-foreground/5 border rounded-xl px-3 py-3 text-sm cursor-pointer flex items-center justify-between transition-all";

  const borderOk = isLight
    ? "border-autism-gold/20 focus:border-autism-gold/50"
    : "border-primary-foreground/15";

  const borderErr = "border-autism-red/50";

  const textColor = isLight ? "text-foreground" : "text-primary-foreground";
  const placeholderColor = isLight ? "text-muted-foreground/50" : "text-primary-foreground/30";

  const dropdownBg = isLight ? "bg-card border-border" : "bg-[hsl(220,30%,18%)] border-primary-foreground/15";
  const itemHover = isLight ? "hover:bg-autism-warm" : "hover:bg-primary-foreground/10";
  const itemText = isLight ? "text-foreground" : "text-primary-foreground";
  const itemActive = isLight ? "bg-autism-blue/10 text-autism-blue font-semibold" : "bg-autism-blue/20 text-autism-blue font-semibold";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${base} ${error ? borderErr : borderOk} ${value ? textColor : placeholderColor}`}
      >
        <span className="truncate">{value ? `${value} anos` : "Sua Idade"}</span>
        <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""} ${isLight ? "text-muted-foreground" : "text-primary-foreground/50"}`} />
      </button>

      {open && (
        <div className={`absolute z-50 top-full left-0 right-0 mt-1 ${dropdownBg} border rounded-xl shadow-xl overflow-hidden animate-fade-in`}>
          <div className="max-h-48 overflow-y-auto neon-scrollbar py-1">
            {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
              <button
                key={age}
                type="button"
                onClick={() => { onChange(String(age)); setOpen(false); }}
                className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                  String(age) === value ? itemActive : `${itemText} ${itemHover}`
                }`}
              >
                {age} anos
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeSelect;
