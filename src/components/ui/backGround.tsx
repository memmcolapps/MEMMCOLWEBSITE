import Image from "next/image";

export default function Background() {
  return (
    <Image
      src="/images/background.jpeg"
      alt="Building"
      fill
      priority
      className="
        object-cover
        object-center
        -z-10
      "
    />
  );
}