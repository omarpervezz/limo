interface FleetCar {
  slug: string;
  name: string;
  price: number;
  category: string;
  luggage: string;
  features: string[];
  image: string;
  actions: {
    viewDetails: string;
    quoteBook: string;
  };
}

export default async function fleetList(limit?: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fleet`, {
    next: { revalidate: 60 },
    // cache: "force-cache",
  });
  const fleet: FleetCar[] = await res.json();

  // If limit is not provided, return all items; otherwise, limit to the specified number
  return limit ? fleet.slice(0, limit) : fleet;
}
