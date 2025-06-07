"use client";
import Image from "next/image";
import Logo from "../../asset/images/logo.svg";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "How to reach?", href: "/how-to-reach" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Plans", href: "/plans" },
  ];

  return (
    <nav className="flex justify-between items-center px-5 md:px-10 py-5 bg-white">
      {/* logo */}
      <div className="flex items-center justify-center">
        <Image
          src={Logo}
          alt="Large Logo"
          className="  block h-22 lg:h-28 w-auto"
        />
      </div>

      {/* navigations for larger screen */}
      <div className="hidden md:flex">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`text-[18px] font-medium mx-5 ${
              selected === index ? "text-[#A42D2B]" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* mobile menu  */}
      <div className="flex items-center md:hidden">       
          {!isOpen && <GiHamburgerMenu
            className="text-3xl cursor-pointer md:hidden"
            onClick={() => setIsOpen(true)}
          />}
      
      </div>
      {/* dropdown menu for mobile */}
      {isOpen && (
  <div className="fixed inset-0 bg-black/50 z-10 top-0 right-0 md:hidden">
    <div className="absolute top-0 right-0 bg-white shadow-lg w-[250px] h-screen z-20 py-10">
      <div className=" p-4">
        <IoMdClose
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <ul className="flex flex-col p-5 pt-0">
        {links.map((link, index) => (
          <li key={index} className="my-2">
            <Link
              href={link.href}
              className={`text-[18px] hover:text-[#A42D2B] ${
                selected === index ? "text-[#A42D2B]" : ""
              }`}
              onClick={() => {
                setSelected(index);
                setIsOpen(false);
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}


      {/* hamburger icon for mobile */}


      <button className=" hidden lg:block lg:bg-[#FFB52C] lg:text-black lg:text-center lg:font-open-sans lg:text-lg lg:font-semibold lg:cursor-pointer lg:px-6 lg:py-3 lg:rounded-[7px]">
        Plan your Wedding
      </button>
    </nav>
  );
};

export default Navbar;
