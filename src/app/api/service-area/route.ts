import { NextResponse } from "next/server";
import city1 from "@/public/city-1.jpg";
import city2 from "@/public/city-2.jpg";
import city3 from "@/public/city-3.jpg";
import city4 from "@/public/city-4.jpg";

export async function GET() {
  const serviceArea = [
    {
      city: "Sydney",
      description: `Sydney Limousine Services in Sydney provides elegant and reliable transportation 24/7. Our fleets of varieties of luxury Sedan, SUV, Stretch Limo and People Mover are sure to make your next business affairs, airport transfers, special event or just a night out on the town a great one. Our experienced chauffeurs are both professional and always courteous. We are dedicated to providing you with a reliable outstanding service that for your special occasion truly memorable. We provide each and every one of our customers with unlimited loyal attention and stress to service them with quality transport service at very competitive prices. We target our customers various transportation needs such as airport transfers, corporate pickup, sporting club tours, special occasions and various events coordination. As our all prestige vehicles always air-conditioned that are maintained at a high level and well presented. Our courteous chauffeurs will assure your punctuality and take your destination.`,
      path: "sydney",
      cityImage: city1.src,
    },
    {
      city: "Melbourne",
      description: `Melbourne Transfer Services affordable car and limo service you can rely on number one premier limousine service as Corporate Transfer, Airport Transfer and Sightseeing Tours. Melbourne airport car service fulfill your all transportation needs in the corporate community and personal service neighborhood area. We are your number one choice for exclusive ground transportation service in Melbourne. We deliver some of the complete choices of airport transportation, hourly charters, point to point and corporate travel in limo service industry. We have over a decade of experience and our reputation for excellence just speaks for itself. We do have widely transportation service in the Melbourne Metropolitan area. Our passenger's safety is our highest priority. We demand excellence from each driver and insist on superior accrediting and certification. Current licensing is maintained at all times and drivers must continually satisfy safe-driving requirements. Our vehicles is always kept road worthy for maintaining of standard of services.`,
      path: "melbourne",
      cityImage: city2.src,
    },
    {
      city: "Canberra",
      description: `At Executive Car Service Canberra, we understand that business professionals do not have time to waste, especially when it comes to an executive car service. That is why we will get you there on time for your service. For more than 16 years, Car Service in Canberra has been providing limo and car services to the Canberra corporate and personal market. Our customers appreciate our dedication to providing reliable, comfortable and safe transportation, as well as our commitment to providing each customer with prompt professionalism wherever they need to go. Our experienced team of chauffeurs fully understands how important it is that you arrive on time. We strive to ensure prompt, reliable service in a late-model, well-maintained luxury vehicle driven by a courteous, professional chauffeur. We know the city of Canberra and surrounding areas inside and out; we also provide transportation services within the`,
      path: "canberra",
      cityImage: city3.src,
    },
    {
      city: "Perth",
      description: `When you come to visit Perth, we are here to cater your service. Whether you require airport transfer, a business trip, need a corporate car or limo, or want a simple point-to-point ride, our professional chauffeurs are standing by. Perth Limo Services offers a wide range of luxury Sedans and European SUVs to match your business and personal needs. Our company is well known in the area for being the most responsive, convenient and professional services. When you need comfortable and reliable transportation, and most services are too expensive, give us a call – we tailor our prices to fit your comfort to create our low prices. Our number one priority is to exceed your expectations - we put your needs first by making sure we understand your requests and preferences completely. Our Limo Service team works hard to earning your trust. We are always punctual and we take care of your need.`,
      path: "perth",
      cityImage: city4.src,
    },
    {
      city: "Hobart",
      description: `Operating a limo service in Hobart we have Luxury Sedans and SUVs. We began we have always been in touch with our client's and passenger's needs and today we are committed to provide your service in the Island. Hobart Limousine prides itself on being the best priced Hobart limo service and we are able to provide quality services at a low rate because our based on volume. Our prime service are corporate Transfer, Airport Transfer, Sightseeing Tours and Weddings. Our experienced team members are in providing professional, courteous, first class limousine services to reach your destination. We provide limousine transportation services in greater Hobart and all other areas. Whether your event is a wedding limo service, a concert, sporting event or any special event call us first. Traveling for business and want to drive in style to and from the airport? Then always our Elegant Limousine transportation is perfect for you. Our transportation service offers reliable travel, privacy`,
      path: "hobart",
      cityImage: city4.src,
    },
    {
      city: "Brisbane",
      description: `Whether you are visiting Brisbane or going away, and need a fully insured, dependable, professional car service to pick you up or drop you off at Brisbane Airport or Gold Coast Airport can help. We will watch your flight every 30 minutes so you know we will be there waiting for you when you arrive. With more than 20 years of experience driving in the greater Brisbane and Gold Coast area, you can be sure you are going to be well taken care of by the Brisbane Limousine Services Business travelers on the way to Brisbane can count on Brisbane Limousines Services for reliable chauffeured transportation for transfers, business meetings, events, conferences, road shows. Our 24/7 Reservation and Dispatch phone line, combined with web access to your account, instant confirmation emails and timely sent reservation receipts make for an easy and totally hassle free experience. For Business or Pleasure, individually or in group, Brisbane Limousine Services offers a variety of vehicles including luxury`,
      path: "brisbane",
      cityImage: city4.src,
    },
    {
      city: "Gold Coast",
      description: `We are confident that we provide the lowest rates in Gold Coast as well as the outer Gold Coast area. If you ever find a better than ours, please let us know and we will match your reservation, and with no additional booking fees or max out. Our years of experience providing affordable transportation, knowledge, experience and passion to provide services in a city such as Gold Coast with it's busy events calendar year round, assures us that we are going to be your first choice. Our fleet of luxury Sedans, European SUVs, Chrysler 300 Sedans, and Genesis European SUV offers a wide variety of choices. Our friendly, knowledgeable staff is ready to help you 24 hours a day, and our professional, courteous drivers are ready to meet all your ground transportation needs. For over 20 years our priority has been to provide a professional ride that is convenient, reliable, safe, and affordable and clean while exceeding your highest expectation. The instant quotation is an easy and practical way to estimate your rate to your destination. Simply choose your location/city from the first column and check the rate under your airport abbreviation stated next. You may also choose to type in your location on the search box and find out t`,
      path: "gold-coast",
      cityImage: city4.src,
    },
    {
      city: "Adelaide",
      description: `Adelaide Limousine Services proposes you high-quality limo service. Whenever you are and whenever you need a limo we are ready to provide you with the best service possible - it's our main mission. Now a days, passengers in limousine services work in a combination of the most modern technologies, responsibility and customer orientation. When you need to get quickly at the airport, Adelaide airport limo is exactly what you need. Best cars, experienced chauffeurs, luxury transportation conditions are main issues we always guarantee. Don't worry about the possibility of being late, we'll do everything to get you to the point of destination timely, ride with our limo service will seem a pleasant one. You won't be mistaken ordering Adelaide airport limo. If there exists a nee`,
      path: "adelaide",
      cityImage: city4.src,
    },
    {
      city: "Darwin",
      description: `Darwin Limousine Service is one of the interstate service of Sydney Limousine Service and we provide similar service in Darwin. What you save from hiring an affordable limousine service generally depends on why you're hiring one and it is the solution to use our services. For many events, it's not unheard of to pay in excess of expensive car parking cost. With a certified limo service, you only have to worry about getting in and out of the door. Everything else is taken care of. The limo driver handles all of that, leaving you to enjoy your event, flight, or any other reason why you may be choosing to avail affordable limo service Our passengers' safety is our highest priority. We demand excellence from each driver and insist on superior accrediting and certification. Current licensing is maintained at all times and drivers must continually satisfy safe-driving requirements. Our vehicles also go through stringent testing. The fleet is run through necessary inspections that satisfy all`,
      path: "darwin",
      cityImage: city4.src,
    },
    {
      city: "Sydney Suburbs",
      description: `Sydney Limousine Services provides limousine and car service in all greater metropolitan area in Sydney and it’s individual suburb which offer you a service in affordable and premium quality. Basically, we have great rates for latest modern luxury Sedan, SUV, People Mover and Stretch Limousine. Sydney Limousine Services provides all services at a competitive rate, when you hire a limo from us and no matter what time of the day and how far is your pickup, so our chauffeur will be on time for your pickup. In our years of business, we noticed some suburbs are more active than others in reserving a limo service, that is why we have engaged all the suburb in Sydney for your convenient limousines transfers. You can now book Limousine Transfer Online to all Sydney suburbs and to the Sydney Airport. We cover all the suburbs in Sydney for airport transfer, limo hire, corporate pickup, wedding service and other special events transfer. If your place is not listed, we can still drive you to and from it.`,
      path: "sydney-suburbs",
      cityImage: city4.src,
    },
  ];

  return NextResponse.json(serviceArea);
}
