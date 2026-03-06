import { X } from "lucide-react";
import { useState } from "react";
import whatsappLogo from "@/assets/whatsapp-logo-white.png";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const PHONE = "5522999002138";

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!open) return null;

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

  const inputBase = "mt-1 w-full bg-autism-warm border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all";
  const inputOk = "border-autism-gold/20 focus:border-autism-gold/50 focus:ring-1 focus:ring-autism-gold/30";
  const inputErr = "border-autism-red/50 focus:border-autism-red/50 focus:ring-1 focus:ring-autism-red/30";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-card rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <div className="h-1 w-full flex">
          <div className="flex-1 bg-autism-blue" />
          <div className="flex-1 bg-autism-gold" />
          <div className="flex-1 bg-autism-red" />
          <div className="flex-1 bg-autism-green" />
        </div>

        <div className="p-6 sm:p-8">
          <button onClick={onClose} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Entre em contato</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Preencha os dados abaixo para enviar sua mensagem pelo WhatsApp.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-autism-blue uppercase tracking-wider">Nome</label>
              <input
                type="text"
                maxLength={100}
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => { setFormData({ ...formData, name: e.target.value }); clearError("name"); }}
                className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
              />
              {errors.name && <p className="text-xs text-autism-red mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-autism-blue uppercase tracking-wider">Mensagem</label>
              <textarea
                maxLength={2000}
                rows={3}
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={(e) => { setFormData({ ...formData, message: e.target.value }); clearError("message"); }}
                className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
              />
              {errors.message && <p className="text-xs text-autism-red mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(142,55%,50%)] to-[hsl(142,50%,42%)] text-primary-foreground py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-autism-green/20"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
              Enviar no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
