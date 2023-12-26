import React from "react";
import './side-bar.scss'
import { Link } from "react-router-dom";

function SideBar() {
    return (  
        <div id="sidebar">
            <img src="https://cdn-icons-png.flaticon.com/128/979/979585.png" alt="" />
                <div className="buttons">
                    <Link to="/Weather"><img src="https://www.svgrepo.com/show/532033/cloud.svg" alt="" />
                    <p>Weather</p></Link>
                    <Link to="Map"><img src="https://www.svgrepo.com/show/532548/map-pin-alt.svg" alt="" />
                    <p>Map</p></Link>
                    <Link to="Favorites"><img src="https://www.svgrepo.com/show/533052/star.svg" alt="" />
                    <p>Favorites</p></Link>
                </div>

        </div>
    );
}

export default SideBar; 