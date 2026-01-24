"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { serviceCategories } from "@/data/services";

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const firstMatchRef = useRef<HTMLDivElement | null>(null);

  /* ===== FILTER LOGIC ===== */
  const filteredCategories = serviceCategories
    .filter(
      (category) =>
        activeCategory === "all" || category.name === activeCategory,
    )
    .map((category) => {
      const services = category.services.filter((service) =>
        `${service.name} ${service.description || ""}`
          .toLowerCase()
          .includes(search.toLowerCase()),
      );

      return { ...category, services };
    })
    .filter((category) => category.services.length > 0);

  /* ===== AUTO SCROLL TO FIRST RESULT ===== */
  useEffect(() => {
    if (search && firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [search, activeCategory]);

  return (
    <section className="min-h-screen px-4 py-6 bg-gradient-to-br from-[#2b0f1a] via-[#4a1630] to-[#6b1d45] text-white print:bg-white print:text-black">
      {/* ===== PREMIUM CARD ===== */}
      <div className="max-w-md mx-auto rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-5 shadow-2xl print:bg-white print:border-black">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Image
              src="/images/Mayra_Logo_White.png"
              alt="Mayra Unisex Salon"
              width={70}
              height={70}
              className="object-contain"
              priority
            />
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">
            Service Menu
          </p>

          <h1 className="text-2xl font-bold mt-1">Mayra Unisex Salon</h1>

          <p className="text-sm opacity-80 mt-1">Scan • Choose • Relax</p>
        </div>

        {/* ===== SEARCH & FILTER ===== */}
        <div className="mb-8 space-y-4 print:hidden">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search service (Manicure, Bridal, Spa...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-full
              px-4 py-2
              text-sm
              bg-white/90
              text-gray-900
              placeholder:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-white/40
            "
          />

          {/* CATEGORY FILTER */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {["all", ...serviceCategories.map((c) => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-1.5
                  rounded-full
                  text-xs
                  font-medium
                  whitespace-nowrap
                  transition
                  ${
                    activeCategory === cat
                      ? "bg-white text-[#4a1630]"
                      : "bg-white/20 text-white"
                  }
                `}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* ===== MENU CONTENT ===== */}
        <div className="menu-print space-y-10">
          {filteredCategories.length === 0 && (
            <p className="text-center text-sm opacity-80">
              No services found for “{search}”
            </p>
          )}

          {filteredCategories.map((category) => (
            <div key={category.id}>
              {/* CATEGORY IMAGE
              {Array.isArray(category.images) && category.images[0] && (
                <div className="mb-4 overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src={category.images[0]}
                    alt={category.name}
                    width={400}
                    height={160}
                    className="w-full h-[120px] object-cover"
                  />
                </div>
              )} */}

              {/* CATEGORY TITLE */}
              <h2 className="text-sm font-semibold uppercase tracking-widest mb-4 border-b border-white/30 pb-2 print:border-black text-center">
                {category.name}
              </h2>

              {/* SERVICES */}
              <div className="space-y-3">
                {category.services.map((service, index) => (
                  <div
                    key={service.id}
                    ref={index === 0 ? firstMatchRef : null}
                    className="
                      rounded-xl
                      bg-white/10
                      border border-white/10
                      p-4
                      flex justify-between items-start gap-3
                    "
                  >
                    {/* SERVICE INFO */}
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-snug">
                        {service.name}
                      </p>

                      {service.description && (
                        <p className="text-[11px] text-white/70 mt-1">
                          {service.description}
                        </p>
                      )}
                    </div>

                    {/* PRICE */}
                    <div className="shrink-0">
                      <span
                        className="
                        px-3 py-1
                        rounded-full
                        text-[11px]
                        font-semibold
                        bg-white/90
                        text-[#4a1630]
                        whitespace-nowrap
                      "
                      >
                        {service.price
                          ? service.price.replace(" onwards", "+")
                          : "—"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== PRINT ===== */}
        <div className="flex justify-center mt-10 print:hidden">
          <button
            onClick={() => window.print()}
            className="px-6 py-2 rounded-full bg-white text-[#4a1630] font-medium shadow hover:scale-105 transition"
          >
            Print Menu
          </button>
        </div>

        {/* ===== FOOTER NOTE ===== */}
        <p className="mt-8 text-center text-[11px] opacity-80 print:text-black">
          * Prices may vary based on hair length & customization
        </p>
      </div>
    </section>
  );
}
