import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="my money" className="w-[124px] h-[50px] invert "  />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`group font-poppins cursor-pointer text-[16px] ${
              active === nav.title ? "text-secondary font-semibold" : "text-dimWhite font-regular"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            <div
              className="h-0.5 bg-secondary scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            />
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
            onClick={() => {
    setToggle(!toggle);
    console.log(toggle);
  }}
          
        />

<div
  className={`${
    !toggle ? "hidden" : "flex"
  } fixed top-0 right-0 bottom-0 w-64 bg-black-gradient p-6 rounded-l-xl sidebar`}
>
  <img
    src={toggle ? close : menu}
    alt="menu"
    className="absolute top-4 right-4 w-8 h-8 object-contain cursor-pointer"
    onClick={() => setToggle((prev) => !prev)}
  />
  <ul className="list-none flex flex-col items-start mt-8">
  {navLinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins font-medium cursor-pointer text-[16px] ${
        active === nav.title ? "text-white" : "text-dimWhite"
      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
      onClick={() => {
        setActive(nav.title);
        setToggle(false);
      }}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
