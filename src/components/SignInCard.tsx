import React from "react";
import image from "../assets/images/image.png";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import exo from "../assets/images/exo.png";

const SignInCard = () => {
  return (
    <>
      <img src={image} alt="image" className="relative h-[94vh] w-[45vw]" />
      <div className="absolute flex flex-col justify-between w-[42vw] font-Poppins  h-[86vh] text-white transform top-12 left-10">
        <img src={exo} alt="exo" className="w-12 h-5" />
        <div className="mt-4  letter tracking-[0.3em] ">
          <h1 className="font-[600] text-4xl">100% Uptime😎 </h1>
          <h1 className="text-[#BFBFBF] text-3xl ">Zero Infrastructure</h1>
          <h1 className="text-[#BFBFBF] text-3xl">Management</h1>

          <div className="flex gap-2 mt-6">
            <div className="h-2 bg-white rounded-lg w-7 "></div>
            <div className="w-2 h-2 bg-[#BFBFBF] rounded-full "></div>
            <div className="w-2 h-2 bg-[#BFBFBF] rounded-full "></div>
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <div className="flex gap-2">
            <AiOutlineGlobal className="text-xl" />
            <p className="text-sm">aesthetic.com</p>
          </div>
          <div className="flex space-x-3 ">
            <FaLinkedin className="text-xl" />
            <FaFacebook className="text-xl" />
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInCard;
