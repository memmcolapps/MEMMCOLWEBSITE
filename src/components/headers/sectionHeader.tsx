import React from "react";

interface SectionHeaderProps {
  titleStart: string;
  titleHighlight: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  titleStart,
  titleHighlight,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto px-4 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        {titleStart} <span className="text-green-700">{titleHighlight}</span>
      </h2>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}