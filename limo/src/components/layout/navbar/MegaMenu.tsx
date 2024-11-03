import MenuItem from "./MenuItem";

// Define the type for each submenu item
interface SubmenuItem {
  label: string;
  href: string;
}

// Define the type for each nested menu section
interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

// Define the type for the main menu item
interface MenuDataItem {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[]; // Optional because not all menu items have nested menus
}

// Correct menuData type to be an array of MenuDataItem
const menuData: MenuDataItem[] = [
  {
    label: "Home",
    href: "/",
    // nestedMenu: [
    //   {
    //     heading: "Interiors",
    //     submenu: [
    //       {
    //         label: "Lorem ipsum dolor sit amet consectetur",
    //         href: "#",
    //       },
    //       { label: "Ipsam sequi provident", href: "#" },
    //       { label: "Porro impedit exercitationem", href: "#" },
    //     ],
    //   },
    //   {
    //     heading: "Interiors",
    //     submenu: [
    //       { label: "Excepturi corporis atque libero", href: "#" },
    //       {
    //         label: "Ratione recusandae incidunt atque libero",
    //         href: "#",
    //       },
    //       {
    //         label: "Excepturi corporis atque libero",
    //         href: "#",
    //       },
    //     ],
    //   },
    //   {
    //     heading: "Interiors",
    //     submenu: [
    //       {
    //         label: "Exercitationem corporis a voluptas at atque libero",
    //         href: "#",
    //       },
    //       { label: "Provident, odio obcaecati", href: "#" },
    //       {
    //         label: "Porro impedit corporis atque libero dolor impedit corporis",
    //         href: "#",
    //       },
    //     ],
    //   },
    //   {
    //     heading: "Interiors",
    //     submenu: [
    //       { label: "Corporis consequatur consectetur", href: "#" },
    //       {
    //         label: "Accusamus vero beatae dolor impedit corporis",
    //         href: "#",
    //       },
    //       { label: "Ab corrupti deserunt laborum", href: "#" },
    //     ],
    //   },
    // ],
  },
  {
    label: "About Us",
    href: "/about-us",
    // nestedMenu: [
    //   {
    //     heading: "Design Ideas",
    //     submenu: [
    //       { label: "Lorem ipsum dolor sit consectetur", href: "#" },
    //       {
    //         label: "Ratione recusandae incidunt dolor impedit corporis",
    //         href: "#",
    //       },
    //       { label: "Accusamus vero beatae dolor", href: "#" },
    //     ],
    //   },
    //   {
    //     heading: "Design Ideas",
    //     submenu: [
    //       { label: "Excepturi sapiente sequi", href: "#" },
    //       {
    //         label: "Ratione recusandae dolor impedit corporis",
    //         href: "#",
    //       },
    //       { label: "Dolor sit consectetur dolor impedit", href: "#" },
    //       { label: "Repellat corporis excepturi", href: "#" },
    //       { label: "Corporis consequatur", href: "#" },
    //     ],
    //   },
    //   {
    //     heading: "Design Ideas",
    //     submenu: [
    //       { label: "Lorem ipsum dolor sit consectetur", href: "#" },
    //       { label: "Repellat corporis excepturi?", href: "#" },
    //       {
    //         label: "Dolor sit consectetur dolor impedit corporis",
    //         href: "#",
    //       },
    //       { label: "Ratione recusandae", href: "#" },
    //     ],
    //   },
    // ],
  },
  {
    label: "Service",
    href: "/service",
    // nestedMenu: [
    //   {
    //     heading: "Magazine",
    //     submenu: [
    //       { label: "Lorem ipsum dolor sit consectetur", href: "#" },
    //       {
    //         label: "Dolor sit consectetur dolor impedit corporis",
    //         href: "#",
    //       },
    //       { label: "Corporis consequatur", href: "#" },
    //     ],
    //   },
    //   {
    //     heading: "Magazine",
    //     submenu: [
    //       {
    //         label: "Lorem ipsum dolor sit amet consectetur",
    //         href: "#",
    //       },
    //       { label: "Lorem ipsum dolor sit consectetur", href: "#" },
    //       {
    //         label: "Ratione recusandae incidunt dolor impedit corporis",
    //         href: "#",
    //       },
    //       {
    //         label: "Accusamus vero beatae dolor dolor impedit ",
    //         href: "#",
    //       },
    //       { label: "Lorem ipsum dolor sit consectetur", href: "#" },
    //       { label: "Ratione recusandae incidunt", href: "#" },
    //       { label: "Accusamus vero beatae dolor", href: "#" },
    //     ],
    //   },
    //   {
    //     heading: "Magazine",
    //     submenu: [
    //       {
    //         label: "Ratione recusandae incidunt dolor impedit corporis",
    //         href: "#",
    //       },
    //     ],
    //   },
    // ],
  },
  { label: "Service Area", href: "/service-area" },
  {
    label: "Fleets",
    href: "/fleets",
    // nestedMenu: [
    //   {
    //     heading: "Cities",
    //     submenu: [
    //       { label: "Lorem ipsum dolor", href: "#" },
    //       { label: "Repellat corporis?", href: "#" },
    //       { label: "Dolor sit consectetur dolor impedit", href: "#" },
    //       { label: "Ratione recusandae", href: "#" },
    //       { label: "Dolor sit consectetur", href: "#" },
    //       { label: "Ratione recusandae", href: "#" },
    //     ],
    //   },
    //   {
    //     heading: "Cities",
    //     submenu: [
    //       { label: "Dolor sit consectetur", href: "#" },
    //       { label: "Ratione recusandae dolor impedit", href: "#" },
    //       { label: "Dolor sit consectetur", href: "#" },
    //       { label: "Ratione recusandae", href: "#" },
    //     ],
    //   },
    //   {
    //     heading: "Cities",
    //     submenu: [
    //       { label: "Lorem ipsum dolor", href: "#" },
    //       { label: "Repellat corporis?", href: "#" },
    //       { label: "Dolor sit consectetur", href: "#" },
    //       {
    //         label: "Ratione recusandae dolor impedit corporis",
    //         href: "#",
    //       },
    //       { label: "Dolor sit consectetur", href: "#" },
    //       { label: "Ratione recusandae", href: "#" },
    //     ],
    //   },
    // ],
  },
  { label: "Rates", href: "/rates" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blogs" },
];

// Define the props for the MegaMenu component
interface MegaMenuProps {
  handleToggle?: (index: number) => void; // Optional function to handle toggle
  clicked?: number; // Index of the currently clicked item
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional function to set drawer state
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  handleToggle,
  clicked,
  setIsDrawerOpen,
}) => {
  return (
    <div className="nav__container">
      <nav>
        <ul className={`lg:flex lg:items-center lg:leading-[50px]`}>
          {menuData.map(({ label, href, nestedMenu }, index) => {
            return (
              <MenuItem
                key={index}
                label={label}
                href={href}
                nestedMenu={nestedMenu}
                setIsDrawerOpen={setIsDrawerOpen}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
