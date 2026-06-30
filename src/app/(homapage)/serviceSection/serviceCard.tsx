"use client";

import { useState } from "react";
import { iconMap } from "@/lib/icons";

interface ServiceCardProps {
  icon: string;        
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[icon];  

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl border border-primary/20 p-6 cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        background: hovered
          ? "radial-gradient(circle at 30% 20%, #213328, #37925E)"
          : "white",
      }}
    >
      <div
        className="mb-8 w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300"
        style={{
          backgroundColor: hovered ? "#37925E" : "#f0fdf4",
          border: hovered ? "1px solid rgba(255,255,255,0.3)" : "1px solid #bbf7d0",
        }}
      >
        {Icon && (
          <Icon
            size={20}
            className="transition-colors duration-300"
            style={{ color: hovered ? "white" : "#37925E" }}
          />
        )}
      </div>

      <h3
        className="text-base font-semibold mb-3 transition-colors duration-300"
        style={{ color: hovered ? "white" : "#37925E" }}
      >
        {title}
      </h3>

      <p
        className="text-sm leading-relaxed transition-colors duration-300"
        style={{ color: hovered ? "rgba(255,255,255,0.85)" : "#6b7280" }}
      >
        {description}
      </p>
    </div>
  );
}