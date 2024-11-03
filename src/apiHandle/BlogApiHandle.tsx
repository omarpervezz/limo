import BlogList from "@/components/blogs/BlogList";

export default async function BlogApiHandle() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`,
      {
        next: { revalidate: 60 }, // Revalidate data every 60 seconds
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch blogs data.");
    }

    const blogs = await response.json();
    return <BlogList blogs={blogs} />;
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return <p>An error occurred while loading blogs data.</p>; // Fallback UI
  }
}
