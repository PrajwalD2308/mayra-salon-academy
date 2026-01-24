"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Search } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { serviceCategories } from "@/data/services";
// import Image from "next/image"; // ✅ FIXED
import CategoryImageSlider from "@/app/components/CategoryImageSlider";

/* 🔍 TEXT HIGHLIGHTING FUNCTION */
function highlightText(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="text-primary font-semibold">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const firstResultRef = useRef<HTMLDivElement | null>(null);

  /* 🔹 Debounce */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔍 FILTER LOGIC
  const filteredCategories = serviceCategories
    .map((category) => {
      const filteredServices = category.services.filter((service) =>
        `${service.name} ${service.description}`
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()),
      );

      return {
        ...category,
        services: filteredServices,
      };
    })
    .filter((category) => category.services.length > 0);

  /* 🔹 Auto scroll to first result */
  useEffect(() => {
    if (debouncedSearch && firstResultRef.current) {
      firstResultRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Beauty & Grooming Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our complete range of professional salon services
          </motion.p>
        </div>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="sticky top-[72px] z-20 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="relative max-w-xl mx-auto mb-14">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

            <input
              type="text"
              placeholder="Search services (Bridal, Manicure, Hair Spa...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
      w-full
      rounded-full
      border
      border-gray-300
      pl-10
      pr-4
      py-3
      text-sm
      focus:outline-none
      focus:ring-2
      focus:ring-primary/40
    "
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCategories.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No services found for &quot;
              <span className="font-semibold">{search}</span> &quot;. Please try
              a different search.
            </div>
          )}

          {filteredCategories.map((category, catIndex) => (
            <motion.div
              ref={catIndex === 0 ? firstResultRef : null}
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="mb-20"
            >
              {/* ================= CATEGORY IMAGE ================= */}
              {category.images && (
                <div className=" relative mb-14 ">
                  <CategoryImageSlider images={category.images} />

                  {/* Text overlay below slider */}
                  <div
                    className="
      absolute bottom-4 left-4 right-4
      md:bottom-10 md:left-10
      text-white
    "
                  >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">
                      {category.name}
                    </h2>
                    <p className="text-sm md:text-base text-white/90 max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                </div>
              )}

              {/* ================= CATEGORY HEADING ================= */}
              {/* <div className="mb-10">
                <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                <p className="text-gray-600 max-w-2xl">
                  {category.description}
                </p>
              </div> */}

              {/* ================= SERVICES GRID ================= */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {highlightText(service.name, debouncedSearch)}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {highlightText(service.description, debouncedSearch)}
                    </p>

                    {/* Price & Duration */}
                    <div className="mb-4">
                      {service.price && (
                        <div className="text-2xl font-bold text-primary">
                          {service.price}
                        </div>
                      )}
                      {service.duration && (
                        <div className="text-sm text-gray-500">
                          {service.duration}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {/* ✅ FIXED LINK */}
                      <Link
                        href={`/services/${service.id}`}
                        className="flex-1 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-center text-sm hover:shadow-lg transition"
                      >
                        View Details
                      </Link>

                      <a
                        href={getWhatsAppLink({
                          serviceName: service.name,
                          price: service.price,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-500 text-white rounded-full hover:shadow-lg transition flex items-center justify-center"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
