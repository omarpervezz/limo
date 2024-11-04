import BannerCover from "@/components/layout/BannerCover";
import Section from "@/components/layout/Section";
import Gallery from "@/components/gallery/Gallery";
function Page() {
  const images = [
    {
      src: "https://sydneylimousineservice.com//gallery/images/1.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/10.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/11.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/12.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/13.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/14.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/15.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/16.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/17.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/18.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/19.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/2.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/20.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/21.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/22.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/23.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/24.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/25.jpg",
      alt: "Image description 1ssss",
    },

    {
      src: "https://sydneylimousineservice.com//gallery/images/26.jpg",
      alt: "Image description 1ssss",
    },

    {
      src: "https://sydneylimousineservice.com//gallery/images/28.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/29.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/3.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/30.jpg",
      alt: "Image description 1ssss",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/31.jpg",
      alt: "Image description for 31.jpg",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/32.jpg",
      alt: "Image description for 32.jpg",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/33.jpg",
      alt: "Image description for 33.jpg",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/34.jpg",
      alt: "Image description for 34.jpg",
    },
    {
      src: "https://sydneylimousineservice.com//gallery/images/35.jpg",
      alt: "Image description for 35.jpg",
    },
  ];
  return (
    <>
      <Section>
        <BannerCover />
      </Section>
      <Section>
        <Gallery images={images} />
      </Section>
    </>
  );
}

export default Page;
