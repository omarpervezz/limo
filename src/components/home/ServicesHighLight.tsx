import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

import Paragraph from "../typography/Paragraph";
import Heading from "@/components/typography/Heading";
import CardHeading from "../typography/CardHeading";
import { AiOutlineSafety } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { PiBus } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const ServicesHighLight: React.FC = () => {
  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto z-[1] text-black">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-2">
          <div>
            <Heading className="font-semibold mb-2">What we provide</Heading>
            <Paragraph>
              Discover our exceptional limousine services, designed to offer
              luxury, comfort, and reliability. From <br /> airport transfers to
              special events, we provide tailored experiences that elevate your
              journey.
            </Paragraph>
          </div>
          <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 border border-[#015e8646] px-3 py-3 rounded-md">
                <AiOutlineSafety className="text-[50px]" />
                <div>
                  <CardHeading className="text-cardHeadingColor">
                    Safety First
                  </CardHeading>
                  <Paragraph className="text-paragraphColor">
                    Experienced staff and professionally trained chauffeurs
                  </Paragraph>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-[#015e8646] px-3 py-3 rounded-md">
                <div>
                  <CiSettings className="text-[50px]" />
                </div>
                <div>
                  <CardHeading className="text-cardHeadingColor">
                    Reasonable Rates
                  </CardHeading>
                  <Paragraph className="text-paragraphColor">
                    We can offer you the right vehicle at the right price to fit
                    your budget
                  </Paragraph>
                </div>
              </div>
              <div className="flex items-center gap-4 border border-[#015e8646] px-3 py-3 rounded-md">
                <div>
                  <PiBus className="text-[50px]" />
                </div>
                <div>
                  <CardHeading className="text-cardHeadingColor">
                    Largest Fleet
                  </CardHeading>
                  <Paragraph className="text-paragraphColor">
                    We offer an extensive fleet of vehicles including sedans,
                    limousines and coach buses
                  </Paragraph>
                </div>
              </div>
              <div className="flex items-center gap-4 border border-[#015e8646] px-3 py-3 rounded-md">
                <div>
                  <CiLocationOn className="text-[50px]" />
                </div>
                <div>
                  <CardHeading className="text-cardHeadingColor">
                    Nationwide Service
                  </CardHeading>
                  <Paragraph className="text-paragraphColor">
                    We provide our transportation services nationwide
                  </Paragraph>
                </div>
              </div>
              <div className="flex items-center gap-4 border border-[#015e8646] px-3 py-3 rounded-md">
                <div>
                  <CiLocationOn className="text-[50px]" />
                </div>
                <div>
                  <CardHeading className="text-cardHeadingColor">
                    Professional Chauffeurs
                  </CardHeading>
                  <Paragraph className="text-paragraphColor">
                    Sydney Limousine service provides professional Chauffeurs
                    for you 24/7.
                  </Paragraph>
                </div>
              </div>
              <div className="flex items-center gap-4 border border-[#015e8646] px-3 py-3 rounded-md">
                <div>
                  <CiLocationOn className="text-[50px]" />
                </div>
                <div>
                  <CardHeading className="text-cardHeadingColor">
                    Latest car models
                  </CardHeading>
                  <Paragraph className="text-paragraphColor">
                    Sydney Limousine service provides always reliable and
                    comfortable cars for you.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServicesHighLight;
