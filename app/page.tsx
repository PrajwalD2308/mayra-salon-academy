import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import GalleryHighlights from "./components/GalleryHighlights";
import WhyChooseMayra from "./components/WhyChooseMayra";
import PopularServices from "./components/PopularServices";
import TrainingPromo from "./components/TrainingPromo";
import ReviewsSection from "./components/ReviewsSection";
import LocationCTA from "./components/LocationCTA";

export const metadata: Metadata = {
  title:
    "Mayra Unisex Salon & Makeup Academy in Amravati | Services & Training",
  description:
    "Mayra Unisex Salon & Makeup Academy in Amravati provides premium salon & makeup services along with certified makeup artist and beautician courses with practical training.",
};

export default function HomePage() {
  return (
    <>
      {/* SEO TEXT SECTION (Invisible to users, visible to Google) */}
      <section className="sr-only">
        <h1>Mayra Unisex Salon & Makeup Academy in Amravati</h1>
        <p>
          Mayra Unisex Salon & Makeup Academy is a premium beauty destination in
          Amravati offering professional hair, skin, and makeup services along
          with certified makeup artist and beautician training courses.
        </p>

        <h2>Professional Unisex Salon & Makeup Services</h2>
        <p>
          We provide expert hair styling, skincare treatments, bridal makeup,
          party makeup, and grooming services for men and women in Amravati.
        </p>

        <h2>Makeup Artist & Beautician Training Academy</h2>
        <p>
          Our academy offers complete practical training, certification, and
          career guidance for aspiring makeup artists and beauticians.
        </p>
      </section>

      {/* UI SECTIONS */}
      <HeroSection />
      <GalleryHighlights />
      <WhyChooseMayra />
      <PopularServices />
      <TrainingPromo />
      <ReviewsSection />
      <LocationCTA />
    </>
  );
}
