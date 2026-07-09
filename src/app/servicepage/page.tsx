import SectionHeader from "@/components/headers/sectionHeader";
import ServicesSection from "../(homapage)/serviceSection/serviceSection";
import Image from "next/image";

export default function ServicePage() {
  return (
    <section className="py-10">
      <SectionHeader
        titleStart="Our Company"
        titleHighlight=" Services"
        description="Our reputation rests equally on our creative design approach, as well as our technical expertise and attention to detail to turn your visions into reality. We pride ourselves on delivering a proactive service designed to ensure we meet your needs consistently. We monitor our service performance continuously to make sure customers consistently judge us to be the benchmark within the industry. You are at the center of everything we do and we look forward to helping you."
        className="mb-12"
        reverse
      />

      <div className="px-4">
        <div className="relative h-125">
          <Image
            src="/images/servicepage.png"
            alt="Network distribution"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="py-10">
        <ServicesSection />
      </div>
    </section>
  );
}
