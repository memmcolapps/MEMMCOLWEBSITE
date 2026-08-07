export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Rendered on the contact page and mirrored into FAQPage structured data in
 * `layout.tsx` — keep both driven by this single list so the markup Google
 * reads always matches what visitors see.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I get a prepaid meter from MEMMCOL?",
    answer:
      "Certainly! Our prepaid metering solutions cater to various facilities such as property management firms, real estate developers, markets/malls, factories, hotels, universities, and hostels, all equipped with dedicated transformers. By opting for our prepaid meter service, you gain access to precise and effective energy monitoring, live usage analytics, and full autonomy over your energy consumption.",
  },
  {
    question: "How can I purchase your electricity meters?",
    answer:
      "You can purchase our electricity meters through authorized distributors or directly from our website. Simply browse our product catalog, select the desired meter, and follow the instructions to complete your purchase.",
  },
  {
    question: "Are your meters certified and compliant with industry standards?",
    answer:
      "Yes, all our meters are rigorously tested, certified, and compliant with industry standards to ensure quality and reliability. We adhere to relevant regulatory requirements and strive for excellence in all our products.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, we provide professional installation services for our meters. Upon purchasing our meters, you can request installation services through our customer service department. We will schedule a convenient time for installation at your premises.",
  },
  {
    question: "How do I download and use the MOMASPAY mobile application?",
    answer:
      "To download and use the MOMASPAY mobile application, simply search for “MOMASPAY” on the App Store (for iOS) or Google Play Store (for Android), download the app, and follow the on-screen instructions to register and start using the application for prepaid meter transactions.",
  },
];
