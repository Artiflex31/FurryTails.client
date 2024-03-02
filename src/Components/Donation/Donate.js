import React from "react";
import help from "./help.jpg";
import QRscanner from "./QRscanner.png";

function Donate() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full bg-gradient-to-r from-[#ec7431] to-[#b7b56e]">
        <div className="pt-8">
          <img
            className="md:h-[50vh] md:m-8  shadow-lg rounded-md"
            src={help}
            alt="help"
          />
        </div>
        <h1 className="text-4xl md:text-5xl text-white font-semibold mb-6">
          Will you save me?
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div class="md:w-1/2 md:mx-auto mt-8 px-4 py-8 bg-white shadow-lg rounded-lg">
          <form id="donationForm">
            <div class="mb-4">
              <label for="name" class="text-md md:text-xl text-gray-600 mb-16">
                Name:
              </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="name"
                type="name"
                placeholder=""
              />
            </div>
            <div class="mb-4">
              <label for="email" class="text-md md:text-xl text-gray-600 mb-16">
                Email:
              </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="xxxxx@gmail.com"
              />
            </div>
            <div class="mb-4">
              <label
                for="address"
                class="text-md md:text-xl text-gray-600 mb-16"
              >
                Address:
              </label>
              <input
                className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium h-20"
                id="email"
                type="email"
                placeholder=""
              />
            </div>
            <div class="mb-4">
              <label
                for="amount"
                class="text-md md:text-xl text-gray-600 mb-16"
              >
                Amount:
              </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder=""
              />
            </div>
            <div class="mb-4">
              <label
                for="remarks"
                class="text-md md:text-xl text-gray-600 mb-16"
              >
                Remarks:
              </label>
              <input
                className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium h-20"
                id="email"
                type="email"
                placeholder=""
              />
            </div>
            <div class="mb-4 flex justify-center">
              <button className="bg-cta hover:bg-[#FF5722] text-white item-center px-6 py-3 rounded-lg font-medium">
                Donate
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <img
            className="h-[50vh] rounded mx-5 mt-10 md:m-16 shadow-[rgba(17,_0,_158)_2px_5px_10px] md:shadow-[rgba(17,_0,_158)_2px_5px_10px]"
            src={QRscanner}
            alt="Qrscanner"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#ec7431] to-[#b7b56e] mt-15 mb-20 md:mt-40 md:mb-30 md:mx-0">
        <div class="text-center container mx-auto px-4 py-8">
          <h1 class="text-4xl md:text-5xl text-white font-semibold mb-6">
            Choose Your Donation Option
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-4xl font-merriweather text-gray-800 font-semibold m-8">
                One Time Donation
              </h2>
              <p class="text-xl text-gray-600 mx-16 mb-4">
                Make a one-time donation to support our cause.
              </p>
              <p class="text-6xl font-bold-merriweather text-gray-600 mb-2">
                $50
              </p>
              <button class="bg-cta hover:bg-[#FF5722] text-white font-bold py-4 px-3 rounded-lg mt-4 font-medium">
                Donate Now
              </button>
            </div>

            <div class="bg-white rounded-lg shadow-md p-5">
              <h2 class="text-4xl font-merriweather text-gray-800 font-semibold m-8">
                Weekly Donation
              </h2>
              <p class="text-xl text-gray-600 mx-16 mb-4">
                Set up a recurring weekly donation to support our cause.
              </p>
              <p class="text-6xl font-bold-merriweather text-gray-600 mb-2">
                $20
              </p>
              <button class="bg-cta hover:bg-[#FF5722] text-white font-bold py-4 px-3 rounded-lg mt-4 font-medium">
                Donate Now
              </button>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-4xl font-merriweather text-gray-800 font-semibold m-8">
                Monthly Donation
              </h2>
              <p class="text-xl text-gray-600 mx-16 mb-4">
                Set up a recurring monthly donation to support our cause.
              </p>
              <p class="text-6xl font-bold-merriweather text-gray-600 mb-2">
                $100
              </p>
              <button className="bg-cta hover:bg-[#FF5722] text-white font-bold py-4 px-3 rounded-lg mt-4 font-medium">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
