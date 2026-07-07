import { EarthIcon, TargetIcon } from "lucide-react";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Mission Row */}
      <div className="flex flex-col items-center gap-8 px-2 py-20 md:px-0 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* Left: Text */}
        <div className="order-2 max-w-md px-2 text-center md:px-0 lg:order-1 lg:max-w-lg lg:px-4 lg:pl-20 lg:text-left xl:pl-24">
          <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 lg:mx-0">
            <TargetIcon strokeWidth={1} color="#37925E" />
          </div>

          <h2 className="mb-4 text-2xl font-semibold">
            <span className="text-primary">Our</span>{" "}
            <span className="text-gray-900">Mission</span>
          </h2>

          <p className="leading-8 text-gray-600">
            To be the most innovative utility solution provider through the
            deployment of appropriate technologies to maximize benefits for our
            stakeholders.
          </p>
        </div>

        {/* Right: Image */}
        <div className="order-1 h-70 w-full max-w-115 shrink-0 overflow-hidden rounded-2xl lg:order-2">
          <Image
            src="/images/mission.svg"
            alt="Team joining hands"
            width={558}
            height={399}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none relative -my-2 hidden h-32 w-full md:block">
        <Image
          src={"/icons/SectionDivider.svg"}
          alt=""
          width={3000}
          height={100}
        />
      </div>

      <div className="flex flex-col pt-20 items-center gap-8 lg:mt-0 lg:flex-row lg:items-center lg:gap-52">
        {/* Image */}
        <div className="h-70 w-full max-w-115 shrink-0 overflow-hidden rounded-2xl">
          <Image
            src="/images/vision.svg"
            alt="Vision"
            width={558}
            height={399}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-md px-2 text-center md:px-0 lg:max-w-lg lg:px-4 lg:pr-20 lg:text-left xl:pr-24">
          <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 lg:mx-0">
            <EarthIcon strokeWidth={1.5} color="#37925E" size={20} />
          </div>

          <h2 className="mb-4 text-2xl font-semibold">
            <span className="text-primary">Our</span>{" "}
            <span className="text-gray-900">Vision</span>
          </h2>

          <p className="leading-8 text-gray-600">
            To be a global manufacturer of metering and technological solutions
            of first choice that is committed to continuous innovations.
          </p>
        </div>
      </div>
    </section>
  );
}