import Banner from "@/components/home/Hero";

export default async function BannerApiHandle() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/banner`,
      {
        next: { revalidate: 60 }, // Revalidate the data every 60 seconds
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      console.error("Failed to fetch banner data:", response.statusText);
      return <p>Failed to load banner data.</p>; // Fallback UI
    }

    const banner = await response.json();
    return <Banner banner={banner} />;
  } catch (error) {
    console.error("Error fetching banner data:", error);
    return <p>An error occurred while loading banner data.</p>; // Fallback UI
  }
}
