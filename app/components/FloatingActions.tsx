"use client";

import { Phone, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 print-hidden">
      {/* WhatsApp */}
      <a
        href={getGeneralWhatsAppLink()}
        target="_blank"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-xl hover:scale-110 transition"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Call */}
      <a
        href="tel:+919923603601"
        aria-label="Call Now"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl hover:scale-110 transition"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}
