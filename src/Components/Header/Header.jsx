import React from "react";
import './header.scss'
import { Link } from "react-router-dom";

function Header() {
    return (  
        <div id="header">
            <div>
            <h2>Floyd MayWeather App</h2>
            </div>
            <div>
                <img src="https://www.svgrepo.com/show/532362/user.svg" alt="" />
                <Link to="/LogIn"><button>Login</button></Link>/<Link to="SignUp"><button>Register</button></Link>
            </div>

        </div>
    );
}

export default Header; 