import React from "react";
import BannerCover from "@/components/layout/BannerCover";
import Image from "next/image";
import canberraImg from "@/public/canberra.jpg";
import Heading from "@/components/typography/Heading";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const canberraServices: ServiceDetails[] = [
  {
    serviceName: "Canberra Airport Transfers",
    description: `We do have Canberra Airport Transfer with Sedan and SUV limousine pick up where the driver Meet and Greet in the arrival hall with name sign and reach your desired destination. Booking early for our services to get an elegant service using our luxury car avoiding standing for hassle of taxis or shuttle services. We do have a range of selection of vehicle for couple or family pick up from the airport or hotel or private address. If you are on the lookout in Canberra for comfortable and luxurious services, no other company in the city can provide like our limousine Service. When customers click on airport this will come out drivers, to ride have the comfort and safety of a late-model, luxury cars of Canberra Airport Transfer will provide you with reliable transportation services.`,
  },
  {
    serviceName: "Point to Point",
    description: `Canberra Limo is a part of Corporate Car Services. This is a great service to reach you for your expected destination where it could be a dinner party, night on town or anniversary. Limousine Service. Planning to go to the Big Game with all your buddies or attending an upcoming Concert, Corporate Gaming Events, and New Year Eve. Our chauffeur will be responsible to reach your home safely when you have had extra drinks. We do have only provide service sedan and SUV. We will pick you up, get you to your event - right to the front entrance and bring you home again, so your journey will be hustle and bustle free. Our Chauffeur is here to provide you with an experienced service that makes it feel like it is a special day to remember & enjoyable in style & luxurious by our vehicles.`,
  },
  {
    serviceName: "Canberra Corporate Transfer",
    description: `Canberra Corporate Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeur works diligently to provide you with the very best chauffeured limousine service. We provide transportation for all corporate occasions, business meetings, seminars, business launches, and corporate gaming functions. Our reservation agents are happy to provide you with detailed information on the features and spaciousness of our limousines. You are guaranteed that your booked car will be on time according to your booking time, ensuring you feel stress-free to reach your scheduled appointment. Our first priority is zero tolerance for delays when it comes to your pick up.`,
  },
  {
    serviceName: "Canberra Tour Services",
    description: `We do have services to look around National Park and countryside where you can hire our limousine for a day or hourly basis with the driver for your hassle-free journey. Our ultimate tour offers a complete spectacular adventure using our professional chauffeurs and luxury cars. Our drivers are always timely and organized people who are respectful of our valued clients. We never keep our clients waiting for the car to arrive. Our goal is to provide our clients with the utmost luxury and relaxation. Canberra Tours offers a number of private, personal guided tours for people who would like to visit popular places in Northern Territory. All tours are limited to a maximum of four to six passengers.`,
  },
];

export default function SydneySuburbs() {
  return (
    <>
      <BannerCover />
      <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto py-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={canberraImg} width={700} alt="sydney" className="mb-5" />
          <div>
            <Heading>Canberra Tours & Travels</Heading>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              At Executive Car Service Canberra, we understand that business
              professionals do not have time to waste, especially when it comes
              to an executive car service. That is why we will get you there on
              time for your service. For more than 16 years, Car Service in
              Canberra has been providing limo and car services to the Canberra
              corporate and personal market. Our customers appreciate our
              dedication to providing reliable, comfortable, and safe
              transportation, as well as our commitment to treating each
              customer with prompt professionalism.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Whether you&apos;re seeking luxury car or limousine service for
              Canberra Airport, a convention, an important meeting, or a special
              event, our experienced chauffeurs know how important it is that
              you arrive on time. We strive to ensure prompt, reliable service
              in a late-model, well-maintained luxury vehicle driven by a
              courteous, professional chauffeur. We know the city of Canberra
              and surrounding areas inside and out; we also provide
              transportation services within the rest of the interstate of
              Australia.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We&apos;re available 24 hours a day, seven days a week; no job is
              too large or too small for our fleet of luxury sedans, SUVs, and
              vans. Car Service Canberra also provides transportation for
              personal events and special occasions, from weddings, honeymoons,
              and bachelor/bachelorette parties to proms, sporting events,
              birthday parties, or just that big night out on the town. Whether
              you need luxury transportation for business or pleasure, Canberra
              Limo Services is committed to getting you there on time, every
              time. For reservations or more information, call us today and ask
              about setting up a corporate account.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Canberra Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Canberra Airport Transfer is a comfortable Sedan and SUV limousine
              pick up where the chauffeur meets & greets you at any Terminal
              with your name sign, assists you with your luggage, and gets you
              to your destination safely. Keep an eye on the baggage claims area
              (for Domestic Flights arrival) for our chauffeur, who will be
              waiting for you and holding your name sign on iPad or printed
              paper. With Express Pick up (Curbside Pickup), our professional
              chauffeur will wait for you in the designated Limo parking area by
              the airport and touch base with you when your flight lands.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Booking early for our services ensures you get an elegant
              experience using our luxury cars, avoiding the hassle of taxis or
              shuttle services. We offer a range of vehicles for couple or
              family pick-ups from the airport, hotel, or private address. If
              you&apos;re looking for comfortable and luxurious services in
              Canberra, no other company can match our limousine service.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our limousine service provides reliable and cost-efficient luxury
              airport transportation with a focus on safety. Our cars are highly
              roadworthy, and our professional chauffeurs are knowledgeable
              about airport regulations for passenger pickups and drop-offs.
              Whether you need to transfer a group from a local airport to a
              meeting site or are planning a vacation to your favorite
              destination, we offer a wide range of accommodations from the
              Australian Holden Caprice (Top of the Range) to European Luxury
              vehicles.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Extra Services
            </h2>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We monitor all flights for you and our staff to ensure that the
              chauffeur is there to meet you on time. Our extra services to
              cater to you are as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
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
      <div className="container mx-auto py-10 px-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {canberraServices.map((service, index) => (
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
      </div>
    </>
  );
}
