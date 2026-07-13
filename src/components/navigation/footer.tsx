"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
  withArrow?: boolean;
  className?: string;
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "Meters", href: "/products", external: true },
      { label: "Services", href: "/servicepage", external: true },
      { label: "Utility Software", href: "/software", external: true },
      { label: "Documentation", href: "https://meters-api.netlify.app/", external: true },
      { label: "Enhancement Panel", href: "/enhancementPanel", external: true },
      { label: "About Us", href: "/aboutus", external: true },
    ],
  },
  {
    heading: "Media",
    links: [
      { label: "Blog", href: "/", external: true },
      { label: "News", href: "/mediapage/mediasection", external: true },
      { label: "CSR", href: "/mediapage/csr", external: true },
    ],
  },
  {
    heading: "Policies",
    withArrow: true,
    links: [
      { label: "Refund Policy", href: "/privacyPolicy", external: true },
      { label: "Privacy Policy", href: "/privacyPolicy", external: true },
      { label: "Terms of Use", href: "/termsOfUse", external: true },
    ],
  },
];

const socialIcons = [
  { src: "/icons/ealX.svg", alt: "X" },
  { src: "/icons/whatsapp.svg", alt: "Whatsapp" },
  { src: "/icons/instagram.svg", alt: "Instagram" },
  { src: "/icons/linkedin.svg", alt: "LinkedIn" },
];

const Footer = () => {
  return (
    <div className="bg-darkGreen px-4 py-5 font-extralight text-white sm:px-8 md:px-10">
      <div className="flex flex-col gap-20 md:mt-0 md:gap-10">
        <div className="flex flex-col py-10 items-start justify-between gap-12 md:flex-row md:items-start md:gap-30">
          <div className="flex flex-col gap-2  w-125">
            <div>
              <Image
                src="/icons/footerlogo.svg"
                alt="Logo"
                width={200}
                height={200}
                priority
                placeholder="blur"
                blurDataURL={"/icons/logo.svg"}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 md:gap-x-16 md:pr-10">
            {/* Company & Media */}
            {footerColumns.slice(0, 2).map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <div className="text-xs text-[#66746D] font-normal">
                  {col.heading}
                </div>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    target={link.external ? "_blank" : undefined}
                    className="text-sm text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <div className="text-xs text-[#66746D] font-normal">Contact</div>
              <Link
                target="_blank"
                href="https://memmcol.com"
                className="text-sm text-white"
              >
                gridflex@memmcol.com
              </Link>
              <Link href="tel:+2348123456789" className="text-sm text-white">
                +234 812 345 6789
              </Link>
              <div className="text-sm text-white">
                KM 40 Lagos/Ibadan Exp way, Orimerunmu, Ogun State
              </div>
            </div>

            {/* Policies */}
            {footerColumns.slice(2).map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <div className="text-xs text-[#66746D] font-normal">
                  {col.heading}
                </div>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    className="flex items-center gap-1 text-sm text-white"
                    target={link.external ? "_blank" : undefined}
                    href={link.href}
                  >
                    {link.label}
                    {col.withArrow && (
                      <ArrowUpRight strokeWidth={1} size={16} />
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/60">
            © 2025, Powered by MEMMCOL. All rights reserved.
          </div>
          <div className="flex flex-row gap-4">
            {socialIcons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                placeholder="blur"
                blurDataURL={icon.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
