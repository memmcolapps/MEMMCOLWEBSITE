"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/operation1.svg",
  "/images/operation2.svg",
  "/images/operation3.svg",
  "/images/operation4.svg",
];

export default function ImageSection() {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (firstSetRef.current) {
        setLoopWidth(firstSetRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-3"
        animate={loopWidth ? { x: [0, -loopWidth] } : {}}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div ref={firstSetRef} className="flex gap-3">
          {images.map((src, index) => (
            <div
              key={`first-${index}`}
              className="relative aspect-4/3 w-[55vw] shrink-0 overflow-hidden rounded-xl sm:w-[42vw] md:w-[300px] lg:w-[340px]"
            >
              <Image
                src={src}
                alt={`Operations photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 55vw, (max-width: 768px) 42vw, 340px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          {images.map((src, index) => (
            <div
              key={`second-${index}`}
              className="relative aspect-4/3 w-[55vw] shrink-0 overflow-hidden rounded-xl sm:w-[42vw] md:w-[300px] lg:w-[340px]"
            >
              <Image
                src={src}
                alt={`Operation image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
