import React from "react";
import Image from "next/image";
import city2 from "@/public/city-2.jpg";
import city1 from "@/public/city-1.jpg";
import Heading from "@/components/typography/Heading";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Paragraph from "@/components/typography/Paragraph";

function Sydney() {
  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] mx-auto">
      <MaxWidthWrapper>
        <div>
          <div className="text-black">
            <div className="flex flex-col md:flex-row gap-4">
              <Image src={city2} width={700} alt="sydney" className="w-full" />
              <Image src={city1} width={700} alt="sydney" className="w-full" />
            </div>
            <div className="flex flex-col gap-4">
              <Heading className="font-semibold mt-5">
                Sydney Tours & Travels
              </Heading>
              <Paragraph>
                Sydney Limousine Services in Sydney provides elegant and
                reliable transportation 24/7. Our fleets of varieties of luxury
                Sedan, SUV, Stretch Limo, and People Mover are sure to make your
                next business affairs, airport transfers, special event or just
                a night out on the town a great one. Our experienced chauffeurs
                are both professional and always courteous.
              </Paragraph>
              <Paragraph>
                We are dedicated to providing you with a reliable outstanding
                service for your special occasion, making it truly memorable. We
                provide each one of our customers with unlimited loyal attention
                and strive to serve them with quality transport service at very
                competitive prices.
              </Paragraph>
              <Paragraph>
                We target our customers&apos; various transportation needs such
                as chauffeur-driven cars, wedding transport, airport transfers,
                corporate pickup, sightseeing tours, special occasions, and
                various event coordination. Our prestige vehicles are always
                air-conditioned, maintained at a high level, and well-presented.
              </Paragraph>
              <Paragraph>
                Our courteous chauffeurs will ensure your punctuality and take
                you or your client safely and soundly to the destination on
                time. Whether it is a business trip, we aim to provide a
                stress-free ride to help you focus on your journey.
              </Paragraph>
              <Paragraph>
                Sydney Limousine Services provides a wide range of luxury sedans
                such as Holden Caprice, Mercedes-Benz S Class, BMW 7 Series,
                Audi A8, Chrysler 300C, Genesis, and Lexus. For your special
                needs, we also offer luxury SUVs like the Mercedes R Class and
                Audi Q7, Chrysler Stretch Limousines, and people movers like the
                Mercedes V Class/Viano, Toyota Tarago, and Hiace.
              </Paragraph>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Sydney;
