import Heading from "@/components/typography/Heading";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { Button } from "../common/Button";
import Paragraph from "../typography/Paragraph";
import { Calculator } from "lucide-react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";
const BannerCover: React.FC = () => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto bg-hero-bg bg-cover bg-center z-[1]">
      <MaxWidthWrapper className="h-full flex items-start flex-col justify-start">
        <div className="pb-0 md:pb-9 mb-3 self-center text-center">
          <Heading className="ttext-headingColor font-semibold mb-2">
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

        <div className="w-full flex flex-col md:flex-row md:justify-center border-[#a18b7f] text-white">
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
        </div>
      </MaxWidthWrapper>
      {/*hero car */}
    </div>
  );
};

export default BannerCover;
