import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
import FleetApiHandle from "@/apiHandle/FleetApiHandle";

function Page() {
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <FleetApiHandle />
      </Section>
    </>
  );
}

export default Page;
