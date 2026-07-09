"use client";

import { useRouter } from "next/navigation";
import SectionHeader from "@/components/headers/sectionHeader";
import SoftwareCard from "./softwareCard";

const solutions = [
  {
    src: "https://meters-api.netlify.app/",
    title: "Momas API",
    image: "/images/Momas.png",
    imageAlt: "Gridflex dashboard on desktop",
    subtitle: "Connect. Integrate. Scale.",
    description:
      "Empower your applications with secure, well-documented APIs designed for seamless integrations, real-time monitoring, and enterprise-grade reliability.",
    bulletPoints: [
      "Secure authentication and API key management.",
      "Interactive documentation and sandbox environment.",
      "Real-time analytics and request monitoring.",
      "Flexible subscription plans for every stage of growth.",
    ],
  },
  {
    src: "https://gridflexhome.netlify.app/",
    title: "Gridflex",
    image: "/images/Gridflex-1.png",
    imageAlt: "Gridflex dashboard on desktop",
    description:
      "GridFlex simplifies electricity management with real-time data, smart automation, and an intuitive dashboard for total network control.",
    tagline: "Dashboard that feels like its from the future",
    bulletPoints: [
      "Gridflex includes a CSP (Customer Sale Point) client interface for vending.",
      "It supports multi-user access within an n-tier architecture.",
      "Runs on a SQL Server Database for reliability and scalability.",
    ],
  },
  {
    src: "sbc",
    title: "SBC (Smart Breaker Controller)",
    image: "/images/image-25.png",
    imageAlt: "SBC mobile app interface",
    description:
      "The Smart Breaker Controller (SBC) is a powerful application designed for utility companies to manage electricity distribution with ease and efficiency. It enables administrators to remotely switch breakers on or off at any time, providing real-time communication and control over power delivery across different areas. By replacing manual operations with a seamless digital system, SBC helps improve response times, enhance reliability, and optimize energy distribution.",
    bulletPoints: [
      "Each operation is executed in real time and securely logged for accountability.",
      "Administrators maintain full control and visibility across all connected breakers.",
    ],
  },
  {
    src: "momaspay",
    title: "Momaspay",
    image: "/images/mompay.png",
    imageAlt: "Momaspay mobile app interface",
    description: (
      <>
        MOMASPAY is a mobile payment application designed specifically for
        prepaid STS-certified electricity meters. Available for download on both
        the Google Play Store and Apple App Store, it offers customers a
        convenient platform to recharge electricity units and manage their
        transaction history seamlessly.
        <br />
        <br />
        MEMMCOL integrates with a third-party payment gateway to facilitate
        secure revenue collection and automatic remittance to each client&apos;s
        Estate or Institutional bank account.
      </>
    ),
    bulletPoints: [
      "MEMMCOL is charged a 1.0% transaction fee per payment processed.",
      "The payment gateway provider applies an additional 1.5% fee.",
      "Clients receive net payments directly into their designated bank accounts.",
    ],
  },
  {
    src: "ecmi",
    title: "ECMI",
    image: "/images/ECMI.png",
    imageAlt: "ECMI",
    description: (
      <>
        <span className="text-semibold"> ECMI – </span>Electricity Control
        Management Interface ECMI is an all-in-one enterprise application for
        utilities to manage prepayment and smart meters. It features:,
        <div className="pt-4 space-y-4">
          <div>MDM (Meter Data Management System)</div>
          <div>STS-Compliant Prepaid Tokens Vending System</div>
          <div>AMR Communication Platform</div>
          <div>Payment Management System</div>
          <div>Reporting System</div>
          <div className="font-semibold">Additional Features:</div>
        </div>
      </>
    ),
    bulletPoints: [
      "ECMI includes a CSP (Customer Sale Point) client interface for vending.",
      "It supports multi-user access within an n-tier architecture.",
      "Runs on a SQL Server Database for reliability and scalability.",
    ],
  },
  {
    src: "ems",
    title: "EMS",
    image: "/images/EMS.png",
    imageAlt: "EMS",
    description: "EMS – Electricity Management System – ",
    addedInfo: "Decommissioned",
    bulletPoints: [
      "EMS is designed to address the shortcomings of existing credit billing systems such as AVR and Spectrum.",
      "It is a Windows-based application.",
      "Uses SQL Server as the database back-end.",
    ],
  },
  {
    src: "emac",
    title: "EMAC",
    image: "/images/EMAC.png",
    imageAlt: "EMAC",
    description: "EMAC – Electricity Management Application Console – ",
    addedInfo: "Decommissioned",
    bulletPoints: [
      "Purpose: Designed to actualize statistical metering, enabling analytical comparison between the energy supplied to a substation and the cumulative energy consumed by all consumers connected to it.",
      "Focus Area: Addresses the Low Voltage side of the substation.",
      "Implementation: Achieved with the aid of GPRS MD meters, regardless of the type of energy meters installed for individual consumers (electronic, electromechanical, or prepaid).",
    ],
  },
];

export default function SoftwareSolutionsSection() {
  const router = useRouter();

  return (
    <section className="py-16">
      <SectionHeader
        titleStart="Software"
        titleHighlight="Solutions"
        description="Momas software solutions enable utility companies to Manage meters and customers, manage billing and usage, generate secure electricity tokens, and monitor real-time consumption remotely across their network."
        className="mb-12"
      />

      <div className="flex flex-col gap-8 max-w-5xl mx-auto px-4">
        {solutions.map(({ src, ...solution }, i) => (
          <SoftwareCard
            key={i}
            {...solution}
            onClick={() => router.push(`${src}`)}
          />
        ))}
      </div>
    </section>
  );
}
