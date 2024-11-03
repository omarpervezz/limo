import BannerCover from "@/components/layout/BannerCover";
import ServiceAreaApiHandle from "@/apiHandle/ServiceAreaApiHandle";
import Section from "@/components/layout/Section";

function Page() {
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <ServiceAreaApiHandle />
      </Section>
    </>
  );
}

export default Page;
