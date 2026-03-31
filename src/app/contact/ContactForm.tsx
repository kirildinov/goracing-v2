"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/data/business";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3">
        <a href={`tel:${BUSINESS.phone}`} className="btn-primary justify-center py-3">
          <Phone className="h-5 w-5" /> Sună: {BUSINESS.phoneFormatted}
        </a>
        <a
          href={`https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(BUSINESS.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary justify-center py-3"
        >
          WhatsApp
        </a>
      </div>

      <h2 className="font-heading text-xl font-bold text-foreground mb-6">Trimite-ne un mesaj</h2>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
          <p className="text-green-800 font-heading font-bold text-lg mb-2">Mulțumim!</p>
          <p className="text-green-700 text-sm">Te vom contacta în cel mai scurt timp.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
              <p className="text-red-800 text-sm">Ceva nu a funcționat. Te rugăm să ne suni la {BUSINESS.phoneFormatted}.</p>
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nume *</label>
            <input id="name" type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefon *</label>
            <input id="phone" type="tel" required pattern="(\+?40|0)[0-9\s]{8,12}" title="Format: 07XX XXX XXX sau +407XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mesaj *</label>
            <textarea id="message" required rows={5} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none" />
          </div>
          <p className="text-xs text-muted-foreground">
            Prin trimiterea formularului, ești de acord cu{" "}
            <Link href="/politica-confidentialitate" className="text-primary underline">Politica de Confidențialitate</Link>.
          </p>
          <button type="submit" disabled={loading} className="btn-primary w-full py-3">
            {loading ? "Se trimite..." : "Trimite Mesajul"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
