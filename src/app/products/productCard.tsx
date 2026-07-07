import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  highlighted?: boolean;
}

interface ProductFeatureCardProps {
  productName: string;
  productAddInfo?: string;
  productImage: string;
  description: string;
  features: Feature[];
  className?: string;
  redLine?: boolean;
}

export default function ProductFeatureCard({
  productName,
  productAddInfo,
  productImage,
  description,
  redLine = false,
  features,
  className = "",
}: ProductFeatureCardProps) {
  return (
    <div
      className={`relative rounded-2xl border border-gray-200 bg-transparent p-8 overflow-hidden ${className}`}
    >
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Product image */}
        <div className="relative w-40 h-64 shrink-0 mx-auto md:mx-0 self-center">
          <Image
            src={productImage}
            alt={productName}
            fill
            className="object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {productName}
            {redLine && <span>–</span>}
            <span className="text-red-300 text-sm font-normal">
              {productAddInfo}
            </span>
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
            {description}
          </p>

          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-gray-700 shrink-0 mt-0.5"
                />
                <p className={`text-sm leading-relaxed text-gray-700`}>
                  <span className="font-semibold text-gray-900">
                    {feature.title}
                  </span>{" "}
                  –{feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
