import React from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { navMenus } from "./config";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          {/* <ul className="navbar__container__menu">
            {navMenus.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  to={item.to}
                  className="navbar__container__menu__item__links"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
