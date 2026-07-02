import SoftwareCard from "@/app/software/softwareCard";
import SectionHeader from "@/components/headers/sectionHeader";

const solutions = [
  {
    title: "Giving back to the Society.",
    imageAlt: "Giving back",
    image: "/images/giving.svg",
    description:
      "It gladdens our heart when we make people smile.As a responsible corporate, we align our business growth with social and economic wellbeing of the communities where we operate. Our programs are executed at local level through our employees, thereby directing contributions to areas of greatest impact in the particular regions.We believe that corporate responsibility is part of everyone’s day-to-day work. It is part of our business practices and every business, within every country we work in, is responsible for it. Each business can develop its own initiatives to meet the needs of the local business environment and culture.",
    infoOnly: true,
  },
];

export default function CSRPage() {
  return (
    <div className=" pt-16">
      <SectionHeader
        titleStart="Giving back "
        titleHighlight="to the Society."
        className="mb-12"
      />

      <div className="mx-auto max-w-5xl px-6 pb-16">
        {solutions.map((solution, i) => (
          <SoftwareCard key={i} {...solution} />
        ))}
      </div>

    </div>
  );
}
