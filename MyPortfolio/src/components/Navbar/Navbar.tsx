// import DarkmodeToggle from "../utils/DarkmodeToggle";

import { useState } from "react";
import { FcMenu } from "react-icons/fc";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];
  return (
    <div className="flex rounded-3xl sticky   justify-between items-center px-6 py-4 dark:bg-zinc-800 dark:text-white ">
      {/* Logo */}
      <div>
        <p className="text-4xl  font-bold font-ubuntu ">
          ayush<span className="text-red-400">.</span>
        </p>
      </div>

      {/* Nav Items */}
      <div className="hidden md:flex">
        <div className="flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="font-ubuntu text-stone-300 font-normal hover:text-white hover:scale-102 transition-all duration-300 "
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Hamburger */}
          <span
            className="md:hidden flex items-center dark:text-white text-2xl cursor-pointer"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FcMenu className="dark:text-red-800 text-3xl" />
          </span>
          <button className="bg-red-400 px-4 py-2 rounded-3xl font-ubuntu font-semibold hover:bg-black hover:outline-amber-50 hover:outline-1 hover:cursor-pointer hover:scale-104 transition-all duration-300 ">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
