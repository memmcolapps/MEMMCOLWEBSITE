import SectionHeader from "@/components/headers/sectionHeader";
import ProductGrid from "./productSection";

const products = [
  {
    productName: "The MMX310NG",
    productImage: "/icons/310.svg",
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
    productImage: "/icons/112.svg",
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
    productImage: "/icons/110.svg",
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
    productImage: "/icons/310_2.svg",
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
    productAddInfo: " Out of production",
    productImage: "/icons/110_2.svg",
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
    <section className="py-16 bg-[#F5F8F4]">
      <SectionHeader
        titleStart="Metering"
        titleHighlight="Solution"
        description="Momas metering solutions enable utility companies to deploy smart electricity meters to customers, manage billing and usage, generate secure electricity tokens, and monitor real-time consumption across their network."
        className="mb-12"
      />
      <ProductGrid products={products} />
    </section>
  );
}
