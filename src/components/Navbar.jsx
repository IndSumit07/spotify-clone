import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home")
    const [createActive, setCreateActive] = useState(false)
  return (
    <div className="flex justify-between items-center">
      <div
        onClick={() => {
          setActiveLink("home");
        }}
        className="flex flex-col justify-center gap-1 items-center">
        {activeLink === "home" ? (
          <AiFillHome className="text-white text-3xl" />
        ) : (
          <AiOutlineHome className="text-white text-3xl" />
        )}
        <p className="text-white text-[12px]">Home</p>
      </div>
      <div
        onClick={() => {
          setActiveLink("search");
        }}
        className="flex flex-col justify-center gap-1 items-center">
        <div className="relative">
          <i className="ri-search-line text-white text-3xl"></i>
          {activeLink === "search" ? (
            <div className=" absolute top-[10.2px] left-[8.2px] w-3 h-3 bg-white rounded-full"></div>
          ) : (
            ""
          )}
        </div>
        <p className="text-white text-[12px]">Search</p>
      </div>
      <div
        onClick={() => {
          setActiveLink("library");
        }}
        className="flex flex-col justify-center gap-1 items-center">
        {activeLink === "library" ? (
          <MdLibraryMusic className="text-white text-3xl" />
        ) : (
          <MdOutlineLibraryMusic className="text-white text-3xl" />
        )}

        <p className="text-white text-[12px]">Your Library</p>
      </div>
      <div
        onClick={() => {
          setCreateActive(!createActive);
          setActiveLink("create")
        }}
        className="flex flex-col justify-center gap-1 items-center">
        <AiOutlinePlus
          className={`text-white text-3xl transition-all duration-150 ${
            createActive && activeLink==="create" ? "rotate-45" : ""
          }`}
        />
        <p className="text-white text-[12px]">Create</p>
      </div>
    </div>
  );
}

export default Navbar