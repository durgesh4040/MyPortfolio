import React from "react";
import NavLinks from "./NavLinks";
import ToggleTheme from "./ToggleTheme";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../context";

export const Navbar = () => {
  // function from context
  const { scrolled, openSidebar } = React.useContext(AppContext);

  // jsx
  return (
    <nav className={`${scrolled ? "nav-fixed" : ""}`}>
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          <Logo />
          <button className="nav-btn" onClick={openSidebar} aria-label="menu">
            <FaBars />
          </button>
        </div>
        {/* nav-links */}
        <ul className="nav-links">
          <NavLinks />
          <div>
            <a
              href="https://drive.google.com/file/d/1QapkYf5A_00mfU4DRp60J8ETIyBBZMxV/view?usp=sharing"
              className="link"
            >
              Resume
            </a>
          </div>
        </ul>
        <ToggleTheme />
      </div>
    </nav>
  );
};
