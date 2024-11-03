import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { sora } from "@/utils/font";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 uppercase",
  {
    variants: {
      variant: {
        btnOutline:
          "pt-[12px] pr-[30px] pb-[12px] pl-[20px] md:pt-[15px] md:pr-[40px] md:pb-[15px] md:pl-[50px] lg:pt-[17px] lg:pr-[47px] lg:pb-[17px] lg:pl-[60px] inline-flex items-center gap-x-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] lg:leading-[25px] font-medium border border-transparent disabled:opacity-50 disabled:pointer-events-none border border-gray-900 bg-gray-800 text-white",
        signUpBtn:
          "pt-[8px] pr-[20px] pb-[8px] pl-[12px] md:pt-[10px] md:pr-[25px] md:pb-[10px] md:pl-[30px] lg:pt-[10px] lg:pr-[35px] lg:pb-[10px] lg:pl-[40px] inline-flex items-center gap-x-2 text-[10px] leading-[21px] md:text-[12px] md:leading-[23px] lg:text-[14px] lg:leading-[25px] font-medium border border-transparent disabled:opacity-50 disabled:pointer-events-none border border-[#bfa37c] bg-[#bfa37c]",
      },
    },
    defaultVariants: {
      //   variant: "default",
      //   size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }), sora.className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
