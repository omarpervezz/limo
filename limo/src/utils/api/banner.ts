export async function fetchFleets() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fleet`, {
    next: { revalidate: 60 }, // Use Next.js revalidation
  });

  if (!response.ok) {
    throw new Error("Failed to fetch fleets");
  }

  const fleet = await response.json();
  return fleet;
}
