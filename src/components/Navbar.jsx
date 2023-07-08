import { useContext, useState, useEffect } from "react";
import { MdLocalMovies } from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";
import { AiOutlineTrophy, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { ThemeContext } from "../App";
import ReactSwitch from "react-switch";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [Nav, SetNav] = useState(false);
  const [gradientColors, setGradientColors] = useState([]);
  const menuItemsClassName = `menuhover ${
    theme === "dark" ? "text-[#f3ebf6]" : ""
  }`;

  useEffect(() => {
    // Set gradient colors based on the theme
    if (theme === "dark") {
      setGradientColors(["#04032e", "#04032e"]);
    } else {
      setGradientColors(["#FFDFDF", "#FFDFDF"]);
    }
  }, [theme]);

  const handleClick = () => {
    SetNav(!Nav);
  };

  return (
    <>
      {/* Navbar container */}
      <div
        className="flexdivs items-center font-bold p-4"
        style={{
          background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
        }}
      >
        {/* Mobile menu icon */}
        <HiMenuAlt2
          size={35}
          className="sm:hidden text-[#FD6678]"
          onClick={handleClick}
        />

        {/* Logo */}
        <p className="text-[#FD6678] text-3xl sm:text-5xl">React Test</p>

        {/* Theme switch */}
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          className="flexdivs"
        />

        {/* Mobile navigation menu */}
        <ul
          className={
            Nav
              ? `fixed left-0 top-0 w-[100%] z-10 h-full ${
                  theme === "dark"
                    ? "bg-[#04032e] text-[#f3ebf6]"
                    : "bg-[#FFDFDF] text-[#04032e]"
                } font-semibold items-center text-center ease-in-out duration-500`
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          {/* Close icon */}
          <li className={menuItemsClassName}>
            <AiOutlineClose
              onClick={handleClick}
              className="absolute top-8 left-8"
              size={35}
            />
          </li>

          {/* Menu items */}
          <li className={`menuhover mt-24 ${menuItemsClassName}`}>
            Editors Choice
          </li>
          <li className={`menuhover ${menuItemsClassName}`}>Category</li>
          <li className={`menuhover ${menuItemsClassName}`}>Top Chart</li>
        </ul>

        {/* Desktop navigation menu */}
        <p className="hidden lg:flex text-xl items-center ml-auto sm:space-x-4 lg:space-x-10">
          <p className="flexdivs flex-col">
            <span>
              <MdLocalMovies size={35} />
            </span>
            Editors Choice
          </p>
          <p className="flexdivs flex-col">
            <span>
              <GiPopcorn size={35} />
            </span>
            Category
          </p>
          <p className="flexdivs flex-col">
            <span>
              <AiOutlineTrophy size={35} />
            </span>
            Top Chart
          </p>
        </p>
      </div>
    </>
  );
};

export default Navbar;
