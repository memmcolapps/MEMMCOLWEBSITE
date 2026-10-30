import type { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

export interface SoftwareCardProps {
  title: string;
  image: string;
  imageAlt: string;
  description: ReactNode;
  tagline?: string;
  bulletPoints?: string[];
  reverse?: boolean;
  className?: string;
  subtitle?: string;
  infoOnly?: boolean;
  addedInfo?: string;
  href?: string;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function SoftwareCard({
  title,
  image,
  imageAlt,
  description,
  tagline,
  subtitle,
  infoOnly,
  addedInfo,
  bulletPoints,
  reverse = false,
  className = "",
  href,
  onLinkClick,
}: SoftwareCardProps) {
  const cardClassName = `block rounded-2xl border border-gray-200 p-8 md:p-6 ${
    href ? "cursor-pointer" : ""
  } ${className}`;
  const content = (
    <div className={`flex flex-col gap-10 items-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className={`relative w-full ${infoOnly ? "max-w-120" : "max-w-70"} aspect-square shrink-0 mx-auto md:mx-0`}>
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 280px" className="object-contain" />
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {subtitle && <h4 className="text-sm font-medium text-gray-900 mb-3">{subtitle}</h4>}
        <div className="text-sm text-gray-700 leading-relaxed mb-2">
          {description}{" "}
          {addedInfo && <span className="text-red-300 text-sm font-semibold">{addedInfo}</span>}
        </div>
        {tagline && <p className="text-sm text-gray-700 leading-relaxed mb-4">{tagline}</p>}
        <ul className="space-y-2">
          {bulletPoints?.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-700 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={onLinkClick}
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
