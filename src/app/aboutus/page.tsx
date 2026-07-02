import Image from "next/image";
import Navbar from "@/components/navigation/navBar";
import SectionHeader from "@/components/headers/sectionHeader";
import WhoAreWe from "./whoAreWe";
import OurJourney from "./ourJourney";
import ManagementTeam from "./managementTeam";

export default function AboutHero() {
  return (
    <>
      <section className="relative w-full h-125 md:h-110 overflow-hidden">
        <Image
          src="/images/aboutus.svg"
          alt="MEMMCOL team"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col h-full">
          <Navbar light />

          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-xl md:text-3xl font-semibold text-white text-center">
              About Us - MEMMCOL
            </h1>
          </div>
        </div>
      </section>

      <div className="pt-20 text-black px-4 md:px-24 ">
        <SectionHeader
          reverse
          titleStart={"Engineering Solutions"}
          titleHighlight={"for a Smarter Future"}
        />

        <p className=" text-justify mt-10">
          Founded in 1995, MOMAS began as a computer maintenance, training, and
          engineering company, and has since evolved into a leading provider of
          metering and information technology solutions. With proven expertise
          in computer engineering and systems integration, MOMAS was recognized
          in 2002 as the Best Technology-Driven Engineering Firm in West Africa.
          <br />
          With a strong record of successful turnkey projects, MOMAS has
          established itself as a premier service provider, renowned for
          innovation, research, and development — all powered by a highly
          skilled workforce. Its commitment to advancement led to the creation
          of MOMAS Electricity Meters Manufacturing Company Limited (MEMMCOL),
          solidifying its position as an industry leader and trusted partner in
          shaping Nigeria’s energy future.
        </p>
      </div>

      <div>
        <WhoAreWe />
        <OurJourney />
        <ManagementTeam />
      </div>
    </>
  );
}
