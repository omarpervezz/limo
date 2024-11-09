import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import Heading from "../typography/Heading";
import Link from "next/link";
import CardHeading from "../typography/CardHeading";
import SubTitle from "../typography/Subtitle";
import Paragraph from "../typography/Paragraph";

// Define the type for the banner object
interface FleetItem {
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

// Define the props for the Hero component
interface FleetProps {
  fleet: FleetItem[];
}
const FleetList: React.FC<FleetProps> = ({ fleet }) => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto text-black">
      <MaxWidthWrapper>
        <div>
          <div>
            <Heading className="text-headingColor font-semibold">Fleet</Heading>
            <Paragraph className="text-paragraphColor">
              Discover our diverse fleet of luxury vehicles, designed to cater
              to every <br /> need, from sleek sedans and spacious SUVs to
              elegant limousines
            </Paragraph>
          </div>
          <div className="relative mt-8 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fleet.map((car, index) => (
                <div
                  key={index}
                  className="shadow-md rounded-lg px-5 py-5 overflow-hidden"
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={400}
                    height={250}
                    className="w-auto h-auto md:w-[360px] md:h-[238px] object-cover"
                  />
                  <CardHeading className="text-black font-semibold">
                    {car.name}
                  </CardHeading>
                  <SubTitle className="text-black">{car.category}</SubTitle>
                  <div>
                    <div className="text-black">
                      <SubTitle> {car.luggage}</SubTitle>
                      {car.features.map((feature, idx) => (
                        <SubTitle key={idx} className="block">
                          {feature}
                        </SubTitle>
                      ))}
                    </div>
                    <div className="flex flex-col md:flex-col lg:flex-row gap-4 mt-4">
                      <Link
                        href={`/fleets/${car.slug}`}
                        className="w-full border border-[#015f86] text-black text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] px-4 py-2 md:py-3 rounded-md transition-all text-center"
                      >
                        {car.actions.viewDetails}
                      </Link>
                      <Link
                        href={`/fleets/${car.slug}`}
                        className="w-full flex items-center justify-center text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] px-4 py-2 md:py-3 border border-[#015f86] bg-[#015f86] text-white rounded-md"
                      >
                        {car.actions.quoteBook}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FleetList;
