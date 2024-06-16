import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo-mobile.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary px-5 lg:px-12 py-4 flex justify-between lg:items-center ">
      <div className="flex flex-wrap gap-2">
        <img
          className="w-[50px] h-[36px] lg:w-[66px] lg:h-[47px]"
          src={Logo}
          alt="Logo"
        />
        <h1 className="text-fourt font-Montserrat font-bold text-[24px] lg:hidden">
          Calmy Heal
        </h1>
      </div>
      <div className="hidden lg:flex gap-4 lg:gap-12 lg:items-center text-fourt">
        <Link
          to="/"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Beranda
        </Link>
        <Link
          to="/Calmy-Challenge"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Calmy Challenge
        </Link>
        <Link
          to="/Calmy-Edu"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Calmy Edu
        </Link>
        <Link
          to="/Calmy-Meditation"
          className="hover:underline underline-offset-3  font-Montserrat"
        >
          Calmy Meditation
        </Link>
        <Link
          to="/Tentang-Calmy"
          className="hover:underline underline-offset-3 font-Montserrat"
        >
          Tentang Calmy
        </Link>
      </div>
      <Link to="/Login">
        <button className="hidden lg:block bg-fourt text-secondary font-semibold px-4 py-2 rounded-[20px] lg:w-[162px] lg:h-[49px] shadow-md">
          Login
        </button>
      </Link>

      {/**Hamburger */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          isOpen && "open"
        } flex flex-col items-center w-fit gap-[7px] cursor-pointer lg:hidden z-50 py-2`}
      >
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-fourt rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-fourt rounded-full"></span>
        <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-fourt rounded-full"></span>
      </div>
      <div
        className={`flex flex-col absolute top-[64px] left-0 right-0 p-5 gap-6 bg-third border-t lg:hidden border-baseBlack/20 ${
          isOpen ? "translate-y-0" : "-translate-y-[130%]"
        } transition-all duration-500 ease-in-out`}
      >
        <Link
          to="/"
          className={`${"text-baseBlack"} text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Beranda
        </Link>
        <Link
          to="/Calmy-Challenge"
          className={`${"text-baseBlack"} text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Calmy Challenge
        </Link>
        <Link
          to="/Calmy-Edu"
          className={`${"text-baseBlack"} text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Calmy Edu
        </Link>
        <Link
          to="/Calmy-Meditation"
          className={`${"text-baseBlack"} text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Calmy Meditation
        </Link>
        <Link
          to="/Tentang-Calmy"
          className={`${"text-baseBlack"} text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Tentang Calmy
        </Link>
        <Link
          to="/Login"
          className={`${"text-baseBlack"} text-primary font-medium font-Montserrat hover:text-primary transition-all duration-200`}
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
