"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "../productsData";

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const [selected, setSelected] = useState(0);
  const image = images[selected];

  return (
    <div className="flex min-w-0 flex-col-reverse gap-4 sm:flex-row sm:gap-6">
      {images.length > 1 && (
        <div className="flex w-full shrink-0 justify-center gap-2 sm:w-20 sm:flex-col sm:justify-start" aria-label="Product views">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Show ${item.alt}`}
              aria-pressed={selected === index}
              className={`relative size-14 overflow-hidden rounded-md border p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:size-20 ${
                selected === index ? "border-primary" : "border-[#dcece1] hover:border-primary/50"
              }`}
            >
              <Image src={item.thumbnailSrc ?? item.src} alt="" fill sizes="80px" className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}
      <div className="relative min-h-52 min-w-0 flex-1 sm:min-h-80" aria-live="polite">
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={selected === 0}
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 380px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
