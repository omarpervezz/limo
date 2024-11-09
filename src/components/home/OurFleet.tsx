"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import CardHeading from "../typography/CardHeading";
import SubTitle from "../typography/Subtitle";

// Define the type for the banner object
interface FleetItem {
  slug: string;
  name: string;
  price: number;
  description: string;
  category: string;
  luggage: string;
  features: string[];
  image: string;
  actions: {
    viewDetails: string;
    quoteBook: string;
  };
}

// Define the props for the Hero component
interface FleetProps {
  fleet: FleetItem[];
}

const OurFleet: React.FC<FleetProps> = ({ fleet }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filteredFleet = fleet.filter((f) =>
    activeFilter === "All" ? true : f.category.includes(activeFilter)
  );

  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto bg-hero-bg bg-cover bg-center z-[1]">
      <MaxWidthWrapper>
        <div>
          <div className="flex justify-center text-center">
            <div>
              <Heading className="font-semibold text-headingColor">
                Newest Vehicle Models
              </Heading>
              <Paragraph className="text-paragraphColor">
                Discover our diverse fleet of luxury vehicles, designed to cater
                to every <br /> need, from sleek sedans and spacious SUVs to
                elegant limousines
              </Paragraph>
            </div>
          </div>
          <div className="flex mt-8 md:mt-12 justify-center">
            <div className="flex flex-wrap justify-center">
              <button
                className={` px-6 py-2 mx-2 mb-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] rounded-md ${
                  activeFilter === "All"
                    ? "bg-[#015f86] text-white border border-[#015f86]"
                    : "bg-gray-200 text-gray-600 border-none"
                }`}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>
              <button
                className={`px-6 py-2 mx-2 mb-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] rounded ${
                  activeFilter === "Executive Car"
                    ? "bg-[#015f86] text-white border border-[#015f86]"
                    : "bg-gray-200 text-gray-600 border-none"
                }`}
                onClick={() => setActiveFilter("Executive Car")}
              >
                Executive Car
              </button>
              <button
                className={`px-6 py-2 mx-2 mb-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] rounded ${
                  activeFilter === "SUV"
                    ? "bg-[#015f86] text-white border border-[#015f86]"
                    : "bg-gray-200 text-gray-600 border-none"
                }`}
                onClick={() => setActiveFilter("SUV")}
              >
                SUV
              </button>

              <button
                className={`px-6 py-2 mx-2 mb-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] rounded ${
                  activeFilter === "Sedan"
                    ? "bg-[#015f86] text-white border border-[#015f86]"
                    : "bg-gray-200 text-gray-600 border-none"
                }`}
                onClick={() => setActiveFilter("Sedan")}
              >
                Sedan
              </button>
              <button
                className={`px-6 py-2 mx-2 mb-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] rounded ${
                  activeFilter === "People Mover"
                    ? "bg-[#015f86] text-white border border-[#015f86]"
                    : "bg-gray-200 text-gray-600 border-none"
                }`}
                onClick={() => setActiveFilter("People Mover")}
              >
                People Mover
              </button>
              <button
                className={`px-6 py-2 mx-2 mb-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] rounded ${
                  activeFilter === "Stretch Limousine"
                    ? "bg-[#015f86] text-white border border-[#015f86]"
                    : "bg-gray-200 text-gray-600 border-none"
                }`}
                onClick={() => setActiveFilter("Stretch Limousine")}
              >
                Stretch Limousine
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-12">
            {filteredFleet.map((car, index) => (
              <div key={index} className="">
                <div className="rounded-md shadow-md pb-4">
                  <div className="flex justify-center">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={300}
                      height={200}
                      className="w-[400px] h-auto object-cover "
                    />
                  </div>
                  <div>
                    <div className="border-t border-[#015e8646] px-5 pt-4">
                      <div className="flex justify-between">
                        <CardHeading className="text-black">
                          {car.name}
                        </CardHeading>
                        <SubTitle className="bg-[#0e5d80f5] text-white border border-[#0e5d80f5] text-center px-3 py-1 font-semibold rounded-2xl">
                          {car.price}
                        </SubTitle>
                      </div>
                      <Paragraph className="mb-2">
                        Category: {car.category}
                      </Paragraph>
                    </div>
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

export default OurFleet;
