import Slideshow from "@/app/(homapage)/factorySection/factory";
import SoftwareCard from "@/app/software/softwareCard";
import SectionHeader from "@/components/headers/sectionHeader";

const solutions = [
  {
    title: "Giving back to the Society",
    imageAlt: "Giving back",
    image: "/images/giving.png",
    description:
      "It gladdens our heart when we make people smile.As a responsible corporate, we align our business growth with social and economic wellbeing of the communities where we operate. Our programs are executed at local level through our employees, thereby directing contributions to areas of greatest impact in the particular regions.We believe that corporate responsibility is part of everyone’s day-to-day work. It is part of our business practices and every business, within every country we work in, is responsible for it. Each business can develop its own initiatives to meet the needs of the local business environment and culture.",
    infoOnly: true,
  },
];

const gallery = [
    {
    src: "/images/csr1.jpeg",
    alt: "Gallery",
    description:
    "MEMMCOL commemorates the donation of a four-classroom school building at Orimerunmu Primary School, reaffirming its long-standing commitment to expanding access to quality education and supporting sustainable community development.",
  },
  {
    src: "/images/giving.png",
    alt: "Gallery",
    description:
      "MEMMCOL supports pupils of Orimerunmu Primary School through an educational outreach initiative, reinforcing its commitment to learning, community development, and investing in the next generation.",
  },
  {
    src: "/images/crowd.png",
    alt: "Gallery",
    description:
      "MEMMCOL representatives join pupils of Orimerunmu Primary School during an educational outreach initiative, distributing learning materials and inspiring young minds through the company's commitment to education, community development, and social impact.",
  },
  {
    src: "/images/machine.png",
    alt: "Gallery",
    description:
      "MEMMCOL promotes health and safety at Orimerunmu Primary School through the installation of a hygiene stand, encouraging proper handwashing and reinforcing healthy practices for pupils and staff.",
  },
  {
    src: "/images/building.png",
    alt: "Gallery",
    description:
      "MEMMCOL reinforces its commitment to community development through the construction of a new school building, providing pupils with a safe, modern, and conducive environment for learning and growth.",
  },
];

export default function CSRPage() {
  return (
    <div className=" pt-16">
      <SectionHeader
        titleStart="Giving back "
        titleHighlight="to the Society"
        className="mb-12"
      />

      <div className="mx-auto max-w-5xl px-6 pb-10">
        {solutions.map((solution, i) => (
          <SoftwareCard key={i} {...solution} />
        ))}
      </div>

      <div>
        <Slideshow title="Gallery" images={gallery} />
      </div>
    </div>
  );
}
