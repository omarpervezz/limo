import ServiceAreaDescription from "@/components/service-area/ServiceAreaDescription";
import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params; // Await the params

  const { slug } = resolvedParams; // Now you can destructure slug

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/service-area`,
    {
      next: { revalidate: 60 },
    }
  );

  const service_area_list = await data.json();

  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <ServiceAreaDescription
          slug={slug}
          service_area_list={service_area_list}
        />
      </Section>
    </>
  ); // Pass slug to the child component
}
