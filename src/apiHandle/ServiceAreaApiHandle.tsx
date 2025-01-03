import ServiceArea from "@/components/service-area/ServiceArea";

export default async function ServicesAreaApiHandle() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/service-area`,
      {
        next: { revalidate: 60 }, // Revalidate data every 60 seconds
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch service area data.");
    }

    const services_area = await response.json();
    return <ServiceArea services_area={services_area} />;
  } catch (error) {
    console.error("Error fetching service area data:", error);
    return <p>An error occurred while loading service area data.</p>; // Fallback UI
  }
}
