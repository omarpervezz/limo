import ServicesList from "@/components/services/ServicesList";

export default async function ServicesListApiHandle() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services-list`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      console.error("Failed to fetch services list data:", response.statusText);
      return <p>Failed to load services list data.</p>; // Fallback UI
    }

    const services = await response.json();
    return <ServicesList services={services} />;
  } catch (error) {
    console.error("Error fetching services list data:", error);
    return <p>An error occurred while loading services list data.</p>; // Fallback UI
  }
}
