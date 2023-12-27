import React from "react";
import './side-bar.scss'
import { Link, NavLink } from "react-router-dom";

function SideBar() {
    return (  
        <div id="sidebar">
            <img src="https://cdn-icons-png.flaticon.com/128/979/979585.png" alt="" />
                <div className="buttons">
                    <NavLink to="/"><img src="https://www.svgrepo.com/show/532033/cloud.svg" alt="" />
                    <p>Weather</p></NavLink>
                    <NavLink to="/MapPage"><img src="https://www.svgrepo.com/show/532548/map-pin-alt.svg" alt="" />
                    <p>Map</p></NavLink>
                    <NavLink to="/FavoritesPage"><img src="https://www.svgrepo.com/show/533052/star.svg" alt="" />
                    <p>Favorites</p></NavLink>
                </div>

        </div>
    );
}

export default SideBar; 