import React from "react";
import Image from "next/image";

interface SoftwareCardProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string | React.ReactNode;
  tagline?: string;
  bulletPoints?: string[];
  reverse?: boolean;
  className?: string;
  subtitle?: string;
  infoOnly?: boolean;
  addedInfo?: string;
  onClick?: () => void;
}

export default function SoftwareCard({
  title,
  image,
  imageAlt,
  description,
  tagline,
  subtitle,
  infoOnly,
  addedInfo,
  bulletPoints,
  reverse = false,
  className = "",
  onClick,
}: SoftwareCardProps) {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={`rounded-2xl border border-gray-200 p-8 md:p-6 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      <div
        className={`flex flex-col gap-10 items-center ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Device image */}
        <div
          className={`relative w-full ${infoOnly ? "max-w-120" : "max-w-70"} aspect-square shrink-0 mx-auto md:mx-0`}
        >
          <Image src={image} alt={imageAlt} fill className="object-contain" />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <h4 className="text-sm font-medium text-gray-900 mb-3">{subtitle}</h4>

          <div className="text-sm text-gray-700 leading-relaxed mb-2">
            {description}{" "}
              <span className="text-red-300 text-sm font-semibold">
                {addedInfo}
              </span>
          </div>

          {tagline && (
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {tagline}
            </p>
          )}

          <ul className="space-y-2">
            {bulletPoints?.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-700 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
