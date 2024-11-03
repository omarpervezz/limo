import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardHeading from "../typography/CardHeading";
import Heading from "../typography/Heading";
import { Button } from "@/components/common/Button";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Paragraph from "@/components/typography/Paragraph";
interface CityService {
  city: string;
  description: string;
  path: string;
  cityImage: string;
}

// Define the props for the Hero component
interface ServiceAreaProps {
  services_area: CityService[];
}
const ServiceArea: React.FC<ServiceAreaProps> = ({ services_area }) => {
  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] bg-[#FFF] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <Heading className="text-headingColor font-semibold mb-3">
          Service Area
        </Heading>
        <Paragraph>
          Our Sydney limousine services offer luxurious, reliable, and tailored
          transportation experiences, <br /> ensuring you travel in style and
          comfort across the city and beyond.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 md:mt-12">
          {services_area.map((area, index) => (
            <div key={index} className="rounded-md shadow-md pb-3">
              <div className="w-full">
                <Image
                  src={area.cityImage}
                  alt="city-img"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-t-lg"
                />
              </div>
              <div className="px-4 py-2">
                <CardHeading className="mb-2 mt-3 font-semibold">
                  {area.city}
                </CardHeading>

                <Paragraph className="mb-3">
                  {area.description.length > 60
                    ? area.description
                        .slice(0, 60)
                        .split(" ")
                        .slice(0, -1)
                        .join(" ") + "..."
                    : area.description}
                </Paragraph>
                <Link href={`/service-area/${area.path}`} passHref>
                  <Button
                    variant="signUpBtn"
                    className="border border-[#015f86] bg-[#015f86] text-white rounded-md"
                  >
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServiceArea;
