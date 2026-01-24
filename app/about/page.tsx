"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Target, Star, GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Mayra Unisex Salon
            </h1>
            <p className="text-xl text-gray-600">
              Trusted Beauty & Makeup Academy in Amravati Since 2016
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#faf7f4]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/services/about-hero.jpeg')",
          }}
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95" />

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>

            <p className="text-gray-700 mb-5 text-lg leading-relaxed">
              Mayra Unisex Salon was established in 2016 with a simple goal – to
              provide professional, affordable, and reliable beauty services to
              the people of Amravati.
            </p>

            <p className="text-gray-700 mb-5 text-lg leading-relaxed">
              What started as a dedicated salon for hair, skin, and grooming
              gradually became a trusted name with over{" "}
              <span className="font-semibold text-primary">
                1000+ happy customers
              </span>{" "}
              and a strong{" "}
              <span className="font-semibold text-primry">★★★★★ rating</span>.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With growing trust and demand, we expanded beyond salon services
              and launched professional{" "}
              <span className="font-semibold text-primary">
                makeup and beauty training courses
              </span>
              , helping aspiring artists turn their passion into a career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#FFF5ED]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              whileHover={{ rotate: 0.5, y: -6 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl"
            >
              <Target className="w-12 h-12 text-primary mb-4" />

              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>

              <p className="text-gray-700 leading-relaxed">
                To deliver high-quality salon services and practical beauty
                education that builds confidence, skills, and long-term trust
                with every client and student.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ rotate: -0.5, y: -6 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-12 h-12 text-secondary mb-4" />

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>

              <p className="text-gray-700 leading-relaxed">
                To become Amravati’s most trusted salon and beauty academy,
                known for professionalism, genuine care, and career-focused
                training.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SALON TO ACADEMY JOURNEY */}
      <section className="py-20 bg-gradient-to-b from-[#FAF6F3] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a trusted salon to a professional beauty academy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                year: "2016",
                title: "Premium Unisex Salon",
                desc: "Started our journey with a focus on quality, care, and customer satisfaction.",
              },
              {
                year: "2020",
                title: "Bridal Makeup Expertise",
                desc: "Expanded into bridal makeup and advanced beauty services.",
              },
              {
                year: "2023",
                title: "Makeup Academy Launch",
                desc: "Launched professional training programs to build real careers.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="text-4xl font-bold text-primary mb-4">
                  {item.year}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MAYRA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose <span className="text-primary">Mayra</span>
            </h2>
            <p className="text-gray-600">What makes us different and trusted</p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Staff",
                desc: "Experienced stylists & certified makeup experts",
              },
              {
                title: "Affordable Pricing",
                desc: "Economy & premium packages for every budget",
              },
              {
                title: "Quality Service",
                desc: "Premium products with modern equipment",
              },
              {
                title: "Unisex Services",
                desc: "Complete beauty & grooming for all genders",
              },
              {
                title: "Home Services",
                desc: "Makeup-quality services at your doorstep",
              },
              {
                title: "Trusted Brand",
                desc: "8+ years with 790+ satisfied customers",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                {/* Hover Accent Line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-16 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted by Amravati
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { value: "★★★★★", label: "Average Rating" },
              { value: "1000+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-white/15 backdrop-blur-md p-8 shadow-lg"
              >
                <div className="text-5xl font-bold mb-2">{item.value}</div>
                <div className="text-lg opacity-90">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl mx-auto text-lg opacity-90">
            From premium salon services to professional makeup education, Mayra
            continues to grow with trust, quality, and customer satisfaction.
          </p>
        </div>
      </section>
      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-r from-primary to-secondary px-8 py-16 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Mayra Difference
            </h2>

            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Book your appointment today and discover why Mayra is Amravati’s
              trusted salon & beauty academy.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact#contact-form"
              className="inline-block rounded-full bg-white px-10 py-4 text-lg font-semibold text-primary shadow-lg hover:shadow-xl transition"
            >
              Book Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
