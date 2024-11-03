import ContactForm from "@/components/contact/Contact";

import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
import React from "react";

function Page() {
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <ContactForm />
      </Section>
    </>
  );
}

export default Page;
