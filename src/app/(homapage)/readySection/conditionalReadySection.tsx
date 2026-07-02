"use client";

import { usePathname } from "next/navigation";
import ReadySection from "./readySection";

const HIDE_READY_SECTION_ON = ["/contactus"];

export default function ConditionalReadySection() {
  const pathname = usePathname();

  if (HIDE_READY_SECTION_ON.includes(pathname)) {
    return null;
  }

  return <ReadySection />;
}