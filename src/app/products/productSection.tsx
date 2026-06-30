import React from "react";
import ProductFeatureCard from "./productCard";

interface Feature {
  title: string;
  description: string;
  highlighted?: boolean;
}

interface Product {
  productName: string;
  productAddInfo?: string;
  productImage: string;
  description: string;
  features: Feature[];
}

interface ProductGridProps {
  products: Product[];
  className?: string;
}


export default function ProductGrid({
  products,
  className = "",
}: ProductGridProps) {
  return (
    <div className={`flex flex-col gap-8 max-w-5xl mx-auto px-4 ${className}`}>
      {products.map((product, i) => (
        <ProductFeatureCard key={i} {...product} />
      ))}
    </div>
  );
}