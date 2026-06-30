import Image from "next/image";

export default function gameSection() {
  return (
    <div className="flex flex-col px-2 md:px-0 justify-center items-center">
      <div className="pt-32 pb-16 text-center space-y-2">
        <div className="text-primary font-semibold text-2xl">
          The Game Changer
        </div>
        <div className="text-sm font-semibold text-gray-700">
          Momas Substation Enhancement Panel
        </div>
        <div className="pt-4 font-light text-gray-600 text-sm">
          This concept was born out of the state of dilapidation of the existing
          fuse-driven substations across the country.
        </div>
      </div>

      <div className="grid grid-cols-1 text-gray-700 text-sm text-center md:grid-cols-2 gap-20">
        <div className="space-y-4">
          <div className="">BEFORE</div>
          <div className="">
            <Image
              src={"/images/before.svg"}
              alt={""}
              width={500}
              height={100}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>AFTER</div>
          <Image src={"/images/after.svg"} alt={""} width={500} height={100} />
        </div>
      </div>
    </div>
  );
}
