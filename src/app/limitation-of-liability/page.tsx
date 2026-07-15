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
    heading: "INDEMNIFICATION",
    body: [
      `You hereby indemnify MEMMCOL and undertake to keep MEMMCOL, its staff and affiliates indemnified against any losses, damages, costs, liabilities and expenses (including without limitation reasonable legal fees and expenses) arising out of any breach by you of any provision of these Terms, or arising out of any claim that you have breached any provision of these Terms. You will indemnify and hold MEMMCOL harmless from and against any claim, suit or proceedings brought against MEMMCOL arising from or in connection with violations of intellectual property or other rights of third parties in relation to your use of the Services.`,
    ],
  },
  {
    heading: "BREACH OF THESE TERMS",
    body: "Without prejudice to MEMMCOL’s other rights under these Terms, if you breach these Terms in any way, MEMMCOL may take such action as MEMMCOL deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider requesting that your access to the website be blocked and/or bringing court proceedings against you.",
  },
  {
    heading: "COOKIES",
    body: [
      `Like many other websites, we use cookies to identify you as a user and to customize and improve our Services. A cookie is a small data file that is transferred to your computer or mobile device. It enables us to remember your account log-in information, IP addresses, web traffic, number of times you visit, date and time of visits. Please refer to our Cookies Notice for more information.`,
      `Some browsers may automatically accept cookies, while some can be modified to decline cookies or alert you when a website wants to place a cookie on your computer. If you do choose to disable cookies, it may limit your ability to use our website.`,
    ],
  },
  {
    heading: "GOVERNING LAW",
    body: "These Terms shall be interpreted and governed in accordance with the Laws of the Federal Republic of Nigeria and you submit to the non-exclusive jurisdiction of the Courts located in Nigeria for the resolution of any dispute.",
  },
  {
    heading: "TERMINATION",
    body: [
      `You may terminate your agreement with MEMMCOL by ceasing to use our services. We may suspend or terminate our Services to you at any time, for any reason including without limitation, breach of these Terms, fraud, impersonation, etc.`,
      `Upon termination, your right to use our Services or platform will immediately cease.`,
    ],
  },
  {
    heading: "CHANGES TO THE MEMMCOL TERMS OF USE",
    body: "MEMMCOL reserves the right to change, revise or modify these Terms from time to time by updating this page. The changes will not be retroactive, and the most current version of the Terms which will always be on this page and will continue to govern our relationship with you. We will also endeavor to notify you of any material changes which could be done via email associated with your account or service notification. By continuing to use our Services after the changes become effective, you agree to be bound by the revised Terms.",
  },
  {
    heading: "GENERAL",
    body: "These Terms supersede and extinguish all previous agreements between you and MEMMCOL whether written or oral, relating to its subject matter. In the event that any of these Terms is held to be invalid or unenforceable, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain subsisting and in full effect. MEMMCOL’s failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.",
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
              Limitation of Liability
            </h1>
          </div>
        </div>
      </section>

      <div className="pt-20 text-gray-600 px-4 md:px-24 pb-20">
        <div className="flex flex-col gap-6 items-center justify-center">
          {/* <span className="text-md md:text-xl font-semibold">
            Limitation of Liability
          </span> */}
          <p>
            YOUR USE OF THE MEMMCOL WEBSITE AND SERVICES IS AT YOUR OWN RISK.
            YOU AGREE TO THE LIMITATION OF LIABILITY CLAUSE TO THE MAXIMUM
            EXTENT PERMITTED BY APPLICABLE LAW: MEMMCOL WILL IN NO WAY BE LIABLE
            FOR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, CONSEQUENTIAL,
            SPECIAL OR EXEMPLARY DAMAGES OR ANY DAMAGES INCLUDING DAMAGES
            RESULTING FROM REVENUE LOSS, PROFIT LOSS, USE, DATA, GOODWILL,
            BUSINESS INTERRUPTION OR ANY OTHER INTANGIBLE LOSSES (WHETHER
            MEMMCOL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR NOT)
            ARISING OUT OF MEMMCOL’S WEBSITE OR SERVICES (INCLUDING, WITHOUT
            LIMITATION TO INABILITY TO USE, OR ARISING FROM THE RESULT OF USE OF
            MEMMCOL’S WEBSITE OR SERVICES) WHETHER SUCH DAMAGES ARE BASED ON
            WARRANTY, TORT, CONTRACT, STATUTE OR ANY OTHER LEGAL THEORY.
          </p>
          <p>
            SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF CERTAIN WARRANTIES OR
            LIMITATIONS ON THE SCOPE AND DURATION OF SUCH WARRANTIES, SO THE
            ABOVE DISCLAIMERS MAY NOT APPLY TO YOU IN THEIR ENTIRETIES, BUT WILL
            APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
          </p>
        </div>
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
        <div>
          <div className="py-10">
            <span>
              Complaints
              <br />
              If you have any complaints about us and our Services, you may
              contact us at
            </span>
            <p className="mt-5">info@memmcol.com</p>
            <p className="mt-5">+2349076661264 Contact Us</p>
            <p className="mt-5">
              Email Address: info@memmcol.com
              <br />
              Phone Number: +2349076661264
              <br />
              Address: No 4, Bode Thomas street, Surulere, Lagos, Nigeria
            </p>
            <p className="mt-5">Hours of Operation: 8am – 5pm (Mon – Fri)</p>
          </div>

          <div>
            <span>CONTACT</span>
            <p className="mt-5">info@memmcol.com</p>
            <p>
              +2349076661264
              <br />
              Our call lines are available 24/7.
            </p>
            <p className="mt-5">
              © Momas Electricity Meters Manufacturing Company Limited is
              Registered with the Corporate Affairs Commission
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
