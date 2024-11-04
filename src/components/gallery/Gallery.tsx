"use client";
import { useState } from "react";
import Image from "next/image";
import Heading from "@/components/typography/Heading";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 16;

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close the modal if user clicks outside of the modal content
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Get current images for pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] mx-auto">
      <MaxWidthWrapper>
        <Heading className="mb-5">Capturing Joy</Heading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {currentImages.map((image, index) => (
            <div key={index} className="relative">
              <Image
                width={300}
                height={300}
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full cursor-pointer rounded-lg shadow-lg"
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[216]"
            onClick={handleModalClick}
          >
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-white bg-gray-800 w-10 h-10 rounded-full"
                onClick={closeModal}
              >
                &times;
              </button>
              <Image
                width={500}
                height={400}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-screen-lg max-h-screen-lg rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default Gallery;
