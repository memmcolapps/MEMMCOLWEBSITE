import Image from "next/image";

export default function Ellipsis() {
  return (
    <Image
      src="/images/ellipses.png"
      alt="ARC"
      width={1400}
      height={900}
      className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        z-0
        -translate-x-1/2
      "
    />
  );
}