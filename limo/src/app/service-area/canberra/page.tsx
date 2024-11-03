import React from "react";
import BannerCover from "@/components/layout/BannerCover";
import Image from "next/image";
import sydney from "@/public/sydney.jpg";
import Heading from "@/components/typography/Heading";
import Section from "@/components/layout/Section";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const sydneyServices: ServiceDetails[] = [
  {
    serviceName: "Sydney Airport Transfers",
    description: `Sydney Airport Transfers provides service with a comfortable Sedan and SUV limousine pick up where the chauffeur meets you in the arrival hall or language carousel area of the Terminal with your name sign, assists you with your luggage, and gets you to your destination safely. Keep an eye on the baggage claims area (for Domestic Flights arrival) for our chauffeur, who will be waiting for you and holding your name sign on iPad or printed paper. Our professional chauffeur will take care of all about your stress-free transfer and door-to-door service. You will get SMS during touch base with you when your flight lands. So book our airport transfer services to get an elegant service using our luxury car avoiding standing for hassle of public transport or taxi services.`,
  },
  {
    serviceName: "Sydney Limo Service",
    description: `Sydney Limo is a part of Corporate Car Services. This is a great service to reach you for your expected destination whether it could be a dinner party, night on town, or anniversary. Limousine Service. Planning to go to the Big Game with all your buddies or attending an upcoming Concert, Corporate Gaming Events, and New Year Eve. Our chauffeur will be responsible to reach your home safely when you have had an extra drink. We do have only provide service sedan and SUV. We will pick you up, get you to your event - right to the front entrance and bring you home again, so your journey will be hassle and bustle free. Our Chauffeur is here to provide an experienced service that makes feel like it is a special day to remember & enjoyable in style & luxurious by our vehicles.`,
  },
  {
    serviceName: "Sydney Corporate Transfer",
    description: `Sydney Corporate Car Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeur works diligently to provide you with the very best chauffeured limousine service. We provide transportation for all corporate occasions, business meetings, seminars, business launch, and corporate gaming functions. Our reservation agents are happy to provide you with detailed information on the features and spaciousness of our limousines. You are guaranteed as your booked car will be on time according to your booking time which you feel stress-free to reach your scheduled appointment as our first priority is zero tolerance for the booking time for your pick up.`,
  },
  {
    serviceName: "Sydney Tour Services",
    description: `We do have services also to look around National Park and countryside where you can hire our limousine for a day or hourly basis with the driver for your hassle and bustle free. Our ultimate tour has a complete spectacular adventure unfolds experience using our professional chauffeur and luxury cars. Our drivers are always timely and organized people who are respectful of our valued clients. We never keep our clients waiting for the car to arrive and our goal is to provide our clients with the luxury and relaxation atmosphere. Sydney Tours as we offer a number of private, personal guided tours for people who would like to visit popular places in New South Wales. All tours are limited to a maximum of four and six passengers.`,
  },
];

export default function Sydney() {
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <MaxWidthWrapper>
        <div className="flex flex-col items-start justify-center text-black">
          <Image src={sydney} width={700} alt="sydney" className="mb-5" />
          <div>
            <Heading>Sydney Tours & Travels</Heading>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Sydney Limousine Services in Sydney provides elegant and reliable
              transportation 24/7. Our fleets of varieties of luxury Sedan, SUV,
              Stretch Limo, and People Mover are sure to make your next business
              affairs, airport transfers, special event or just a night out on
              the town a great one. Our experienced chauffeurs are both
              professional and always courteous.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We are dedicated to providing you with a reliable outstanding
              service for your special occasion, making it truly memorable. We
              provide each one of our customers with unlimited loyal attention
              and strive to serve them with quality transport service at very
              competitive prices.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We target our customers&apos; various transportation needs such as
              chauffeur-driven cars, wedding transport, airport transfers,
              corporate pickup, sightseeing tours, special occasions, and
              various event coordination. Our prestige vehicles are always
              air-conditioned, maintained at a high level, and well-presented.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our courteous chauffeurs will ensure your punctuality and take you
              or your client safely and soundly to the destination on time.
              Whether it is a business trip, we aim to provide a stress-free
              ride to help you focus on your journey.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Sydney Limousine Services provides a wide range of luxury sedans
              such as Holden Caprice, Mercedes-Benz S Class, BMW 7 Series, Audi
              A8, Chrysler 300C, Genesis, and Lexus. For your special needs, we
              also offer luxury SUVs like the Mercedes R Class and Audi Q7,
              Chrysler Stretch Limousines, and people movers like the Mercedes V
              Class/Viano, Toyota Tarago, and Hiace.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        {sydneyServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#eaeaea] shadow-lg overflow-hidden flex flex-col"
          >
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {service.serviceName}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </>
  );
}
