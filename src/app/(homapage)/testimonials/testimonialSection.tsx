"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "They stand out as a truly local manufacturer, with homegrown innovations led by Engr. Balogun and a hands-on, technical leadership team creating impactful solutions. They stand out as a truly local manufacturer, with homegrown innovations led by Engr.",
    name: "Khalil Halilu",
    title: "EVC & CEO NASENI",
    avatar: "/images/khaili.png",
  },
  {
    quote:
    "The key thing for them is that they are a local manufacturer, when I say that, it means that a lot of their technology, innovations is mostly, I know the chairman, Engr Balogun, I know he is not only a business man but he is also technically very engaged and so are some of the other directors and even the management so my view is that as a company, they look inwards a lot.",
    name: "ENGR Adeoye Fadeyibi",
    title: "MD Eko Disco",
    avatar: "/images/ekoDisco.png",
  },
  {
    quote:
    "Momas is one of the foremost indigenous meter manufacturing companies in this country. They have shown capacity and efficiency in that field. They are the topmost now in the country and I’m so happy that an indigenous manufacturing company can comfortably compete with international standard.",
    name: "Mr Chinyeaka Ohaa",
    title: "Perm. Sec. Fed. Min. of Power, Abuja",
    avatar: "/images/avatar.svg",
  },
];

const CARDS_PER_VIEW = 3;
const MOBILE_INITIAL_COUNT = 2;

function TestimonialCard({
  quote,
  name,
  title,
  avatar,
}: {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-7 flex flex-col justify-between min-h-70 border border-primary/40 cursor-pointer transition-all duration-300"
      style={{
        background: hovered
          ? "radial-gradient(circle at 30% 20%, #213328, #37925E)"
          : "white",
      }}
    >
      <p
        className="text-sm leading-relaxed transition-colors duration-300"
        style={{ color: hovered ? "rgba(255,255,255,0.95)" : "#4b5563" }}
      >
        {quote}
      </p>

      <div className="flex items-center gap-3 mt-8">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-gray-300">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p
            className="font-semibold text-sm transition-colors duration-300"
            style={{ color: hovered ? "white" : "#111827" }}
          >
            {name}
          </p>
          <p
            className="text-xs transition-colors duration-300"
            style={{ color: hovered ? "rgba(255,255,255,0.8)" : "#6b7280" }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const maxIndex = Math.max(testimonials.length - CARDS_PER_VIEW, 0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleCards = testimonials.slice(
    startIndex,
    startIndex + CARDS_PER_VIEW
  );

  const mobileCards = showAllMobile
    ? testimonials
    : testimonials.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <section className="bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              Testimonials
            </h2>
            <p className="text-gray-500 text-sm">Don&apos;t just take our word for it.</p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous testimonial"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex === maxIndex}
              aria-label="Next testimonial"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-green-700 text-white hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {visibleCards.map((t, i) => (
            <TestimonialCard key={startIndex + i} {...t} />
          ))}
        </div>

        <div className="md:hidden grid grid-cols-1 gap-6">
          {mobileCards.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {!showAllMobile && testimonials.length > MOBILE_INITIAL_COUNT && (
          <div className="md:hidden flex justify-center mt-6">
            <button
              onClick={() => setShowAllMobile(true)}
              className="text-sm font-semibold text-white bg-primary p-2 rounded-xl hover:text-green-800 transition"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}