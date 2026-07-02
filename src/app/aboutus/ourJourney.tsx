export default function OurJourney() {
  return (
    <section className="px-4 md:px-24 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-green-700 mb-4">
            Our Journey in the last 30 years
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As we embark on the next chapter of our extraordinary journey, we
            invite you to join us in shaping the future of Nigeria&apos;s
            power sector. Together, let&apos;s write a new story of
            innovation, excellence, and unprecedented success.
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/jB47BMLPBmQ"
            title="Momas Celebrates 25 Years of Engineering Excellence"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}