"use client";
import React from "react";
import CustomerReview from "@/components/about/CustomerReview";
import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
import LuxuryTransfer from "@/components/about/LuxuryTransfers";
import AboutCard from "@/components/about/AboutCard";
import Counter from "@/components/layout/Counter";
function Page() {
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <CustomerReview />
      </Section>
      <Section>
        <LuxuryTransfer />
      </Section>
      <Section>
        <Counter />
      </Section>
      <Section>
        <AboutCard />
      </Section>
    </>
  );
}

export default Page;
