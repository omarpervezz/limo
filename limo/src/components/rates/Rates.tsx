import React from "react";
import Link from "next/link";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
const Rates = () => {
  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] bg-[#FFF] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div className="mb-8 text-black">
          <Heading className="mb-3">Limousine Rates</Heading>
          <Paragraph className="mb-4">
            Sydney Limousine Services provides each one of our customers with
            unlimited loyal attention to serve them with quality service at a
            competitive price. Sydney Limousine Services is the leading airport
            transfers in Sydney and other interstate cities in Melbourne,
            Brisbane, Canberra, Adelaide, Perth, Gold Coast, Darwin, and Hobart.
          </Paragraph>
          <Paragraph className="mb-4 font-semibold">
            We do have availability of online quotation for Australia-wide
            capital cities for airport transfer and corporate transfers for your
            convenience.
          </Paragraph>
          <Paragraph className="mb-4">
            The following Hourly Rates cover 10 radius KM and require a minimum
            of two hours booking on different vehicles and different occasions
            for your convenience. Any further distance will be added according
            to kilometers.
          </Paragraph>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">
                  <Paragraph className="font-semibold">Vehicles</Paragraph>
                </th>
                <th className="border border-gray-300 p-2">
                  <Paragraph className="font-semibold">
                    Corporate/Airport Transfer/Point to Point
                  </Paragraph>
                </th>
                <th className="border border-gray-300 p-2">
                  <Paragraph className="font-semibold">
                    Weddings/Filming
                  </Paragraph>
                </th>
                <th className="border border-gray-300 p-2">
                  <Paragraph className="font-semibold">Sight Seeing</Paragraph>
                </th>
                <th className="border border-gray-300 p-2">
                  <Paragraph className="font-semibold">
                    Olympic Park - City&nbsp;<small>(RTN)</small>
                  </Paragraph>
                </th>
                <th className="border border-gray-300 p-2">
                  <Paragraph className="font-semibold">Pax</Paragraph>
                </th>
                <th className="border border-gray-300 p-2">
                  <Paragraph className="font-semibold">Luggage</Paragraph>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Executive Car (Genesis/Lexus/Caprice/Chrysler)- 4 Seats
                </td>
                <td className="border border-gray-300 p-2">$122.10</td>
                <td className="border border-gray-300 p-2">$155.40</td>
                <td className="border border-gray-300 p-2">$122.10</td>
                <td className="border border-gray-300 p-2">$555.00</td>
                <td className="border border-gray-300 p-2">4</td>
                <td className="border border-gray-300 p-2">2 Big + 2 Small</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  European Luxury Sedan (Mercedes S Class/Audi A8/BMW 7Series)-4
                  Seats
                </td>
                <td className="border border-gray-300 p-2">$166.50</td>
                <td className="border border-gray-300 p-2">$194.25</td>
                <td className="border border-gray-300 p-2">$166.50</td>
                <td className="border border-gray-300 p-2">$666.00</td>
                <td className="border border-gray-300 p-2">4</td>
                <td className="border border-gray-300 p-2">2 Big + 2 Small</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Luxury SUV (Audi Q7/ Mercedes R Class/Lexus) - 6 Seats
                </td>
                <td className="border border-gray-300 p-2">$144.30</td>
                <td className="border border-gray-300 p-2">$194.25</td>
                <td className="border border-gray-300 p-2">$166.50</td>
                <td className="border border-gray-300 p-2">$777.00</td>
                <td className="border border-gray-300 p-2">4</td>
                <td className="border border-gray-300 p-2">4 Big + 4 Small</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Mercedes V Class/Viano - 7 Seats
                </td>
                <td className="border border-gray-300 p-2">$155.40</td>
                <td className="border border-gray-300 p-2">$222.00</td>
                <td className="border border-gray-300 p-2">$177.60</td>
                <td className="border border-gray-300 p-2">$888.00</td>
                <td className="border border-gray-300 p-2">6</td>
                <td className="border border-gray-300 p-2">6 Big + 6 Small</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Stretch Chrysler 300C- 10 Seats
                </td>
                <td className="border border-gray-300 p-2">$555.00</td>
                <td className="border border-gray-300 p-2">$555.00</td>
                <td className="border border-gray-300 p-2">$555.00</td>
                <td className="border border-gray-300 p-2">$1554.00</td>
                <td className="border border-gray-300 p-2">10</td>
                <td className="border border-gray-300 p-2">3 Big + 3 Small</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Stretch Hummer H2 - 14 Seats
                </td>
                <td className="border border-gray-300 p-2">$665.00</td>
                <td className="border border-gray-300 p-2">$665.00</td>
                <td className="border border-gray-300 p-2">$665.00</td>
                <td className="border border-gray-300 p-2">$1776.00</td>
                <td className="border border-gray-300 p-2">14</td>
                <td className="border border-gray-300 p-2">3 Big + 3 Small</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Mercedes Sprinter - 11 Seats
                </td>
                <td className="border border-gray-300 p-2">$177.60</td>
                <td className="border border-gray-300 p-2">$244.20</td>
                <td className="border border-gray-300 p-2">$244.20</td>
                <td className="border border-gray-300 p-2">$1110.00</td>
                <td className="border border-gray-300 p-2">13</td>
                <td className="border border-gray-300 p-2">8 Big + 8 Small</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-8">
          <Paragraph className="font-semibold">
            Hiring Terms & Conditions:
          </Paragraph>
          <Paragraph className="mb-4">
            A) The minimum pickup fee is $88.80 for Executive Car (4 Pax only).
          </Paragraph>
          <Paragraph className="mb-4">
            B) There are 7 categories of limo such as Executive Car, European
            Sedan, Luxury SUV, People Movers Small, People Movers Big, Chrysler
            Stretch Limousine, and Hummer Stretch Limousine. There will be
            strictly no choice of limo from Vehicle Category bookings, so the
            first available vehicle will be dispatched from the fleet. If there
            is any special request for a specific car/limo or color, a higher
            surcharge will be applied.
          </Paragraph>
          <Paragraph className="mb-4">
            C) Our hourly travel requires a minimum two hours booking for your
            special needs such as Weddings, Sight Seeing, Corporate Transfers,
            Tours, and Weddings. Online Quotation and Reservation prices may
            vary depending on destination from our chart price. Hourly rates are
            covered by a 10 radius KM from the main downtown area for a minimum
            two hours booking. If more than 10KM is increased, please get a
            quotation from the &quot;Instant Quotation&gt;&gt;Booking&quot; box
            on the Home Page.
          </Paragraph>
          <Paragraph className="mb-4">
            D) There are 10 minutes complimentary from the booking time along
            with the set fare. If there is any further delay, an hourly rate is
            charged for waiting time on every 15 minutes slot according to the
            vehicle hired.
          </Paragraph>
          <Paragraph className="mb-4">
            E) If there is any detour or extra pick-up occurred, there will be
            extra charges from $11.10 to $111.00 for each and every stop within
            a five-kilometre radius limit.
          </Paragraph>
          <Paragraph className="mb-4">
            F) Request for Baby Capsule (0-6 Months), Child Seat (7 Months - 4
            Years), and Booster Seat (4 Yrs - 7 Yrs) will incur a $16.65
            surcharge with regular price. Please see the NSW child seat
            regulation link:{" "}
            <Link
              href="http://www.babysafechildrestraints.com.au/child-restraints-price-list/nsw-regulation/"
              className="text-blue-500 underline"
            >
              baby safe child restraints - NSW regulation
            </Link>
            .
          </Paragraph>
          <Paragraph className="mb-4">
            G) &quot;Meet and Greet Service&quot; is provided from the airport
            and seaport where the drivers wait in the arrival hall with a name
            sign.
          </Paragraph>
          <Paragraph className="mb-4">
            H) There is a 20% extra surcharge applicable on the regular price if
            service is provided between 10pm and 6am.
          </Paragraph>
          <Paragraph className="mb-4">
            I) Higher surcharge is applied for &quot;SPECIAL EVENTS,&quot; for
            example, New Year&quot;s Eve (0400pm 31st Dec - 0600am 1st Jan),
            Sydney Olympic Park, Moore Park, and Race Course events pick-up &
            drop-off. The &quot;Special Events&quot; transfer type must be
            selected for these occasions; otherwise, bookings will be canceled
            under the wrong category of Transfer Type chosen and a 10% surcharge
            will be applied. Any cancellation of Special Events within 7 days
            will incur a 50% booking fee charge.
          </Paragraph>
          <Paragraph className="mb-4">
            J) Sydney Limousine Services reserves the right to cancel the
            booking if the selected transfer type is other than “Special Event”
            at big events in Sydney Olympic Park, Racecourse, New Year&quot;s
            Eve, Moore Park & other popular venues. If you select the wrong
            &quot;Transfer Type&quot; under the service category, the variance
            amount will be charged to the existing credit card used for booking.
          </Paragraph>
          <Paragraph className="mb-4">
            K) Sydney Limousine Services reserves the right to cancel the
            booking due to management, vehicle mechanical, or accidental issues.
            In this case, the full amount of the booking cost will be refunded
            to your nominated credit card or account.
          </Paragraph>
          <Paragraph className="mb-4">
            L) If your pickup is from Sydney Airport and the flight is delayed
            by more than 55 minutes, there is a probability to cancel your
            booking for Chrysler or Hummer Stretch Limousine. We will
            alternatively organize another available vehicle other than a
            stretch limousine for your airport pickup.
          </Paragraph>
        </div>

        <div className="my-8">
          <Paragraph className="text-lg font-bold">
            Pickup from the Airport:
          </Paragraph>
          <Paragraph className="mb-4">
            There is no extra waiting time charged up to 25 minutes from the
            domestic terminal and 55 minutes from the international terminal
            since the flight lands. However, extra time consumed for clearing
            customs and baggage delays will be charged in addition to payable
            extra airport tolls according to the hourly rate. We do not charge
            for flight delays as the flight landing time is monitored by our
            team members, unless you change the flight without notification.
          </Paragraph>
          <Paragraph className="mb-4">
            <strong>Sydney International Airport - Terminal One (T1):</strong>{" "}
            Our Chauffeur will hold your designated name sign board in the
            arrival hall and SMS to you during the flight landing. Please
            provide an international or local mobile phone number on your
            reservation. There are two exits A & B in the Sydney International
            Arrival Hall where the chauffeur waits after 20 minutes of the
            flight landing with the sign according to your flight number. If
            there is any problem finding the driver, please call{" "}
            <a href="tel:+61439853700" className="text-blue-500">
              +61439853700
            </a>
            .
          </Paragraph>
          <Paragraph className="mb-4">
            <strong>Sydney Domestic Airport - Terminal Two (T2):</strong> There
            are designated Limousine pick-up spots for T2, where the chauffeur
            waits with the name board after 15 minutes of the flight landing
            outside of carousel four or five for Virgin Australia, Jet Star,
            Rex, and Pelican Airways. You will receive an SMS with the car
            registration number from the driver during the landing. If there is
            any problem finding the driver, please call{" "}
            <a href="tel:+61439853700" className="text-blue-500">
              +61439853700
            </a>
            .
          </Paragraph>
          <Paragraph className="mb-4">
            <strong>Sydney Domestic Airport - Terminal Three (T3):</strong>{" "}
            Limousine pick-up spots for T3 are where the chauffeur waits with
            the name board after 15 minutes of the flight landing outside of
            carousel two or one for Qantas Airways domestic flights. You will
            receive an SMS with the car registration number. If there is any
            problem finding the driver, please call{" "}
            <a href="tel:+61439853700" className="text-blue-500">
              +61439853700
            </a>
            .
          </Paragraph>
          <Paragraph className="mb-4">
            <strong>International Terminal - Interstate City:</strong> The
            chauffeur waits with the name sign according to your flight number
            in the Arrival Hall after 20 minutes of the flight landing. You will
            receive an SMS from the driver during the flight landing. If there
            is any problem finding the driver, please call{" "}
            <a href="tel:+61439853700" className="text-blue-500">
              +61439853700
            </a>
            .
          </Paragraph>
          <Paragraph className="mb-4">
            <strong>Domestic Airport - Interstate City:</strong> The chauffeur
            waits with the name board after 15 minutes of the flight landing at
            the designated carousel area for the domestic flight. If there is
            any problem finding the driver, please call{" "}
            <a href="tel:+61439853700" className="text-blue-500">
              +61439853700
            </a>
            .
          </Paragraph>
        </div>

        <div className="my-8">
          <Paragraph className="text-lg font-bold">
            Booking Cancellation Policy:
          </Paragraph>
          <Paragraph className="mb-4">
            » Any cancellation received before 48 hours prior to booking time
            will incur a cancellation fee of 25% of the full pickup cost. If you
            alter the date, an extra 20% booking fee will be added.
          </Paragraph>
          <Paragraph className="mb-4">
            » Cancellations received within 48 hours prior to booking time will
            incur a cancellation fee of 50% of the full pickup cost.
          </Paragraph>
          <Paragraph className="mb-4">
            » Cancellations received within 24 hours prior to booking time will
            incur a cancellation fee of the full pickup cost.
          </Paragraph>
          <Paragraph className="mb-4">
            » There is a 50% cancellation fee on Stretch Limousines (Hummer &
            Chrysler) and Mercedes Van (People Mover Small & Big) after booking
            confirmation. Cancellations received within 7 days prior to booking
            time will incur a fee of the full cost.
          </Paragraph>
          <Paragraph className="font-semibold italic">
            Note: Failure to arrive or no show will incur the full cost, and
            refunds will not be given for any part of the booking.
          </Paragraph>
        </div>
        <div>
          <Paragraph className="mb-4">
            Sydney Limousine Services has a complete price list from Sydney CBD
            to Suburb and Sydney Airport to Suburb for your convenience.
          </Paragraph>
          <Paragraph className="mb-4 font-semibold">
            We accept a variety of payment methods, including cash:
          </Paragraph>
          <Paragraph className="mb-4 font-semibold">
            Our quoted prices include 10% GST (Goods and Services Tax) and a 1%
            service fee applies to credit cards, airport, and road tolls. The
            following payment methods are accepted:
          </Paragraph>
          <ul className="list-disc list-inside">
            <li>Cabcharge</li>
            <li>Major Credit Cards</li>
            <li>Debit Cards</li>
            <li>Bank Check</li>
          </ul>
        </div>
        <div className="text-left mt-8">
          <a
            href="#"
            className="bg-teal-600 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-all"
          >
            Quote and Book Now
          </a>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Rates;
