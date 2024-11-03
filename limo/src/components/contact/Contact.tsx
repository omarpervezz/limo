import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Heading from "@/components/typography/Heading";
import { FaPaperPlane } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { MdPrint } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import fromImg from "/public/contact/contact2.png";
import Paragraph from "@/components/typography/Paragraph";
import ContactFormInfo from "@/components/contact/ContactFormInfo";

const ContactForm = () => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] bg-white rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div>
          <p className="font-semibold text-sm	uppercase  flex items-center justify-start gap-2">
            Contact Us <FaPaperPlane className="text-[#20B038]" />
          </p>
          <Heading className="font-semibold mb-2">
            Let’s Chat, Reach Out to us
          </Heading>

          <Paragraph>
            Have any questions? We’re here to help. Send us a message, and we’ll
            respond within 24 hours.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 bg-white shadow-sm rounded-xl">
          <div className="bg-gradient-to-t from-[#3528C5] to-[#7367F0]  p-6 rounded-lg relative">
            <p className="font-semibold text-xs	uppercase  flex items-center text-gray-100 gap-2">
              Message now <FaPaperPlane className="text-[#60D66A]" />
            </p>

            <p className="text-[28px] font-semibold text-gray-100 mt-1">
              We’d love to hear, form you
            </p>
            <Paragraph className="text-gray-300">
              {" "}
              Have any questions? We’re here to help. Send us a message, and
              we’ll respond within 24 hours.
            </Paragraph>

            <div className="flex items-center mt-28 gap-2">
              <RiHome3Fill size={26} className="text-gray-100" />
              <Paragraph className="text-gray-100">
                43 Mohakhali C/A (14th Level), Dhaka-1212, Bangladesh.
              </Paragraph>
            </div>
            <p className=" text-base font-normal text-gray-100 w-[300px] mt-4 flex items-center  gap-2">
              {" "}
              <FaPhoneVolume size={20} />
              +029898, +055258
            </p>

            <p className=" text-base font-normal text-gray-100 w-[300px] mt-4 flex items-center  gap-2">
              {" "}
              <TiMessages size={25} />
              support.plane@gmail.com
            </p>

            <p className=" text-base font-normal text-gray-100 w-[300px] mt-4 flex items-center  gap-2">
              {" "}
              <MdPrint size={26} />
              880-2-222295029
            </p>

            <div className="text-gray-100 mt-28 flex gap-3">
              <Link href="#">
                {" "}
                <FaFacebook size={25} />
              </Link>
              <Link href="#">
                {" "}
                <FaInstagram size={25} />
              </Link>
              <Link href="#">
                {" "}
                <FaLinkedin size={25} />
              </Link>
              <Link href="#">
                {" "}
                <RiTwitterXFill size={25} />
              </Link>
            </div>
            <Image
              src={fromImg}
              width={200}
              height={200}
              alt="image"
              className="absolute bottom-0 right-0 w-[80px] h-[80px] md:w-[180px] md:h-[180px]"
            />
          </div>

          <div>
            <ContactFormInfo />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* map */}
      {/* <div className="mt-10">
        <Image
          src={map}
          alt="map"
          width={500}
          height={200}
          className="w-full h-[330px]"
        />
      </div> */}
    </div>
  );
};

export default ContactForm;
