import Link from "next/link";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import DropdownContent from "./DropdownContent";
import { ChevronDown, ChevronUp } from "lucide-react";
import { sora } from "@/utils/font";

// Define types for the component props
interface SubmenuItem {
  label: string;
  href: string;
}

interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

interface MenuItemProps {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[]; // Optional, as some items might not have a submenu
  onToggle?: () => void; // Optional, used for toggling dropdown
  active: boolean; // Whether the item is active or not
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional, to control the drawer state
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  href,
  nestedMenu,
  onToggle,
  active,
  setIsDrawerOpen,
}) => {
  const handleClick = () => {
    // Blur the active element to lose focus
    const activeElement = document.activeElement as HTMLElement | null;
    activeElement?.blur();
  };

  return (
    <li className="xl:px-0 2xl:px-3">
      <div
        className={`nav_item_content relative flex w-ful justify-evenly border-b border-[#cacaca] h-12 lg:border-none lg:h-auto`}
      >
        <Link
          href={href}
          className={`${
            active ? "active" : ""
          } text-black w-full lg:text-[13px] xl:text-[16px] 2xl:text-[17px] font-medium px-4 flex items-center lg:px-[0.7rem] ${
            sora.className
          }`}
          onClick={() => {
            setIsDrawerOpen?.(false);
            handleClick();
          }}
        >
          {label}
        </Link>
        {nestedMenu && (
          <button
            className="px-3 border-none bg-white flex items-center lg:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? "true" : "false"}
          >
            {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
      {nestedMenu && (
        <div
          role="menu"
          className={`dropdown bg-hero-bg bg-cover bg-center text-white lg:absolute lg:left-0 lg:top-[110px] lg:w-full lg:border-b lg:border-[#a18b7f] lg:rounded-b-[16px] lg:pt-8 lg:pb-8 lg:invisible lg:z-10 ${
            active ? "h-auto" : "h-0 overflow-hidden md:h-auto"
          }`}
        >
          <MaxWidthWrapper>
            <DropdownContent
              submenuscontent={nestedMenu}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
            />
          </MaxWidthWrapper>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
