import Button from "@/components/buttons/button";
import { useRouter } from "next/navigation";

export default function ReadySection() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 md:px-10 py-12 md:py-20 items-center max-w-5xl mx-auto">
      <div className="space-y-3 md:space-y-4 text-center md:text-left">
        <div className="text-xl md:text-2xl font-semibold text-gray-900">
          Ready to power your next project?
        </div>
        <div className="text-sm text-gray-500 whitespace-nowrap">
          Our team is here to help you design, customize, and deploy the right
          solution.
        </div>
      </div>

      <div className="flex justify-center md:justify-center">
        <Button
          onClick={() => router.push("/contactus")}
          text={"Connect with us"}
        />
      </div>
    </div>
  );
}
