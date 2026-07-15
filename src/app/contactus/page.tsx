"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Button from "@/components/buttons/button";
import FaqCard from "./FaqSection";
// import { SuccessfulDialog } from "@/components/dialog/successful";
// import { useCreateMessage } from "@/hooks/use-contact";

const FAQ_ITEM = [
  {
    question: "Can i get a prepaid meter from Memmcol ?",
    answer:
      "Certainly! Our prepaid metering solutions cater to various facilities such as property management firms, real estate developers, markets/malls, factories, hotels, universities, and hostels, all equipped with dedicated transformers. By opting for our prepaid meter service, you gain access to precise and effective energy monitoring, live usage analytics, and full autonomy over your energy consumption.",
  },
  {
    question: "How can I purchase your electricity meters?",
    answer:
      "You can purchase our electricity meters through authorized distributors or directly from our website. Simply browse our product catalog, select the desired meter, and follow the instructions to complete your purchase.",
  },
  {
    question:
      "Are your meters certified and compliant with industry standards?",
    answer: `Yes, all our meters are rigorously tested, certified, and compliant with industry standards to ensure quality and reliability. We adhere to relevant regulatory requirements and strive for excellence in all our products. `,
  },
  {
    question: "Do you offer installation services?",
    answer: `Yes, we provide professional installation services for our meters. Upon purchasing our meters, you can request installation services through our customer service department. We will schedule a convenient time for installation at your premises.`,
  },
  {
    question: "How do I download and use the MOMASPAY mobile application?",
    answer: `To download and use the MOMASPAY mobile application, simply search for “MOMASPAY” on the App Store (for iOS) or Google Play Store (for Android), download the app, and follow the on-screen instructions to register and start using the application for prepaid meter transactions.`,
  },
  {
    question: "Do you offer installation services?",
    answer: `Yes, we provide professional installation services for our meters. Upon purchasing our meters, you can request installation services through our customer service department. We will schedule a convenient time for installation at your premises. `,
  },
];

export default function ContactUs() {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  // const { mutate: sendMessage, isPending } = useCreateMessage();

  const handleSubmit = () => {
    // sendMessage(
    //   {
    //     organizationName,
    //     organizationSize: selected,
    //     email,
    //     phoneNo,
    //     message,
    //   },
    //   {
    //     onSuccess: () => {
    //       setIsDialogOpen(true);
    //       setOrganizationName("");
    //       setEmail("");
    //       setPhoneNo("");
    //       setMessage("");
    //       setSelected("");
    //     },
    //   }
    // );
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col px-8 md:px-0 gap-6 justify-center pt-20 py-10 items-center">
        <div className="bg-primary/20 px-5 py-1 tracking-wide text-primary text-lg font-light rounded-2xl">
          Contact Us
        </div>
        <div className="text-center">
          <span className="text-3xl text-gray-900 md:text-5xl font-light">
            Get in <span className="text-primary">touch with</span> us today
          </span>
        </div>
        <div className="flex text-sm md:text-normal flex-col md:w-2/3 font-extralight text-gray-700 text-center">
          Have questions, feedback, or need assistance? Our team is here to help
          and support you every step of the way. Get in touch with us today.
        </div>

        <div className="px-6 py-10 w-full md:px-10 md:py-10 md:w-1/2 mt-4 border border-gray-200 flex flex-col gap-8 rounded-lg">
          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter name"
              className="h-12 "
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
            />
          </div>

          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="email">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              className="h-12 "
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="phone">
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="Enter phone number"
              value={phoneNo}
              className="h-12 "
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Message..."
              value={message}
              className="h-30"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button onClick={handleSubmit} text="Send" className="h-10" />
        </div>
      </div>

      <div>
        <FaqCard bgColor={"white"} text={"black"} faqItems={FAQ_ITEM} />
      </div>
    </div>
  );
}
