import Section from "@/components/layout/Section";
import BannerCover from "@/components/layout/BannerCover";
import Rates from "@/components/rates/Rates";
function Page() {
  return (
    <>
      <Section>
        {" "}
        <BannerCover />
      </Section>
      <Section>
        <Rates />
      </Section>
    </>
  );
}

export default Page;
