"use client";

import { useEffect, useRef, useState } from "react";
import MobileAutoScrollGallery from "./MobileAutoScrollGallery";
import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  {
    id: 1,
    category: "salon",
    src: "/images/gallery/salon-1.jpeg",
    title: "Luxury Pedicure Area",
  },
  {
    id: 2,
    category: "salon",
    src: "/images/gallery/salon-2.jpeg",
    title: "Massage Room",
  },
  {
    id: 7,
    category: "salon",
    src: "/images/gallery/salon-7.jpeg",
    title: "Premium Massage Room",
  },
  {
    id: 3,
    category: "salon",
    src: "/images/gallery/salon-3.jpeg",
    title: "Hair Styling Zone",
  },
  {
    id: 4,
    category: "salon",
    src: "/images/gallery/salon-4.png",
    title: "Wash & Spa Area",
  },
  {
    id: 5,
    category: "salon",
    src: "/images/gallery/salon-5.jpeg", // ✅ fixed path
    title: "Premium Interior",
  },
  {
    id: 8,
    category: "salon",
    src: "/images/gallery/salon-8.jpeg",
    title: "Towel Design",
  },
  {
    id: 6,
    category: "salon",
    src: "/images/gallery/salon-6.jpeg",
    title: "Modern Equipment",
  },
  {
    id: 9,
    category: "salon",
    src: "/images/gallery/salon-9.jpeg",
    title: "Parlour Interior",
  },

  //   Hairs Depaartment
  // {
  //   id: 10,
  //   category: "hair",
  //   src: "/images/gallery/product-1.png",
  //   title: "Professional Hair Care Products",
  // },
  // {
  //   id: 11,
  //   category: "hair",
  //   src: "/images/gallery/product-2.png",
  //   title: "loreal Hair Care Products",
  // },
  // {
  //   id: 12,
  //   category: "hair",
  //   src: "/images/gallery/salon-4.png",
  //   title: "Wash & Spa Area",
  // },
  {
    id: 10,
    category: "hair",
    src: "/images/gallery/men-style.png",
    title: "Hair Setting and Styling",
  },
  {
    id: 11,
    category: "hair",
    src: "/images/gallery/hair-color.png",
    title: "Hair Coloring Services",
  },
  {
    id: 12,
    category: "hair",
    src: "/images/gallery/men-cut.png",
    title: "Professional Men Hair Cut",
  },
  {
    id: 13,
    category: "hair",
    src: "/images/gallery/hair-style-female.png",
    title: "Hair Straightening",
  },
  {
    id: 14,
    category: "hair",
    src: "/images/gallery/female-style-2.png",
    title: "Butterfly Hair Style",
  },
  {
    id: 15,
    category: "hair",
    src: "/images/gallery/female-style.png",
    title: "Curly Hair Style",
  },

  //   Makeup Department
  {
    id: 16,
    category: "makeup",
    src: "/images/gallery/product-1.png",
    title: "Professional Face Care Products",
  },
  {
    id: 17,
    category: "makeup",
    src: "/images/gallery/product-2.png",
    title: "loreal Makeup Products",
  },
  {
    id: 18,
    category: "makeup",
    src: "/images/gallery/makeup-4.jpeg",
    title: "Briddal Makeup",
  },
  {
    id: 19,
    category: "makeup",
    src: "/images/gallery/makeup-2.png",
    title: "Reception Makeup",
  },
  {
    id: 20,
    category: "makeup",
    src: "/images/gallery/makeup-3.png",
    title: "Marathi Look ",
  },
  {
    id: 21,
    category: "makeup",
    src: "/images/gallery/makeup-1.png",
    title: "Professional Makeup",
  },

  //   academy images

  {
    id: 22,
    category: "training",
    src: "/images/gallery/academy-4.png",
    title: "Hair Cutting Training",
  },
  {
    id: 23,
    category: "training",
    src: "/images/gallery/academy-1.jpg",
    title: "Hair Styling Training",
  },
  {
    id: 24,
    category: "training",
    src: "/images/gallery/academy-3.png",
    title: "Bridal Makeup Training",
  },
  {
    id: 25,
    category: "training",
    src: "/images/gallery/academy-2.jpeg",
    title: "Professional Makeup Training",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "hair", name: "Hair" },
  { id: "makeup", name: "Makeup" },
  { id: "salon", name: "Salon" },
  { id: "training", name: "Training" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages =
    activeTab === "all"
      ? images
      : images.filter((img) => img.category === activeTab);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Real transformations. Real confidence. Real beauty.
          </motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="block lg:hidden">
          <MobileAutoScrollGallery images={filteredImages} />
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:block">
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              320: 1,
              640: 2,
              1024: 3,
            }}
          >
            <Masonry gutter="1.5rem">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute bottom-0 p-4 text-white">
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </div>
  );
}
