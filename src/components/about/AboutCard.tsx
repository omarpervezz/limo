"use client";
import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import CardHeading from "../typography/CardHeading";
import teamImage1 from "/public/h1-team-img-1.jpg";
import teamImage2 from "/public/h1-team-img-2.jpg";
import teamImage3 from "/public/h1-team-img-3.jpg";

export default function AboutCard() {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-md mx-auto bg-hero-bg bg-cover bg-center z-[1] text-white">
      <MaxWidthWrapper>
        <div>
          <div>
            <Heading className="text-headingColor font-semibold mb-3">
              Our Professional Chauffeurs
            </Heading>
            <Paragraph className="text-paragraphColor">
              Meet our highly trained and courteous chauffeurs, dedicated to
              providing exceptional service and ensuring your journey is
              seamless, <br /> safe, and luxurious. Their expertise and
              professionalism set the standard for excellence in every ride.
            </Paragraph>
          </div>
          <div className="mt-14 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
              <div>
                <div className="rounded-md h-[300px] md:h-[500px] overflow-hidden">
                  <Image
                    src={teamImage1}
                    alt="fleets"
                    width={800}
                    height={1125}
                    className="rounded-lg max-w-full h-auto object-cover"
                  />
                </div>
                <CardHeading className="mt-3 ">Marco Watkivi</CardHeading>
              </div>
              <div>
                <div className="rounded-md h-[300px] md:h-[500px] overflow-hidden">
                  <Image
                    src={teamImage2}
                    alt="fleets"
                    width={800}
                    height={1125}
                    className="rounded-lg max-w-full h-auto object-cover"
                  />
                </div>
                <CardHeading className="mt-3">Marco Watkivi</CardHeading>
              </div>
              <div>
                <div className="rounded-md h-[300px] md:h-[500px] overflow-hidden">
                  <Image
                    src={teamImage3}
                    alt="fleets"
                    width={800}
                    height={1125}
                    className="rounded-lg max-w-full h-auto object-cover"
                  />
                </div>
                <CardHeading className="mt-3">Marco Watkivi</CardHeading>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

{
  /* <div>
<SubTitle className="bg-[#605551] px-2 py-1 inline-block rounded-md text-white font-semibold mt-3">
  {car.price}
</SubTitle>
</div> */
}
