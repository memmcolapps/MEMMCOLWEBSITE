import Button from "@/components/buttons/button";
import Navbar from "@/components/navigation/navBar";
import Background from "@/components/ui/backGround";
import Image from "next/image";
import ImageMarquee from "./(homapage)/heroSection/imageMarquee";
import ImageSection from "./(homapage)/currentImages/imageSection";
import ServicesSection from "./(homapage)/serviceSection/serviceSection";
import MissionVision from "./(homapage)/mission/missionSection";
import GameSection from "./(homapage)/gameChanger/gameSection";
import FactoryVisitations from "./(homapage)/factorySection/factory";
import Testimonials from "./(homapage)/testimonials/testimonialSection";
import ReadySection from "./(homapage)/readySection/readySection";

export default function HomePage() {
  return (
    <main>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Background />
        </div>

        {/* <div className="relative z-20"> */}
          <section className="py-12 md:py-24 px-4 md:px-6">
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
              {/* Badge */}
              <div className="mb-6 md:mb-8 flex items-center gap-2 rounded-full border border-gray-100 bg-white/60 px-4 md:px-5 py-2 shadow-sm shadow-primary">
                <Image
                  src="/icons/star.svg"
                  alt="Logo"
                  width={20}
                  height={10}
                  priority
                />
                <p className="text-xs md:text-sm font-medium text-gray-700">
                  Smart Energy Today. Sustainable Future Tomorrow.
                </p>
              </div>

              <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900">
                Delivering world-class
                <br />
                metering, technology, and
                <br />
                innovation
              </h1>

              <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg leading-relaxed text-gray-500 px-2">
                Momas is known for its innovation, research and development
                capabilities. Saving power since 1977.
              </p>

              <div className="mt-8 md:mt-12 pb-4">
                <Button text={"Connect with Us"} />
              </div>
            </div>

            <div className="mt-10 md:mt-16 w-full">
              <ImageMarquee />
            </div>

            <div className="mt-10 md:mt-16 pb-10 md:pb-16 text-center text-gray-500 px-4 sm:px-12 md:px-32 lg:px-44">
              We combine creative design, technical expertise, and attention to
              detail to turn your vision into reality. With proactive service
              and continuous performance monitoring, we strive to set the
              industry benchmark, always keeping you at the center of everything
              we do.
            </div>
          </section>
        </div>
      <ImageSection />
      <ServicesSection />
      <MissionVision />
      <GameSection />
      <Testimonials />
      {/* <FactoryVisitations /> */}
    </main>
  );
}
