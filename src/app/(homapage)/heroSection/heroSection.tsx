import Image from "next/image";
import Button from "@/components/buttons/button";
import Link from "next/link";

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(55,146,94,0.13) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 35%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 35%, black, transparent)",
        }}
      />
      <div
        className="absolute right-[-5%] top-[10%] h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(55,146,94,0.14), transparent 65%)",
        }}
      />
      <div
        className="absolute left-[-8%] top-[45%] h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(55,146,94,0.09), transparent 65%)",
        }}
      />
    </div>
  );
}

function EnergySparks() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 640"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        className="energy-flow"
        d="M-40 480 C 220 380 380 560 640 440 C 840 350 1000 470 1240 360"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeDasharray="8 14"
        opacity="0.16"
      />
      <path
        className="energy-flow"
        style={{ animationDelay: "-3s" }}
        d="M-40 140 C 260 240 520 60 780 170 C 960 245 1080 150 1240 210"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeDasharray="8 14"
        opacity="0.12"
      />

      <g stroke="var(--primary)" strokeLinejoin="round" strokeLinecap="round">
        <g className="spark-flicker">
          <path
            d="M150 60 L178 128 L156 134 L196 226 L172 232 L216 330"
            strokeWidth="2.5"
          />
          <path d="M178 128 L206 168 L190 174 L214 216" strokeWidth="1.5" opacity="0.6" />
        </g>

        <g className="spark-flicker" style={{ animationDelay: "1.6s" }}>
          <path
            d="M1075 90 L1046 160 L1068 166 L1024 260 L1048 266 L1000 368"
            strokeWidth="2.5"
          />
          <path d="M1046 160 L1016 202 L1032 208 L1006 252" strokeWidth="1.5" opacity="0.6" />
        </g>

        <g className="spark-flicker" style={{ animationDelay: "2.9s" }}>
          <path
            d="M330 330 L352 384 L334 389 L364 460 L346 465 L378 540"
            strokeWidth="2"
          />
        </g>

        <g className="spark-flicker" style={{ animationDelay: "3.8s" }}>
          <path
            d="M660 70 L678 114 L663 118 L688 176"
            strokeWidth="2"
          />
        </g>

        <g className="spark-flicker" style={{ animationDelay: "0.8s" }}>
          <path
            d="M1150 380 L1132 428 L1147 432 L1120 496"
            strokeWidth="2"
          />
        </g>
      </g>

      <g fill="var(--primary)">
        <path
          className="spark-flicker"
          style={{ animationDelay: "0.5s" }}
          d="M300 150 l4 12 12 4 -12 4 -4 12 -4 -12 -12 -4 12 -4 Z"
        />
        <path
          className="spark-flicker"
          style={{ animationDelay: "1.9s" }}
          d="M880 120 l4 12 12 4 -12 4 -4 12 -4 -12 -12 -4 12 -4 Z"
        />
        <path
          className="spark-flicker"
          style={{ animationDelay: "2.6s" }}
          d="M1120 300 l3 10 10 3 -10 3 -3 10 -3 -10 -10 -3 10 -3 Z"
        />
        <path
          className="spark-flicker"
          style={{ animationDelay: "3.4s" }}
          d="M90 280 l3 10 10 3 -10 3 -3 10 -3 -10 -10 -3 10 -3 Z"
        />
        <path
          className="spark-flicker"
          style={{ animationDelay: "4.4s" }}
          d="M540 420 l3 10 10 3 -10 3 -3 10 -3 -10 -10 -3 10 -3 Z"
        />
      </g>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <div className="relative">
      <HeroBackdrop />
      <EnergySparks />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:items-end lg:gap-x-8">
        <div className="flex flex-col items-center pt-12 text-center md:pt-20 lg:items-start lg:pb-20 lg:text-left">
          <div className="mb-6 flex max-w-full items-center gap-2 rounded-full border border-gray-100 bg-white/60 px-4 py-2 shadow-sm shadow-primary md:mb-8 md:px-5">
            <Image
              src="/icons/star.svg"
              alt=""
              width={20}
              height={10}
              priority
              className="shrink-0"
            />
            <p className="text-center text-xs font-medium text-gray-700 md:text-sm">
              Smart Energy Today. Sustainable Future Tomorrow.
            </p>
          </div>

          <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            World-class metering, technology and{" "}
            <span className="text-primary">innovation</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-500 md:mt-7 md:text-lg">
            From smart meters to the MomasPay app your customers top up with —
            designed, built and supported locally.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 lg:justify-start">
            <Button text="Connect with Us" />
            <Link
              href="/products"
              className="rounded-lg border border-primary px-6 py-3 text-primary transition hover:bg-primary hover:text-white"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-none">
          <div className="absolute bottom-0 left-1/2 h-[190px] w-[380px] -translate-x-1/2 rounded-t-full bg-primary/15 md:h-[230px] md:w-[460px]" />
          <div className="absolute bottom-0 left-1/2 h-[230px] w-[460px] -translate-x-1/2 rounded-t-full border border-primary/25 md:h-[280px] md:w-[560px]" />

          <Image
            src="/images/hero-girl.png"
            alt="Smiling customer holding a phone with the MomasPay top-up screen"
            width={440}
            height={545}
            priority
            className="relative z-10 h-auto w-[300px] object-contain object-bottom md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
