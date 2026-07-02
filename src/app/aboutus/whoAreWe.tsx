import ServiceCard from "../(homapage)/serviceSection/serviceCard";

const services = [
  {
    icon: "Trophy",
    title: "Our Achievements",
    description: (
      <>
        1. We Initiated Prepayment Metering in 1995
        <br />
        2. The pioneer Manufacturer of Nigeria’s Prepaid Meter
        <br />
        3. We are the first to design and develop billing and prepayment
        Metering Applications in Nigeria
        <br />
        4. The Pioneer Manufacturer of Dual-Tariff Meter
        <br />
        5. The Leading innovator to invent presidential Next level look power
        substation Enhancement Panel across all DISCO’s
      </>
    ),
  },
  {
    icon: "Globe",
    title: "Our Corporate Strength",
    description: (
      <>
        1. Sustainable Energy Solutions 1. World Class Research & Development
        <br />
        2. Local Content
        <br />
        3. Original Equipment Manufacturer
        <br />
        4. Large Delivery Capacity
        <br />
        5. Innovation
        <br />
        6. Brand Reputation
        <br />
        7. Large Market Share
        <br />
        8. Training
        <br />
        9. Excellent Customer Service
        <br />
        10. Highly Skilled Workers
      </>
    ),
  },
  {
    icon: "Rocket",
    title: "Our Core Values",
    description: (
      <>
        1. Integrity in every operation and decision.
        <br />
        2. Commitment to sustainability and clean energy.
        <br />
        3. Excellence in product quality and service delivery.
        <br />
        4. Innovation at the heart of everything we do.
        <br />
        5. Reliability in fulfilling customer and partner needs.
        <br />
        6. Accountability in all our engagements.
        <br />
        7. Passion for continuous improvement.
      </>
    ),
  },
];

export default function WhoAreWe() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-green-600  mb-2">
            Who <span className="text-gray-700"> We Are</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            From our achievements to our strengths and values, we are committed
            to powering progress with innovation and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
