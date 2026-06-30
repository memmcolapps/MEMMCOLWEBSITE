"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/factory1.svg", alt: "Team reviewing circuit board in meeting room" },
  { src: "/images/factory2.svg", alt: "Engineer showing component to executive" },
  { src: "/images/factory3.svg", alt: "Factory floor team discussion" },
  { src: "/images/factory4.svg", alt: "Close-up of engineer demonstrating component" },
];

export default function FactoryVisitations() {
  return (
    <section className="w-full overflow-hidden py-16" style={{ backgroundColor: "#F1F4EC" }}>
      <h2 className="text-center text-2xl md:text-3xl font-medium text-neutral-800 mb-12">
        Factory Visitations
      </h2>

      {/* Outer wrapper extends past the viewport so the curve's apex sits
          inside the visible area while the curve tails fall off-screen. */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto"
        style={{
          width: "140%",
          marginLeft: "-20%",
          // elliptical radius: huge horizontal, small vertical
          // produces a single smooth arc across the entire top edge,
          // mirrored on the bottom edge.
          borderRadius: "50% / 60px",
          overflow: "hidden",
        }}
      >
        <div className="flex gap-1 md:gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative flex-1 aspect-3/4 overflow-hidden"
            >
               <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}