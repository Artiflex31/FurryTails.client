import React from "react";

const Card = ({ index, imageSrc, heading, paragraph }) => {
  return (
    <div key={index} className="bg-white p-6 rounded-lg shadow-xl ">
      <img src={imageSrc} alt={`Card ${index + 1}`} className="mb-4 w-full" />
      <h3 className="text-xl font-semibold mb-2 text-center">{heading}</h3>
      <p className="text-gray-700 text-center">{paragraph}</p>
      <div className="flex justify-center">
        <button className="bg-cta hover:bg-[#FF5722] text-white px-4 py-2 rounded mt-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
