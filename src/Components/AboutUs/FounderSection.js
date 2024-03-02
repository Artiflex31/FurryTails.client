import React from "react";
import photo from "./founder.jpg";
export default function FounderSection() {
  return (
    <div>
      <div className="w-full mb-8 text-center">
        <h3 className="w-full p-20 text-4xl text-white font-semibold bg-gradient-to-r from-[#ec7431] to-[#b7b56e] ">
          Meet Our Founder
        </h3>
        <div className="flex items-center justify-center">
          <img
            className="w-64 rounded-full mt-8"
            src={photo}
            alt="Founder Name"
          />
        </div>
        <div>
          <p className="p-4 text-gray-700 text-xl">Poornendu Bajpai</p>
          <p className="mb-2 text-gray-500">Animal Welfare Expert</p>
        </div>
        <p className="text-lg md:text-xl text-gray-600 mx-16 md:mx-36 mb-8 md:mb-16">
          In my formative years, a heart-wrenching sight unfolded before me – a
          lonely, trembling puppy left to fend for itself on the unforgiving
          streets. This poignant encounter sparked a profound sense of
          responsibility within me, propelling me into the world of animal
          rescue. From that transformative moment, my purpose crystallized: to
          champion the cause of these voiceless beings. Today, as the driving
          force behind our organization, I am fueled by the memory of that
          vulnerable puppy and the countless lives we've since nurtured. My
          commitment remains unwavering – to forge a world where every creature
          is cherished and safeguarded, one rescue story at a time.
        </p>
      </div>
    </div>
  );
}
