import React from "react";
import Image from "next/image";
import city2 from "@/public/city-2.jpg";
import city1 from "@/public/city-1.jpg";
import Heading from "@/components/typography/Heading";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Paragraph from "@/components/typography/Paragraph";
import CardHeading from "@/components/typography/CardHeading";

function Melbourne() {
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
              <Heading
                className="mt-5
              "
              >
                Melbourne Tours & Travels
              </Heading>
              <Paragraph>
                Melbourne Transfer Services offers affordable car and limo
                service you can rely on. As the number one premier limousine
                service for Corporate Transfer, Airport Transfer, and
                Sightseeing Tours, our Melbourne airport car service fulfills
                all your transportation needs in the corporate community and
                personal service neighborhood area. We are your number one
                choice for exclusive ground transportation service in Melbourne.
              </Paragraph>
              <Paragraph>
                We deliver complete choices of airport transportation, hourly
                charters, point-to-point, and corporate travel in the limo
                service industry. With over a decade of experience, our
                reputation for excellence speaks for itself. We provide wide
                transportation services in the Melbourne Metropolitan area.
              </Paragraph>
              <Paragraph>
                Our passengers’ safety is our highest priority. We demand
                excellence from each driver and insist on superior accrediting
                and certification. Current licensing is maintained at all times,
                and drivers must continually satisfy safe-driving requirements.
                Our vehicles are always kept roadworthy by an inspection team,
                and the fleet undergoes necessary inspections that satisfy all
                local, state, and federal regulations. From pickup to drop-off,
                Melbourne Limo keeps you comfortable and safe.
              </Paragraph>
              <CardHeading className="font-semibold">
                Melbourne Airport Transfer
              </CardHeading>
              <Paragraph>
                Melbourne Airport Transfer offers comfortable Sedan and SUV
                limousine pickups where the chauffeur greets you at any Terminal
                with your name sign, assists you with your luggage, and ensures
                you reach your destination safely. Our chauffeurs will be
                waiting at the baggage claims area (for Domestic Flights
                arrival) with your name sign on an iPad or printed paper. With
                Express Pick-up (Curbside Pickup), our professional chauffeurs
                will wait in the designated Limo parking area by the airport and
                touch base with you when your flight lands.
              </Paragraph>
              <Paragraph>
                Booking early for our services ensures an elegant experience
                using our luxury cars, avoiding the hassle of taxis or shuttle
                services. We offer a range of vehicle options for couples or
                family pick-ups from the airport, hotel, or private addresses.
                No other company in the city can provide the luxurious services
                that Melbourne Limousine Service offers.
              </Paragraph>
              <CardHeading className="font-semibold">
                Safety and Comfort
              </CardHeading>
              <Paragraph>
                Our limousine service provides reliable and cost-efficient
                luxury airport transportation with a focus on safety. Our cars
                are highly roadworthy, and our professional chauffeurs are
                well-versed in airport regulations governing passenger pickups
                and drop-offs. Whether you&apos;re transferring a group from a
                local airport to a meeting site or planning a vacation to your
                favorite holiday destination, we can provide accommodations
                ranging from the Australian Holden Caprice (Top of the Range) to
                European Luxury vehicles.
              </Paragraph>
              <CardHeading className="font-semibold">
                Our Extra Services
              </CardHeading>
              <Paragraph>
                We monitor all flights for you and our staff to ensure that the
                chauffeur is there to meet you on time. Our extra services to
                cater to you are as follows:
              </Paragraph>
              <ul className="list-disc list-inside text-[12px] leading-[18px] md:text-[14px] md:leading-[22px] lg:text-[16px] lg:leading-[27px] font-normal">
                <li>Express Pick-up</li>
                <li>SMS receive on landing</li>
                <li>Meet & Greet</li>
                <li>24 Hours / 365 Days Service</li>
                <li>VIP Service</li>
                <li>Flight tracking service</li>
                <li>We are fully licensed and insured</li>
                <li>Experienced chauffeur</li>
                <li>Immaculate luxury chauffeured cars</li>
                <li>Government accredited chauffeur</li>
                <li>Availability for child and booster seats</li>
                <li>Feeling luxury</li>
                <li>Light refreshment when you board</li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Melbourne;
