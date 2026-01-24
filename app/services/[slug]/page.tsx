"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

import {
  Clock,
  CheckCircle,
  ArrowLeft,
  Phone,
  MessageCircle,
} from "lucide-react";

import { getServiceById } from "@/data/services";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = use(params);
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="text-sm text-primary font-medium mb-3">
              {service.categoryName}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.name}
            </h1>

            <p className="text-lg md:text-xl text-gray-600">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">What’s Included</h2>

                {service.benefits && (
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10">
                  <h3 className="font-bold mb-2">Why Choose This Service?</h3>
                  <p className="text-gray-700">
                    Our expert professionals use premium products and advanced
                    techniques to give you visible, long-lasting results with
                    complete comfort.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-24 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white p-8 shadow-xl"
              >
                <div className="mb-6">
                  <div className="text-sm opacity-90">Price</div>
                  <div className="text-4xl font-bold">
                    {service.price || "Ask for Price"}
                  </div>
                </div>

                {service.duration && (
                  <div className="mb-6 border-t border-white/20 pt-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <div>
                        <div className="text-sm opacity-90">Duration</div>
                        <div className="font-medium">{service.duration}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 mt-8">
                  <a
                    href="tel:+919054679234"
                    className="block text-center bg-white text-primary px-6 py-3 rounded-full font-medium hover:shadow-xl transition"
                  >
                    <span className="inline-flex items-center gap-2 justify-center">
                      <Phone className="w-4 h-4" />
                      Book Appointment
                    </span>
                  </a>

                  <a
                    href={getWhatsAppLink({
                      serviceName: service.name,
                      price: service.price,
                    })}
                    target="_blank"
                    className="block text-center bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transition"
                  >
                    <span className="inline-flex items-center gap-2 justify-center">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Enquiry
                    </span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm opacity-90">
                  <p>Available 7 days a week</p>
                  <p>9:30 AM – 10:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
