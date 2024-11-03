import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoSrc from "/public/logo/logo.svg";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer: React.FC = () => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto text-black mt-2">
      <MaxWidthWrapper>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  className="h-auto w-[60%] bg-white pl-[15px] pt-2 pb-2 mt-1 rounded"
                  src={logoSrc}
                  alt="Logo"
                  priority={true}
                />
              </Link>
            </div>
            <h5 className="mb-3 mt-3 text-[18px] font-bold">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[14.5px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Fleets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Rates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Sydney Suburbs
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
            <h5 className="mb-5 text-[18px] font-bold">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[14.5px]">
                  Anniversary Limos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Graduation Party Limos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Sightseeing Limos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Night Out on Town Limos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Bachelor Party Limos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Sydney Tours
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Blue Mountain Limo Tours
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h5 className="mb-5 text-[18px] font-bold">Fleets Standby</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[14.5px]">
                  Mercedes S Class
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Audi A8
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Hummer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  BMW 7 Series
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Holden Caprice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Chrysler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Genesis
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h5 className="mb-5 text-[18px] font-bold">Interstate Cities</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[14.5px]">
                  Sydney Limo Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Melbourne Limo Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Canberra Limo Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Perth Limo Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Hobart Limo Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[14.5px]">
                  Brisbane Limo Hire
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white mt-10">
          <div className="flex flex-col gap-3 md:flex-row justify-between">
            <div>
              <p className="mb-0 text-[14.5px]">
                &copy; Sydney Limousine Services. All rights Reserved 2011-2024
              </p>
            </div>
            <div>
              <p className="mb-0">
                <Link href="#" className="text-[14.5px]">
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link href="#" className="text-[14.5px]">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="#" className="text-[14.5px]">
                  Cookies
                </Link>
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
