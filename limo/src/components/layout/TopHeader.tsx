import React from "react";

import { Phone, MapPin } from "lucide-react";
import { sora } from "@/utils/font";
import Link from "next/link";

function TopHeader() {
  return (
    <div className="relative w-[78%] rounded-2xl mx-auto">
      <div className="max-w-screen-2xl py-4 mx-auto">
        <div
          className={`flex flex-col gap-2 md:flex-row md:justify-between ${sora.className}`}
        >
          <div className="flex items-center gap-2 text-white">
            <Phone className="w-3 h-3 md:w-5 md:h-5" />
            <Link href="tel:+12345678901">
              <span className="text-[10px] md:text-[11px] md:leading-[20px] lg:text-[13px] lg:leading-[22px] font-normal transition-colors duration-300 ease-in-out hover:text-[#918367]">
                +61 439 853700
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-3 h-3 md:w-5 md:h-5" />
            <span className="text-[10px] md:text-[11px] md:leading-[20px] lg:text-[13px] lg:leading-[22px] font-normal transition-colors duration-300 ease-in-out">
              275 Alfred Street, North Sydney NSW 2060, Australia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
