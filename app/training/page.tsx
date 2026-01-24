"use client";

import { motion } from "framer-motion";
import { getOfferWhatsAppLink } from "@/lib/whatsapp";

import {
  GraduationCap,
  Award,
  Users,
  Briefcase,
  CheckCircle,
  Phone,
  MessageCircle,
  Camera,
  Instagram,
  Sparkles,
  Scissors,
  Palette,
  Rocket,
} from "lucide-react";

export default function TrainingPage() {
  const courses = [
    {
      title: "Professional Makeup Artist Course",
      duration: "45 Days",
      icon: Palette,
      phone: "919168880068", // Makeup number
      features: [
        "Bridal & Party Makeup",
        "Product Knowledge & Skin Prep",
        "Live Practice on Real Clients",
        "Portfolio Building",
      ],
    },
    {
      title: "Hair Styling & Draping Training",
      duration: "30 Days",
      icon: Scissors,
      phone: "919923603601", // Salon number
      features: [
        "Bridal & Party Hairstyles",
        "Saree & Dupatta Draping",
        "Complete Bridal Look Creation",
        "Hands-on Practical Sessions",
      ],
    },
    {
      title: "Career, Confidence & Marketing",
      duration: "Included",
      icon: Rocket,
      phone: "919168880068", // Makeup number
      features: [
        "Instagram Marketing Basics",
        "Portfolio Photoshoot Guidance",
        "Client Handling & Pricing",
        "Confidence & Communication",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Makeup Artist Training
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Skills • Confidence • Career
            </p>
            <p className="text-lg text-gray-600">
              Makeup Artist बनना है?
              <br />
              Learn skills that help you <strong>earn with confidence</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY THIS TRAINING ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Expert Trainers",
              desc: "Learn from working professionals",
            },
            {
              icon: Users,
              title: "Small Batches",
              desc: "Personal attention & guidance",
            },
            {
              icon: Briefcase,
              title: "Career Focused",
              desc: "Learn how to get clients",
            },
            {
              icon: Award,
              title: "Certification",
              desc: "Industry-recognized training",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-gradient-to-br from-muted to-white p-6 text-center shadow-lg"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= COURSE BREAKDOWN ================= */}
      <section className="py-20 bg-gradient-to-br from-muted/40 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What You Will Learn
            </h2>
            <p className="text-gray-600">
              Complete training to become a professional makeup artist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl bg-white shadow-xl p-8 hover:shadow-2xl transition"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>

                  <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Duration: {course.duration}
                  </span>

                  <ul className="space-y-3 mb-6">
                    {course.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* BOOK BUTTON */}
                  <a
                    href={`tel:+${course.phone}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-xl transition"
                  >
                    <Phone className="w-4 h-4" />
                    Book Appointment
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS + CONFIDENCE ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Camera,
              title: "Portfolio Building",
              desc: "Create professional makeup portfolios",
            },
            {
              icon: Instagram,
              title: "Instagram Marketing",
              desc: "Learn how to attract clients online",
            },
            {
              icon: Sparkles,
              title: "Confidence Training",
              desc: "Client communication & pricing skills",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl p-6 text-center bg-gradient-to-br from-primary/5 to-white shadow-lg"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= OFFER ================= */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold mb-4">Limited Time Offer</h2>
            <div className="text-5xl font-bold mb-8">₹5,000 OFF</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/15 rounded-2xl p-6">
                <div className="text-2xl font-bold">₹1,000</div>
                <div className="text-sm">Registration Fees</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-6">
                <div className="text-2xl font-bold">1st February</div>
                <div className="text-sm">Batch Starts</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-6">
                <div className="text-2xl font-bold">Limited</div>
                <div className="text-sm">Seats Available</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919168880068"
                className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:shadow-2xl transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call to Enroll
              </a>

              <a
                href={getOfferWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white rounded-full font-medium hover:shadow-2xl transition flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enroll via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-24" />
    </div>
  );
}
