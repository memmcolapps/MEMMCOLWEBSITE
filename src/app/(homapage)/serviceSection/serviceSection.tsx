import ServiceCard from "./serviceCard";

const services = [
  {
    icon: "Settings",
    title: "Meter Manufacturing & Repair",
    description:
      "MEMMCOL goes beyond meter manufacturing, with experts skilled in detecting, troubleshooting, and resolving both hardware and software issues.",
  },
  {
    icon: "Wrench",
    title: "Meter Installation",
    description:
      "MEMMCOL goes beyond meter manufacturing, with experts skilled in detecting, troubleshooting, and resolving both hardware and software issues.",
  },
  {
    icon: "Zap",
    title: "Energy Management",
    description:
      "To address power loss from poor substation connections, Momas developed solutions to measure consumption, optimize load, and remotely control.",
  },
  {
    icon: "Headphones",
    title: "24/7 Customer Service",
    description:
      "The MEMMCOL Customer Care Centre (CCC) offers a dedicated single point of contact, providing prompt assistance and building strong, lasting relationships with customers.",
  },
  {
    icon: "Briefcase",
    title: "Consultancy Services",
    description:
      "We provide consultancy from research to execution for utilities and institutions, offering guidance and tailored software solutions designed to meet specific user needs.",
  },
  {
    icon: "Search",
    title: "Research & Development",
    description:
      "Momas has grown through strong technical expertise and a dedicated R&D team, creating innovative, efficient, and sustainable products that meet user needs globally.",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-2">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            We make energy access simple, smart, and reliable for homes and businesses.
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