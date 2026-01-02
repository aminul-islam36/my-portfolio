import { Code2, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../Util/Logo";

const Header = () => {
  const [active, setActive] = useState("");

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#000000fc] shadow-sm sticky top-0 z-50 w-full">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <strong className="text-white">
                <Menu />
              </strong>
            </div>
            <ul
              tabIndex="-1"
              className="menu z-30 bg-[#000000fc] menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`${
                    active && "text-yellow-400"
                  }font-semibold text-gray-300 hover:text-yellow-200 transition-colors py-2 px-4`}
                >
                  {link.name}
                </a>
              ))}
            </ul>
          </div>

          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`${
                  active === link.name ? "text-yellow-400 " : ""
                }text font-semibold text-gray-300 hover:text-yellow-200 transition-colors py-2 px-4`}
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="#contact"
            className="px-5 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full hover:bg-linear-to-r hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
