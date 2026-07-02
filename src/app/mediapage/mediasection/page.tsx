"use client";

import Image from "next/image";
import SectionHeader from "@/components/headers/sectionHeader";
import Link from "next/link";

type MediaItem = {
  title: string;
  youtubeId: string;
  duration?: string;
  featured?: boolean;
};

const mediaItems: MediaItem[] = [
  {
    title:
      "Bridging Metering Gap: Momas, NEDC Equip 150 Youths To Address Deficit",
    youtubeId: "jB47BMLPBmQ",
    duration: "7:05",
    featured: true,
  },
  {
    title:
      "Nigerian Electricity Meter Manufacturer Calls for Robust Local Content Policy",
    youtubeId: "AXqQLYPMYEY",
  },
  {
    title:
      "Nigerian Electricity Meter Manufacturer Calls for Robust Local Content Policy",
    youtubeId: "8DrqRjXyoYA",
    duration: "7:42",
  },
  {
    title: "Prepaid Meter: Minister Of Power Inspects Facilities At Memmcol",
    youtubeId: "HQUTzND7VkA",
    duration: "12:28",
  },
  {
    title: "Prepaid Meter: Minister Of Power Inspects Facilities At Memmcol",
    youtubeId: "CYS4SKu_EcU",
  },
  {
    title:
      "MOMAS Certifies 300 Youths After Two-Week Meter Installation Training",
    youtubeId: "1muv-iqOyl0",
  },
  {
    title: "Prepaid Meter: Minister Of Power Inspects Facilities At Memmcol",
    youtubeId: "U4y83raynsg",
    duration: "7:42",
  },
  {
    title:
      "Bridging Metering Gap: Momas, NEDC Equip 150 Youths To Address Deficit",
    youtubeId: "REPLACE_ME_8",
    duration: "7:05",
  },
  {
    title:
      "Bridging Metering Gap: Momas, NEDC Equip 150 Youths To Address Deficit",
    youtubeId: "REPLACE_ME_9",
    duration: "7:05",
  },
];

function youtubeThumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function VideoCard({
  item,
  fill = false,
}: {
  item: MediaItem;
  fill?: boolean;
}) {
  return (
    <Link
      href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${fill ? "flex-1 flex flex-col" : ""}`}
    >
      <div
        className={`relative overflow-hidden rounded-lg bg-gray-100 ${
          fill ? "flex-1 min-h-30" : "aspect-video"
        }`}
      >
        <Image
          src={youtubeThumb(item.youtubeId)}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {item.duration && (
          <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">
            {item.duration}
          </span>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60">
            <svg viewBox="0 0 24 24" fill="white" className="ml-0.5 h-5 w-5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm font-medium text-gray-900 group-hover:text-green-700 line-clamp-2">
        {item.title}
      </p>
    </Link>
  );
}

export default function MediaSection() {
  const [hero, ...rest] = mediaItems;
  const sideItems = rest.slice(0, 2);
  const gridItems = rest.slice(2);

  return (
    <section className="pt-16">
      <SectionHeader
        titleStart="Momas Celebrates 30 Years Of"
        titleHighlight=" Engineering Excellence"
        className="mb-12 text-center"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: hero + 2 stacked */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-stretch">
          <div className="md:w-2/3">
            <VideoCard item={hero} />
          </div>
          <div className="md:w-1/3 flex flex-col gap-6">
            {sideItems.map((item) => (
              <VideoCard key={item.youtubeId} item={item} fill />
            ))}
          </div>
        </div>

        {/* Remaining grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {gridItems.map((item) => (
            <VideoCard key={item.youtubeId} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
}
