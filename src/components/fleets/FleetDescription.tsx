"use client";
import { notFound } from "next/navigation";
import { useCallback, useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import CardHeading from "@/components/typography/CardHeading";
import SubTitle from "../typography/Subtitle";
import Link from "next/link";
import { Button } from "../common/Button";
interface FleetProps {
  slug: string;
  name: string;
  price: string;
  category: string;
  pax: string;
  luggage: string;
  features: string[];
  image: string;

  rateInfo: {
    label: string;
    price: string;
    unit: string;
    description: string;
  }[];
  viewImage: string[];
  whyChoose: string[];
  overview: string[];
  amenities: string[];
  servicesOffered: string[];
}

interface FleetDescriptionProps {
  slug: string;
  fleet: FleetProps[];
}

// Update the FleetDescription component
const FleetDescription: React.FC<FleetDescriptionProps> = ({ slug, fleet }) => {
  const foundFleetItem = fleet.find((f) => f.slug === slug);
  const otherLimo = fleet.filter((fleet) => fleet.slug !== slug);
  if (!foundFleetItem) {
    notFound();
  }
  // Default to the first image in the viewImage array
  const [selectedImage, setSelectedImage] = useState<string>(
    foundFleetItem.viewImage[foundFleetItem.viewImage.length - 1]
  );

  // UseCallback to memoize the function and prevent unnecessary re-renders
  const handleThumbnailClick = useCallback((url: string) => {
    setSelectedImage(url);
  }, []);

  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto bg-white">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-[60%]">
            <div className="flex flex-col gap-5">
              {/* handleThumbnailImage*/}
              <div className="space-y-8 flex flex-col items-center">
                {/* Main Image */}
                <Image
                  src={selectedImage}
                  alt={foundFleetItem.name}
                  width={600}
                  height={400}
                  className="w-[550px] h-auto object-cover"
                  priority
                />

                {/* Thumbnail Images */}
                <div className="flex gap-4 justify-center cursor-pointer">
                  {foundFleetItem.viewImage.map(
                    (url: string, index: number) => (
                      <div
                        key={index}
                        onClick={() => handleThumbnailClick(url)}
                        role="button"
                        tabIndex={0}
                        className={`border ${
                          selectedImage === url
                            ? "border-blue-500"
                            : "border-gray-300"
                        } rounded p-1 focus:outline-none focus:ring focus:ring-blue-200`}
                      >
                        <Image
                          src={url}
                          alt={`Thumbnail ${index + 1}`}
                          width={250}
                          height={150}
                          className="rounded"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              {/* handleThumbnailImage*/}
              {/* service description */}
              {/* Additional Information */}
              <div className="space-y-4 text-black">
                <CardHeading className="font-semibold">
                  Why Choose&nbsp;
                  {foundFleetItem.name.split(" ")[0]}
                </CardHeading>
                {foundFleetItem.whyChoose?.map((fleetInformation, index) => (
                  <div key={index}>
                    <Paragraph>{fleetInformation}</Paragraph>
                  </div>
                ))}

                {foundFleetItem.overview && (
                  <CardHeading className="font-semibold">
                    Car Overview
                  </CardHeading>
                )}
                {foundFleetItem.overview?.map((des, index) => (
                  <div key={index}>
                    <Paragraph>{des}</Paragraph>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div>
                {foundFleetItem.amenities && (
                  <CardHeading className="font-semibold mt-6">
                    Amenities
                  </CardHeading>
                )}
                <ul className="mt-4 space-y-2 list-disc pl-5">
                  {foundFleetItem.amenities?.map((amenity, index) => (
                    <li
                      className="text-[12px] leading-[18px] md:text-[14px] md:leading-[22px] lg:text-[16px] lg:leading-[24px] font-normal"
                      key={index}
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Offered */}
              <div>
                {foundFleetItem.servicesOffered && (
                  <CardHeading className="font-semibold mt-6">
                    Services Offered
                  </CardHeading>
                )}
                <ul className="mt-4 space-y-2 list-disc pl-5">
                  {foundFleetItem.servicesOffered?.map((service, index) => (
                    <li
                      className="text-[12px] leading-[18px] md:text-[14px] md:leading-[22px] lg:text-[16px] lg:leading-[24px] font-normal"
                      key={index}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              {/* service description */}
            </div>
          </div>
          <div className="flex-[40%] px-5">
            <div className="flex justify-center w-full text-center">
              <Image
                src={foundFleetItem.image}
                alt={foundFleetItem.name}
                width={400}
                height={300}
                className="rounded-2xl max-w-full h-auto"
              />
            </div>
            <div>
              <Heading>{foundFleetItem.name}</Heading>
            </div>
            <div className="mt-4 md:mt-10 space-y-6">
              {foundFleetItem.rateInfo.map((rateInformation, index) => (
                <div key={index} className="border-b border-[#bfa37ca2] pb-6">
                  <CardHeading className="mb-3">
                    {rateInformation.label}
                  </CardHeading>
                  <div className="flex gap-1 items-center">
                    <span className="text-2xl font-semibold">
                      {rateInformation.price}
                    </span>
                    <small className="font-semibold">
                      /{rateInformation.unit}
                    </small>
                  </div>
                  <SubTitle>{rateInformation.description}</SubTitle>
                </div>
              ))}
            </div>
            <div className="mt-3 md:mt-10">
              <Link href="#">
                <Button
                  variant="btnOutline"
                  className="w-full transition-colors duration-150 ease-in-out hover:bg-[#ffc676] hover:text-white hover:border-white"
                >
                  Book Now
                </Button>
              </Link>
            </div>
            <div className="mt-4 md:mt-10 space-y-4">
              <CardHeading className="font-semibold">
                Checkout other limousine
              </CardHeading>
              <div className="border px-4 flex flex-col text-center py-4 bg-[#715b4f] text-white">
                {otherLimo.map((otherLimo, index) => (
                  <Link
                    href={otherLimo.slug}
                    key={index}
                    className="flex flex-row justify-between items-center text-white font-medium text-1xl border-b border-[rgba(191,163,124,0.45)]  last:border-none space-y-4 last:space-y-0"
                  >
                    <span>{otherLimo.name}</span>
                    <span>{otherLimo.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FleetDescription;
