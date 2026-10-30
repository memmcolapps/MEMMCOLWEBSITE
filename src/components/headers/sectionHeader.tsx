import React from "react";

interface SectionHeaderProps {
  as?: "h1" | "h2";
  titleStart: string;
  titleHighlight: string;
  description?: string;
  className?: string;
  reverse?: boolean;
}

export default function SectionHeader({
  as: Heading = "h2",
  titleStart,
  titleHighlight,
  description,
  reverse = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto px-4 ${className}`}>
      {reverse ? (
        <Heading
          className={"text-3xl md:text-4xl font-normal text-green-700 mb-4"}
        >
          {titleStart} <span className="text-gray-900">{titleHighlight}</span>
        </Heading>
      ) : (
        <Heading className={"text-3xl md:text-4xl font-normal text-gray-900 mb-4"}>
          {titleStart} <span className="text-green-700">{titleHighlight}</span>
        </Heading>
      )}

      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}
