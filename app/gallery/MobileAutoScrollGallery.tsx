"use client";

import { useEffect, useRef, useState } from "react";

type ImageItem = {
  id: number;
  src: string;
  title: string;
};

export default function MobileAutoScrollGallery({
  images,
}: {
  images: ImageItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  /* 🔁 AUTO SCROLL */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      containerRef.current?.scrollBy({
        top: 3, // 🔥 medium-fast (increase to 4 if needed)
        behavior: "smooth",
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ⏸ PAUSE + AUTO RESUME */
  const handlePause = () => {
    setIsPaused(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000); // ⏱ resume after 5 sec
  };

  return (
    <>
      {/* AUTO SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll no-scrollbar px-4 space-y-6"
      >
        {images.map((img, index) => (
          <div
            key={`${img.id}-${index}`} // ✅ unique key FIX
            className="relative h-[85vh] rounded-3xl overflow-hidden shadow-lg"
            onClick={handlePause} // 👆 tap pauses ONLY
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-sm font-medium">{img.title}</p>
            </div>

            {/* 🔍 VIEW BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // 🚨 VERY IMPORTANT
                setActiveImage(img);
                setIsPaused(true);
              }}
              className="
                absolute top-4 right-4
                bg-black/60 text-white
                px-3 py-1 rounded-full text-xs
                backdrop-blur
              "
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* FULL SCREEN VIEW */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => {
            setActiveImage(null);
            setIsPaused(false);
          }}
        >
          <img
            src={activeImage.src}
            alt={activeImage.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
