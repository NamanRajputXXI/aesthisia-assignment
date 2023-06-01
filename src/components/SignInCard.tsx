import React from "react";
import image from "../assets/images/image.png";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const SignInCard = () => {
  return (
    <div className="relative">
      <img src={image} alt="image" className="relative h-[90vh]" />
      <div className="absolute flex flex-col text-white transform top-5 left-5">
        <h2 className="text-2xl font-bold">Exo</h2>
        <h1 className="mt-4 text-4xl font-bold">
          100% Uptime <br /> Zero Infrastructure <br /> Management
        </h1>
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <AiOutlineGlobal className="text-xl" />
            <p className="text-sm">aesthetic.com</p>
          </div>
          <div className="flex mt-2 space-x-2 text-white">
            <FaLinkedin className="text-xl" />
            <FaFacebook className="text-xl" />
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
