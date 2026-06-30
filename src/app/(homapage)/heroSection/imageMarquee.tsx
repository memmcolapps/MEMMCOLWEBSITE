"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const images = [
  "/images/1.svg",
  "/images/2.svg",
  "/images/3.svg",
  "/images/4.svg",
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
];

export default function ImageMarquee() {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    if (firstSetRef.current) {
      setLoopWidth(firstSetRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-10"
        animate={loopWidth ? { x: [0, -loopWidth] } : {}}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div ref={firstSetRef} className="flex gap-10">
          {images.map((src, index) => (
            <div key={`first-${index}`} className="relative h-12 w-30 shrink-0">
              <Image src={src} alt="" fill className="object-contain" />
            </div>
          ))}
        </div>

        <div className="flex gap-10">
          {images.map((src, index) => (
            <div key={`second-${index}`} className="relative h-12 w-30 shrink-0">
              <Image src={src} alt="" fill className="object-contain" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}