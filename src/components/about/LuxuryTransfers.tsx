import React from "react";
import { CircleCheckBig } from "lucide-react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";

const LuxuryTransfer: React.FC = () => {
  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto">
      <MaxWidthWrapper className="text-black">
        <Heading className="font-semibold mb-3">Reimagining Movement</Heading>
        <Paragraph className="mb-3">
          Experience luxury chauffeur-driven airport transfers to London with
          meet-and-greet service, flight tracking, and fixed prices. <br />{" "}
          Enjoy VIP treatment with professional drivers and premium vehicles.
          Effortlessly travel with our reliable and safe service, <br />{" "}
          designed to provide comfort and convenience at every step.
        </Paragraph>

        <ul className="space-y-4 mt-8 pb-2">
          <li className="flex gap-3 items-start">
            <CircleCheckBig className="text-[#015f86]" />
            <Paragraph className="text-black">100% Luxurious Fleet</Paragraph>
          </li>
          <li className="flex gap-3 items-start">
            <CircleCheckBig className="text-[#015f86]" />
            <Paragraph className="text-black">
              All Our Fleet Are Fully Valeted & Serviced
            </Paragraph>
          </li>
          <li className="flex gap-3 items-start">
            <CircleCheckBig className="text-[#015f86]" />
            <Paragraph className="text-black">
              A Safe & Secure Journey
            </Paragraph>
          </li>
          <li className="flex gap-3 items-start">
            <CircleCheckBig className="text-[#015f86]" />
            <Paragraph className="text-black">
              Comfortable And Enjoyable
            </Paragraph>
          </li>
          <li className="flex gap-3 items-start">
            <CircleCheckBig className="text-[#015f86]" />
            <Paragraph className="text-black">
              Clean, Polite & Knowledgeable
            </Paragraph>
          </li>
        </ul>
      </MaxWidthWrapper>
    </div>
  );
};

export default LuxuryTransfer;
