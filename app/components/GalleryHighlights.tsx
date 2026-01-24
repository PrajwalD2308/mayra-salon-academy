"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  "/images/gallery/myra-store.png",
  "/images/gallery/salon-3.jpeg",
  "/images/gallery/salon-4.png",
  "/images/gallery/hair-style-female.png",
  "/images/gallery/men-cut.png",
  "/images/gallery/makeup-3.png",
  "/images/gallery/female-style.png",
  "/images/gallery/academy-4.png",
  "/images/gallery/makeup-2.png",
  "/images/gallery/makeup-4.jpeg",
];

export default function GalleryHighlights() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-xl font-bold text-center text-primary mb-1">
          Salon Highlights
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Our Work • Real Results
        </p>

        {/* DESKTOP – Horizontal */}
        <div className="hidden md:flex gap-6 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((src, i) => (
              <Link href="/gallery" key={i}>
                <div className="w-[220px] h-[300px] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
                  <Image
                    src={src}
                    alt="Salon highlight"
                    width={300}
                    height={400}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* MOBILE – AUTO VERTICAL SCROLL */}
        <div className="md:hidden overflow-hidden h-[580px] relative">
          <motion.div
            className="flex flex-col gap-5"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 25, // SLOW = premium
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt="Salon highlight"
                  width={600}
                  height={400}
                  unoptimized
                  className="w-full h-[260px] object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Soft fade top & bottom (luxury effect) */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
