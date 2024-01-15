import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IconContext } from "react-icons"; 

function Header() {
  return (
    <div id="header">
      <div>
        <h2>Floyd MayWeather App</h2>
      </div>
      <div>
        <IconContext.Provider value={{ className: "top-react-icons" }}>  
        <FaRegUser  />
        </IconContext.Provider>
        <NavLink to="/LogInPage">
          <button>Login</button>
        </NavLink>
        /
        <NavLink to="SignUpPage">
          <button>Register</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
