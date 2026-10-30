"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  light?: boolean;
}

type NavItem =
  | { kind: "link"; name: string; route: string }
  | { kind: "menu"; name: string; submenu: { name: string; route: string }[] };

const Navbar = ({ light = false }: NavbarProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks: NavItem[] = [
    { kind: "link", name: "Home", route: "/" },
    {
      kind: "menu",
      name: "Products",
      submenu: [
        { name: "Meters", route: "/products" },
        { name: "Software", route: "/software" },
        { name: "Electrical Materials", route: "/electric" },
        { name: "Enhancement Panel", route: "/enhancementPanel" },
      ],
    },
    { kind: "link", name: "Services", route: "/servicepage" },
    {
      kind: "menu",
      name: "Media",
      submenu: [
        { name: "News", route: "/mediapage/mediasection" },
        { name: "CSR", route: "/mediapage/csr" },
      ],
    },
    { kind: "link", name: "Contact us", route: "/contactus" },
    { kind: "link", name: "About us", route: "/aboutus" },
  ];

  const isRouteActive = (route: string) => {
    if (route === "/") return pathname === "/";
    return pathname === route || pathname.startsWith(route + "/");
  };

  const isSubmenuActive = (submenu: { route: string }[]) =>
    submenu.some((sub) => isRouteActive(sub.route));

  const useLight = light && !scrolled;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        navbarRef.current &&
        !navbarRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }

      if (
        openDropdown !== null &&
        navbarRef.current &&
        !navbarRef.current.contains(target)
      ) {
        setOpenDropdown(null);
      }
    };

    if (mobileMenuOpen || openDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, openDropdown]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed w-full top-0 z-50 px-4 md:px-14 py-8 flex flex-row justify-between items-center transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white md:bg-transparent"
      }`}
    >
      <Link
        href="/"
        aria-label="MEMMCOL home"
        className="font-bold text-lg w-30 sm:w-20 md:w-36"
      >
        <Image
          src="/icons/nav.svg"
          alt="MEMMCOL logo"
          width={40}
          height={40}
          priority
          className="w-full h-auto"
        />
      </Link>

      {/* Web Navbar */}
      <ul className="hidden sm:flex gap-6 items-center">
        {navLinks.map((link, idx) =>
          link.kind === "menu" ? (
            <li key={idx} className="relative p-2 cursor-pointer">
              <button
                type="button"
                aria-expanded={openDropdown === idx}
                onClick={() =>
                  setOpenDropdown((prev) => (prev === idx ? null : idx))
                }
                className={`flex text-sm items-center gap-1 hover:text-primary ${
                  isSubmenuActive(link.submenu)
                    ? "text-primary font-medium"
                    : useLight
                      ? "text-white"
                      : "text-black"
                }`}
              >
                {link.name}
                {openDropdown === idx ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              <ul className={`absolute left-0 w-[200px] bg-white shadow-lg rounded-lg py-2 z-20 ${openDropdown === idx ? "" : "hidden"}`}>
                  {link.submenu.map((sub, i) => (
                    <li key={i}>
                      <Link
                      href={sub.route}
                      className={`px-4 py-2 hover:text-gray-500 text-sm block w-full ${
                        isRouteActive(sub.route)
                          ? "text-primary font-medium"
                          : "text-gray-900"
                      }`}
                      >
                      {sub.name}
                      </Link>
                      {i !== link.submenu.length - 1 && (
                        <hr className="w-full mt-2 border-gray-100" />
                      )}
                    </li>
                  ))}
              </ul>
            </li>
          ) : (
            <li key={idx}>
              <Link
              href={link.route}
              className={`block text-sm p-2 hover:text-primary ${
                isRouteActive(link.route)
                  ? "text-primary font-medium"
                  : useLight
                    ? "text-white"
                    : "text-black"
              }`}
              >
              {link.name}
              </Link>
            </li>
          ),
        )}
      </ul>

      <div className="hidden sm:block">
        <Link href="/contactus" className="flex h-10 items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-sm text-white transition hover:opacity-90">
          Connect with us
        </Link>
      </div>

      {/* Hamburger */}
      <div className="sm:hidden flex items-center ">
        <button type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((prev) => !prev)}>
          {mobileMenuOpen ? (
            <X color={useLight ? "white" : "black"} size={16} />
          ) : (
            <Menu color={useLight ? "white" : "black"} size={16} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full left-0 w-full bg-white text-gray-800 shadow-lg z-30 sm:hidden"
        >
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link, idx) =>
              link.kind === "menu" ? (
                <li key={idx} className="flex flex-col">
                  <button
                    type="button"
                    aria-expanded={openDropdown === idx}
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === idx ? null : idx))
                    }
                    className={`flex justify-between items-center cursor-pointer px-2 py-2 ${
                      isSubmenuActive(link.submenu)
                        ? "text-primary font-medium"
                        : ""
                    }`}
                  >
                    {link.name}
                    {openDropdown === idx ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  <hr className="w-full mt-2 border-gray-100" />
                  <ul className={`flex flex-col rounded-md mt-1 ${openDropdown === idx ? "" : "hidden"}`}>
                      {link.submenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                          href={sub.route}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            isRouteActive(sub.route)
                              ? "text-primary font-medium"
                              : ""
                          }`}
                          >
                          {sub.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ) : (
                <div key={idx}>
                  <li>
                    <Link
                    href={link.route}
                    className={`block px-2 py-2 hover:bg-gray-100 rounded-md ${
                      isRouteActive(link.route)
                        ? "text-primary font-medium"
                        : ""
                    }`}
                    >
                    {link.name}
                    </Link>
                  </li>
                  <hr className="w-full mt-2 border-gray-100" />
                </div>
              ),
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
