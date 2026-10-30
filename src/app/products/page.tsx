import SectionHeader from "@/components/headers/sectionHeader";
import ProductGrid from "./productSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Smart Electricity Meters",
  description:
    "Explore MEMMCOL single-phase and three-phase electricity meters, including prepaid, postpaid and smart metering solutions for homes, businesses and utilities.",
  path: "/products",
  keywords: [
    "prepaid meter",
    "postpaid meter",
    "single phase meter",
    "three phase meter",
    "smart meter Nigeria",
    "MOMAS meters",
    "tamper detection meter",
  ],
});

const products = [
  {
    productName: "MMX 313 CT",
    slug: "mmx-313-ct",
    productImage: "/images/mmx313ct.png",
    description:
      "A complete metering solution that combines a reliable MD meter with a durable fiber-based meter box. Designed for safety, durability and efficient operation in both indoor and outdoor environments.",
    features: [
      {
        title: "MD (Maximum Demand) metering",
        description: "Measures and records maximum demand for accurate billing and load management."
      },
      {
        title: "Postpaid operation",
        description: "Supports postpaid billing mode with reliable metering and data storage."
      },
      {
        title: "Fiber-based meter box",
        description: "Strong, weather-resistant and designed for long-term outdoor use."
      },
      {
        title: "Tamper protection",
        description: "Detects tampering attempts and ensures system integrity."
      },
      {
        title: "CT rated",
        description: "Compatible with current transformers for high current applications."
      }

    ]
  },
  {
    productName: "MMX 313 PPM",
    slug: "mmx-313-ppm",
    productImage: "/images/mmx313ct.png",
    description:
      "A complete metering solution that combines a reliable MD meter with a durable fiber-based meter box. Designed for safety, durability and efficient operation in both indoor and outdoor environments.",
    features: [
      {
        title: "MD (Maximum Demand) metering",
        description: "Measures and records maximum demand for accurate billing and load management."
      },
      {
        title: "Prepaid operation",
        description: "Supports prepaid billing mode with reliable metering and data storage."
      },
      {
        title: "Fiber-based meter box",
        description: "Strong, weather-resistant and designed for long-term outdoor use."
      },
      {
        title: "Tamper protection",
        description: "Detects tampering attempts and ensures system integrity."
      },
      {
        title: "CT rated",
        description: "Compatible with current transformers for high current applications."
      }

    ]
  },
  {
    productName: "The MMX310NG",
    slug: "mmx-310-ng",
    productImage: "/images/310.png",
    description:
      "A new-generation three-phase smart prepaid electricity meter designed for dual tariff applications. It supports energy monitoring from two different sources—grid and off-grid—and is fully compliant with STS standards. Prepayment and metering functions are managed via token codes, which can be entered through a UIU keypad or remotely via communication modules. The meter is equipped with a measuring unit, display, real-time clock, data storage, local and remote communication interfaces, a load control relay, and other essential functionalities.",
    features: [
      {
        title: "Prepayment & Post payment Mode Switchable",
        description:
          "Flexible billing options allow users to switch between prepaid and postpaid metering.",
      },
      {
        title: "Advanced Smart Energy Management",
        description:
          "Users can monitor real-time power consumption, set energy usage alert and load limit alerts from the UIU, and optimize energy costs.",
        highlighted: true,
      },
      {
        title: "Seamless Connectivity",
        description:
          "Communicates over 4G networks for fast, accurate, and secure data transmission.",
      },
      {
        title: "Tamper Detection & Security",
        description:
          "Dual relay for both live and neutral disconnection, preventing energy theft.",
      },
      {
        title: "External Backup Battery",
        description: "Ensures continued operation during power outages.",
      },
    ],
  },

  {
    productName: "MMX-110-NG < GPRS>",
    slug: "mmx-110-ng",
    productImage: "/images/112.png",
    description:
      "A new-generation single-phase din-rail smart prepaid electricity meter designed for dual tariff applications. It supports energy monitoring from two different sources—grid and off-grid—and is fully compliant with STS standards. Prepayment and metering functions are managed via token codes, which can be entered through a UIU keypad or remotely via communication modules. The meter is equipped with a measuring unit, display, real-time clock, data storage, local and remote communication interfaces, a load control relay, and other essential functionalities.",
    features: [
      {
        title: "Dual Tariff Application",
        description:
          "Supporting energy monitoring from hybrid power system (Grid and Off-grid)",
      },
      {
        title: "Prepayment & Post payment Mode Switchable",
        description:
          "Flexible billing options allow users to switch between prepaid and postpaid metering.",
      },
      {
        title: "Advanced Smart Energy Management",
        description:
          "Users can monitor real-time power consumption, set energy usage alert and load limit alerts from the UIU, and optimize energy costs.",
      },
      {
        title: "Seamless Connectivity",
        description:
          "Communicates over 4G networks for fast, accurate, and secure data transmission.",
      },
      {
        title: "Tamper Detection & Security",
        description:
          "Dual relay for both live and neutral disconnection, preventing energy theft.",
      },
    ],
  },

  {
    productName: " MMX110NG-G<GPRS>PLC",
    slug: "mmx-110-ng-g",
    productImage: "/images/110.png",
    description:
      "The MMX110-NG-GPLC is an advanced single-phase smart meter, designed to revolutionize energy  management with STS compliance and DLMS support. Built for seamless communication, it integrates  PLC/RF UIU technology and features a plug-and-play 4G GPRS communication module, ensuring reliable,  real-time data transmission.",
    features: [
      {
        title: "Prepayment & Post payment Mode Switchable",
        description:
          "Flexible billing options allow users to switch between prepaid and postpaid metering.",
      },
      {
        title: "Advanced Smart Energy Management",
        description:
          "Users can monitor real-time power consumption, set energy usage alert and load limit alerts from the UIU, and optimize energy costs.",
        highlighted: true,
      },
      {
        title: "Seamless Connectivity",
        description:
          "Communicates over 4G networks for fast, accurate, and secure data transmission.",
      },
      {
        title: "Tamper Detection & Security",
        description:
          "Dual relay for both live and neutral disconnection, preventing energy theft.",
      },
      {
        title: "Auto Power Disconnection & Reconnection",
        description:
          "Automatically disconnects when power is off and  reconnects when power is restored, enhancing security and preventing energy theft.",
      },
    ],
  },

  {
    productName: "MMX310-NG-G<GPRS>PLC",
    slug: "mmx-310-ng-g-plc-1",
    productImage: "/images/310_2.png",
    description:
      "The MMX310-NG-G<GPRS>PLC is an advanced three-phase smart meter, designed to revolutionize energy  management with STS compliance and DLMS support. Built for seamless communication, it integrates  PLC/RF UIU technology and features a plug-and-play 4G GPRS communication module, ensuring reliable,  real-time data transmission.",
    features: [
      {
        title: "Prepayment & Post payment Mode Switchable",
        description:
          "Flexible billing options allow users to switch between prepaid and postpaid metering.",
      },
      {
        title: "User Convenience & Control",
        description:
          "Empowers customers with real-time monitoring and smart energy  usage insights.",
      },
      {
        title: "Advanced Smart Energy Management",
        description:
          "Users can monitor real-time power consumption, set energy usage alert and load limit alerts from the UIU, and optimize energy costs.",
        highlighted: true,
      },
      {
        title: "Seamless Connectivity",
        description:
          "Communicates over 4G networks for fast, accurate, and secure data transmission.",
      },
      {
        title: "Remote Metering & Automation",
        description:
          "Eliminates manual meter readings, enhancing operational  efficiency and reducing costs.",
      },
    ],
  },

  {
    productName: "MMX110-NG-G<GPRS>PLC",
    slug: "mmx-110ng-g-plc-1",
    // productAddInfo: " Out of production",
    productImage: "/images/110_2.png",
    // redLine: true,
    description:
      "The MMX110-NG-G<GPRS>PLC is an advanced single-phase smart meter, designed to revolutionize energy  management with STS compliance and DLMS support. Built for seamless communication, it integrates  PLC/RF UIU technology and features a plug-and-play 4G GPRS communication module, ensuring reliable,  real-time data transmission.",
    features: [
      {
        title: "Prepayment & Post payment Mode Switchable",
        description:
          "Flexible billing options allow users to switch between prepaid and postpaid metering.",
      },
      {
        title: "Advanced Smart Energy Management",
        description:
          "Users can monitor real-time power consumption, set energy usage alert and load limit alerts from the UIU, and optimize energy costs.",
        highlighted: true,
      },
      {
        title: "Tamper Detection & Security",
        description:
          "Dual relay for both live and neutral disconnection, preventing energy theft.",
      },
      {
        title: "Auto Power Disconnection & Reconnection",
        description:
          "Automatically disconnects when power is off and  reconnects when power is restored, enhancing security and preventing energy theft.",
      },
      {
        title: "External Backup Battery",
        description: "Ensures continued operation during power outages.",
      },
    ],
  },
];

export default function MeteringSolutionSection() {
  return (
    <section className="py-16">
      <SectionHeader
        as="h1"
        titleStart="Metering"
        titleHighlight="Solution"
        description="Momas metering solutions enable utility companies to deploy smart electricity meters to customers, manage billing and usage, generate secure electricity tokens, and monitor real-time consumption across their network."
        className="mb-12"
      />
      <ProductGrid products={products} />
    </section>
  );
}
