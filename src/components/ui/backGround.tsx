import Image from "next/image";

export default function Background() {
  return (
    <Image
      src="/images/momas.png"
      alt="Building"
      fill
      priority
      className="
        object-cover
        object-center
        -z-10
        opacity-10
      "
    />
  );
}