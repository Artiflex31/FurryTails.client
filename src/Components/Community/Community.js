import React from "react";
import Logo from "./logo.jpg";
function Community() {
  return (
    <div className="my-10 flex items-center justify-center">
      <div className="flex flex-col gap-16 items-center">
        <h1 className="text-center text-4xl font-merriweather font-bold">
          Join Us and Make a Difference in Our Community
        </h1>
        <div className=" p-6 flex items-center justify-center flex-col md:flex-row gap-16">
          <img
            className="w-[300px] mobile-start:w-[50vw] md:w-1/3 mr-4"
            src={Logo}
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
  );
}

export default Community;
