"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import logo from "/public/logo/logo.svg";
import UserProfile from "./UserProfile";
import { AlignJustify } from "lucide-react";
import MegaMenu from "./MegaMenu";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import Image from "next/image";

interface MobileMenuOpeningPosition {
  mobileMenuPos?: "left" | "right" | "top" | "bottom"; // Make it optional
}
const Navigation = ({ mobileMenuPos = "left" }: MobileMenuOpeningPosition) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <>
      {/* <TopHeader /> */}
      <div className="h-[70px] w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] flex items-center rounded-2xl mx-auto">
        <div className="max-w-screen-2xl w-full mx-auto">
          <div className="flex items-center justify-between gap-4 h-[70px]">
            <button
              ref={drawerButtonRef}
              className="border-none h-[45px] w-[45] bg-transparent block lg:hidden"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
            >
              {/* Mobile Hamburger menu */}
              <AlignJustify className="text-black" />
            </button>
            <Link className="flex items-center" href={"/"}>
              <Image
                width={150}
                className="bg-white pl-[15px] pt-2 pb-2 mt-1 rounded-md"
                src={logo}
                alt="Logo"
                priority={true}
              />
            </Link>

            <div className="hidden lg:block">
              <MegaMenu />
            </div>
            <UserProfile />

            {/* Mobile navigation drawer */}
            <div className="lg:hidden absolute">
              <MobileNavigationDrawer
                {...{
                  isDrawerOpen,
                  setIsDrawerOpen,
                  drawerButtonRef,
                  mobileMenuPos,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
