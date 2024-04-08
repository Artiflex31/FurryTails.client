import React, { useState } from "react";
import Navicons from "./Navicons";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiJumpingDog } from "react-icons/gi";
import { AiTwotoneMail } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import navlinks from "./navlinks.json";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { links } = navlinks;
  const [currentLink, setCurrentLink] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = (label) => {
    setCurrentLink(label);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setCurrentLink(null);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-background">
      <Navicons />
      <div className="flex items-center gap-4 justify-center text-5xl m-4">
        <IconContext.Provider value={{ color: "#FF7043", size: "4rem" }}>
          <GiJumpingDog />
        </IconContext.Provider>
        <h2 className="font-merienda text-transparent bg-clip-text bg-gradient-to-r from-brandTextDark to-brandTextLight">
          <span>F</span>urry
          <span>T</span>ails
        </h2>
      </div>
      <h3 className="flex font-satisfy items-center gap-8 justify-center text-[#765827] text-center text-lg m-2">
        A Haven for Animals, Furry and True.
      </h3>

      <div className="flex justify-center desktop-sm:hidden p-3 bg-background">
        <div className="min-w-[50vw] relative">
          <select className="border rounded p-1 border-cta focus:outline-cta appearance-none w-full px-5 text-[#444444]">
            {links.map((item, index) =>
              item.subMenu ? (
                <optgroup
                  key={index}
                  label={item.label}
                  disabled={!item.subMenu} // Disable if there's no submenu
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <option className="" key={subIndex} value={subItem.url}>
                      {subItem.label}
                    </option>
                  ))}
                </optgroup>
              ) : (
                <option key={index} value={item.url}>
                  {item.label}
                </option>
              )
            )}
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>

      {/*menu option*/}
      <div className="hidden desktop-sm:flex desktop-sm:justify-center desktop-sm:gap-7 desktop-sm:py-5 desktop-sm:text-[#555555] desktop-sm:font-[500] ">
        <ul className=" flex flex-col space-y-3 desktop-sm:space-y-0 desktop-sm:flex-row desktop-sm:space-x-7">
          {links.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.url}
                className="hover:text-[#888888] hover:scale-90 cursor-pointer flex items-center gap-1 "
              >
                {item.label}

                {item.subMenu &&
                  (currentLink === item.label ? (
                    <BiChevronUp />
                  ) : (
                    <BiChevronDown />
                  ))}
              </Link>
              {currentLink === item.label && item.subMenu && (
                <ul className="absolute top-5 shadow-xl p-8 z-50 bg-background ">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="mt-5 hover:scale-90">
                      <a href={subItem.url}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
