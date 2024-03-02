import React from "react";
import notFoundImage from "./Error404.jpg";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img className="h-[50vh]" src={notFoundImage} alt="Page Not Found" />
      <h1 className="text-4xl font-merriweather font-bold text-gray-800 mb-8">
        404 - Page Not Found
      </h1>
      <div className="w-full bg-gradient-to-r from-[#ec7431] to-[#b7b56e] mb-10 md:mb-20">
        <p className="text-xl md:text-5xl text-white m-10 md:m-20">
          Sorry, the page you are looking for might be in another castle.
        </p>
      </div>
    </div>
  );
}

export default Error;
