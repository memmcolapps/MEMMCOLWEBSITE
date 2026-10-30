export type ProductImage = {
  src: string;
  alt: string;
  thumbnailSrc?: string;
  title?: string;
  details?: string;
  width?: number;
  height?: number;
};

export type Product = {
  slug: string;
  fullName: string;
  description: string;
  images: ProductImage[];
  heroImages?: ProductImage[];
  tags?: string[];
  overview?: string[];
  overviewHeading?: string;
  overviewHighlights?: { title: string; details: string }[];
  keyFeatures?: { title: string; details: string }[];
  technicalSpecs?: { key: string; value: string }[];
};

const mmx313ct: Product = {
    slug: "mmx-313-ct",
    fullName: "MD POSTPAID (CT Rated) Meter with Fiber-Base Meter Box",
    description: "A complete metering solution that combines a reliable MD meter with a durable fiber-based meter box. Designed for safety, durability and efficient operation in both indoor and outdoor environments.",
    images: [
      { src: "/images/mmx313ct.png", alt: "Front view of the MMX 313 meter", title: "Meter display", details: "Full MD meter view", width: 762, height: 696 },
      { src: "/images/fiber-based-meter-box-opened.png", alt: "Open fiber-based meter box", title: "Fiber-based Meter Box", details: "Opened meter box with no MD meter" },
      { src: "/images/fiber-based-meter-box-closed.png", alt: "Closed fiber-based meter box", title: "Fiber-based Meter Box", details: "Closed meter box after installation" },
      { src: "/images/installation-view.png", alt: "Installed meter inside the fiber-based enclosure", title: "Installation view", details: "In real-world deployment" },
    ],
    heroImages: [
      { src: "/images/mmx313ct.png", thumbnailSrc: "/images/mmx313ct-small.png", alt: "Front view of the MMX 313 meter" },
      { src: "/images/mmx313ct-small-side.png", alt: "Side view of the MMX 313 meter" },
      { src: "/images/fiber-based-meter-box-opened.png", thumbnailSrc: "/images/fiber-meterbox-open-small.png", alt: "Open fiber-based meter box" },
      { src: "/images/fiber-based-meter-box-closed.png", thumbnailSrc: "/images/fiber-meter-box-small.png", alt: "Closed fiber-based meter box" },
    ],
    tags: ["MD metering", "CT rated", "Fiber meter box", "IP44"],
    overviewHeading: "Reliable metering for modern utility needs",
    overview: [
      "The MD Postpaid (CT Rated) Meter with Fiber-Based Meter Box is engineered to deliver accurate maximum demand measurement with long-lasting performance. The meter is housed in a high-quality fiber-reinforced enclosure that offers excellent strength, corrosion resistance and protection against harsh weather conditions.",
      "The meter box features a smart dual-compartment design, with the meter in the upper section and the current transformer (CT) plus test terminal block (TTB) in the lower section. This setup improves safety, simplifies maintenance and ensures easy access for testing without disturbing the meter.",
    ],
    overviewHighlights: [
      { title: "Advanced metering", details: "Advanced MD measurement and reliable data" },
      { title: "Durable enclosure", details: "Fiber-reinforced, weather resistant and corrosion proof" },
      { title: "Safe & efficient", details: "Dual-compartment design for better maintenance and security" },
    ],
    keyFeatures: [
      { title: "MD (Maximum Demand) metering", details: "Measures and records maximum demand for accurate billing and load management." },
      { title: "Postpaid operation", details: "Supports postpaid billing mode with reliable metering and data storage." },
      { title: "Fiber-based meter box", details: "Strong, weather-resistant and designed for long-term outdoor use." },
      { title: "Tamper protection", details: "Detects tampering attempts and ensures system integrity." },
      { title: "CT rated", details: "Compatible with current transformers for high current applications." },
      { title: "Test terminal block", details: "Allows safe and easy access for testing and maintenance." },
      { title: "IP44 protection", details: "Protected against dust and splashing water, suitable for outdoor installation." },
      { title: "Pole mounted", details: "Designed for secure and stable pole installation." },
    ],
    technicalSpecs: [
      { key: "Meter type", value: "Three-phase, 4-wire" },
      { key: "Rated voltage", value: "3 × 230/400V" },
      { key: "Current rating (CT)", value: "Three-5(100A CT rated)" },
      { key: "Frequency", value: "50Hz" },
      { key: "Accuracy class", value: "Class 1.0" },
      { key: "Maximum demand", value: "Yes" },
      { key: "Tariff", value: "Postpaid (MD)" },
      { key: "Load control", value: "Dual relay (live & neutral)" },
      { key: "Remote reading", value: "Supported" },
      { key: "Communication module", value: "Optional (e.g. GPRS/4G)" },
      { key: "Protocols", value: "Modbus RTU / DLMS (as applicable)" },
      { key: "UIU compatibility", value: "Supported" },
      { key: "Tamper detection", value: "Yes" },
      { key: "Enclosure protection", value: "IP44" },
      { key: "Surge protection", value: "Yes" },
      { key: "Supply voltage", value: "3 × 230/400V" },
      { key: "Display type", value: "LCD digital display" },
      { key: "Energy measurement", value: "Active energy (kWh)" },
      { key: "MD measurement", value: "Yes" },
      { key: "Data storage", value: "Non-volatile memory" },
      { key: "Real-time clock", value: "Yes" },
      { key: "Event logs", value: "Tamper & system events" },
      { key: "Records", value: "Load profile, demand, usage" },
      { key: "Meter interface", value: "RS485 (Modbus)" },
      { key: "Operating temp.", value: "-25°C to +70°C" },
      { key: "Storage temp.", value: "-40°C to +85°C" },
      { key: "Humidity", value: "95% (non-condensing)" },
      { key: "Backup battery", value: "Optional (as required)" },
      { key: "Dimensions (H × W × D)", value: "~480 × 250 × 180mm" },
      { key: "Weight", value: "8–12kg (approx.)" },
      { key: "Mounting", value: "Pole mounted" },
      { key: "Enclosure material", value: "SMC (fiber reinforced)" },
    ],
};

export const products: Product[] = [
  mmx313ct,
  {
    ...mmx313ct,
    slug: "mmx-313-ppm",
    fullName: "MD PREPAID (CT Rated) Meter with Fiber-Base Meter Box",
    overview: mmx313ct.overview?.map((paragraph) =>
      paragraph.replace("MD Postpaid", "MD Prepaid"),
    ),
    keyFeatures: mmx313ct.keyFeatures?.map((feature) =>
      feature.title === "Postpaid operation"
        ? {
            ...feature,
            title: "Prepaid operation",
            details: "Supports prepaid billing mode with reliable metering and data storage.",
          }
        : feature,
    ),
    technicalSpecs: mmx313ct.technicalSpecs?.map((spec) =>
      spec.key === "Tariff" ? { ...spec, value: "Prepaid (MD)" } : spec,
    ),
  },
];

export function getPageContentBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
