import React from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import PowerSettingsNewTwoToneIcon from "@mui/icons-material/PowerSettingsNewTwoTone";
import { navData } from "../../data/Data";
import Logo from '../../assets/logo.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to ='/'>
        <img className=" w-[220]" src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className="menu">
        <ul className="links">
          {navData.map((val, index) => {
            return (
              <li
                key={index}
                className={`${
                  val.icon === PowerSettingsNewTwoToneIcon && "setting-icon"
                }`}
              >
                <NavLink to={val.url}>
                  <val.icon />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
