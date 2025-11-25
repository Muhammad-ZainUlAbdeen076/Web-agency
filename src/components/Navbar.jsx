import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Submenu toggles
  const [aboutOpen, setAboutOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-20" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Solutions</li>
          <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <X size={32} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={32} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black text-white w-full text-left">

          {/* ABOUT */}
          <li className="border border-gray-500">
            <div
              className="flex justify-between items-center py-3 px-6 cursor-pointer hover:bg-white hover:text-black"
              onClick={(e) => {
                e.preventDefault();
                setAboutOpen(!aboutOpen);
              }}
            >
              <span>About</span>
              {aboutOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {/* Submenu */}
            {aboutOpen && (
              <ul className="bg-black cursor-pointer">
                <li className="py-3 pl-12 pr-6 text-sm border border-gray-500 hover:bg-white hover:text-black">
                  -Our History-
                </li>
              </ul>
            )}
          </li>

          {/* PORTFOLIO */}
          <li className="border border-gray-500 py-3 px-6 hover:bg-white hover:text-black cursor-pointer">
            Portfolio
          </li>

          {/* SERVICES */}
          <li className="border border-gray-500 py-3 px-6 hover:bg-white hover:text-black cursor-pointer">
            Services
          </li>

          {/* SOLUTIONS */}
          <li className="border border-gray-500">
            <div
              className="flex justify-between items-center py-3 px-6 cursor-pointer hover:bg-white hover:text-black"
              onClick={(e) => {
                e.preventDefault();
                setSolutionsOpen(!solutionsOpen);
              }}
            >
              <span>Solutions</span>
              {solutionsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {solutionsOpen && (
              <ul className="bg-black">
                <li className="py-3 pl-12 pr-6 text-sm border border-gray-500 hover:bg-white hover:text-black">
                  Web Development
                </li>
                <li className="py-3 pl-12 pr-6 text-sm border border-gray-500 hover:bg-white hover:text-black">
                  App Development
                </li>
              </ul>
            )}
          </li>

          {/* BLOG */}
          <li className="border border-gray-500 py-3 px-6 hover:bg-white hover:text-black cursor-pointer">
            Blog
          </li>

          {/* CONTACT */}
          <li className="border border-gray-500 py-3 px-6 hover:bg-white hover:text-black cursor-pointer">
            Contact Us
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
