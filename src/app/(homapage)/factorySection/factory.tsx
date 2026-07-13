"use client";

import Image from "next/image";
import { useId, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export type MarqueeImage = {
  src: string;
  alt: string;
  description?: string;
};

interface ImageMarqueeProps {
  title: string;
  images: MarqueeImage[];
  duration?: number;
  className?: string;
}

export default function Slideshow({
  title,
  images,
  duration = 25,
  className = "",
}: ImageMarqueeProps) {
  const rawId = useId().replace(/[:]/g, "");
  const clipId = `clip-${rawId}`;

  const controls = useAnimationControls();

  const track = [...images, ...images];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, duration]);

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
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              duration,
              ease: "linear",
              repeat: Infinity,
            },
          })
        }
      >
        <motion.div
          animate={controls}
          className="flex h-full w-max gap-2"
        >
          {track.map((img, i) => (
            <div
              key={i}
              className="group/item relative h-full w-[300px] shrink-0 overflow-hidden md:w-[420px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="420px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 p-5 text-center opacity-0 backdrop-blur-[2px] transition-all duration-300 ease-out group-hover/item:bg-gray-700/45 group-hover/item:opacity-100">
                <p className="translate-y-2 text-sm font-semibold text-white transition-transform duration-300 ease-out group-hover/item:translate-y-0 md:text-base">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}