import React from "react";
import Home from "./shared/svgs/Home";
import Search from "./shared/svgs/Search";

const Navbar = () => {
  return (
    <div className=" w-[280px] h-full bg-[#C08261] rounded-[30px] font-Montserrat font-normal flex  text-white text-left p-8 flex-col justify-between">
      <div className="space-y-10">
        <p className="font-bold text-4xl leading-[44px] text-[#FAF1E4] py-4">MP34ALL.</p>
        <div>
          <ul className="text-lg leading-[22px] space-y-8">

            <li className="flex flex-row items-center space-x-6 cursor-pointer">
              <span>
                <Home />
              </span>
              <p className=" text-[#FAF1E4]">Home</p>
            </li>
            <li className="flex flex-row items-center space-x-6 cursor-pointer">
              <span>
                <Search dark />
              </span>
              <p className=" font-bold text-[#FAF1E4]">Search</p>
            </li>
            
          </ul>
        </div>
      </div>
      <div className=" text-sm space-y-2">
        <p className="cursor-pointer text-[#FAF1E4]">Help</p>
        <p className="cursor-pointer text-[#FAF1E4]">Contact Us</p>
      </div>
    </div>
  );
};

export default Navbar;