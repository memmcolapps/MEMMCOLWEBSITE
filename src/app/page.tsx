import Button from "@/components/buttons/button";
import Background from "@/components/ui/backGround";
import Image from "next/image";
import ImageMarquee from "./(homapage)/heroSection/imageMarquee";
import ImageSection from "./(homapage)/currentImages/imageSection";
import ServicesSection from "./(homapage)/serviceSection/serviceSection";
import MissionVision from "./(homapage)/mission/missionSection";
import GameSection from "./(homapage)/gameChanger/gameSection";
import Testimonials from "./(homapage)/testimonials/testimonialSection";
import Slideshow from "./(homapage)/factorySection/factory";
import Navbar from "@/components/navigation/navBar";

const factoryImages = [
  {
    src: "/images/factory1.png",
    alt: "Team reviewing circuit board in meeting room",
    description:
      "Khalil Halilu, EVC/CEO of NASENI, examines a smart metering component during a technical demonstration led by MEMMCOL Chairman, Engr. Kola Balogun, highlighting the company's commitment to innovation and local manufacturing.",
  },
  {
    src: "/images/factory2.png",
    alt: "Engineer showing component to executive",
    description:
      "MEMMCOL officials conduct a technical demonstration of locally manufactured metering components during a facility visit, showcasing the company's engineering capabilities, quality assurance processes, and commitment to advancing Nigeria's smart metering industry.",
  },
  {
    src: "/images/factory3.png",
    alt: "Factory floor team discussion",
    description:
      "Khalil Halilu, EVC/CEO of NASENI, examines a smart metering component during a technical demonstration led by MEMMCOL Chairman, Engr. Kola Balogun, highlighting the company's commitment to innovation and local manufacturing.",
  },
  {
    src: "/images/factory4.png",
    alt: "Close-up of engineer demonstrating component",
    description:
      "A MEMMCOL team member presents locally manufactured metering components during a facility visit, demonstrating the precision, craftsmanship, and innovation behind the company's smart metering solutions.",
  },

  {
    src: "/images/factory5.jpg",
    alt: "representatives from Fidelity Bank",
    description:
      "MEMMCOL welcomed representatives from Fidelity Bank for a courtesy visit, fostering meaningful discussions on collaboration, innovation, and opportunities to strengthen partnerships in Nigeria's energy and smart metering sect",
  },
  {
    src: "/images/factory6.jpg",
    alt: "representatives from Fidelity Bank",
    description:
      "MEMMCOL welcomed representatives from Fidelity Bank for a courtesy visit, fostering meaningful discussions on collaboration, innovation, and opportunities to strengthen partnerships in Nigeria's energy and smart metering sect",
  },
  {
    src: "/images/factory7.jpg",
    alt: "Hosted representatives of the Zamfara State",
    description:
      "Hosted representatives of the Zamfara State Social Security Trust Fund (ZSSTF) for a demonstration of MEMMCOL's smart metering and digital utility management solutions, showcasing technologies that support efficient, transparent, and data-driven service delivery.",
  },

  {
    src: "/images/factory8.jpeg",
    alt: "Hosted Spectech Synergy Limited for a facility tour and product showcase",
    description:
      "Hosted Spectech Synergy Limited for a facility tour and product showcase, highlighting MEMMCOL's smart metering technologies, manufacturing capabilities, and commitment to local innovation.",
  },

  {
    src: "/images/factory9.jpeg",
    alt: "Hosted Spectech Synergy Limited",
    description:
    "Hosted Spectech Synergy Limited in the Software Department for a live demonstration of MEMMCOL's smart metering software solutions, showcasing the digital platforms that power meter management, monitoring, and utility operations.",
  },

  {
    src: "/images/factory10.jpeg",
    alt: "Hosted members of the Nigerian Society of Engineers (NSE)",
    description:
    "Hosted members of the Nigerian Society of Engineers (NSE) for a technical tour and demonstration of MEMMCOL's smart metering technologies, highlighting local manufacturing excellence and engineering innovation.",
  },

  {
    src: "/images/factory11.jpeg",
    alt: "Hosted Rear Admiral A.A. Mustapha in the Software Department",
    description:
    "Hosted Rear Admiral A.A. Mustapha in the Software Department for a live demonstration of MEMMCOL's smart metering software, showcasing advanced monitoring, remote meter management, and digital utility solutions.",
  },

  {
    src: "/images/factory12.jpeg",
    alt: "A hands-on demonstration of MEMMCOL's hardware innovations",
    description:
    "A hands-on demonstration of MEMMCOL's hardware innovations, showcasing PCB design, electronic components, and smart meter hardware architecture, with discussions on engineering capabilities and local technology development.",
  },

  {
    src: "/images/factory13.jpeg",
    alt: "Close-up of engineer demonstrating component",
    description:
      "MEMMCOL welcomed a delegation from the Manufacturers Association of Nigeria (MAN) for a factory visit, fostering discussions on innovation, local manufacturing, and the advancement of Nigeria's industrial sector.",
  },

  {
    src: "/images/factory14.jpeg",
    alt: "representatives from the Federal Ministry of Solid Minerals Development",
    description:
      "MEMMCOL welcomed representatives from the Federal Ministry of Solid Minerals Development for a strategic engagement, fostering discussions on collaboration, innovation, and opportunities to strengthen Nigeria's industrial and manufacturing ecosystem.",
  },

  {
    src: "/images/factory15.jpeg",
    alt: "Major General Shaffaru received a live demonstration of the Central Intelligence Tracker",
    description:
    "Major General Shaffaru received a live demonstration of the Central Intelligence Tracker, showcasing its real-time monitoring, mapping, and incident management capabilities for enhanced situational awareness and rapid decision-making.",
  },

  {
    src: "/images/factory16.jpeg",
    alt: "Major General Shaffaru visited the Hardware Department",
    description:
    "Major General Shaffaru visited the Hardware Department, where he was shown MEMMCOL's smart meter hardware components, PCB assemblies, and embedded electronics. The session highlighted the design, functionality, and innovation behind the company's metering hardware solutions.",
  },

  // {
  //   src: "/images/factory17.jpeg",
  //   alt: "EPAIL hosted representatives of the Nigeria Union of Journalists (NUJ)",
  //   description:
  //     "As part of its commitment to promoting transparency and showcasing indigenous innovation, EPAIL hosted representatives of the Nigeria Union of Journalists (NUJ) for an immersive tour of its manufacturing and technology facilities. The visit provided firsthand insight into the company's production processes, research capabilities, and locally engineered solutions.",
  // },

  // {
  //   src: "/images/factory18.jpeg",
  //   alt: "During the ZSSTF factory visit",
  //   description:
  //   "During the ZSSTF factory visit, the delegation toured MOMAS/EPAIL protective equipment production facility, where they examined locally manufactured ballistic helmets, strike face plates, and body armour components. The session highlighted the company's quality standards, manufacturing capabilities, and commitment to producing world-class protective solutions for security and defence applications.",
  // },

  {
    src: "/images/factory19.jpeg",
    alt: "The ZSSTF delegation concluded its visit with a group photograph",
    description:
      "The ZSSTF delegation concluded its visit with a group photograph, commemorating a successful tour of MOMAS/EPAIL manufacturing facilities. The visit reinforced the shared commitment to strengthening local defence manufacturing, fostering strategic partnerships, and advancing indigenous security solutions in Nigeria.",
  },

  {
    src: "/images/factory20.jpeg",
    alt: "the Zenith Bank factory visit",
    description:
      "During the Zenith Bank factory visit, the delegation toured MOMAS/EPAIL electronics production facility, where they were introduced to the company's locally developed electronic systems and manufacturing processes. The session showcased the design and assembly of key electronic components, highlighting MOMAS/EPAIL innovation, technical expertise, and commitment to advancing indigenous technology solutions in Nigeria.",
  },

  {
    src: "/images/factory21.jpeg",
    alt: "During the Women President factory visit",
    description:
      "During the Women President factory visit, the delegation toured MOMAS/EPAIL electronics production facility, gaining insight into the company's PCB manufacturing processes and indigenous technology capabilities.",
  },
];

export default function HomePage() {
  return (
    <main>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Background />
        </div>
        <Navbar />

        {/* <div className="relative z-20"> */}
        <section className="py-12 md:py-24 px-4 md:px-6">
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 md:mb-8 flex items-center gap-2 rounded-full border border-gray-100 bg-white/60 px-4 md:px-5 py-2 shadow-sm shadow-primary">
              <Image
                src="/icons/star.svg"
                alt="Logo"
                width={20}
                height={10}
                priority
              />
              <p className="text-xs md:text-sm font-medium text-gray-700">
                Smart Energy Today. Sustainable Future Tomorrow.
              </p>
            </div>

            <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
              Delivering world-class
              <br />
              metering, technology, and
              <br />
              innovation
            </h1>

            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg leading-relaxed text-gray-500 px-2">
              Momas is known for its innovation, research and development
              capabilities.
            </p>

            <div className="mt-8 md:mt-12 pb-4">
              <Button text={"Connect with Us"} />
            </div>
          </div>

          <div className="mt-10 md:mt-16 w-full">
            <ImageMarquee />
          </div>

          <div className="mt-10 md:mt-16 pb-10 md:pb-16 text-center text-gray-500 px-4 sm:px-12 md:px-32 lg:px-44">
            We combine creative design, technical expertise, and attention to
            detail to turn your vision into reality. With proactive service and
            continuous performance monitoring, we strive to set the industry
            benchmark, always keeping you at the center of everything we do.
          </div>
        </section>
      </div>
      <ImageSection />
      <div className="px-4 md:px-12 lg:px-20 py-16 md:py-24">
        <ServicesSection />
      </div>
      <MissionVision />

      <div className="px-4 md:px-12 lg:px-20 py-16 md:py-24">
        <GameSection />
        <Testimonials />
      </div>

      <Slideshow title="Factory Visitations" images={factoryImages} />
    </main>
  );
}
