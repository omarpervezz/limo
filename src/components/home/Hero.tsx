"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calculator } from "lucide-react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";
import Heading from "@/components/typography/Heading";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import { Button } from "../common/Button";
import Paragraph from "../typography/Paragraph";
import { cn } from "@/utils/utils";

// Define the type for the banner object
interface BannerItem {
  image: string;
}

// Define the props for the Hero component
interface HeroProps {
  banner: BannerItem[];
}

const Hero: React.FC<HeroProps> = ({ banner }) => {
  console.log(banner);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // If we're at the last slide, don't advance
    if (currentIndex < banner.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    // If we're at the first slide, don't go back
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] mx-auto bg-hero-bg bg-cover bg-center z-[1]">
      <MaxWidthWrapper className="flex items-start flex-col justify-start">
        <div className="mb-3 self-center text-center">
          <Heading className="text-headingColor font-semibold lg:text-[60px] lg:leading-[65px] mb-2">
            Sydney Limousine <br />
            <span className="bg-vip-gradient bg-clip-text text-transparent">
              VIP
            </span>
            &nbsp;Services
          </Heading>
          <Paragraph className="text-paragraphColor">
            Experience Luxurious Chauffeur Driven Cars in Australia.
          </Paragraph>
          <Paragraph className="text-paragraphColor">
            Sydney | Melbourne | Canberra | Perth | Hobart | Brisbane | Gold
            Coast | Adelaide | Darwin
          </Paragraph>
        </div>
        {/*hero car */}
        <div className="self-center mb-5">
          <div className="relative max-w-5xl mx-auto overflow-hidden h-[200px] md:h-[400px] flex justify-center items-center">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {banner.map((car, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <Image
                    src={car.image}
                    alt="banner-image"
                    width={1000}
                    height={800}
                    className="w-full h-full object-contain mix-blend-darken"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-center border-[#a18b7f] text-white">
          <div className="w-full flex items-center lg:h-[100px] xl:h-[150px] drop-shadow-md bg-white rounded-2xl border border-gray-200 relative box-border xl:px-7">
            <div className="flex flex-col md:flex-row gap-2 py-3 px-5 w-full">
            <div className="w-full flex flex-row gap-2">
            <div className="w-full">
             <Button
                variant="btnOutline"
                className="flex items-center gap-2 rounded-md transition-colors duration-150 ease-in-out bg-[#015f86] pt-2 pb-2 pr-[5px] pl-[5px] xl:pt-3 xl:pb-3 xl:pr-[8px] xl:pl-[8px] hover:text-white text-white relative w-full"
              >
                <Calculator className="w-5 h-5" />
                Instant Quotation
              </Button>
             </div>
             <div className="w-full">
             <Button
                variant="btnOutline"
                className="flex items-center gap-2 rounded-md transition-colors duration-150 ease-in-out hover:bg-[#015f86] pt-2 pb-2 pr-[5px] pl-[5px] xl:pt-3 xl:pb-3 xl:pr-[8px] xl:pl-[8px] hover:text-white text-white relative w-full"
              >
                <FaRegCalendarCheck className="w-5 h-5" />
                Book Now
              </Button>
             </div>
            </div>
             <div className="w-full flex flex-row gap-2">
              <div className="w-full">
              <Button
                variant="btnOutline"
                className="flex items-center gap-2 rounded-md transition-colors duration-150 ease-in-out hover:bg-[#015f86] pt-2 pb-2 pr-[5px] pl-[5px] xl:pt-3 xl:pb-3 xl:pr-[8px] xl:pl-[8px] hover:text-white text-white relative w-full"
              >
                <AiOutlineSetting className="w-5 h-5" />
                Manage Booking
              </Button>
              </div>
              <div className="w-full">
              <Button
                variant="btnOutline"
                className="flex items-center gap-2 rounded-md transition-colors duration-150 ease-in-out hover:bg-[#015f86] pt-2 pb-2 pr-[5px] pl-[5px] xl:pt-3 xl:pb-3 xl:pr-[8px] xl:pl-[8px] hover:text-white text-white relative w-full"
              >
                <MdPersonAdd className="w-5 h-5" />
                Create Account
              </Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {/*hero car */}

      <Button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={cn(
          "absolute top-[45%] left-1 md:left-4 transform -translate-y-[45%] bg-[#00000071] text-black p-2 rounded-full disabled:opacity-30"
          // currentIndex === 0 && "hidden"
        )}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </Button>
      <Button
        onClick={handleNext}
        disabled={currentIndex === banner.length - 1}
        className={cn(
          "absolute top-[45%] right-1 md:right-4 transform -translate-y-[45%] bg-[#00000071] text-black p-2 rounded-full disabled:opacity-30"
          // currentIndex === fleet.length - 1 && "hidden"
        )}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </Button>
    </div>
  );
};

export default Hero;
