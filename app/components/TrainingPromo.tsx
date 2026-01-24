"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, Sparkles } from "lucide-react";
import { getTrainingWhatsAppLink } from "@/lib/whatsapp";

export default function TrainingPromo() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4" />
              Salon + Academy
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Makeup Artist Course in{" "}
              <span className="text-primary">Amravati</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Makeup Artist बनना है? <br />
              <span className="font-semibold text-primary">
                Career + Income दोनों चाहिए?
              </span>
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "45 Days Complete Practical Training",
                "Hair, Skin & Bridal Makeup Included",
                "Live Practice on Real Clients",
                "Certification + Career Guidance",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/training"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl transition"
              >
                Apply Now
              </Link>

              <a
                href={getTrainingWhatsAppLink()}
                target="_blank"
                className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                WhatsApp for Details
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200"
                alt="Makeup Artist Training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-secondary" />
              <div>
                <p className="font-bold text-primary">Certified Course</p>
                <p className="text-sm text-gray-600">Limited Seats Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
