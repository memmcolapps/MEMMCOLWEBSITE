import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Clock3, ShieldCheck, Wifi } from "lucide-react";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { getPageContentBySlug, products } from "../productsData";
import ProductGallery from "./productGallery";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getPageContentBySlug(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.fullName,
    description: product.description,
    path: `/products/${slug}`,
    image: {
      url: product.images[0].src,
      alt: product.images[0].alt,
      width: product.images[0].width,
      height: product.images[0].height,
    },
  });
}

const icons = [Wifi, Clock3, BadgeCheck, ShieldCheck];

function FeatureList({ items }: { items: { title: string; details: string }[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2 md:grid-flow-col" style={{ gridTemplateRows: `repeat(${Math.ceil(items.length / 2)}, minmax(0, auto))` }}>
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <li key={item.title} className="flex min-w-0 items-center gap-4 rounded-lg border border-[#dcece1] p-4 max-sm:px-3 max-sm:py-2">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e2f2e8] text-primary max-sm:size-9" aria-hidden="true">
              <Icon size={22} strokeWidth={1.7} />
            </span>
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.details}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getPageContentBySlug(slug);
  if (!product) notFound();

  const specs = product.technicalSpecs ?? [];
  const middle = Math.ceil(specs.length / 2);
  const productUrl = `${siteUrl}/products/${slug}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.fullName,
    description: product.description,
    url: productUrl,
    image: product.images.map((image) => `${siteUrl}${image.src}`),
    brand: { "@id": `${siteUrl}/#organization` },
    ...(specs.length ? {
      additionalProperty: specs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.key,
        value: spec.value,
      })),
    } : {}),
  };

  return (
    <article className="relative z-10 mx-auto max-w-6xl space-y-8 bg-transparent px-4 pb-8 text-gray-900  sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }}
      />
      <section className="grid items-center gap-7 rounded-xl border border-gray-200 p-5 max-sm:border-0 max-sm:px-0 max-sm:py-0 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        <ProductGallery key={product.slug} images={product.heroImages ?? product.images} />
        <div className="py-2 max-sm:text-center">
          <h1 className="max-w-xl text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-4xl">{product.fullName}</h1>
          <p className="mt-5 max-w-prose text-sm leading-7 text-gray-600 sm:text-base">{product.description}</p>
          {!!product.tags?.length && (
            <ul className="mt-5 flex flex-wrap gap-2 max-sm:justify-center" aria-label="Product attributes">
              {product.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-primary/20 px-3 py-1.5 text-xs font-medium text-primary max-sm:border-0 max-sm:px-1 max-sm:py-0">{tag}</li>
              ))}
            </ul>
          )}
          <Link href={`/contactus?product=${encodeURIComponent(product.fullName)}`} className="mt-7 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Enquire About This Meter
          </Link>
        </div>
      </section>

      {!!product.overview?.length && (
        <section className="rounded-xl border border-gray-200 p-5 max-sm:border-0 max-sm:px-0 max-sm:py-0 sm:p-7" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="mb-7 text-center text-xl font-bold sm:text-2xl">Product Overview</h2>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="max-w-sm text-xl font-semibold leading-snug text-gray-900 max-sm:mx-auto max-sm:text-center sm:text-2xl">{product.overviewHeading}</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
                {product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            {!!product.overviewHighlights?.length && (
              <ul className="space-y-3">
                {product.overviewHighlights.map((item, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <li key={item.title} className="flex items-center gap-4 rounded-lg border border-[#dcece1] p-4 max-sm:px-3 max-sm:py-2">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#e2f2e8] text-primary max-sm:size-9" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.details}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      )}

      {!!product.keyFeatures?.length && (
        <section className="rounded-xl border border-gray-200 p-5 max-sm:border-0 max-sm:px-0 max-sm:py-0 sm:p-7" aria-labelledby="features-heading">
          <h2 id="features-heading" className="mb-7 text-center text-xl font-bold sm:text-2xl">Key Features and Capabilities</h2>
          <FeatureList items={product.keyFeatures} />
        </section>
      )}

      {product.images.length > 1 && (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Product image gallery">
          {product.images.map((image) => (
            <figure key={image.src} className="min-w-0 max-sm:text-center">
              <div className="relative h-48 rounded-lg sm:h-52">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-3" />
              </div>
              <figcaption className="pt-3">
                <h3 className="font-semibold text-gray-900">{image.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{image.details}</p>
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {specs.length > 0 && (
        <section className="rounded-xl border border-gray-200 p-5 max-sm:border-0 max-sm:px-0 max-sm:py-0 sm:p-7" aria-labelledby="specs-heading">
          <h2 id="specs-heading" className="mb-6 text-center text-xl font-bold sm:text-2xl">Technical Specifications</h2>
          <div className="grid gap-0 md:grid-cols-2 md:gap-8">
            {[specs.slice(0, middle), specs.slice(middle)].map((column, index) => (
              <dl key={index} className={`divide-y divide-[#dcece1] border border-[#dcece1] ${index === 1 ? "border-t-0 md:border-t" : ""}`}>
                {column.map((spec) => (
                  <div key={spec.key} className="grid grid-cols-[42%_58%] text-sm">
                    <dt className="min-w-0 border-r border-[#dcece1] px-3 py-3 font-medium text-gray-700">{spec.key}</dt>
                    <dd className="min-w-0 px-3 py-3 text-gray-600">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            ))}
          </div>
        </section>
      )}

      <section className="flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between" aria-labelledby="enquiry-heading">
        <div>
          <h2 id="enquiry-heading" className="text-xl font-bold">Ready to power your next project?</h2>
          <p className="mt-2 text-sm text-gray-600">Purchase the {product.fullName} or request more information from our team.</p>
        </div>
        <Link href={`/contactus?product=${encodeURIComponent(product.fullName)}`} className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          Enquire About This Meter
        </Link>
      </section>
    </article>
  );
}
