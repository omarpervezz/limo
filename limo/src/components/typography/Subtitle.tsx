import { FC } from "react";
import { inconsolata } from "@/utils/font";
import { cn } from "@/utils/utils";
interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SubTitle: FC<SubTitleProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "ext-[11px] leading-[18px] md:text-[12px] md:leading-[20px] lg:text-[14px] lg:leading-[24px] uppercase inline-block font-normal",
        inconsolata.className,
        className
      )}
    >
      {children}
    </span>
  );
};

export default SubTitle;
