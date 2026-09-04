"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Button from "@/components/buttons/button";
import FaqCard from "./FaqSection";
import { FAQ_ITEMS } from "./faqs";

export default function ContactUs() {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!organizationName || !email || !message) {
      setStatusMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: organizationName,
          email: email,
          phone: phoneNo,
          message: message,
          subject: `New Contact Form Submission from ${organizationName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully.",
        });
        setOrganizationName("");
        setEmail("");
        setPhoneNo("");
        setMessage("");
      } else {
        setStatusMessage({
          type: "error",
          text: result.message || "Something went wrong. Please try again.",
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Failed to submit form. Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <form
          onSubmit={handleSubmit}
          className="px-6 py-10 w-full md:px-10 md:py-10 md:w-1/2 mt-4 border border-gray-200 flex flex-col gap-8 rounded-lg"
        >
          {statusMessage.text && (
            <div
              className={`p-3 text-sm rounded-md ${
                statusMessage.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="name">
              Name
              <span className="text-red-600">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Enter name"
              className="h-12"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              required
            />
          </div>

          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="email">
              Email Address
              <span className="text-red-600">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              className="h-12"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="phone">
              Phone Number
              <span className="text-red-600">*</span>
            </Label>
            <Input
              id="phone"
              placeholder="Enter phone number"
              value={phoneNo}
              className="h-12"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          <div className="grid w-full gap-3">
            <Label className="text-gray-700" htmlFor="message">
              Message
              <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Message..."
              value={message}
              className="h-30"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            text={isSubmitting ? "Sending..." : "Send"}
            disabled={isSubmitting}
            className="h-10"
          />
        </form>
      </div>

      <div>
        <FaqCard bgColor={"white"} text={"black"} faqItems={FAQ_ITEMS} />
      </div>
    </div>
  );
}
