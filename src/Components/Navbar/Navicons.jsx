import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiJumpingDog } from "react-icons/gi";
import { AiTwotoneMail } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function Navicons() {
  return (
    <div>
      <header className="flex justify-between mx-10 pt-2 mb-2 text-lg text-cta">
        <ul className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 w-full">
          <li>
            <a
              href="tel:+918924901326"
              target="phone"
              className="flex items-center text-sm gap-1"
            >
              <FaPhoneAlt /> +91-8924901326
            </a>
          </li>
          <li>
            <a
              href="mailto:poornendubajpai@gmail.com"
              target="email"
              className="flex items-center text-sm gap-1"
            >
              <AiTwotoneMail />
              poornendubajpai@gmail.com
            </a>
          </li>
        </ul>
        <ul className="hidden sm:flex gap-4">
          <li>
            <a
              href="https://www.facebook.com/puru.bajpai.1?mibextid=ZbWKwL"
              target="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bajpai_puru?igsh=MTFtYTdqcGFqYzVjeA=="
              target="instagram"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@Artiflex31?feature=shared"
              target="youtube"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
