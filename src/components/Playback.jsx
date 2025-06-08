import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Playback = () => {
    const location = useLocation();
    const {title,coverImage, singer, color} = location.state || {};
  return (
    <div className="w-full rounded-xl py-2 px-2 backdrop-blur-sm flex justify-between items-center" style={{backgroundColor:color}}>
      <div className="flex gap-3 justify-center items-center">
        <div className="w-[45px] h-[45px] rounded-lg bg-red-500 overflow-hidden flex justify-center items-center bg-cover ">
            <img src={coverImage} alt="" />
        </div>
        <div className="flex justify-center items-start flex-col">
          <p className="font-semibold text-[12px] text-white ">{title ? title : "Untitled"}</p>
          <p className="text-[10px]">{singer ? singer:"untitled"}</p>
        </div>
      </div>
      <div className="flex mr-2 justify-center items-center gap-3">
        <MdSkipPrevious className="text-white text-4xl" />
        <FaPlay className="text-white text-xl" />
        <MdSkipNext className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default Playback;
