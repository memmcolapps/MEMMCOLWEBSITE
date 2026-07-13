"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "../buttons/button";

interface NavbarProps {
  light?: boolean; 
}

const Navbar = ({ light = false }: NavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", route: "/" },
    {
      name: "Products",
      submenu: [
        { name: "Meters", route: "/products" },
        { name: "Software", route: "/software" },
        { name: "Enhancement Panel", route: "/enhancementPanel" },
      ],
    },
    { name: "Services", route: "/servicepage" },
    {
      name: "Media",
      submenu: [
        { name: "News", route: "/mediapage/mediasection" },
        { name: "CSR", route: "/mediapage/csr" },
      ],
    },
    { name: "Contact us", route: "/contactus" },
    { name: "About us", route: "/aboutus" },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

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

    if (mobileMenuOpen || openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, openDropdown]);

  return (
    <nav
      ref={navbarRef}
      className="px-4 md:px-14 py-8 flex flex-row justify-between items-center relative"
    >
      <div
        className="font-bold text-lg cursor-pointer w-24 sm:w-20 md:w-36"
        onClick={() => router.push("/")}
      >
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          priority
          style={{ width: "600%", height: "auto" }}
        />
      </div>

      {/* Web Navbar */}
      <ul className="hidden sm:flex gap-6 items-center">
        {navLinks.map((link, idx) =>
          link.submenu ? (
            <li key={idx} className="relative p-2 cursor-pointer">
              <div
                onClick={() =>
                  setOpenDropdown((prev) => (prev === idx ? null : idx))
                }
                className={`flex text-sm items-center gap-1 hover:text-primary ${
                  light
                    ? "text-white"
                    : "text-black "
                }`}
              >
                {link.name}
                {openDropdown === idx ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>

              {openDropdown === idx && (
                <ul className="absolute left-0 w-[200px] bg-white shadow-lg rounded-lg py-2 z-20">
                  {link.submenu.map((sub, i) => (
                    <li
                      key={i}
                      onClick={() => router.push(sub.route)}
                      className="px-4 py-2 text-gray-900 hover:text-gray-500 cursor-pointer text-sm block w-full"
                    >
                      {sub.name}
                      {i !== link.submenu.length - 1 && (
                        <hr className="w-full mt-2 border-gray-100" />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li
              key={idx}
              onClick={() => router.push(link.route)}
              className={`cursor-pointer text-sm p-2 hover:text-primary ${
                light
                  ? "text-white "
                  : "text-black "
              }`}
            >
              {link.name}
            </li>
          ),
        )}
      </ul>

      <div className="hidden sm:block">
        <Button
          onClick={() => router.push("/contactus")}
          text={"Connect with us"}
          className="w-full text-sm h-10"
        />
      </div>

      {/* Hamburger */}
      <div className="sm:hidden flex items-center ">
        <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
          {mobileMenuOpen ? (
            <X color={light ? "white" : "black"} size={16} />
          ) : (
            <Menu color={light ? "white" : "black"} size={16} />
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
              link.submenu ? (
                <li key={idx} className="flex flex-col">
                  <div
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === idx ? null : idx))
                    }
                    className="flex justify-between items-center cursor-pointer px-2 py-2"
                  >
                    {link.name}
                    {openDropdown === idx ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </div>
                  <hr className="w-full mt-2 border-gray-100" />
                  {openDropdown === idx && (
                    <ul className="flex flex-col rounded-md mt-1">
                      {link.submenu.map((sub, i) => (
                        <li
                          key={i}
                          onClick={() => router.push(sub.route)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <div key={idx}>
                  <li
                    onClick={() => router.push(link.route)}
                    className="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                  >
                    {link.name}
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