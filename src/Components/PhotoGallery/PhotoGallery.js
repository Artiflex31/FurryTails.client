import React from "react";
import galleryImagesData from "./galleryImages.json";
import { GiJumpingDog } from "react-icons/gi";
import { IconContext } from "react-icons";

function PhotoGallery() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center gap-4 justify-start text-5xl m-4">
          <IconContext.Provider value={{ color: "#FF7043", size: "4rem" }}>
            <GiJumpingDog />
          </IconContext.Provider>

          <div className="py-2">
            <h2 className="font-merienda text-left text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brandTextDark to-brandTextLight">
              furranimals
            </h2>
            <h3 className="flex font-satisfy items-center gap-8 justify-starttext-[#765827] text-center text-lg mt-0">
              Explore our collection of amazing photos that showcase our mission
              and work.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImagesData.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img src={image} alt={`Gallery ${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
