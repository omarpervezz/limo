"use client";
import { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "@/components/typography/Paragraph";
import Heading from "../typography/Heading";

export default function Counter() {
  useEffect(() => {
    function animateValue(
      obj: HTMLElement,
      start: number,
      end: number,
      duration: number
    ): void {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const expertise = document.getElementById("expertise");
    const reservation = document.getElementById("reservation");
    const customer = document.getElementById("customer");

    if (expertise && reservation && customer) {
      animateValue(expertise, 0, 23, 5000);
      animateValue(reservation, 0, 125, 5000);
      animateValue(customer, 0, 99, 5000);
    }
  }, []);

  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div className="flex flex-col">
          <div>
            <Heading className="font-semibold">
              Numbers are telling our story
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              magni.
            </Paragraph>
          </div>
          <div className="mt-8 md:mt-12">
            <div className="flex flex-row gap-3">
              <div className="flex flex-col justify-center items-center border border-[#015f86] bg-[#015f86] text-white px-3 py-5 w-full rounded-md">
                <Heading className="flex justify-start p-0 m-0">
                  <div id="expertise">23</div>
                  <span>+</span>
                </Heading>
                <Paragraph>Years of Expertise</Paragraph>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#015f86] bg-[#015f86] text-white px-3 py-5 w-full rounded-md">
                <Heading className="flex justify-center p-0 m-0">
                  <div id="reservation">125</div>
                  <span>k</span>
                </Heading>
                <Paragraph>Reservations Served</Paragraph>
              </div>
              <div className="flex flex-col justify-center items-center border border-[#015f86] bg-[#015f86] text-white px-3 py-5 w-full rounded-md">
                <Heading className="flex justify-center p-0 m-0">
                  <div id="customer">99</div>
                  <span>%</span>
                </Heading>
                <Paragraph>Satisfied Customers</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
