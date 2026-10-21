import React from "react";
import Founder from "./FounderSection";

function AboutUs() {
  return (
    <div className="bg-white py-12">
      <div className=" mx-auto text-center">
        <h1 className="text-4xl font-merriweather font-bold text-gray-800 mb-8">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row py-10 md:px-20">
          <div className="w-2/5 mb-7 md:px-20">
            <p className="text-md md:text-xl text-gray-600 ">
              We are a dedicated team committed to making a positive impact by
              rescuing, rehabilitating, and finding loving homes for animals in
              need. Our mission is to create a world where compassion and care
              flourish, one furry friend at a time.
            </p>
          </div>
          <div className="md:w-3/5 px-16">
            <img
              className="drop-shadow-lg rounded-md"
              src="https://images.pexels.com/photos/11683889/pexels-photo-11683889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 ">
          <div className="w-full bg-gradient-to-r from-[#ec7431] to-[#b7b56e] ">
            <h3 className="text-4xl text-white font-merriweather font-semibold m-8">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-white mx-16 md:mx-36 mb-8 md:mb-16">
              "Empowering compassion and change, our mission is to create a
              world where every animal's well-being is cherished, advocating for
              their rescue, rehabilitation, and joyful companionship. Through
              unwavering dedication, we strive to ensure that no animal suffers
              in silence and that their lives are filled with love, care, and
              respect."
            </p>
          </div>
          <div className="w-full  ">
            <h3 className="text-4xl font-merriweather text-gray-800 font-semibold m-8">
              Our Vision
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mx-16 md:mx-36 mb-8 md:mb-16">
              "Our vision is to create a world where every animal is valued,
              protected, and cherished. We envision a future where animals and
              humans coexist in harmony, where no creature suffers from neglect
              or cruelty, and where the bond between all living beings is
              nurtured. Through our dedicated efforts, we strive to inspire
              change, raise awareness, and build a community that advocates for
              the welfare of animals, paving the way for a brighter and more
              compassionate tomorrow."
            </p>
          </div>

          <div className="w-full bg-gradient-to-r from-[#ec7431] to-[#b7b56e] ">
            <h3 className="text-4xl text-white font-merriweather font-semibold m-8">
              Our Values
            </h3>
            <p className="text-lg md:text-xl text-white mx-16 md:mx-36 mb-8 md:mb-16">
              "At the heart of everything we do are our core values: compassion,
              integrity, collaboration, and innovation. We believe in treating
              every life with kindness, upholding the highest ethical standards,
              working together to achieve our goals, and continually seeking new
              ways to make a meaningful impact in the lives of animals. These
              values guide us in our pursuit of a better world for all
              creatures."
            </p>
          </div>

          <div className="w-full  ">
            <h3 className="text-4xl font-merriweather text-gray-800 font-semibold m-8">
              Our Impact
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mx-16 md:mx-36 mb-8 md:mb-16">
              "Our impact resonates in lives saved, families united, and
              communities uplifted. Through dedication and care, we've rescued
              animals, nurtured bonds, and ignited change. Together, we're
              creating a world where every life matters."
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Founder Section */}
      <Founder />
    </div>
  );
}

export default AboutUs;
