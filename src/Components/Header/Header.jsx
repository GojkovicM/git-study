import React from "react";
import './header.scss'
import {NavLink } from "react-router-dom";

function Header() {
    return (  
        <div id="header">
            <div>
            <h2>Floyd MayWeather App</h2>
            </div>
            <div>
                <img src="https://www.svgrepo.com/show/532362/user.svg" alt="" />
                <NavLink to="/LogInPage"><button>Login</button></NavLink>/<NavLink to="SignUpPage"><button>Register</button></NavLink>
            </div>

        </div>
    );
}

export default Header; 