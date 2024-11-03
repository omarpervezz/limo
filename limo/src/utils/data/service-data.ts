import airportImage from "@/public/airport-transfer.jpg";
import corporateImage from "@/public/corporate-transfer.jpg";
import weddingLimousine from "@/public/wedding-service.jpg";
import specialOccasions from "@/public/special-occasions.jpg";
import childSeatLimousine from "@/public/child-seat-limousine.jpg";
import sighSeeing from "@/public/sight-seeing.jpg";
import sydneyTour from "@/public/sydney-tour.jpg";
import blueMountain from "@/public/blue-mountain-tour.jpg";
import easterSuburbs from "@/public/eastern-suburbs.jpg";
import northShore from "@/public/north-shore.jpg";
import hillsDistrict from "@/public/hills-district.jpg";
import northerBeachesTour from "@/public/northern-beaches-tour.jpg";
import clubbing from "@/public/clubbing-in-sydney.jpg";
import promNight from "@/public/prom-night.jpg";
import birthdayService from "@/public/birthday-service.jpg";
import anniversaryService from "@/public/anniversary-service.jpg";
import graduationParty from "@/public/graduation-party.jpg";
import nightOwnTown from "@/public/night-on-town.jpg";
import bachelorParty from "@/public/bachelor-party.jpg";
import hunterValley from "@/public/hunter-valley-graden.jpg";

type ServiceList = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

const serviceList: ServiceList[] = [
  {
    id: "1",
    slug: "airport-transfer",
    title: "Airport Transfer",
    description:
      "When you will book a limo for airport transfers, it will reduce your stress to find right transport to reach your destination. We find worrying about paid-parking, sitting in a cramped cab or burdening other people to drop off or pick up to the airport. Whether it is for business or pleasure, your trip should start smoothly once you step out the front door; that is our Sydney Limousine Service, you will save yourself the stress of any hustle and bustle. We also guarantee great service, competitive rates and comfort. We will provide you with door-to-door service and guarantee no disappointments if you are returning flight is delayed. Our chauffeur will be waiting in the arrival hall with a name sign and will assist your luggage to the car.",
    image: airportImage.src,
  },
  {
    id: "2",
    slug: "corporate-transfers",
    title: "Corporate Transfers",
    description:
      "Sydney Limousine Service provides executive sedan limo hire at very competitive prices for corporate travelers in the corporate community. Our professionally trained drivers work diligently to provide you with the very best chauffeured limousine service .We provide transportation for all corporate occasions, business meeting, seminars, business launch and corporate gaming functions. Our reservation agents are happy to provide you with detailed information of the features and spaciousness of our limousines. You are guaranteed as your booked car will be on time according to you booking time which you feel stress fee to reach your schedule appointment as our first priority is zero percentage tolerance about the booking time for your pick up. ",
    image: corporateImage.src,
  },
  {
    id: "3",
    slug: "wedding-limousines",
    title: "Wedding Limousines",
    description:
      "The most important event of your lifetime is wedding. Sydney Limousine Services provides Wedding Limo Hire with elegant luxury Chrysler and Hummer stretch Limousine and other suitable European sedan as well to make this special day for your greatest expectation. You should deserve to feel like royalty on your special day forever, so whether you can choose your desired limousine from our luxury fleet, and we will arrive at your venue in elegant and comfort. You do not have to worry about to get ready for your big day, picking the right limousine service which will reduce your stress. Sydney Limousine offers the best wedding packages around, and you can always count on our experienced chauffeurs to get you there on time with our chauffeur.",
    image: weddingLimousine.src,
  },
  {
    id: "4",
    slug: "special-occasions",
    title: "Special Occasions",
    description:
      "We offer you a great service to reach you for your expected Special Events. A Special Event is the perfect occasion to book Sydney Limousine Service. Planning to go to the Big Game with all your buddies or attending an upcoming Concert, Corporate Gaming Events and New Year Eve. It sure sounds like fun, but then you start thinking of fighting all the traffic, endlessly searching for a parking space and then having to drive home who has to be the Designated Driver? Let our professional chauffeur be that responsible party. Choose the fun and comfortable alternative... ride in style with Sydney limousine Service. Your limo could be a Stretch Chrysler or Hummer Limousine, Executive Sedan, Luxury European Sedan SUV or People Mover.",
    image: specialOccasions.src,
  },
  {
    id: "5",
    slug: "child-seat-limousines",
    title: "Child Seat Limousines",
    description:
      "Sydney Limousine Services follow the guidlines about child restrain seat in the vehicle from the NSW Government. Children the age 0- 6 months is compulsory a rear-facing child car seat. Children aged between 6 months and 4 years use either a rear-facing child car seat or a forward-facing child car seat to depend on child size. Children aged between 4 and 7 years use for a forward facing child car seat or booster seat similarly depends on children size. Family traveller’s safety is a priority to us, especially when your children are travelling with you. Sydney Limousine Services proud to provide service travelling families with the children safety car seats in our limos. When your children in cars without any proper restraints this may cause them  vulnerable to accidents and mishaps. ",
    image: childSeatLimousine.src,
  },
  {
    id: "6",
    slug: "sightseeing-limos",
    title: "Sightseeing Limos",
    description:
      "Whether you want to have a tour for sightseeing in surrounding area city side, Sydney's world famous beaches, wine tour, Blue Mountain, country side, Sydney's hot spot so that our highly trained professional chauffeur will fulfill your desire. The chauffeur of our Limousine service has a wide range of best touring experience to satisfy of clients meet. To use our chauffeur service will make your visit memorable for the whole family and your loved ones. Our European Luxury SUV Audi Q7 or Mercedes R Class are a much more attractive option for sightseeing with a guide than any crowded tour bus. Our experienced limos team members will help you find hidden attraction places and advise you on the best Sydney events, tours and attractions. ",
    image: sighSeeing.src,
  },
  {
    id: "7",
    slug: "sydney-limo-tours",
    title: "Sydney Limo Tours",
    description:
      "Sydney City Limo Tour by hiring a limo which is a great spectacular service. This tour is very popular from Our Chauffeured driven service, Sydney is known as the one of the best Harbour City in the world. It's the largest, oldest and most cosmopolitan city in Australia with an enviable reputation as one of the world's most beautiful and lovable cities. With your private city tours, you can enjoy with unlimited hours hiring, whether you can take whole days. If you are first time visiting Sydney Melbourne, Brisbane, Perth or Gold Coast and you only have one day or a few hours in the city, there is plenty to do and to see in a short ride around the city. Hire and enjoy your chauffeured private city tour experience. Our offer personalized chauffeur guide services just for you to look around all beautiful.",
    image: sydneyTour.src,
  },
  {
    id: "8",
    slug: "blue-mountains-limo-tours",
    title: "Blue Mountains Limo Tours",
    description:
      "The Blue Mountain Limo Tour is a popular limousine transfer service to Blue Mountain from Sydney. There is high demand limo hire service to Blue Mountain for tourist from Interstate and overseas. We have different tour group option with our luxurious SUV, Sedan, 4WD and Mercedes luxury van When you hire a limo from Sydney to Blue Mountain. Our experienced chauffeur will provide you a scenic smooth drive to Blue Mountain Services, you will reduce your stress-free travel which you will get to ride in comfort and style since the chauffeur will pick you up from the hotel or residential address either from your designated pickup point. Our chauffeurs are well experienced for sightseeing tour in Blue Mountain and Hunter Valley with clean and comfortable with air conditioned car.",
    image: blueMountain.src,
  },
  {
    id: "9",
    slug: "eastern-suburbs-limo-hire",
    title: "Eastern Suburbs Limo Hire",
    description:
      "The Eastern Suburbs is lined up by the eastern shore of the Pacific Ocean of Sydney and also a stretch of famous beaches. Eastern Suburbs Limo Hire is part of services of Sydney Limo Hire and there is huge demand for limousine hire in this area from Daring Point to Watsons Bay, Bondi Beach and other Eastern suburbs. The Eastern Suburbs is surrounded on all sides by Sydney Harbour and the Pacific Ocean. Sydney Limousine Services provides limousine and car service to all greater metropolitan area and Eastern Suburbs in Sydney, which offer you a service in affordable and at the same time of premium quality. Basically, Limousine Hire Eastern Suburbs has availability for latest modern luxury Sedan, SUV, People Mover and Stretch Limousine. Eastern Suburbs Sydney Limousine provides all services at a grate rate, when you book a limo from us any time.",
    image: easterSuburbs.src,
  },
  {
    id: "10",
    slug: "north-shore-limo-hire",
    title: "North Shore Limo Hire",
    description:
      "The North Shore is lined up by the northern part of Sydney and also a stretch of famous suburbs along Pacific Highway. North Shore Limo Hire is part of services of Sydney Limo Hire and there is huge demand for limousine hire in this area from North Sydney to Hornsby all the way to Central Coast. Sydney Limousine Services provides limousine and car service all greater metropolitan area and North Shore in Sydney, which offer you a service in affordable and at the same time of premium quality. Basically, North Shore Limousine Hire has availability for latest modern luxury Sedan, SUV, People Mover and Stretch Limousine. North Shore Sydney Limousine Services provides all services at a grate rate, when you book a limo from us and no matter what time of the day and night of your pickup, so our chauffeur will be on time for your pickup.",
    image: northShore.src,
  },
  {
    id: "11",
    slug: "hills-district-limo-hire",
    title: "Hills District Limo Hire",
    description:
      "Hills District Limo Hire is the part of Sydney Limousine Services, and it is widely popular in the hills district area. The Hills District has the lot of prestigious suburbs which this suburban district is located in the northwestern part of Sydney. There is newly established railway line and direct connection bus services from Sydney CBD, however people from is this area use also use limousine and taxis for commuting to work and airport. Limo Hire Hills District is a part of services of Sydney Limo Hire and recently there is huge demand for limousine hire in this area due to growing new numbers of residential development from Bella Vista to all the way Windsor and Richmond. Hills Limousine Sydney provides services with all prestigious vehicles in an affordable price.",
    image: hillsDistrict.src,
  },
  {
    id: "12",
    slug: "northern-beaches-limo-hire",
    title: "Northern Beaches Limo Hire",
    description:
      "The Norther Beaches is lined up by the norther shore of the Pacific Ocean of Sydney and also a stretch of famous beaches extending northwards from Sydney Harbour and North Head at Manly to Palm Beach and Broken Bay, fronting the Pacific Ocean. Northern Beaches Limo Hire is part of services of Sydney Limo Hire and there is huge demand for limousine hire in this area from Manly Beach to Palm Beach. The Northern Beaches is surrounded on all sides by either water or forest areas, also some locals to call the area the Peninsula. Limo Hire Northern Beaches is a part of services of Sydney Limo Hire and there is huge demand for limousine hire in this area due to no train line until Palm Beach, so number of limousine users are increasing.",
    image: northerBeachesTour.src,
  },
  {
    id: "13",
    slug: "clubbing-limos",
    title: "Clubbing Limos",
    description:
      "Sydney Limousine Service cater you to ride on a luxury limousine to hit the town for a night of Clubbing or bar in SYDNEY and other cities. So why not as you and your friends will travel in luxurious style to hire a limo, with your favorite music playing and the cocktails flowing, as your mobile party moves from hotspot to hotspot. Our chauffeur can driving you as want to do is have some fun while you are out clubbing. Our experienced and professional drivers will take you to Sydney and other cities clubs in our latest luxury Sedan or SUV models. Have a great cocktails on your way to the next place in one of our long stretch limousines. Any takers for some great clubbing activity? Enjoy the nightlife party from the start of your evening.",
    image: clubbing.src,
  },
  {
    id: "14",
    slug: "birthday-service-limos",
    title: "Birthday Service Limos",
    description:
      "Any Celebration is the best in your life, when you will reserve our SYDNEY Limousine Service with experience professional & trained chauffeur which will be memorable & pleasant time. Birthday is time to celebrate a new beginning with friends & family. There is no age limit to celebrate it, birthdays are personal New Years. When it arrives, it's time to revel in having made it through another year of life. We are ready to help you celebrate in style. Whether you plan small gathering of intimates as our luxurious fleet of vehicles runs from stretch limousines & sedans, so that Sydney Limo can fulfil your desire accordingly and your guests arrive in safety & style, allowing our concierge chauffeurs to ferry them around in elegant and comfort.",
    image: birthdayService.src,
  },
  {
    id: "15",
    slug: "anniversary-service-limos",
    title: "Anniversary Service Limos",
    description:
      "Our courteous & professional drivers will attend your every need, as you ride in style & well-appointed comfort. It's important to show up on time / be there when you need us. Where it is your first or Jubilee, this special date commemorates your loving commitment to each other. Our trained chauffeur escort you to the evening of your dreams. Whether you've planned a romantic candle light dinner in Sydney City. So let us make your special anniversary date even more memorable by sit back & relax in one of our luxurious vehicles. We are here to provide with experienced chauffeur service that makes feel like it's a special day. Your anniversary deserves that kind of pampering. We are the premier limo service in Sydney making special days happen",
    image: anniversaryService.src,
  },
  {
    id: "16",
    slug: "graduation-party-limos",
    title: "Graduation Party Limos",
    description:
      "Our Top priority is that everyone gets back home safe and sound. Our professional, certified Chauffeurs take their responsibility seriously and will stay focused on their task while teens have fun and enjoy the evening. Parents can relax and feel confident knowing that we will pick them up and deliver them back home to your front door safely. One who has employed the services of a driver for the day for your Graduation party and getting on in the world after high school, college or university means enjoying the small greatness in life changing events-such as hiring a professional driver and limousine as your personal concierge for the evening-what a treat. Reserve your Stretch or Sedan or SUV limo today for your graduation. ",
    image: graduationParty.src,
  },
  {
    id: "17",
    slug: "night-out-on-town-limos",
    title: "Night Out on Town Limos",
    description:
      "Our chauffeured service of Sydney Limo is there for you whether it is for dinner and casino or gathering with friends to spend the night on the town with late model sedan or stretch limo be at your service for your night make more memorable. The night begins not when you arrive at the club or at the bar but the moment your driver opens your limousine door and you slide into a luxury limousine for the evening. The Chrysler limo stands above the rest of traffic with enough seating for six additional friends to join you on your night out. Feel free to return to mid-day fantasies now that you have more detail or just keep on enjoying the nightlife. We offer a diverse range of limo services whether sedan, luxury SUV or stretch limo is a five star rated",
    image: nightOwnTown.src,
  },
  {
    id: "18",
    slug: "bachelor-party-limos",
    title: "Bachelor Party Limos",
    description:
      "Limo hiring Sydney you have few options to choose the right vehicle, but our limousine are perfect for Bachelor Party in Sydney. Our job is to make sure you & your friends to remember & enjoyable with our luxurious stretch limousine. Our professional team members get you where you want to go & back safe & in style & luxurious. In Sydney, limousine hiring can be very cost-effective, especially when you consider that we can get your entire group into almost every club in the down town. Especially, when you are trying to make the scene at many clubs that can make quite a difference. Often, Bachelorettes enjoy a classic night out in the big city for your last night of true freedom. Reserve a Limousine for you & a few of your closest friends. We have Hummer H2 & the Chrysler 300 Stretch limos with all the supplies you need to enjoy, but if you really want to hang in style then jus hire thses limos.y.",
    image: bachelorParty.src,
  },
  {
    id: "19",
    slug: "hunter-valley-limo-tours",
    title: "Hunter Valley Limo Tours",
    description:
      "Hunter valley Limo Tour is one of the great excitement tour of Sydney limousine Services. The Hunter Valley is a northern country region of New South Wales in Australia. It is well known for tourist people for its beautiful scenery, national parks, exquisite vineyards, and quaint towns. Newcastle is the Capital of the region. The other substantial towns in the Hunter are Cessnock, Muswellbrook, Scone, Singleton and Swansea. You can have day tour from Sydney to Hunter Valley for whole day (12 hours) or 8 to 10 hours for sightseeing and wine test in Hunter Valley with our comfortable European SUV or Sedan. On the way to The Hunter Valley as Branxton, Pokolbin, Kurri Kurri and Cessnock and on the doorstep of the region's wineries. Our day tour limo service is gradually increasing day by day because of huge number tourists are increasing to go to Hunter Valley for wine tour in a group or family.",
    image: hunterValley.src,
  },
  {
    id: "20",
    slug: "prom-night-limos",
    title: "Prom Night Limos",
    description:
      "Sydney Limousine Service provide your prom service in the Sydney & other towns as well. When you rent limos for prom night in Sydney, you & your friends won’t want the night to end. Parents can be assured of professional and quality service from the most reliable and licensed chauffeurs in the metro area. Prom Night is an evening High School students will remember for the rest of their lives. Make the evening the best it can be by traveling in a luxurious limousine. Ask about our prom specials that can save you lots of money. Plan ahead...don't be one of the only people left without a limousine for that extra special prom night. Some other limo companies in Sydney for prom, the luxury car will a",
    image: promNight.src,
  },
];

export default serviceList;
