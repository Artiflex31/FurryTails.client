import React from "react";
import MapContainer from "./MapContainer";
import adopt from "./adopt.jpg";

const Adoption = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#ec7431] to-[#b7b56e] mb-8 mt-8">
        <h1 className="text-center text-4xl text-white font-poppins font-semibold pt-8 pb-6">
          Welcome to our Adoption Page
        </h1>
        <p className=" text-center text-2xl text-white pb-4">
          Find your new friend on the map:
        </p>
      </div>
      <div style={{ height: "600px" }}>
        <MapContainer />
      </div>
      <div className="my-10 flex items-center justify-center">
        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-center text-4xl font-merriweather font-bold">
            Join Us and Make a Difference in Our Community
          </h1>
          <div className=" p-6 flex items-center justify-center flex-col md:flex-row gap-16">
            <img
              className="w-[300px] mobile-start:w-[50vw] md:w-1/3 mr-4 rounded-full"
              src={adopt}
              alt="Logo"
            />
            <form className="flex flex-col px-10 w-screen md:w-[40vw]">
              <input
                className="mb-6 p-2 rounded outline outline-gray-500 focus:outline-cta outline-1 focus:outline-2"
                type="text"
                placeholder="First Name"
              />
              <input
                className="mb-6 p-2 rounded outline outline-gray-500 focus:outline-cta outline-1 focus:outline-2"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="mb-6 p-2 rounded outline outline-gray-500 focus:outline-cta outline-1 focus:outline-2"
                type="email"
                placeholder="Email"
              />
              <input
                className="mb-6 p-2 rounded outline outline-gray-500 focus:outline-cta outline-1 focus:outline-2"
                type="text"
                placeholder="Address"
              />
              <button
                className="bg-cta hover:bg-cta-hover px-4 py-2 rounded text-white"
                type="submit"
              >
                Join Our Community
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoption;
