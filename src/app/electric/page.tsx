import SectionHeader from "@/components/headers/sectionHeader";
import ProductGrid from "../products/productSection";

const products = [
  {
    productName: "Circuit Breaker",
    productImage: "/images/CB.png",
    description:
      "A next-generation intelligent circuit breaker designed to provide advanced electrical protection, remote control, and real-time energy monitoring. It safeguards electrical systems against overloads, short circuits, and earth leakage. Equipped with smart monitoring and automated protection enhances safety, reliability, and efficient power management for residential, commercial, and industrial applications.",
    features: [
      {
        title: "Safe & Reliable Operation",
        description:
          "Designed with built-in safety mechanisms and durable construction to ensure long-term, dependable performance.",
      },
      {
        title: "Advanced Protection",
        description:
          "Provides reliable protection against overload, short circuit, overvoltage, undervoltage, and earth leakage faults.",
        highlighted: true,
      },
      {
        title: "Real-Time Energy Monitoring",
        description:
          "Tracks voltage, current, power, energy consumption, and power quality to support efficient energy management.",
      },
    ],
  },

  {
    productName: "Fuse Breaker",
    productImage: "/images/FB.png",
    description:
      "A reliable electrical protection device designed to safeguard electrical circuits and connected equipment from overloads and short circuits. Combining fast fault interruption with dependable circuit isolation, it enhances safety, minimizes equipment damage, and ensures uninterrupted electrical system performance.",
    features: [
      {
        title: "Overload & Short-Circuit Protection",
        description:
          "Automatically disconnects the circuit during abnormal current conditions to protect equipment and wiring.",
      },
      {
        title: "Fast Fault Response",
        description:
          "Rapidly interrupts fault currents, minimizing the risk of electrical damage, overheating, and fire hazards.",
      },
      {
        title: "Safe Circuit Isolation",
        description:
          "Allows circuits to be safely isolated for maintenance, repairs, and troubleshooting.",
      },
      {
        title: "Resettable Operation",
        description:
          "Easily restored after a trip, eliminating the need for frequent fuse replacement and reducing maintenance costs.",
      },
    ],
  },

  {
    productName: "Meter Box",
    productImage: "/images/MB.png",
    description:
      "A robust and weather-resistant enclosure designed to securely house and protect electricity meters and associated electrical components. Built for residential, commercial, and industrial applications, it ensures safe operation, easy access for maintenance, and long-term reliability in both indoor and outdoor environments.",
    features: [
      {
        title: "Enhanced Equipment Protection",
        description:
          "Safeguards meters and electrical components from impact, dust, moisture, UV exposure, and unauthorized access.",
      },
      {
        title: "Weather-Resistant Construction",
        description:
          "Designed to withstand harsh environmental conditions, ensuring reliable performance in outdoor installations.",
        highlighted: true,
      },
      {
        title: "Durable & Corrosion Resistant",
        description:
          "Manufactured from high-quality, corrosion-resistant materials for extended service life with minimal maintenance.",
      },
      {
        title: "Easy Installation & Maintenance",
        description:
          "Spacious interior and accessible design simplify meter installation, inspection, and servicing.",
      },
    ],
  },

  {
    productName: "Spiral Flexible Trucking Pipes",
    productImage: "/images/SP.png",
    description:
      "A durable and flexible cable management solution designed to protect, organize, and route electrical wiring in residential, commercial, and industrial installations. Its corrugated design provides excellent flexibility, mechanical protection, and long service life while simplifying cable installation and maintenance.",
    features: [
      {
        title: "Superior Cable Protection",
        description:
          "Shields electrical cables from abrasion, impact, crushing, moisture, dust, and everyday wear, extending cable lifespan.",
      },
      {
        title: "High Flexibility",
        description:
          "Easily bends around corners, tight spaces, and complex routing paths without damaging or stressing the enclosed cables.",
      },
      {
        title: "Chemical & Corrosion Resistant",
        description:
          "Resistant to oils, chemicals, UV exposure, and harsh environmental conditions for reliable indoor and outdoor use.",
        highlighted: true,
      },
      {
        title: "Quick & Easy Installation",
        description:
          "Lightweight, easy to cut, and simple to install, reducing installation time and labor costs.",
      },
    ],
  },
];

export default function MeteringSolutionSection() {
  return (
    <section className="py-16">
      <SectionHeader
        titleStart="Electrical "
        titleHighlight="Materials"
        description="Momas Electrical Materials deliver reliable, high-quality electrical components for safe installations, efficient power distribution, and long-lasting performance."
        className="mb-12"
      />
      <ProductGrid products={products} />
    </section>
  );
}
