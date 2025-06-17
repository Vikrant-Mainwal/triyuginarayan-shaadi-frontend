"use client";
import Image from "next/image";
import Logo from "../../asset/images/logo/logo.svg";
import Insta from "../../asset/images/others/instagram.svg";
import Facebook from "../../asset/images/others/facebook.svg";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import TopUpForm from "../top-up-form/TopUpForm";
import { usePathname } from "next/navigation";
import { TiHome } from "react-icons/ti";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";

const Navbar = () => {
  const pathName = usePathname();
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <TiHome /> },
    { name: "About us", href: "/about", icon: <IoPeople /> },
    { name: "How to reach", href: "/how-to-reach", icon: <TiLocation /> },
    { name: "Contact Us", href: "/contact-us", icon: <IoCall /> },
    // { name: "Plans", href: "/plans" ,image: Logo },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className=" sticky top-0 z-30 bg-[#FDFFF2]">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-5 md:px-10 py-3 w-full ">
        {/* logo */}
        <div className="flex items-center ">
          <Link href={"/"}>
            <Image src={Logo} alt="Large Logo" className="h-[55px] md:h-[80px]" />
          </Link>
        </div>

        {/* navigations for larger screen */}
        <div className={"hidden md:flex space-x-20"}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-[18px] ${
                pathName === link.href ? "text-[#A42D2B] font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* mobile menu  */}
        <div className="flex items-center md:hidden">
          {!isOpen && (
            <GiHamburgerMenu
              aria-label="Open Menu"
              className="text-3xl cursor-pointer md:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        {/* dropdown menu for mobile */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-10 top-0 right-0 md:hidden">
            <div
              ref={menuRef}
              className="absolute top-0 right-0 bg-white w-[250px] h-full z-20 py-10 transform transition-transform duration-3500 ease-in-out flex flex-col justify-between"
            >
              <div>
              <div className="flex items-center justify-between pr-5 px-2">
                <Image src={Logo} alt="image logo" className="h-[60px]" />
                <IoMdClose
                  aria-label="Close Menu"
                  className="text-[30px] cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <ul className="flex flex-col p-5 gap-4 mt-10">
                {links.map((link, index) => (
                  <li key={index} className="my-2">
                    <Link
                      href={link.href}
                      className={`text-[14px] flex items-center gap-2 ${
                        pathName === link.href ? "text-[#A42D2B]" : ""
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-[26px]">{link.icon}</span>
                      <span className="text-[18px]">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
              <div className="flex flex-col gap-4 mt-10 p-5 mb-7">
                <div className="flex gap-4">
                  
              <a href="https://www.instagram.com/triyuginarayanshaadi?igsh=OGo2c2k1aWxoYmRr" target="_blank">
                  <Image src={Insta} alt="Instagram" className="w-10" />
              </a>
              
              <a href="https://www.facebook.com/share/16xFHgKT72/" target="_blank">
                  <Image src={Facebook} alt="Facebook" className="w-10" />
              </a>
                </div>
                <p className="!text-[12px] text-[#656565] ">2025 ©️ triyuginarayanshaddi</p>
              </div>
            </div>
          </div>
        )}

        {/* hamburger icon for mobile */}

        <button
          className=" hidden lg:block lg:bg-[#FFB52C] lg:text-black lg:text-center lg:open-sans lg:text-[16px] lg:font-semibold lg:cursor-pointer lg:px-6 lg:py-3 lg:rounded-[7px]"
          onClick={() => setIsOpenForm(true)}
        >
          Plan your Wedding
        </button>

        {isOpenForm && <TopUpForm onClose={() => setIsOpenForm(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
