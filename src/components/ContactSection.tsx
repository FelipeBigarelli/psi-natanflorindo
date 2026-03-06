import { motion } from "framer-motion";
import { Quote, Phone } from "lucide-react";
import { useState } from "react";
import whatsappLogo from "@/assets/whatsapp-logo-white.png";

const PHONE = "5522999002138";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    const name = formData.name.trim();
    const message = formData.message.trim();

    if (!name) errs.name = "Nome é obrigatório";
    else if (name.length < 2) errs.name = "Nome deve ter pelo menos 2 caracteres";

    if (!message) errs.message = "Mensagem é obrigatória";
    else if (message.length < 10) errs.message = "Mensagem deve ter pelo menos 10 caracteres";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const name = formData.name.trim().slice(0, 100);
    const message = formData.message.trim().slice(0, 2000);
    const text = `Olá, meu nome é ${name}.\n\n${message}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const clearError = (field: string) => {
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const inputBase = "w-full bg-primary-foreground/5 border rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none transition-all";
  const inputOk = "border-primary-foreground/15 focus:border-autism-gold/50 focus:ring-1 focus:ring-autism-gold/30";
  const inputErr = "border-autism-red/50 focus:border-autism-red/50 focus:ring-1 focus:ring-autism-red/30";

  return (
    <section id="contato" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,60%,18%)] via-[hsl(150,30%,12%)] to-[hsl(0,40%,14%)]" />
      
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="absolute top-0 left-0 w-full h-px flex">
        <div className="flex-1 bg-autism-blue" />
        <div className="flex-1 bg-autism-gold" />
        <div className="flex-1 bg-autism-red" />
        <div className="flex-1 bg-autism-green" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-autism-gold tracking-[0.25em] uppercase mb-3">Fale Comigo</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-primary-foreground">Contato</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-[3px] w-8 bg-autism-blue rounded-full" />
            <div className="h-[3px] w-8 bg-autism-gold rounded-full" />
            <div className="h-[3px] w-8 bg-autism-red rounded-full" />
            <div className="h-[3px] w-8 bg-autism-green rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="neon-hover bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-8 sm:p-10 mb-6">
              <p className="text-primary-foreground/90 text-[15px] leading-relaxed mb-4">
                <span className="font-bold text-primary-foreground">Psi. Natan Florindo</span> · CRP 05/85162
              </p>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Psicólogo Clínico · Intervenção baseada em evidências. Compartilhe este perfil ou entre em contato para agendar sua sessão.
              </p>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-primary-foreground/10">
                <div className="w-10 h-10 rounded-full bg-autism-green/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-autism-green" />
                </div>
                <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-autism-green transition-colors">
                  (22) 99002-1380
                </a>
              </div>
            </div>

            <div className="neon-hover bg-autism-green/10 backdrop-blur-sm border border-autism-green/20 rounded-2xl p-6 relative">
              <Quote className="w-6 h-6 text-autism-gold/40 mb-2 ml-4" />
              <p className="font-display text-lg text-primary-foreground/90 italic leading-relaxed pl-4">
                "Pequenos avanços constroem grandes transformações."
              </p>
              <p className="text-xs font-semibold text-autism-gold mt-3 pl-4">— Psi. Natan Florindo</p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="neon-hover bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-6 sm:p-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground mb-6">Envie sua Mensagem</h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); clearError("name"); }}
                    className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                  />
                  {errors.name && <p className="text-xs text-autism-red mt-1">{errors.name}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Sua Mensagem"
                    maxLength={2000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => { setFormData({ ...formData, message: e.target.value }); clearError("message"); }}
                    className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
                  />
                  {errors.message && <p className="text-xs text-autism-red mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(142,55%,50%)] to-[hsl(142,50%,42%)] text-primary-foreground py-3.5 rounded-xl text-sm font-bold tracking-wide uppercase hover:opacity-90 transition-opacity shadow-lg shadow-autism-green/20"
                >
                  <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
                  Enviar no WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
