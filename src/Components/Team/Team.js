import React from "react";
import teams from "../Team/team.json";

import TeamCard from "../Card/TeamCard";

function Team() {
  return (
    <div className="bg-[#c5b68b] py-12">
      <div className="">
        <h2 className="text-center text-4xl font-merriweather font-bold mb-10 ">
          Our Dedicated Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {teams.map((team, index) => (
            <TeamCard
              index={index}
              imageSrc={team.imageSrc}
              name={team.name}
              role={team.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Team;
