import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import whatsappLogo from "@/assets/whatsapp-logo-white.png";
import ContactModal from "@/components/ContactModal";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainLinks = [
    { id: "home", label: "Home" },
    { id: "sobre", label: "Sobre" },
    { id: "formacao", label: "Formação" },
    { id: "consultas", label: "Consultas" },
  ];

  const moreLinks = [
    { id: "valores", label: "Princípios" },
    { id: "manifesto", label: "Manifesto" },
    { id: "missao", label: "Missão/Visão" },
  ];

  const allLinks = [...mainLinks, ...moreLinks, { id: "contato", label: "Contato" }];

  const moreIsActive = moreLinks.some((l) => l.id === activeSection);

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const linkClass = (id: string) =>
    `relative text-[13px] font-medium tracking-wide uppercase px-3 py-2 rounded-md transition-all ${
      activeSection === id
        ? "text-autism-red font-semibold"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border/50">
        <div className="h-1 w-full flex">
          <div className="flex-1 bg-autism-blue" />
          <div className="flex-1 bg-autism-gold" />
          <div className="flex-1 bg-autism-red" />
          <div className="flex-1 bg-autism-green" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <button onClick={() => handleClick("home")} className="flex items-center gap-2.5">
            <img src={logo} alt="Natan Psicologia" className="h-8 w-8 sm:h-9 sm:w-9" />
            <div className="flex flex-col items-start leading-tight">
              <span className="font-display text-base sm:text-lg font-bold text-autism-blue">Natan Florindo</span>
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide">Psicólogo</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {mainLinks.map((link) => (
              <button key={link.id} onClick={() => handleClick(link.id)} className={linkClass(link.id)}>
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-autism-gold rounded-full" />
                )}
              </button>
            ))}

            {/* Dropdown "Mais" */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 text-[13px] font-medium tracking-wide uppercase px-3 py-2 rounded-md transition-all ${
                  moreIsActive
                    ? "text-autism-red font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Mais
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                {moreIsActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-autism-gold rounded-full" />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-xl shadow-lg py-2 min-w-[180px] animate-fade-in">
                  {moreLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleClick(link.id)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        activeSection === link.id
                          ? "text-autism-red font-semibold bg-autism-warm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleClick("contato")}
              className={linkClass("contato")}
            >
              Contato
              {activeSection === "contato" && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-autism-gold rounded-full" />
              )}
            </button>

            <button
              onClick={() => setContactOpen(true)}
              className="ml-3 flex items-center gap-2 bg-[hsl(142,55%,45%)] px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide hover:bg-[hsl(142,55%,40%)] transition-colors shadow-sm"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4" />
              <span className="text-primary-foreground">WhatsApp</span>
            </button>
          </nav>

          <button className="md:hidden text-foreground p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border/50 px-4 pb-4 flex flex-col gap-1">
            {allLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`text-sm font-medium text-left py-2.5 px-3 rounded-lg transition-colors border-l-3 ${
                  activeSection === link.id
                    ? "text-autism-red border-autism-gold bg-autism-warm font-semibold"
                    : "text-muted-foreground border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { setContactOpen(true); setMobileOpen(false); }}
              className="flex items-center gap-2 bg-[hsl(142,55%,45%)] px-4 py-2.5 rounded-lg text-sm font-semibold mt-1"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4" />
              <span className="text-primary-foreground">WhatsApp</span>
            </button>
          </nav>
        )}
      </header>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Header;
