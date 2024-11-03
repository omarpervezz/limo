import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";
import ourStory2 from "../../../public/our-stroy-2.jpg";
import ourStory3 from "../../../public/our-story-3.jpg";

const OurStory: React.FC = () => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div>
          <div>
            <Heading className="text-black mb-2 font-semibold">
              Our Story
            </Heading>
            <Paragraph className="text-black">
              Founded on a commitment to luxury and reliability, <br /> we’ve
              grown to redefine limousine travel with unmatched service and
              style.
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 md:mt-12">
            <div className="md:col-span-1 h-[300px] bg-[#e5e7eb] overflow-hidden flex flex-col items-center justify-center rounded-2xl text-center">
              {/* <Image
                src={ourStory1}
                alt="our-story-1"
                className="rounded-2xl w-full h-full object-cover aspect-auto"
              /> */}
              <Heading className="font-semibold">
                <span className="text-[50px] font-normal inline-block">+</span>
                125k
              </Heading>
              <Paragraph>
                Served customer all over <br /> the country
              </Paragraph>
            </div>
            <div className="md:col-span-1 h-[300px] overflow-hidden">
              <Image
                src={ourStory2}
                alt="our-story-2"
                className="rounded-2xl w-full h-full object-cover aspect-auto"
              />
            </div>
            <div className="md:col-span-2 h-[300px] overflow-hidden">
              <Image
                src={ourStory3}
                alt="our-story-3"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurStory;
