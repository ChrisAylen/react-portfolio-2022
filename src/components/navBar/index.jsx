import React from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          <ul className="navbar__container__menu">
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
            <div className="nav-icon" onClick={handleClick}></div>
            {
            click ? <HiX size={30}/> : <FaBars size={30} />
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
