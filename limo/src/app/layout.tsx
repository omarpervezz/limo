import type { Metadata } from "next";
import "./globals.css";
import { sora, epilogue, inconsolata } from "@/utils/font";
import Navigation from "@/components/layout/navbar/Navigation";

import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import CallToAction from "@/components/layout/CallToAction";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sora.className} ${epilogue.variable} ${inconsolata.variable} bg-[#fcfeff]  font-sans antialiased`}
      >
        <header className="border-b border-[#015e8646]">
          <Navigation />
        </header>
        {children}
        <Section>
          <CallToAction />
        </Section>
        <footer className="border-t border-[#015e8646]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
