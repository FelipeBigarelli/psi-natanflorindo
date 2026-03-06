import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-autism-dark to-[hsl(220,45%,8%)]" />
      <div className="absolute top-0 left-0 w-full h-[2px] flex">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 relative z-10">
        <img src={logo} alt="Natan Psicologia" className="h-10 w-10 opacity-50" />
        <p className="text-xs text-primary-foreground/40 text-center">
          © {new Date().getFullYear()} Natan Lança Florindo · Psicólogo · CRP 05/85162
        </p>
      </div>
    </footer>
  );
};

export default Footer;
