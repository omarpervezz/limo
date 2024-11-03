"use client";
import Image from "next/image";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { format } from "date-fns";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import client from "/public/blog/client.png";
interface BlogsType {
  id: number;
  slug: string;
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
interface BlogPropsType {
  slug: string;
  blogs: BlogsType[];
}

const getCurrentDate = (): string => {
  const date = new Date();
  return format(date, "dd MMMM yyyy");
};

// Update the FleetDescription component
const BlogDescription: React.FC<BlogPropsType> = ({ slug, blogs }) => {
  const blogDetails = blogs.find((f) => f.slug === slug);
  const otherBlog = blogs.filter((fleet) => fleet.slug !== slug);

  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] bg-[#FFF] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:basis-2/3">
            <div className="flex gap-2">
              <Link
                href="/blogs"
                className="text-[#0070FF] flex items-center text-base font-semibold"
              >
                Blogs <IoIosArrowForward />
              </Link>
              <p className="text-[#3E4957] text-base font-semibold">
                Read Blog
              </p>
            </div>

            <div className="mt-3 bg-[#FFFFFF] drop-shadow-md pb-10 rounded-md">
              <div>
                <Image
                  src={blogDetails?.imageUrl as string}
                  width={800}
                  height={500}
                  alt="img"
                  className="w-full h-[400px] rounded-md"
                />
              </div>

              <div className="px-8">
                <div className="flex justify-between mt-6 flex-col md:flex-row gap-2">
                  <div>
                    <Link
                      href="/cotesion"
                      className="text-center bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                    >
                      Get Cotesion
                    </Link>
                  </div>
                  <div>
                    <p className="font-normal text-xs text-[#243045]">
                      .{getCurrentDate()}
                    </p>
                  </div>
                </div>
                <h3 className="mt-8 text-lg md:text-3xl font-semibold text-gray-700">
                  {blogDetails?.title}
                </h3>
                <div className="mt-4 flex gap-5 items-start flex-col md:flex-row">
                  <div className="flex flex-row md:flex-col gap-2">
                    <Link href="#">
                      <FaFacebook className="text-[#243045]" />
                    </Link>
                    <Link href="#">
                      <LuInstagram className="text-[#243045]" />
                    </Link>
                    <Link href="#">
                      <FaLinkedin className="text-[#243045]" />
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <p className="h-[135px] w-[2px] bg-[#3B8DF6]"></p>
                    <p className="text-base font-normal text-gray-500">
                      {blogDetails?.detailsDes}
                    </p>
                  </div>
                </div>

                {blogDetails?.detailsInfo?.map((card) => (
                  <div className="mt-6" key={card.id}>
                    <h5 className="text-gray-700 font-bold text-base">
                      {card.title}
                    </h5>
                    <p className="text-sm font-normal	text-gray-500">
                      {card.info}
                    </p>
                  </div>
                ))}

                <div className="mt-6 flex flex-col md:flex-row gap-5 p-4 rounded-md bg-[#FAFAFA] items-start">
                  <div className="flex justify-center items-center min-h-[100px]">
                    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                      <Image
                        src={client}
                        width={50}
                        height={50}
                        alt="img"
                        className="rounded-full w-[50px] h-[50px]"
                      />
                      <div className="text-center md:text-left">
                        <p className="text-sm font-semibold text-gray-700">
                          Sarah Thompson
                        </p>
                        <p className="text-xs font-normal text-gray-600">
                          Founder and CEO
                        </p>
                        <div className="flex justify-center md:justify-start mt-2 gap-2">
                          <Link href="#">
                            <FaFacebook className="text-[#243045]" />
                          </Link>
                          <Link href="#">
                            <LuInstagram className="text-[#243045]" />
                          </Link>
                          <Link href="#">
                            <FaLinkedin className="text-[#243045]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                    <p className="h-[2px] md:h-[135px] w-[135px] md:w-[2px] bg-gray-400 text-start"></p>
                    <p className="text-base md:text-sm lg:text-base font-normal text-gray-500 leading-relaxed max-w-md">
                      Hello, fellow travelers! I`&apos;m Sarah Thompson, a
                      passionate traveler and cultural enthusiast with a
                      background in anthropology. For the past decade,
                      I`&apos;ve explored the world`&apos;s most fascinating
                      destinations, sharing immersive travel experiences and
                      practical tips on my blog, `&apos;Wander With
                      Sarah.`&apos;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:basis-1/3">
            <div className="flex justify-between">
              <h4 className="font-semibold text-2xl text-gray-700">Trending</h4>
              <Link
                href="/blogs"
                className="text-sm text-[#1768D0] font-semibold"
              >
                View All
              </Link>
            </div>

            {otherBlog?.map((detail) => (
              <div
                className="bg-[#FFFFFF] p-4 drop-shadow-md rounded-md flex gap-4 mb-6"
                key={detail.id}
              >
                <Image
                  src={detail.imageUrl as string}
                  width={300}
                  height={200}
                  alt="img"
                  className="w-[200px] h-[96px] rounded-sm"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    {detail.title}
                  </p>
                  <div className="flex justify-end">
                    <Link
                      href={detail.slug}
                      passHref
                      className="text-center bg-[#cf4045] px-3 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogDescription;
