import { FC } from "react";
import { epilogue } from "@/utils/font";

interface CardHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const CardHeading: FC<CardHeadingProps> = ({ children, className, id }) => {
  return (
    <h3
      id={id}
      className={`font-medium font-sans text-[14px] leading-[20px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[28px] ${epilogue.className} ${className}`}
    >
      {children}
    </h3>
  );
};

export default CardHeading;
{
  /* <ul className="flex flex-row justify-between w-full space-x-2">
                        <li className="text-purple-600 text-sm font-bold">
                          {car.category}
                        </li>
                        <li className="text-gray-800 font-semibold text-sm">
                          {car.luggage}
                        </li>
                      </ul> */
}
