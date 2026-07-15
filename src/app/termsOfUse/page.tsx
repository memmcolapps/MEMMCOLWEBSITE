import Image from "next/image";
import Navbar from "@/components/navigation/navBar";
import Link from "next/link";

type Subsection = {
  heading?: string;
  body: string;
  emphasis?: boolean;
};

type Section = {
  heading: string;
  body?: string | string[];
  emphasis?: boolean;
  subsections?: Subsection[];
};

const sections: Section[] = [
  {
    heading: "INTRODUCTION",
    body: [
      `These Terms and Conditions ("Terms") contained on this webpage is a legal agreement between you, as a prospective customer of MOMAS ELECTRICITY METER MANUFACTURING COMPANY LTD's services (MEMMCOL, "we", "our" or "us") and shall govern your access to and use of MEMMCOL's services which include all pages within the MEMMCOL website, mobile applications and other products and services (collectively referred to as the "Services").`,
      `If you register as a merchant to use MEMMCOL's services, your use of those services will also be governed by a Merchant Service Agreement. In the event of any conflict between these Terms and the Merchant Service Agreement, the terms of the Merchant Service Agreement shall prevail in relation to those merchant services.`,
      `These Terms apply in full force and effect to your use of the Services and by using any of the Services, you expressly accept all terms and conditions contained herein in full and without limitation or qualification, including our Privacy Notice. You must not use any of the Services, if you have any objection to any of these Terms.`,
    ],
  },
  {
    heading: "WHO WE ARE AND OUR COMPANY INFORMATION",
    body: [
      "We are MOMAS ELECTRICITY METER MANUFACTURING COMPANY LTD; a company registered under the laws of the Federal Republic of Nigeria. Our registered office is at No 4 Bode Thomas street, Surulere, Lagos.",
      "PLEASE READ AND UNDERSTAND THE TERMS OF AGREEMENT CAREFULLY BEFORE AGREEING TO BE BOUND BY ITS TERMS.",
    ],
  },
  {
    heading: "GOVERNING LANGUAGE",
    body: "The governing language of these terms and all communication between MEMMCOL and you will be English language.",
    subsections: [
      {
        heading: "WHO MAY USE OUR SERVICES?",
        body: "You may use the Services only if you agree to form a binding contract with MEMMCOL and are not a person barred from receiving services under the laws of the applicable jurisdiction. If you are accepting these Terms and using the Services on behalf of a company, business, or organization, you represent and warrant that you are authorized to do so.",
      },
    ],
  },
  {
    heading: "AGE RESTRICTION",
    body: "Our website and Services are directed to people from the ages of 18 and above. You are only permitted to use the Services if you are aged 18 or older. We do not knowingly engage people younger than the age of 18.",
  },
  {
    heading: "INTELLECTUAL PROPERTY",
    body: `Unless otherwise stated, MEMMCOL and/or its licensors own the intellectual property rights and materials on the website subject to the license below. All text, formatting (including without limitation the arrangement of materials on the MEMMCOL website and the graphics, animation, tools, commercials, music, video, articles, sound, copy, trade names, logos and other materials and information on the website are subject to the intellectual property rights of MEMMCOL and its affiliates and their licensors and licensees (collectively the "Content"). We do not grant you any right, license, title or interest to any of our intellectual property rights which you may or may not have access to. These Content may not be copied, reverse engineered, decompiled, disassembled, modified or reposted to other websites. Nothing on the MEMMCOL website should be construed as granting by implication or otherwise, any license or right to use any trademark displayed on the MEMMCOL website without the written permission of MEMMCOL or such third party that may own the trademark. You agree to take such actions including the provision of any legal or official document or other documents that may be needed to further affirm our intellectual property rights.`,
  },
  {
    heading: "LICENSE TO USE OUR WEBSITE",
    body: "We grant you a non-assignable, non-exclusive and revocable license to use the software provided as part of our Services in the manner permitted by these Terms. This license grant includes all updates, upgrades, new versions and replacement software for your use in connection with our Services.",
    subsections: [
      {
        body: "The Services are protected by copyright, trademark, and other laws of Nigeria and other countries. Nothing in these Terms gives you a right to use the MEMMCOL name or any of MEMMCOL's trademarks, logos, domain names, and other distinctive brand features. All right, title and interest in and to the Services are and will remain the exclusive property of MEMMCOL and its licensors.",
      },
      {
        body: "If you do not comply with all the provisions, then you will be liable for all resulting damages suffered by you, MEMMCOL and all third parties. Unless otherwise provided by applicable law, you agree not to alter, re-design, reproduce, adapt, display, distribute, translate, disassemble, reverse engineer, or otherwise attempt to create any source code that is derived from the software.",
      },
      {
        body: "Any feedback, comments, or suggestions you may provide to us and our Services is entirely voluntary and we will be free to use such feedback, comments or suggestions as we see fit without any obligation to you.",
      },
    ],
  },
  {
    heading: "INFORMATION SECURITY AND WARRANTY DISCLAIMER",
    body: "MEMMCOL WILL USE ITS BEST EFFORTS TO ENSURE THAT THE WEBSITE IS AVAILABLE AT ALL TIMES AND BUG FREE. HOWEVER, IT IS USED AT YOUR OWN RISK.",
    emphasis: true,
    subsections: [
      {
        emphasis: true,
        body: 'WE PROVIDE ALL MATERIALS "AS IS" WITH NO WARRANTY, EXPRESS OR IMPLIED, OF ANY KIND. WE EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS, INCLUDING ANY IMPLIED WARRANTY OR CONDITION OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY, SECURITY, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, MEMMCOL MAKES NO WARRANTY THAT OUR WEBSITE AND SERVICES WILL MEET YOUR REQUIREMENTS OR THAT OUR WEBSITE WILL REMAIN FREE FROM ANY INTERRUPTION, BUGS, INACCURACIES, AND ERROR.',
      },
      {
        emphasis: true,
        body: "YOUR USE OF OUR SERVICES IS AT YOUR OWN RISK AND YOU ALONE WILL BE RESPONSIBLE FOR ANY DAMAGE THAT RESULTS IN LOSS OF DATA OR DAMAGE TO YOUR COMPUTER SYSTEM. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN OBTAINED BY YOU FROM OUR WEBSITE OR OUR SERVICES WILL CREATE ANY WARRANTY OR CONDITION NOT EXPRESSLY STATED.",
      },
      {
        emphasis: true,
        body: "TO USE OUR SERVICES, YOU ARE REQUIRED TO ENABLE 2 FACTOR AUTHENTICATION (2FA) AS AN EXTRA LAYER OF PROTECTION TO GUARANTEE THE SECURITY OF YOUR ACCOUNT. MEMMCOL SHALL NOT BEAR ANY LIABILITY FOR ANY LOSS OR RISK SUFFERED, WHERE YOU DO NOT ENABLE 2FA.",
      },
      {
        body: "You are responsible for configuring your information technology, computer programmes and platform in order to access our Services. Please ensure you use your virus protection software or application as we cannot guarantee that our Services will be free from viruses or bugs.",
      },
      {
        body: "You must not attempt to gain unauthorized access to our Services, computers or databases. You must not misuse our Services by introducing trojans, viruses or other materials which are malicious or technologically harmful.",
      },
    ],
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
              Terms and Conditions
            </h1>
          </div>
        </div>
      </section>

      <div className="pt-20 text-gray-600 px-4 md:px-24 pb-20">
        {sections.map((section, i) => {
          const bodies = Array.isArray(section.body)
            ? section.body
            : section.body
              ? [section.body]
              : [];

          return (
            <div key={section.heading ?? i} className="mt-8 space-y-4">
              {section.heading && <span>{section.heading}</span>}

              {bodies.map((text, j) => (
                <p
                  key={j}
                  className={`mt-8 text-justify ${
                    section.emphasis ? "font-semibold" : ""
                  }`}
                >
                  {text}
                </p>
              ))}

              {(section.subsections ?? []).map((sub, j) => (
                <div key={sub.heading ?? j}>
                  {sub.heading && (
                    <div className="font-medium">{sub.heading}</div>
                  )}
                  <div
                    className={sub.emphasis ? "font-semibold" : "text-justify"}
                  >
                    {sub.body}
                  </div>
                </div>
              ))}
            </div>
          );
        })}

        <div className="mt-8 text-justify">
          <Link
            href={"/limitation-of-liability"}
            className="text-blue-400 underline"
          >
            Limitation of Liability
          </Link>
        </div>
      </div>
    </>
  );
}
