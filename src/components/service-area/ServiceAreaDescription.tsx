import React from "react";
import Heading from "@/components/typography/Heading";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";

interface CityService {
  city: string;
  title: string;
  description: string;
  slug: string;
  cityImage: string;
  cityCoverImage: string[];
  overview: string[];
}

interface ServiceAreaDescriptionProps {
  slug: string;
  service_area_list: CityService[];
}

const ServiceAreaDescription: React.FC<ServiceAreaDescriptionProps> = ({
  service_area_list,
  slug,
}) => {
  const foundCity = service_area_list.find((f) => f.slug === slug);
  console.log(foundCity);
  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] mx-auto">
      <MaxWidthWrapper>
        <div>
          <div className="text-black">
            <div className="flex flex-col md:flex-row gap-4">
              {foundCity?.cityCoverImage.map((image, index) => (
                <React.Fragment key={index}>
                  <Image
                    src={image}
                    width={700}
                    height={300}
                    alt="sydney"
                    className="w-full"
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <Heading className="font-semibold mt-5">
                {foundCity?.title}
              </Heading>
              {foundCity?.overview.map((overview, index) => (
                <React.Fragment key={index}>
                  <Paragraph>{overview}</Paragraph>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServiceAreaDescription;
