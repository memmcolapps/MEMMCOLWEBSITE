import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Ellipsis from "@/components/ui/ellipses";
import Footer from "@/components/navigation/footer";
import ConditionalNavbar from "@/components/navigation/conditionalNav";
import ConditionalReadySection from "./(homapage)/readySection/conditionalReadySection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Momas",
  description: "Momas Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen flex flex-col overflow-x-hidden">
        <ConditionalNavbar />
        <Ellipsis />
        <main className="flex-1">{children}</main>
        <div className="px-4 md:px-12 lg:px-20">
          <ConditionalReadySection />
        </div>
        <Footer />
      </body>
    </html>
  );
}
