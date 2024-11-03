import OurFleet from "@/components/home/OurFleet";

export default async function FleetCategoryApiHandle() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/fleet`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      console.error("Failed to fetch fleet data:", response.statusText);
      return <p>Failed to load fleet data.</p>; // Fallback UI
    }

    const fleet = await response.json();
    return <OurFleet fleet={fleet} />;
  } catch (error) {
    console.error("Error fetching fleet data:", error);
    return <p>An error occurred while loading fleet data.</p>; // Fallback UI
  }
}
