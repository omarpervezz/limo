import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
import ServiceListDescription from "@/components/services/ServicesDescription";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params; // Await the params

  const { slug } = resolvedParams; // Now you can destructure slug

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services-list`,
    {
      next: { revalidate: 60 },
    }
  );

  const services = await data.json();

  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <ServiceListDescription slug={slug} services={services} />
      </Section>
    </>
  ); // Pass slug to the child component
}
