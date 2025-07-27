import React, { useState } from "react";
import pic from "/photo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll"; //For smooth scrolling between sections
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
 <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1f1c2c] via-[#928DAB] to-[#1f1c2c] bg-opacity-70 backdrop-blur-lg border-b border-purple-500/30 shadow-md rounded-b-xl">




    <div className="flex justify-between items-center h-16">

      {/* 🚀 Left - Logo & Name */}
      <div className="flex items-center space-x-3">
        <img src={pic} className="h-12 w-12 rounded-full shadow-md border-2 border-white/20" alt="logo" />
        <div>
          <h1 className="font-bold text-lg md:text-xl text-white tracking-wide">
  Shivan<span className="text-purple-400 text-2xl">k</span>
</h1>
          <p className="text-xs text-gray-300">Web Developer</p>
        </div>
      </div>

      {/* 🖥 Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        {navItems.map(({ id, text }) => (
          <li
            key={id}
           className="list-none font-medium text-white hover:text-purple-300 hover:scale-110 transition-transform duration-300 cursor-pointer"


          >
            <Link
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              {text}
            </Link>
          </li>
        ))}
      </div>

      {/* 📱 Mobile Toggle Button */}
      <div onClick={() => setMenu(!menu)} className="md:hidden text-white cursor-pointer">
        {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
      </div>
    </div>

    {/* 📱 Mobile Menu */}
    {menu && (
      <div className="md:hidden mt-4 bg-[#1f1c2c]/80 backdrop-blur-lg border border-purple-500/20 rounded-lg shadow-lg">

        <ul className="flex flex-col py-6 space-y-4 text-center text-white font-semibold text-lg">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
             className="hover:text-purple-300 hover:scale-105 transition-transform duration-200 cursor-pointer"


            >
              <Link
                onClick={() => setMenu(!menu)}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</>


  );
}

export default Navbar;