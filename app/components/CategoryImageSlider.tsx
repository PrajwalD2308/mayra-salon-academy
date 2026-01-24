"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

interface CategoryImageSliderProps {
  images: string[];
}

export default function CategoryImageSlider({
  images,
}: CategoryImageSliderProps) {
  const autoplay = useRef(
    Autoplay({
      delay: 3500, // ⏱ slow & premium
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="relative h-[220px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {images.map((img, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <Image
                src={img}
                alt="Category image"
                fill
                priority={index === 0}
                className="object-cover object-center transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
    </div>
  );
}
