import ServicesListApiHandle from "@/apiHandle/ServicesListApiHandle";
import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";

function Page() {
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <ServicesListApiHandle />
      </Section>
    </>
  );
}

export default Page;
