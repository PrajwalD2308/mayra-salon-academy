"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  review: string;
  index: number;
}

export default function ReviewCard({ name, review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-accent fill-accent" />
        ))}
      </div>

      <p className="text-gray-700 mb-4 italic">“{review}”</p>

      <p className="font-medium text-primary">— {name}</p>
    </motion.div>
  );
}
