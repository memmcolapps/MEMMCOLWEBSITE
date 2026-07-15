import Image from "next/image";
import Navbar from "@/components/navigation/navBar";
import BriefList from "../privacyPolicy/briefList";

const PRIVACY_POLICY = [
  {
    title: "ELIGIBILITY FOR REFUND",
    paragraph: "Refunds may be issued under the following circumstances:",
    list: [
      " Defective Equipment: If a meter is found to be faulty or non-functional upon installation and verified by our technical team. • Service Not Rendered: If a paid service (e.g., installation, maintenance) was not provided due to a fault or delay on our part. • Overbilling: In cases of confirmed overpayment or billing errors related to our services.",
    ],
  },
  {
    title: "NON-REFUNDABLE ITEMS",
    paragraph: "Refunds will not be granted for:",
    list: [
      "Tampered or damaged equipment",
      "Services already rendered and accepted",
      "Custom or special-order equipment after delivery, unless defective.",
    ],
  },
  {
    title: "REFUND REQUEST PROCEDURE",
    paragraph: "due to by the misuse. customer.",
    list: [
      <>
        To request a refund,
        <br />
        1. Submit a written request via email to info@memmcol.com within 7 days
        of the incident. 2. Provide proof of payment and any supporting
        documents (e.g., photos, reports). 3. Allow a site inspection if
        required.
        <br />
      </>,
    ],
  },
  {
    title: "PROCESSING TIME",
    paragraph:
      "Approved refunds will be processed within 10–15 business days using the original method of payment or as otherwise agreed.",
  },
  {
    title: "CONTACT",
    paragraph: (
      <div className="space-y-4">
        <p>
          For inquiries or concerns regarding this policy, please contact:
          CustomerSupport:
        </p>
        <p>info@memmcol.com</p>
        <p>
          +2349076661264
          <br />
          No 4, Bode Thomas Street, Surulere, Lagos.
        </p>
      </div>
    ),
  },
];

export default function AboutHero() {
  return (
    <>
      <section className="relative w-full h-50 md:h-90 overflow-hidden">
        <Image
          src="/images/aboutus.png"
          alt="MEMMCOL team"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col h-full">
          <Navbar light />

          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-xl md:text-3xl font-semibold text-white text-center">
              Refund Policy
            </h1>
          </div>
        </div>
      </section>

      <div className="pt-20 text-gray-600 px-4 md:px-24 ">
        <p className=" text-justify mt-10">
          At MOMAS ELECTRICITY METER MANUFACTURING COMPANY LTD (MEMMCOL)customer
          satisfaction is a priority.
        </p>

        <p className=" text-justify mt-5">
          This Refund Policy outlines the terms and conditions under which
          customers may request a refund for products and services related to
          Tokens, metering equipment and installation.
        </p>

        <div className="py-10">
          {PRIVACY_POLICY.map((details, index) => (
            <div key={index}>
              <BriefList
                title={details.title}
                paragraph={details.paragraph}
                list={details.list}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
