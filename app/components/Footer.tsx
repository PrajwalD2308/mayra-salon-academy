"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white print-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-[1.6fr_1fr_1.2fr_1.4fr] 
            gap-10 
            lg:gap-16
          "
        >
          {/* ================= ABOUT ================= */}
          <div className="pr-0 lg:pr-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
              <div className="w-20 h-20 transition-transform duration-300 hover:scale-110 relative">
                <Image
                  src="/images/Mayra_Logo.png"
                  alt="Mayra Unisex Salon Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="text-center sm:text-left">
                <div className="font-semibold text-white text-sm">
                  Mayra Unisex Salon and Academy
                </div>
                <div className="text-xs text-gray-400 ">Est. 2016</div>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm mx-auto sm:mx-0">
              Amravati&apos;s premier unisex salon offering professional hair,
              skin & makeup services since 2016.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center sm:justify-start gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10 
                    bg-white/10 
                    rounded-full 
                    flex items-center justify-center 
                    hover:bg-primary transition
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 relative inline-block after:absolute after:-bottom-2 after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:w-8 after:h-[2px] after:bg-purple-500">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "/",
                "/services",
                "/training",
                "/about",
                "/gallery",
                "/contact",
              ].map((path, i) => (
                <li key={i}>
                  <Link
                    href={path}
                    className="hover:text-white transition inline-block"
                  >
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 relative inline-block after:absolute after:-bottom-2 after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:w-8 after:h-[2px] after:bg-purple-500">
              Popular Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              {[
                ["Bridal Makeup", "/services/bridal-makeup"],
                ["Hair Spa", "/services/hair-spa"],
                ["Hair Straightening", "/services/hair-straightening"],
                ["Skin Treatment", "/services/skin-treatment"],
                ["Facial", "/services/normal-facial"],
                ["Waxing Services", "/services/rica-full-body"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="hover:text-white transition inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4 relative inline-block after:absolute after:-bottom-2 after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:w-8 after:h-[2px] after:bg-purple-500">
              Contact Info
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <Phone className="w-4 h-4 mt-1" />
                <a
                  href="tel:+919054679234"
                  className="text-gray-300 hover:text-primary"
                >
                  +91 9054679234
                </a>
              </li>

              <li className="flex items-start justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 mt-1" />
                <a
                  href="mailto:info@mayraunisexsalon.com"
                  className="text-gray-300 hover:text-primary break-all"
                >
                  info@mayraunisexsalon.com
                </a>
              </li>

              <li className="flex items-start justify-center sm:justify-start gap-2">
                <MapPin className="w-5 h-5 mt-1" />
                <span className="text-gray-300 text-center sm:text-left">
                  Opp Dusshera Maidan, Near Domino&apos;s Pizza, Badnera Road,
                  Nawathe, Amravati – 444602
                </span>
              </li>

              <li className="flex items-start justify-center sm:justify-start gap-2">
                <Clock className="w-4 h-4 mt-1" />
                <span className="text-gray-300">
                  9:30 AM – 10:00 PM
                  <br />
                  <span className="text-xs">Open 7 Days a Week</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-400 space-y-2">
          <p>© 2026 Mayra Unisex Salon. All rights reserved.</p>

          <div className="flex justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <span className="opacity-40">•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
