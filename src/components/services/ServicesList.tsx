import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardHeading from "../typography/CardHeading";
import Heading from "../typography/Heading";
import SubTitle from "../typography/Subtitle";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Paragraph from "@/components/typography/Paragraph";
import { Button } from "@/components/common/Button";

// Define the type for the banner object
interface ServiceList {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
}

// Define the props for the Hero component
interface ServiceProps {
  services: ServiceList[];
}

const ServicesList: React.FC<ServiceProps> = ({ services }) => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] bg-[#FFF] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <Heading className="text-headingColor font-semibold mb-3">
          Our Services
        </Heading>
        <Paragraph>
          Our Sydney limousine services offer luxurious, reliable, and tailored
          transportation experiences, <br /> ensuring you travel in style and
          comfort across the city and beyond.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 mt-10 md:mt-16">
          {services.map((service) => (
            <div key={service.id} className="rounded-md shadow-md pb-3">
              <div className="w-full flex justify-center border">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-t-lg"
                />
              </div>
              <div className="px-4 py-2">
                <CardHeading className="mb-3 font-semibold">
                  {service.title}
                </CardHeading>

                <SubTitle className="mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor, id.
                </SubTitle>
                <Link href={`/service/${service.slug}`} passHref>
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

export default ServicesList;
