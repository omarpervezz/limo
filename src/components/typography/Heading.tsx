import { FC } from "react";
import { epilogue } from "@/utils/font";
import { cn } from "@/utils/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Heading: FC<HeadingProps> = ({ children, className, id }) => {
  return (
    <h2
      id={id}
      className={cn(
        "text-[28px] leading-[40px] md:text-[36px] md:leading-[48px] lg:text-[42px] lg:leading-[55px] ${epilogue.className} ${className}",
        className,
        epilogue.className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
