"use client";

import Image from "next/image";
import { useRef } from "react";

const images = [
  "/images/operation1.svg",
  "/images/operation2.svg",
  "/images/operation3.svg",
  "/images/operation4.svg",
];

export default function ImageSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <>
      {/* Desktop: 4-column grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-3 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl aspect-4/3"
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

      {/* Mobile: draggable horizontal scroll */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-3 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative shrink-0 overflow-hidden rounded-xl"
            style={{
              width: "75vw",
              aspectRatio: "4/3",
              scrollSnapAlign: "start",
            }}
          >
            <Image
              src={src}
              alt={`Operation image ${index + 1}`}
              fill
              className="object-cover pointer-events-none"
            />
          </div>
        ))}

        {/* Scroll hint dot indicators */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-2 pointer-events-none">
          {images.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/60" />
          ))}
        </div>
      </div>
    </>
  );
}