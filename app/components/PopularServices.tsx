"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const popularServices = [
  {
    id: "haircut-wash-setting",
    name: "Hair Styling",
    price: "₹400 onwards",
    image: "/images/services/hair-styling.png",
  },
  {
    id: "hair-spa-male",
    name: "Hair Spa",
    price: "₹600 onwards",
    image: "/images/services/hair-spa.jpg",
  },
  {
    id: "o3-facial",
    name: "Skin Treatment",
    price: "₹1,500 onwards",
    image: "/images/services/skin-treatment.png",
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    price: "₹15,000 onwards",
    image: "/images/services/bride-makeup.jpeg",
  },
];

export default function PopularServices() {
  return (
    <section className="py-16 bg-gradient-to-br from-muted to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Popular Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved beauty and grooming services
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-xl transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
