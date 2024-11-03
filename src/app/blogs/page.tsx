import BlogApiHandle from "@/apiHandle/BlogApiHandle";
import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
function Page() {
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <BlogApiHandle />
      </Section>
    </>
  );
}

export default Page;
