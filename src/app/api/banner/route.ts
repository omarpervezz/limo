import { NextResponse } from "next/server";
import exampleImg from "/public/example-1-removebg-preview.png";

export async function GET() {
  const bannerData = [
    {
      image: exampleImg.src,
    },
    {
      image: exampleImg.src,
    },
    {
      image: exampleImg.src,
    },
    {
      image: exampleImg.src,
    },
    {
      image: exampleImg.src,
    },
  ];

  return NextResponse.json(bannerData);
}
