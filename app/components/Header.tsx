"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCategories, Service } from "@/data/services";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* TOP BAR */}
      {/* <div className="hidden md:block bg-gradient-to-r from-purple-500/90 to-pink-400/90 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919054679234"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Phone className="w-4 h-4" />
              +91 9054679234
            </a>
            <a
              href="mailto:info@mayraunisexsalon.com"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Mail className="w-4 h-4" />
              info@mayraunisexsalon.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>⭐ 4.8 Rating</span>
            <span>•</span>
            <span>790+ Happy Customers</span>
          </div>
        </div>
      </div> */}

      {/* MAIN NAV */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="
      transition-transform duration-300
      md:group-hover:scale-110
    "
            >
              <Image
                src="/images/Mayra_Logo.png"
                alt="Mayra Unisex Salon & Academy"
                width={72}
                height={72}
                priority
                className="object-contain drop-shadow-sm md:group-hover:drop-shadow-lg"
              />
            </div>
            <div className="leading-tight">
              <div className="text-xl font-bold text-primary">
                Mayra Unisex Salon and Academy
              </div>
              <div className="text-xs text-gray-500">
                Amravati’s Premier Salon & Training Academy
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`relative pb-1 text-gray-700 transition
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
  after:bg-gradient-to-r after:from-primary after:to-secondary
  after:transition-all after:duration-300
  hover:after:w-full hover:text-primary
  ${isActive("/training") ? "after:w-full text-primary font-semibold" : ""}
`}
            >
              Home
            </Link>

            {/* SERVICES MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => {
                setServicesOpen(false);
                setActiveCategory(null);
              }}
            >
              <button className="flex items-center gap-1 hover:text-primary transition">
                Services <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-4 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden border border-purple-100"
                    style={{ minWidth: "780px", maxHeight: "460px" }}
                  >
                    <div className="flex">
                      {/* CATEGORIES */}
                      <div
                        className="
                                w-64 
                                bg-gray-50 
                                p-4 
                                border-r
                                max-h-[420px]
                                overflow-y-auto
                                scrollbar-thin
                                scrollbar-thumb-purple-400/40
                                scrollbar-track-transparent
                              "
                      >
                        {serviceCategories.map((cat) => (
                          <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition ${
                              activeCategory === cat.id
                                ? "bg-purple-100 text-purple-700"
                                : "hover:bg-purple-50 text-gray-700"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{cat.icon}</span>
                              <div>
                                <div className="font-medium">{cat.name}</div>
                                <div className="text-xs opacity-70">
                                  {cat.services.length} services
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* SERVICES LIST */}
                      <div className="flex-1 p-6">
                        {activeCategory ? (
                          <div>
                            <h3 className="text-lg font-bold text-purple-600 mb-4">
                              {
                                serviceCategories.find(
                                  (c) => c.id === activeCategory,
                                )?.name
                              }
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {serviceCategories
                                .find((c) => c.id === activeCategory)
                                ?.services?.map((service: Service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    className="px-4 py-2 rounded-lg hover:bg-purple-50 text-sm text-gray-700"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center text-gray-400">
                            Hover on a category
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/training"
              className={`relative pb-1 text-gray-700 transition
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
  after:bg-gradient-to-r after:from-primary after:to-secondary
  after:transition-all after:duration-300
  hover:after:w-full hover:text-primary
  ${isActive("/training") ? "after:w-full text-primary font-semibold" : ""}
`}
            >
              Training
            </Link>

            <Link
              href="/about"
              className={`relative pb-1 text-gray-700 transition
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
  after:bg-gradient-to-r after:from-primary after:to-secondary
  after:transition-all after:duration-300
  hover:after:w-full hover:text-primary
  ${isActive("/training") ? "after:w-full text-primary font-semibold" : ""}
`}
            >
              About
            </Link>

            <Link
              href="/gallery"
              className={`relative pb-1 text-gray-700 transition
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
  after:bg-gradient-to-r after:from-primary after:to-secondary
  after:transition-all after:duration-300
  hover:after:w-full hover:text-primary
  ${isActive("/training") ? "after:w-full text-primary font-semibold" : ""}
`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`relative pb-1 text-gray-700 transition
  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
  after:bg-gradient-to-r after:from-primary after:to-secondary
  after:transition-all after:duration-300
  hover:after:w-full hover:text-primary
  ${isActive("/training") ? "after:w-full text-primary font-semibold" : ""}
`}
            >
              Contact
            </Link>

            <a
              href="tel:+919054679234"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white "
            >
              Book Now
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-4 border-t pt-4"
            >
              <div className="flex flex-col gap-1 md:gap-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
    px-3 py-2 rounded-md
    text-gray-700
    hover:text-blue-600 hover:bg-blue-50
    active:bg-blue-100 active:scale-[0.98]
    lg:hover:text-inherit lg:hover:bg-transparent
    transition"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
    px-3 py-2 rounded-md
    text-gray-700
    hover:text-blue-600 hover:bg-blue-50
    active:bg-blue-100 active:scale-[0.98]
    lg:hover:text-inherit lg:hover:bg-transparent
    transition"
                >
                  Services
                </Link>
                <Link
                  href="/training"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
    px-3 py-2 rounded-md
    text-gray-700
    hover:text-blue-600 hover:bg-blue-50
    active:bg-blue-100 active:scale-[0.98]
    lg:hover:text-inherit lg:hover:bg-transparent
    transition"
                >
                  Training
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
    px-3 py-2 rounded-md
    text-gray-700
    hover:text-blue-600 hover:bg-blue-50
    active:bg-blue-100 active:scale-[0.98]
    lg:hover:text-inherit lg:hover:bg-transparent
    transition"
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
    px-3 py-2 rounded-md
    text-gray-700
    hover:text-blue-600 hover:bg-blue-50
    active:bg-blue-100 active:scale-[0.98]
    lg:hover:text-inherit lg:hover:bg-transparent
    transition"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
    px-3 py-2 rounded-md
    text-gray-700
    hover:text-blue-600 hover:bg-blue-50
    active:bg-blue-100 active:scale-[0.98]
    lg:hover:text-inherit lg:hover:bg-transparent
    transition"
                >
                  Contact
                </Link>

                <a
                  href="tel:+919054679234"
                  className="mt-4 mx-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-white text-center font-medium shadow-md"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
