import { useState } from "react";
import { navLink } from "../constants";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useClickOutside } from "../hooks/useClickOutside";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useClickOutside(() => setOpenMenu(false));
  return (
    <nav>
      <FaBars className="block md:hidden" onClick={() => setOpenMenu(true)} />
      <div
        ref={ref}
        className={`${
          openMenu ? " -translate-x-[75%]" : "translate-x-[140%]"
        } fixed flex flex-col md:static md:translate-x-0 top-0  py-8 md:p-0 h-full md:border-none border-l border-[#e1e5f1] dark:border-black  bg-white  dark:bg-black  `}
      >
        <div
          className="text-3xl absolute top-3 right-3  md:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <FaXmark />
        </div>
        <ul
          className={`gap-8  pt-10 md:pt-0 font-normal px-20 text-nowrap md:px-0 flex flex-col md:flex-row `}
        >
          {navLink.map((el) => (
            <li
              className="hover:text-texthov  transition-colors duration-200 ease-in-out"
              key={el.name}
            >
              <a href={`${el.href}`}>{el.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
