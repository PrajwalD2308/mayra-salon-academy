"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Scissors,
  GraduationCap,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  /* ================= SERVICE → WHATSAPP ROUTING ================= */
  const getWhatsAppNumber = (service: string) => {
    if (service === "Salon Services") return "9923603601";
    if (service === "Makeup Services") return "9168880068";
    if (service === "Makeup Courses") return "9168880068";
    return "9923603601";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = getWhatsAppNumber(formData.service);

    const whatsappMessage = `
New Website Enquiry – Mayra Unisex Salon

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
`;

    const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    /* Email via FormSubmit */
    await fetch("https://formsubmit.co/info@mayraunisexsalon.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name: formData.name,
        Phone: formData.phone,
        Service: formData.service,
        Message: formData.message,
        _subject: "New Contact Enquiry – Mayra Unisex Salon",
      }),
    });

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-lg text-gray-600">We’d love to hear from you</p>
        </div>
      </section>

      {/* ================= CONTACT TYPE CARDS ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-[#f3e8ff] to-white shadow-lg"
          >
            <Scissors className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Salon Services</h3>
            <p className="text-gray-600 mb-4">
              Haircut, Styling, Spa & Grooming
            </p>
            <a
              href="tel:+919923603601"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full"
            >
              Call: +91 9923603601
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-[#ffe4e6] to-white shadow-lg"
          >
            <GraduationCap className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Makeup & Academy</h3>
            <p className="text-gray-600 mb-4">
              Bridal Makeup & Professional Courses
            </p>
            <a
              href="tel:+919168880068"
              className="inline-block px-6 py-3 bg-secondary text-white rounded-full"
            >
              Call: +91 9168880068
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section
        id="contact-form"
        className="py-20 bg-gradient-to-br from-muted/40 to-white"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Enquiry Form</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full rounded-xl border px-4 py-3"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full rounded-xl border px-4 py-3"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border px-4 py-3"
              >
                <option value="">Select Service</option>
                <option>Salon Services</option>
                <option>Makeup Services</option>
                <option>Makeup & Hair Style Courses</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message"
                className="w-full rounded-xl border px-4 py-3"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full hover:shadow-xl transition"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>

          {/* MAP */}
          <motion.div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Mayra+Unisex+Salon+Amravati&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <div className="h-24"></div>
    </div>
  );
}
