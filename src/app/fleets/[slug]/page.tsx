import FleetDescription from "@/components/fleets/FleetDescription";
import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params; // Await the params

  const { slug } = resolvedParams; // Now you can destructure slug

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fleet`, {
    next: { revalidate: 60 },
  });

  const fleet = await data.json();

  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <FleetDescription slug={slug} fleet={fleet} />
      </Section>
    </>
  ); // Pass slug to the child component
}
