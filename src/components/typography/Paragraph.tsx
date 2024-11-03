import { FC } from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={`text-[12px] leading-[18px] md:text-[14px] md:leading-[22px] lg:text-[16px] lg:leading-[24px] font-normal ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
