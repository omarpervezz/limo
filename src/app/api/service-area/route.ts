import { NextResponse } from "next/server";
import city1 from "@/public/sydney-img/rxcrfE5-sidney-wallpaper.jpg";
import city2 from "@/public/melbourne-img/wp1927838-melbourne-wallpapers.jpg";
import city3 from "@/public/canberra-img/wp2293990-canberra-wallpapers.jpg";
import city4 from "@/public/perth-img/wp1892632-perth-wallpapers.jpg";
import city5 from "@/public/hobart-img/wp10281199-hobart-wallpapers.jpg";
import city6 from "@/public/brisbane-img/wp2128087-brisbane-wallpapers.jpg";
import city7 from "@/public/gold-cost-img/wp2128221-brisbane-wallpapers.jpg";
import city8 from "@/public/adelaide-img/wp3865051-adelaide-wallpapers.jpg";
import city9 from "@/public/darwain-img/wp12053013-australia-city-wallpapers.jpg";
import city10 from "@/public/sydney-suburbs-img/rxcrfE5-sidney-wallpaper.jpg";
import sydneyLimoCoverImg1 from "@/public/sydney-img/wp4048799-sydney-wallpapers.jpg";
import sydneyLimoCoverImg2 from "@/public/sydney-img/wp2684726-sydney-hd-wallpapers.jpg";
import melbourneCoverImg1 from "@/public/melbourne-img/wp9212784-melbourne-4k-wallpapers.jpg";
import melbourneCoverImg2 from "@/public/melbourne-img/wp9212802-melbourne-4k-wallpapers.jpg";

import canberraCoverImg1 from "@/public/canberra-img/wp2293994-canberra-wallpapers.jpg";
import canberraCoverImg2 from "@/public/canberra-img/wp2293997-canberra-wallpapers.jpg";

import perthCoverImg1 from "@/public/perth-img/wp2337735-perth-australia-wallpapers.jpg";
import pertCoverImg2 from "@/public/perth-img/wp2337778-perth-australia-wallpapers.jpg";
import hobartCoverImg1 from "@/public/hobart-img/wp10281258-hobart-wallpapers.jpg";
import hobartCoverImg2 from "@/public/hobart-img/wp10281286-hobart-wallpapers.jpg";
import brisbaneCoverImg1 from "@/public/brisbane-img/wp2128091-brisbane-wallpapers.jpg";
import brisbaneCoverImg2 from "@/public/brisbane-img/wp2128099-brisbane-wallpapers.jpg";

import goldCoastCoverImg1 from "@/public/gold-cost-img/wp3952788-gold-coast-wallpapers.jpg";
import goldCoastCoverImg2 from "@/public/gold-cost-img/wp3952805-gold-coast-wallpapers.jpg";

import adelaideCoverImg1 from "@/public/adelaide-img/wp3865056-adelaide-wallpapers.jpg";
import adelaideCoverImg2 from "@/public/adelaide-img/wp3865072-adelaide-wallpapers.jpg";

import darWinCoverImg1 from "@/public/darwain-img/wp1820600-australia-wallpapers.jpg";
import darWinCoverImg2 from "@/public/darwain-img/wp1820651-australia-wallpapers.jpg";

import sydneySuburbsCoverImg1 from "@/public/sydney-suburbs-img/wp4048796-sydney-wallpapers.jpg";
import sydneySuburbsCoverImg2 from "@/public/sydney-suburbs-img/wp2684855-sydney-hd-wallpapers.jpg";

export async function GET() {
  const serviceArea = [
    {
      city: "Sydney",
      title: "Sydney Tours & Travels",
      description: `Sydney Limousine Services in Sydney provides elegant and reliable transportation 24/7. Our fleets of varieties of luxury Sedan, SUV, Stretch Limo, and People Mover are sure to make your next business affairs, airport transfers, special event, or just a night out on the town a great one. Our experienced chauffeurs are both professional and always courteous. We are dedicated to providing you with reliable, outstanding service that makes your special occasion truly memorable. We provide each and every one of our customers with unlimited loyal attention and strive to serve them with quality transport service at very competitive prices. We target our customers' various transportation needs, such as airport transfers, corporate pickup, sporting club tours, special occasions, and various events coordination. Our prestige vehicles are always air-conditioned, well-maintained, and presented impeccably. Our courteous chauffeurs will assure your punctuality and safely take you to your destination.`,
      slug: "sydney",
      cityImage: city1.src,
      cityCoverImage: [sydneyLimoCoverImg1.src, sydneyLimoCoverImg2.src],
      overview: [
        "Sydney Limousine Services offers a wide range of luxurious vehicles, including Sedans, SUVs, Stretch Limos, and People Movers, suitable for any event or transportation need. Our professional chauffeurs are committed to providing a high-quality experience, ensuring you arrive at your destination safely and on time.",
        "We cater to various transportation needs, from corporate pickups and airport transfers to special events and sightseeing tours. Our vehicles are kept in pristine condition, air-conditioned, and presented to the highest standard, guaranteeing a comfortable and reliable journey.",
        "Our commitment to quality extends to the professionalism of our chauffeurs. Each driver is trained to offer exceptional service, ensuring that your transportation experience is both pleasant and efficient. We value punctuality and strive to provide stress-free rides for our clients.",
        "Whether it's a business trip or a special occasion, our fleet of luxury vehicles is equipped to meet your needs. We offer flexible and reliable transportation solutions, making sure that your experience with us is memorable and worry-free.",
        "Our fleet includes high-end vehicles like the Mercedes-Benz S Class, BMW 7 Series, and Audi A8. We also provide luxury SUVs and stretch limousines for larger groups or special events, along with people movers like the Mercedes V Class and Toyota Hiace for added convenience.",
        "From airport transfers to special event coordination, we handle all your transportation needs with precision and care. Our dedication to excellence ensures that every ride is a premium experience, allowing you to enjoy luxury and reliability every step of the way.",
        "We also specialize in wedding transportation, ensuring that your big day is as seamless and elegant as possible. Our chauffeurs are experienced in providing top-notch service, coordinating with your schedule to ensure perfect timing and a stress-free experience for the couple and guests.",
        "Our corporate services are designed to cater to the needs of business travelers, providing a professional and discreet transportation experience. We understand the importance of time management and reliability, making us the preferred choice for executives and professionals.",
        "For tourists and visitors, we offer personalized sightseeing tours around Sydney's iconic landmarks and attractions. Experience the beauty of the city in the comfort of our luxury vehicles, with a knowledgeable chauffeur who can make your tour informative and enjoyable.",
        "Our booking system is user-friendly, allowing you to easily schedule your ride online or through our 24/7 customer support. We provide instant confirmations and reminders to keep you informed and ensure a hassle-free experience from start to finish.",
      ],
    },
    {
      city: "Melbourne",
      title: "Melbourne Tours & Travels",
      description: `Melbourne Transfer Services offers affordable car and limo services you can rely on, making us the number one premier limousine service for Corporate Transfers, Airport Transfers, and Sightseeing Tours. Melbourne airport car service fulfills all your transportation needs within the corporate community and personal service areas. We are your top choice for exclusive ground transportation service in Melbourne. We provide a wide range of airport transportation options, hourly charters, point-to-point transfers, and corporate travel within the limo service industry. With over a decade of experience, our reputation for excellence speaks for itself. We offer extensive transportation services across the Melbourne Metropolitan area. Passenger safety is our highest priority. We demand excellence from every driver and require superior accreditation and certification. Drivers maintain current licensing at all times and must continually meet safe-driving requirements. Our vehicles are always kept roadworthy to maintain high service standards.`,
      slug: "melbourne",
      cityImage: city2.src,
      cityCoverImage: [melbourneCoverImg1.src, melbourneCoverImg2.src],
      overview: [
        "Melbourne Transfer Services specializes in providing premium and reliable transportation solutions, including Corporate Transfers, Airport Transfers, and Sightseeing Tours. Our fleet is equipped to meet all your transportation needs, whether for business or personal purposes.",
        "We have earned a stellar reputation in the Melbourne Metropolitan area for our commitment to safety and exceptional service. Our drivers are highly trained and hold superior accreditations, ensuring every journey is safe, comfortable, and efficient.",
        "Our extensive fleet includes a variety of luxury vehicles that cater to corporate and personal travel requirements. From sleek sedans for individual transfers to spacious limousines for group transportation, we have options that meet the needs of all our clients.",
        "We prioritize the safety and well-being of our passengers by maintaining high standards for our vehicles and demanding excellence from our drivers. Each vehicle undergoes regular maintenance to ensure it is always roadworthy and ready to deliver a top-tier experience.",
        "Our airport transfer service is designed for maximum convenience and efficiency. We offer prompt pickups and drop-offs, ensuring you get to your destination on time and without stress. Our chauffeurs are punctual and provide exceptional customer service.",
        "With over a decade of experience in the limousine service industry, we understand the importance of reliability and professionalism. Our services extend to hourly charters, point-to-point transfers, and corporate travel, providing flexible options to meet your specific needs.",
      ],
    },
    {
      city: "Canberra",
      title: "Canberra Tours & Travels",
      description: `At Executive Car Service Canberra, we understand that business professionals do not have time to waste, especially when it comes to an executive car service. That is why we will get you there on time for your service. For more than 16 years, Car Service in Canberra has been providing limo and car services to the Canberra corporate and personal market. Our customers appreciate our dedication to providing reliable, comfortable, and safe transportation, as well as our commitment to providing each customer with prompt professionalism wherever they need to go. Our experienced team of chauffeurs fully understands how important it is that you arrive on time. We strive to ensure prompt, reliable service in a late-model, well-maintained luxury vehicle driven by a courteous, professional chauffeur. We know the city of Canberra and surrounding areas inside and out; we also provide transportation services within the region.`,
      slug: "canberra",
      cityImage: city3.src,
      cityCoverImage: [canberraCoverImg1.src, canberraCoverImg2.src],
      overview: [
        "Executive Car Service Canberra has been serving the corporate and personal market for over 16 years, earning a reputation for reliability and excellence. We understand that time is valuable for business professionals, and our services are designed to ensure punctual and stress-free transportation.",
        "Our team of professional chauffeurs is dedicated to providing prompt and courteous service. Each chauffeur is well-trained and familiar with the city of Canberra and its surrounding areas, ensuring that you reach your destination efficiently and on time.",
        "We offer a fleet of late-model luxury vehicles that are meticulously maintained to ensure comfort and safety. Our cars are equipped with modern amenities to provide a premium travel experience, whether for corporate meetings, airport transfers, or personal occasions.",
        "Our commitment to safety and reliability is unmatched. We prioritize the maintenance of our vehicles and ensure that all chauffeurs have the necessary expertise and credentials to provide top-notch service, offering peace of mind to our clients.",
        "In addition to corporate and airport transfers, we provide personalized transportation services for special events, sightseeing tours, and more. We tailor our services to meet the unique needs of each client, ensuring a seamless and enjoyable travel experience.",
        "With extensive knowledge of Canberra and its surrounding regions, our chauffeurs can navigate efficiently through the city, avoiding traffic and ensuring timely arrivals. Our dedication to excellence makes us the preferred choice for executive car services in Canberra.",
      ],
    },
    {
      city: "Perth",
      title: "Perth Tours & Travels",
      description: `When you come to visit Perth, we are here to cater to your service. Whether you require airport transfer, a business trip, need a corporate car or limo, or want a simple point-to-point ride, our professional chauffeurs are standing by. Perth Limo Services offers a wide range of luxury Sedans and European SUVs to match your business and personal needs. Our company is well known in the area for being the most responsive, convenient, and professional service. When you need comfortable and reliable transportation, and most services are too expensive, give us a call – we tailor our prices to fit your comfort while offering competitive rates. Our number one priority is to exceed your expectations - we put your needs first by making sure we understand your requests and preferences completely. Our Limo Service team works hard to earn your trust. We are always punctual and take care of your needs.`,
      slug: "perth",
      cityImage: city4.src,
      cityCoverImage: [perthCoverImg1.src, pertCoverImg2.src],
      overview: [
        "Perth Limo Services is dedicated to providing top-notch transportation solutions, whether for airport transfers, business trips, or simple point-to-point rides. We offer a wide range of luxury Sedans and European SUVs, designed to cater to both business and personal needs with utmost reliability and comfort.",
        "Our professional chauffeurs are highly trained and committed to delivering exceptional service. They understand the importance of punctuality and ensure that you arrive at your destination on time and stress-free. We prioritize understanding and meeting your requests to tailor our service to your specific needs.",
        "Known for being responsive and convenient, Perth Limo Services stands out in the area as a leading provider of reliable and professional transportation. We have built a strong reputation by exceeding our clients' expectations and offering services that are both luxurious and affordable.",
        "We strive to offer competitive pricing without compromising on the quality of service. Our team works diligently to ensure your ride is not only comfortable but also fits within your budget. We focus on creating value and building trust with our clients through transparent pricing and consistent excellence.",
        "Whether you're traveling for business or leisure, our fleet of well-maintained luxury vehicles provides the perfect blend of elegance and efficiency. We take great care in maintaining our cars to the highest standards, ensuring that you experience a smooth and enjoyable ride every time.",
        "Our team is passionate about delivering a seamless travel experience from start to finish. We go above and beyond to ensure your preferences are met, offering a personalized service that is reliable, safe, and accommodating. Choose Perth Limo Services for your next journey and experience transportation at its finest.",
      ],
    },
    {
      city: "Hobart",
      title: "Hobart Tours & Travels",
      description: `Operating a limo service in Hobart, we have Luxury Sedans and SUVs. Since our inception, we have always been attentive to our clients' and passengers' needs, and today we are committed to providing top-notch service on the Island. Hobart Limousine prides itself on being the best-priced Hobart limo service, offering quality services at low rates by focusing on volume. Our prime services include Corporate Transfers, Airport Transfers, Sightseeing Tours, and Weddings. Our experienced team members provide professional, courteous, first-class limousine services to ensure you reach your destination comfortably and on time. We offer limousine transportation services throughout greater Hobart and surrounding areas. Whether your event is a wedding, a concert, a sporting event, or any special occasion, call us first. If you are traveling for business and want to drive in style to and from the airport, our Elegant Limousine transportation service is perfect for you, offering reliable travel and privacy.`,
      slug: "hobart",
      cityImage: city5.src,
      cityCoverImage: [hobartCoverImg1.src, hobartCoverImg2.src],
      overview: [
        "Hobart Limousine provides a wide range of transportation services, from Corporate Transfers and Airport Transfers to Sightseeing Tours and Weddings. Our fleet of Luxury Sedans and SUVs ensures that you travel in comfort and style, no matter the occasion.",
        "We take pride in offering the most competitively priced limousine service in Hobart. By focusing on volume, we can maintain high-quality service at an affordable rate, making luxury transportation accessible to all our clients.",
        "Our team is made up of experienced professionals who are dedicated to providing courteous and first-class service. We understand the importance of reliability and punctuality, especially for business travelers, and we strive to exceed your expectations.",
        "Our services extend across greater Hobart and all surrounding areas, ensuring that no matter where you are, you can count on us for your transportation needs. From weddings to special events, we tailor our service to make your experience seamless and memorable.",
        "When traveling for business, our Elegant Limousine transportation service is the perfect choice for a stress-free and stylish ride to and from the airport. We value your time and privacy, making sure that your journey is both smooth and efficient.",
        "Whether it’s a sightseeing tour of the beautiful Island or a transfer to a major event, Hobart Limousine is dedicated to providing exceptional service. Our commitment to customer satisfaction is evident in every trip we provide, ensuring your travel experience is one to remember.",
      ],
    },
    {
      city: "Brisbane",
      titled: "Brisbane Tours & Travels",
      description: `Whether you are visiting Brisbane or going away, and need a fully insured, dependable, professional car service to pick you up or drop you off at Brisbane Airport or Gold Coast Airport, we can help. We monitor your flight every 30 minutes, ensuring we are there waiting for you when you arrive. With more than 20 years of experience driving in the greater Brisbane and Gold Coast area, you can be confident that Brisbane Limousine Services will take excellent care of you. Business travelers heading to Brisbane can rely on Brisbane Limousine Services for dependable chauffeured transportation for transfers, business meetings, events, conferences, and roadshows. Our 24/7 Reservation and Dispatch phone line, combined with web access to your account, instant confirmation emails, and timely reservation receipts, ensures a hassle-free experience. Whether for business or pleasure, individually or in a group, Brisbane Limousine Services offers a variety of luxury vehicles.`,
      slug: "brisbane",
      cityImage: city6.src,
      cityCoverImage: [brisbaneCoverImg1.src, brisbaneCoverImg2.src],
      overview: [
        "Brisbane Limousine Services offers reliable, professional transportation solutions for both Brisbane Airport and Gold Coast Airport. We closely monitor flight arrivals to ensure our chauffeurs are there to greet you promptly, providing a seamless and worry-free experience.",
        "With over 20 years of experience in the greater Brisbane and Gold Coast area, we are experts in navigating the region and delivering exceptional service. Our professional chauffeurs are committed to ensuring your comfort and safety on every journey.",
        "Our business services cater to the needs of corporate travelers. We provide reliable chauffeured transportation for transfers, meetings, events, conferences, and roadshows, ensuring you arrive on time and ready for your commitments.",
        "We make booking and managing your reservations easy and efficient. Our 24/7 Reservation and Dispatch phone line, along with web account access, instant email confirmations, and detailed reservation receipts, make for a hassle-free experience.",
        "Whether traveling individually or with a group, Brisbane Limousine Services has a wide range of luxury vehicles to suit your needs. From sleek sedans to spacious SUVs, our fleet is equipped to handle any transportation request with elegance and style.",
        "For both business and leisure, our commitment to excellence and attention to detail set us apart. We provide dependable and luxurious transportation services that ensure you have a comfortable and memorable travel experience in Brisbane and beyond.",
      ],
    },
    {
      city: "Gold Coast",
      title: "Gold Coast Tours & Travels",
      description: `We are confident that we provide the lowest rates in Gold Coast as well as the outer Gold Coast area. If you ever find a better rate than ours, please let us know, and we will match your reservation with no additional booking fees or maximum limits. Our years of experience providing affordable transportation, combined with our knowledge, passion, and commitment to service in a city like Gold Coast with its busy events calendar, ensures that we will be your first choice. Our fleet of luxury Sedans, European SUVs, Chrysler 300 Sedans, and Genesis European SUVs offers a wide variety of choices. Our friendly, knowledgeable staff is ready to assist you 24 hours a day, and our professional, courteous drivers are dedicated to meeting all your ground transportation needs. For over 20 years, our priority has been to provide professional rides that are convenient, reliable, safe, affordable, and clean, while consistently exceeding your expectations. Our instant quotation feature is a practical way to estimate your rate to your destination. Simply select your location or city from the first column and check the rate under the airport abbreviation listed, or use the search box to find your rate easily.`,
      slug: "gold-coast",
      cityImage: city7.src,
      cityCoverImage: [goldCoastCoverImg1.src, goldCoastCoverImg2.src],
      overview: [
        "Gold Coast Limousine Services guarantees the lowest rates in the area, both in the city and in the outer Gold Coast regions. We are committed to providing affordable yet high-quality transportation services, and our rate-matching policy ensures you always get the best deal.",
        "With over 20 years of experience, we have built a reputation as the most reliable and professional transportation service in Gold Coast. Our deep understanding of the city's busy event calendar allows us to cater to your needs efficiently, no matter the occasion.",
        "Our fleet includes a variety of luxury vehicles such as Sedans, European SUVs, Chrysler 300 Sedans, and Genesis European SUVs. We provide options to suit any preference, ensuring a comfortable and stylish ride for every passenger.",
        "Our customer service team is available 24/7 to assist with bookings, answer questions, and provide support. Our drivers are courteous, knowledgeable, and committed to delivering a safe, smooth, and pleasant travel experience.",
        "We prioritize cleanliness and vehicle maintenance, making sure our cars are in pristine condition for each ride. Our dedication to safety, reliability, and affordability has made us a preferred choice for ground transportation in Gold Coast.",
        "Using our instant quotation feature, you can quickly and easily get an estimate for your transportation costs. Simply select your location from the list or type it into the search box to see your rate, making the booking process fast and straightforward.",
      ],
    },
    {
      city: "Adelaide",
      title: "Adelaide Tours & Travels",
      description: `Adelaide Limousine Services offers high-quality limo service. Wherever you are and whenever you need a limo, we are ready to provide you with the best service possible - it's our main mission. Nowadays, limousine services operate with a combination of the most modern technologies, responsibility, and customer orientation. When you need to get to the airport quickly, Adelaide airport limo is exactly what you need. We guarantee the best cars, experienced chauffeurs, and luxury transportation conditions. Don’t worry about the possibility of being late; we'll do everything to get you to your destination on time. Your ride with our limo service will be a pleasant and smooth experience. You won’t regret choosing Adelaide airport limo for your travel needs.`,
      slug: "adelaide",
      cityImage: city8.src,
      cityCoverImage: [adelaideCoverImg1.src, adelaideCoverImg2.src],
      overview: [
        "Adelaide Limousine Services is dedicated to providing top-quality limo service for any occasion. Our mission is to be there whenever and wherever you need a luxury ride, ensuring comfort and convenience with every trip.",
        "We leverage the most modern technologies in our operations to provide a seamless experience for our passengers. Our focus on responsibility and customer satisfaction makes us a trusted choice for premium transportation in Adelaide.",
        "Whether you need an airport transfer or a ride to a special event, we have you covered. Our Adelaide airport limo service is designed to get you to your destination quickly and efficiently, with guaranteed punctuality and luxury.",
        "Our fleet features the best cars, and our chauffeurs are highly experienced and professional. We pride ourselves on offering transportation conditions that are both luxurious and reliable, making sure that every ride is a top-tier experience.",
        "You can trust us to handle your travel needs with precision and care. We are committed to ensuring that you arrive on time, and we take every measure to make your journey pleasant and stress-free. With our service, you can relax and enjoy the ride.",
        "From corporate events to personal celebrations, Adelaide Limousine Services is the ideal choice for elegant transportation. Our customer-oriented approach and attention to detail set us apart, making us a premier limousine provider in the region.",
      ],
    },
    {
      city: "Darwin",
      title: "Darwin Tours & Travels",
      description: `Darwin Limousine Service is one of the interstate services of Sydney Limousine Service, and we provide a similar level of service in Darwin. What you save from hiring an affordable limousine service generally depends on why you're hiring one, and our services offer the perfect solution. For many events, it’s common to face high car parking costs. With a certified limo service, you only have to worry about getting in and out of the door. Everything else is taken care of. The limo driver handles all of the logistics, allowing you to enjoy your event, flight, or any other occasion without stress. Our passengers' safety is our highest priority. We demand excellence from each driver and ensure superior accreditation and certification. Current licensing is maintained at all times, and drivers must continually meet safe-driving requirements. Additionally, our vehicles go through stringent testing and necessary inspections to meet all safety standards.`,
      slug: "darwin",
      cityImage: city9.src,
      cityCoverImage: [darWinCoverImg1.src, darWinCoverImg2.src],
      overview: [
        "Darwin Limousine Service is an extension of Sydney Limousine Service, offering the same high-quality experience in Darwin. We are dedicated to providing affordable yet luxurious transportation solutions for various events and needs.",
        "Our service helps you save time and avoid the hassle of car parking fees. With our certified limo drivers handling the logistics, you can focus on enjoying your event or flight without any worries about transportation.",
        "Passenger safety is our top priority. We have strict standards for our chauffeurs, requiring superior accreditation, continuous safe-driving certifications, and current licensing at all times to ensure your safety on the road.",
        "Our fleet undergoes rigorous testing and inspections to meet stringent safety standards. Each vehicle is maintained meticulously to guarantee reliability, comfort, and peace of mind for all our passengers.",
        "We cater to various transportation needs, whether you’re attending a corporate event, heading to the airport, or celebrating a special occasion. Our drivers are experienced and committed to providing a professional and seamless travel experience.",
        "With Darwin Limousine Service, you can trust that you are in safe and capable hands. Our focus on excellence, safety, and customer satisfaction ensures that your journey is smooth and enjoyable from start to finish.",
      ],
    },
    {
      city: "Sydney Suburbs",
      description: `Sydney Limousine Services provides limousine and car service throughout the greater metropolitan area of Sydney and its individual suburbs, offering affordable yet premium-quality transportation. We have great rates for the latest modern luxury Sedans, SUVs, People Movers, and Stretch Limousines. Sydney Limousine Services delivers all services at competitive rates, ensuring that no matter the time of day or the distance of your pickup, our chauffeurs will always be on time. Over the years, we have noticed that some suburbs are more active in reserving limo services, which is why we cover all suburbs in Sydney for your convenience. You can now book Limousine Transfers online to all Sydney suburbs and to Sydney Airport. We offer comprehensive service coverage, including airport transfers, limo hire, corporate pickups, wedding services, and special event transfers. If your location is not listed, don’t worry; we can still provide transportation to and from your desired destination.`,
      slug: "sydney-suburbs",
      cityImage: city10.src,
      cityCoverImage: [sydneySuburbsCoverImg1.src, sydneySuburbsCoverImg2.src],
      overview: [
        "Sydney Limousine Services offers premium transportation across all suburbs in Sydney, ensuring reliable, luxurious service at an affordable price. Our fleet includes the latest modern Sedans, SUVs, People Movers, and Stretch Limousines to meet various needs and preferences.",
        "We pride ourselves on punctuality and professionalism. Our chauffeurs are committed to arriving on time for every pickup, no matter how far or what time of day it is. We understand the importance of timely transportation, especially for airport transfers and corporate events.",
        "Our years of experience have shown us which suburbs are most active in booking limo services. To better serve our clients, we have expanded our reach to cover all Sydney suburbs, making it easier for everyone to access convenient limousine transfers.",
        "Booking a limousine transfer has never been easier. With our online booking system, you can schedule transportation to any suburb in Sydney, including trips to and from Sydney Airport. Our seamless process ensures a hassle-free experience for every client.",
        "We provide comprehensive services for a variety of occasions, including airport transfers, corporate pickups, wedding services, and special events. Our competitive rates and commitment to excellence make us the go-to choice for luxury transportation in Sydney.",
        "Even if your suburb is not specifically listed, we are happy to accommodate your travel needs. Sydney Limousine Services is dedicated to offering flexible and reliable transportation, ensuring that you can travel to and from any location in comfort and style.",
      ],
    },
  ];

  return NextResponse.json(serviceArea);
}
