"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Heading from "@/components/typography/Heading";
import CardHeading from "@/components/typography/CardHeading";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

import Image from "next/image";
import { format } from "date-fns";

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
interface BlogPropsType {
  blogs: BlogsType[];
}
const cardsPerPage = 4;

const getCurrentDate = (): string => {
  const date = new Date();
  return format(date, "dd MMMM yyyy");
};

const BlogList: React.FC<BlogPropsType> = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate indices for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentBlogs: BlogsType[] = blogs.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(blogs.length / cardsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const createPaginationItems = () => {
    const items = [];
    const maxDisplayedPages = 3; // Total number of page numbers to show

    // Logic to determine which pages to show
    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={i === currentPage ? "font-bold" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first page
      items.push(
        <button key={1} onClick={() => setCurrentPage(1)}>
          1
        </button>
      );

      // Add the current page and surrounding pages
      const startPage = Math.max(currentPage - 1, 2); // Ensure we show at least page 2
      const endPage = Math.min(currentPage + 1, totalPages - 1); // Ensure we show at most the last page - 1

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={
              i === currentPage ? "font-bold bg-gray-200 px-4 rounded-md" : ""
            }
          >
            {i}
          </button>
        );
      }

      // Handle the ellipsis for next pages
      if (currentPage < totalPages - 1) {
        items.push(<span key="ellipsis-end">...</span>);
      }

      // Show last page
      items.push(
        <button key={totalPages} onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return items;
  };

  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto bg-white">
      <MaxWidthWrapper>
        <Heading
          className="font-semibold text-black
        "
        >
          Blogs
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-16">
          {currentBlogs.map((blog) => (
            <div
              className="rounded-xl bg-[#fcfcfc] shadow-md px-5 py-4"
              key={blog.id}
            >
              <Image
                src={blog.imageUrl}
                width={600}
                height={100}
                alt="image"
                className="w-full rounded-lg h-[350px] object-cover"
              />
              <div className="mt-2">
                <p className="font-normal text-xs text-[#656565]">
                  {blog.date}
                </p>
                {/* <h4 className="text-[#243045] font-semibold text-sm mt-3">
                  {blog.title}
                </h4> */}
                <CardHeading>{blog.title}</CardHeading>
                <p className="mt-2 text-[#656565] text-sm font-normal">
                  {blog.des}
                </p>
                <div className="mt-2 flex gap-2">
                  <Image
                    src={blog.clinetImg}
                    width={16}
                    height={16}
                    alt="img"
                  />
                  <p className="font-normal text-xs text-[#243045]">
                    {blog.name}
                  </p>
                  <p className="font-normal text-xs text-[#243045]">
                    .{getCurrentDate()}
                  </p>
                </div>
                <hr className="mt-5 border border-[rgba(255,199,121,0.14)]" />
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2 text-[#243045]">
                    <Link href="">
                      <FaFacebook />
                    </Link>
                    <Link href="">
                      <FaLinkedin />
                    </Link>
                    <Link href="">
                      <LuInstagram />
                    </Link>
                  </div>
                  <Link href={`/blogs/${blog.slug}`} className="underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 gap-4">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-1 rounded-md text-sm font-semibold ${
              currentPage === 1
                ? "text-gray-400"
                : "text-[#015f86] hover:bg-[#f1e4e5] transition-all duration-150"
            }`}
          >
            Previous
          </button>
          <div className="flex gap-2">{createPaginationItems()}</div>
          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-1 rounded-md text-sm font-semibold ${
              currentPage === totalPages
                ? "text-gray-400"
                : "text-[#015f86] hover:bg-[#f1e4e5] transition-all duration-150"
            }`}
          >
            Next
          </button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogList;
