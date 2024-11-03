import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import Image from "next/image";
import SubTitle from "../typography/Subtitle";
import Serviceimg1 from "../../../public/night-on-town.jpg";
import Serviceimg3 from "../../../public/sight-seeing.jpg";
import Serviceimg4 from "../../../public/clubbing-in-sydney.jpg";
import Serviceimg5 from "../../../public/our-services-1.jpeg";

const OurServices = () => {
  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-[35%] flex flex-col text-white">
            <div>
              <Heading
                className="mb-2 font-semibold text-black
        "
              >
                Our Services
              </Heading>
              <Paragraph className="text-black">
                Experience Luxurious Chauffeur Driven Cars in Australia.
              </Paragraph>
            </div>
            <div className="mt-8 md:mt-12 flex-grow relative">
              <Image
                src={Serviceimg1}
                alt="our-services"
                width={500}
                height={300}
                className="w-full rounded-2xl h-full object-cover"
              />
              <SubTitle className="px-5 py-2 inline-block bg-white text-black rounded-lg text-sm absolute bottom-5 left-5 font-semibold">
                Airport Pickup / Airport Drop-off
              </SubTitle>
            </div>
          </div>
          <div className="flex-[65%] flex flex-col md:flex-row gap-6 mt-14 md:mt-0 text-white">
            <div className="flex flex-col gap-6 flex-[50%]">
              <div className="relative h-full">
                <Image
                  src={Serviceimg5}
                  alt="our-services"
                  width={600}
                  height={700}
                  className="w-full rounded-2xl h-full object-cover"
                />
                <SubTitle className="px-5 py-2 inline-block bg-white text-black rounded-lg text-sm absolute top-5 left-5 font-semibold">
                  Hourly/Sightseeing
                </SubTitle>
                <SubTitle className="px-5 py-2 inline-block bg-white text-black rounded-lg text-sm absolute bottom-5 left-5 font-semibold">
                  Point to Point
                </SubTitle>
              </div>
              {/* <div className="relative">
            <Image
              src={Serviceimg4}
              alt="our-services"
              width={300}
              height={300}
              className="w-full rounded-2xl h-full object-cover"
            />
            <SubTitle className="px-5 py-2 inline-block bg-white text-black rounded-lg text-sm absolute bottom-5 left-4 font-semibold">
              Hourly/Sightseeing
            </SubTitle>
          </div> */}
            </div>
            <div className="flex flex-col gap-6 flex-[50%]">
              <div className="relative">
                <Image
                  src={Serviceimg4}
                  alt="our-services"
                  width={300}
                  height={300}
                  className="w-full rounded-2xl h-full object-cover"
                />
                <SubTitle className="px-5 py-2 inline-block bg-white text-black rounded-lg text-sm absolute bottom-5 left-5 font-semibold">
                  Wedding Services
                </SubTitle>
              </div>
              <div className="relative">
                <Image
                  src={Serviceimg3}
                  alt="our-services"
                  width={300}
                  height={300}
                  className="w-full rounded-2xl h-full object-cover"
                />
                <SubTitle className="px-5 py-2 inline-block bg-white text-black rounded-lg text-sm absolute bottom-5 left-5 font-semibold">
                  Special Events
                </SubTitle>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurServices;
