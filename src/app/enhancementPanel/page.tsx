import SectionHeader from "@/components/headers/sectionHeader";
import SoftwareCard from "../software/softwareCard";
import Image from "next/image";

const solutions = [
  {
    title: "The Game Changer",
    imageAlt: "Game Changer",
    image: "/images/transformer.png",
    description:
      "This concept was born out of the state of dilapidation of the existing fuse-driven substations across the country.Momas Substation Power Enhancement Panel is designed to meet the standardization, miniaturization and outdoor requirements of small-capacity low-voltage distribution equipments. It integrates distribution metering, protection, GPRS remotely and controls switches on/off, capacitor reactive compensation, complete and full functions (short circuit, overload, phase loss, overvoltage, undervoltage, residual current, over-current, neutral line disconnection of power supply, lightning protection) are integrated in SPEP, to provide a real safeguard for electricity use.",
    infoOnly: true,
  },
  {
    title: "The Value Of The Enhancement To The Community Versus Consumer",
    image: "/images/after.png",
    imageAlt: "Enhancement",
    infoOnly: true,
    reverse: true,
    description: (
      <>
        <div className="pt-4">
          <div>
            1. This would guarantee 24hr Supply because of the Dual Supply
            Option
          </div>
          <div>
            2. It would equally guarantee efficient accountability of supply
            with the Neighborhood because each street is metered, and each
            supply option are equally metered.
          </div>
          <div>
            3. Equipped with automatic reactive compensators to boost supply
          </div>
          <div>
            4. It will allow a quality 220/240 volts which is good for all
            appliances to be the main output of the Substation
          </div>
          <div>
            5. It will equally provide security surveillance to the neighborhood
            and at the same time protecting the substation as well as the
            substation protecting the surveillance.
          </div>
          <div>
            6. Finally, It represents a better look of a substation that can be
            called Nigeria Substation on like what it was before.
          </div>
        </div>
      </>
    ),
  },
];

const futureFeatures = [
  "This would guarantee 24hr Supply because of the Dual Supply Option.",
  "It would equally guarantee efficient accountability of supply with the Neighborhood because each street is metered, and each supply option are equally metered.",
  "Equipped with automatic reactive compensators to boost supply.",
  "It will allow a quality 220/240 volts which is good for all appliances to be the main output of the Substation.",
  "The integrated Battery Energy Storage System (BESS) provides backup power for the EV charging station, ensuring uninterrupted charging even during substation power outages.",
  "Integration with a payment application enables controlled access to the EV charging facility, preventing unauthorized usage.",
  "DC Fast Charging: Delivers high-power charging of about 50–350 kW DC capable of significantly reducing charging time, enabling compatible vehicles to reach 80% battery capacity in approximately 20–30 minutes.",
  "11.5 kW AC Charging: Provides reliable, efficient charging for daily EV use, making it ideal for longer parking durations.",
  "Universal, lightweight, and durable connector with an ergonomic design, secure locking mechanism, and weather-resistant construction for safe, reliable everyday charging.",
  "It will equally provide security surveillance to the neighborhood, vehicles and at the same time protecting the substation as well as the substation protecting the surveillance.",
  "Finally, the design transforms the conventional substation into a modern, aesthetically appealing urban substation that seamlessly integrates with its surrounding environment while supporting advanced energy infrastructure.",
];

export default function EnhancementSection() {
  return (
    <section className="py-16">
      <SectionHeader
        titleStart="Substation Enhancement Projects"
        titleHighlight=" Across the nation"
        description="The Game changer for the power sector to have 24hours of power supply on the existing distribution network!"
        className="mb-12"
        reverse
      />

      <div className="flex flex-col gap-8 max-w-5xl mx-auto px-4">
        {solutions.map((solution, i) => (
          <SoftwareCard key={i} {...solution} />
        ))}
        <div className="rounded-2xl border border-gray-200 p-8 md:p-6 flex-1">
          <h3 className="text-xl font-normal text-gray-900 mb-3">
            The game changer for the power sector to have 24hours of power
            supply on the existing distribution network!
          </h3>
          <div className="relative w-full h-64">
            <Image
              src="/images/transform.png"
              alt="Network distribution"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Future Projection */}
        <div className="rounded-md border border-gray-200 bg-white p-4 md:px-8 md:py-10">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            Future Projection
          </h3>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200">
            <Image
              src="/images/future.png"
              alt="Future Projection"
              fill
              className="object-contain bg-white"
            />
          </div>

          <div className="mt-10">
            <h4 className="text-2xl font-semibold text-center text-gray-900 mb-6">
              Features
            </h4>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-7">
              {futureFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}