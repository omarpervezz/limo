import Heading from "@/components/typography/Heading";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import Paragraph from "@/components/typography/Paragraph";
import callToActionCarImage from "/public/acura-nsx-car.png";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto bg-hero-bg bg-cover bg-center z-[1]">
      <MaxWidthWrapper className="h-full flex items-start flex-col justify-start">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-[40%] flex flex-col justify-center">
            <div className="mb-2">
              <Heading className="text-headingColor font-semibold">
                Your Next Travel With US
              </Heading>
            </div>
            <div className="mb-6">
              <Paragraph className="text-paragraphColor">
                Embark on your next journey in style and comfort with us.
              </Paragraph>
            </div>
            <div>
              <Link href="#">
                <Button
                  variant="signUpBtn"
                  className="border border-[#015f86] bg-[#015f86] text-white rounded-md"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-[60%]">
            <Image src={callToActionCarImage} alt="call-to-action" />
          </div>
        </div>
      </MaxWidthWrapper>
      {/*hero car */}
    </div>
  );
};

export default CallToAction;
