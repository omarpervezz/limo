import { notFound } from "next/navigation";
import Image from "next/image";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Paragraph from "@/components/typography/Paragraph";

// Define the type for the banner object
interface ServiceList {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
}

// Define the props for the Hero component
interface ServiceProps {
  slug: string;
  services: ServiceList[];
}

// Update the FleetDescription component
const ServiceListDescription: React.FC<ServiceProps> = ({ slug, services }) => {
  const serviceDescription = services.find((f) => f.slug === slug);

  if (!serviceDescription) {
    notFound();
  }

  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div className="space-y-10">
          <div className="flex justify-center">
            {serviceDescription && (
              <Image
                src={serviceDescription.image}
                alt="service-img"
                width={300}
                height={300}
                className="w-[600px] h-auto object-cover"
              />
            )}
          </div>
          <div>
            {serviceDescription && (
              <Paragraph>{serviceDescription.description}</Paragraph>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServiceListDescription;
