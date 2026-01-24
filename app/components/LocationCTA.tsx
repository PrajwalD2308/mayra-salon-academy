"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <MapPin className="w-10 h-10 mx-auto mb-4" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Best Unisex Salon in Amravati
          </h2>

          <p className="text-lg mb-8 text-white/90">
            Visit Mayra Unisex Salon near Nawathe, Badnera Road, Amravati for
            professional hair, skin, makeup services and certified beauty
            training courses.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Mayra+Unisex+Salon+Amravati"
              target="_blank"
              className="px-8 py-3 bg-white text-primary rounded-full font-medium hover:shadow-xl transition"
            >
              Get Directions
            </a>

            <Link
              href="/contact#contact-form"
              className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-primary transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
