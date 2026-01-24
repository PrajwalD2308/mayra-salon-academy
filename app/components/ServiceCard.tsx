"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  index: number;
}

export default function ServiceCard({
  id,
  name,
  price,
  image,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-3">{name}</h3>

        <Link
          href={`/services/${id}`}
          className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm hover:shadow-lg transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
