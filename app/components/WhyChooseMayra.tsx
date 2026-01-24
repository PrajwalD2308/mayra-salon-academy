"use client";

import { motion } from "framer-motion";
import { Award, Users, GraduationCap, Gem } from "lucide-react";
import { useEffect, useState } from "react";

/* ---------- Counter Component ---------- */
function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return <>{count}</>;
}

const features = [
  {
    icon: Award,
    value: 10,
    suffix: "+",
    subtitle: "Years of Experience",
    description: "Trusted unisex salon serving Amravati since 2016",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    subtitle: "Happy Clients",
    description:
      "Highly rated salon with 4.8★ customer reviews and strong word of mouth",
  },
  {
    icon: GraduationCap,
    title: "Certified",
    subtitle: "Training Academy",
    description: "Professional makeup & beauty courses with certification",
  },
  {
    icon: Gem,
    title: "Premium Yet",
    subtitle: "Affordable",
    description: "Economy & premium services tailored for every client",
  },
];

export default function WhyChooseMayra() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* ---------- Soft Background Pattern ---------- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* ---------- Heading ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Mayra Unisex Salon</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience professional beauty services and career-focused training
            at Amravati’s most trusted salon.
          </p>
        </motion.div>

        {/* ---------- Cards ---------- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl bg-gradient-to-br from-muted to-white p-8 shadow-sm hover:shadow-xl transition"
              >
                {/* Icon with Glow */}
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight mb-1">
                  {item.value ? (
                    <>
                      <Counter value={item.value} />
                      {item.suffix}
                    </>
                  ) : (
                    item.title
                  )}
                </h3>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
