import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterSection = () => {
  const [counterStart, setCounterStart] = useState({
    volunteers: 0,
    animalsAdopted: 0,
    dogBiscuitsEaten: 0,
    rescues: 0,
  });
  return (
    <ScrollTrigger
      onEnter={() => setCounterStart(true)}
      onExit={() => setCounterStart(false)}
    >
      <div className="bg-[#c5b68b] py-12">
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="text-center text-4xl font-merriweather font-bold mb-10">
            Our Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">{counterStart.volunteers}</p>
              <h1 className="text-6xl mb-4 text-gray-500">
                {counterStart && (
                  <CountUp start={0} end={221} duration={3} delay={0} />
                )}
              </h1>
              <h3 className="text-2xl font-semibold mb-2 text-cta">
                Our Volunteers
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">
                {counterStart.animalsAdopted}
              </p>
              <h1 className="text-6xl mb-4 text-cta">
                {counterStart && (
                  <CountUp start={0} end={734} duration={3} delay={0} />
                )}
              </h1>
              <h3 className="text-2xl font-semibold mb-2 text-gray-500">
                Animals Adopted
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">
                {counterStart.dogBiscuitsEaten}
              </p>
              <h1 className="text-6xl mb-4 text-gray-500">
                {counterStart && (
                  <CountUp start={0} end={24531} duration={3} delay={0} />
                )}
              </h1>
              <h3 className="text-2xl font-semibold mb-2 text-cta">
                Dog Biscuits Eaten
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-6xl mb-4 text-cta">
                {counterStart && (
                  <CountUp start={0} end={1158} duration={3} delay={0} />
                )}
              </h1>
              <p className="text-3xl font-bold">{counterStart.rescues}</p>
              <h3 className="text-2xl font-semibold mb-2 text-gray-500">
                Rescues
              </h3>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterSection;
