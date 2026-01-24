"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Priya Sharma",
    review:
      "Amazing bridal makeup! Made my wedding day perfect. Highly recommended!",
  },
  {
    name: "Rahul Deshmukh",
    review:
      "Best salon in Amravati. Professional staff and affordable pricing.",
  },
  {
    name: "Sneha Patel",
    review:
      "Excellent hair spa experience. Very friendly service. Will visit again!",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-white">
      <div className="container mx-auto px-4">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            What Our Customers Say
          </h2>

          {/* Animated Stars */}
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [1, 0.6, 1],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-6 h-6 text-accent fill-accent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= REVIEW CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
