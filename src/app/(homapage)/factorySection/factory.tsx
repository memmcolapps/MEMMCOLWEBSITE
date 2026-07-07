"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useId } from "react";

export type MarqueeImage = {
  src: string;
  alt: string;
};

interface ImageMarqueeProps {
  title: string;
  images: MarqueeImage[];
  duration?: number; // seconds for one full loop, default 25
  className?: string;
}

export default function Slideshow({
  title,
  images,
  duration = 25,
  className = "",
}: ImageMarqueeProps) {
  const clipId = useId().replace(/[:]/g, ""); // safe for use in url()
  const track = [...images, ...images];

  return (
    <section className={`py-16 ${className}`}>
      <h2 className="mb-10 text-center text-2xl font-medium text-[#1B2420] md:text-3xl">
        {title}
      </h2>

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M0,0.02 Q0.5,0.18 1,0.02 L1,0.98 Q0.5,0.80 0,0.98 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative h-[240px] w-full overflow-hidden md:h-[320px]"
        style={{ clipPath: `url(#${clipId})` }}
      >
        <motion.div
          className="flex h-full w-max gap-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {track.map((img, i) => (
            <div
              key={i}
              className="relative h-full w-[300px] shrink-0 md:w-[420px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="420px"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}