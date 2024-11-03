import Section from "@/components/layout/Section";
import OurServices from "@/components/home/OurServices";
import ServicesHighLight from "@/components/home/ServicesHighLight";
import OurStory from "@/components/home/OurStory";

import Counter from "@/components/layout/Counter";
import BannerApiHandle from "@/apiHandle/BannerApiHandle";
import FleetCategoryApiHandle from "@/apiHandle/FleetCategoryApiHandle";
function Page() {
  return (
    <main>
      <Section>
        <BannerApiHandle />
      </Section>
      <Section>
        <OurServices />
      </Section>
      <Section>
        <ServicesHighLight />
      </Section>
      <Section>
        <OurStory />
      </Section>
      <Section>
        <FleetCategoryApiHandle />
      </Section>
      <Section>
        <Counter />
      </Section>
    </main>
  );
}

export default Page;
