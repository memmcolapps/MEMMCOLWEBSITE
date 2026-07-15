"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navBar";

const HIDE_NAVBAR_ON = ["/", "/aboutus", "/privacyPolicy", "/termsOfUse", "/limitation-of-liability", "/refundPolicy"];

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (HIDE_NAVBAR_ON.includes(pathname)) {
    return null;
  }

  return <Navbar />;
}
