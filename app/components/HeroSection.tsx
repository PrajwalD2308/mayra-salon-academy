"use client";

import Link from "next/link";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Award,
  Home as HomeIcon,
  Sparkles,
  Palette,
  Droplet,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
  };

  const heroSlides = [
    {
      title: "Best Unisex Salon in Amravati",
      subtitle: "Mayra Unisex Salon",
      description: "Professional Hair, Skin & Makeup Services Since 2016",
      image: "images/services/hero-1.png",
    },
    {
      title: "Bridal Makeup & Hair Styling Experts",
      subtitle: "Make Your Day Special",
      description: "Trusted by 790+ Happy Customers",
      image: "images/services/hero-2.png",
    },
    {
      title: "Professional Makeup Artist Training",
      subtitle: "Career + Income Oriented Courses",
      description: "Turn Your Passion Into a Profession",
      image: "images/services/hero-3.png",
    },
  ];

  const highlights = [
    { icon: Sparkles, title: "Hair Services", desc: "Relaxation" },
    { icon: Droplet, title: "Skin Treatment", desc: "Expert Care" },
    { icon: Palette, title: "Bridal Makeup", desc: "Perfect Look" },
    { icon: HomeIcon, title: "Home Services", desc: "At Your Doorstep" },
  ];

  return (
    <>
      <section className="relative">
        <Slider {...sliderSettings}>
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="relative h-[460px] sm:h-[520px] md:h-[760px]"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-[640px] text-white text-left md:text-left"
                  >
                    {/* MAIN TITLE */}
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight font-semibold tracking-tight mb-3">
                      {slide.title}
                    </h1>

                    {/* SUBTITLE */}
                    <h2 className="text-sm sm:text-base md:text-2xl text-primary/90 font-medium mb-2">
                      {slide.subtitle}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mb-6 md:mb-10 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/contact#contact-form"
                        className="px-7 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-2xl transition"
                      >
                        Book Appointment
                      </Link>

                      <Link
                        href="/training"
                        className="px-8 py-3 rounded-full bg-white/95 text-primary font-medium shadow-lg hover:shadow-2xl transition"
                      >
                        View Training Programs
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* TRUST BAR */}
      {/* <section className="py-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex justify-center gap-3">
            <Star className="text-accent w-8 h-8 fill-accent" />
            <div>
              <div className="text-2xl font-bold">4.8★ Rating</div>
              <p className="text-sm text-gray-600">Top Rated Salon</p>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Users className="text-secondary w-8 h-8" />
            <div>
              <div className="text-2xl font-bold">790+ Customers</div>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Award className="text-primary w-8 h-8" />
            <div>
              <div className="text-2xl font-bold">8+ Years</div>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= SIGNATURE SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Signature Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Premium salon & beauty services trusted by Amravati
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl bg-gradient-to-br from-[#f5e6dc] to-white p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-md">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-1">{h.title}</h3>
                  <p className="text-sm text-gray-600">{h.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
