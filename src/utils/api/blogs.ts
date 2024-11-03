interface BlogsType {
  id: number;
  slug?: string;
  imageUrl: string;
  date: string;
  title: string;
  des: string;
  clinetImg: string;
  name: string;
  min: string;
  detailsDes?: string;
  detailsInfo?: { id: number; title?: string; info?: string }[];
  tranding?: { id: number; imageUrl?: string; title?: string }[];
}

export default async function getBlogs(limit?: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    cache: "no-store",
  });
  const blogs: BlogsType[] = await res.json();

  // If limit is not provided, return all items; otherwise, limit to the specified number
  return limit ? blogs.slice(0, limit) : blogs;
}
