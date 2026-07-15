import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Engr. Kola Balogun FNSE, MNSE",
    role: "Executive Chairman, Momas Group",
    image: "/images/ceo.png",
  },
  {
    name: "Hammed Abiodun S.",
    role: "Managing Director, Momas Group",
    image: "/images/MD.png",
  },
  {
    name: "Olugbenga Ayo-Omodara",
    role: "Chief Commercial Officer, Momas Group",
    image: "/images/Person.png",
  },
];

export default function ManagementTeam() {
  return (
    <section className="px-4 md:px-24 py-20">
      <h2 className="text-2xl font-normal text-gray-900">
        Management <span className="text-green-700">Team</span>
      </h2>
      <p className="text-gray-600 mt-2 mb-10">
        Meet the leaders behind our strategy, innovation, and success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div
            key={i}
            className={`bg-gray-50 p-6 rounded-lg overflow-hidden ${
              i % 3 === 1 ? "md:mt-4" : ""
            }`}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-2 text-center">
              <p className="text-green-700 font-medium">{member.name}</p>
              <p className="text-gray-600 text-sm mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
