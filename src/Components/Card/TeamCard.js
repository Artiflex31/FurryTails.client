import React from "react";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const TeamCard = ({ index, imageSrc, name, role }) => {
  return (
    <div key={index} className="bg-white p-6 rounded-lg shadow-xl ">
      <img
        src={imageSrc}
        alt={`Card ${index + 1}`}
        className="mb-4 w-full rounded-full"
      />
      <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      <p className="text-gray-700 text-center">{role}</p>
      <IconContext.Provider value={{ size: "1.5rem", color: "#555555" }}>
        <div className="flex justify-center mt-7 gap-4">
          <a href="">
            <BsFacebook />
          </a>
          <a>
            <AiFillLinkedin />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default TeamCard;
