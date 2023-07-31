import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <div>
            <div class="logo">
                <a href="/">
                    <h3 class="companyName">Fitness Finesse</h3>
                    {/* <img class="logo-navbar" src={require("../images/logo.png")} alt="" /> */}
                </a>
            </div>
            <div className="logo">
                <li>
                    <a class="features" href="/home"><h4>Home</h4></a>
                </li>
                <li>
                    <a class="features" href="/store"><h4>Store</h4></a>
                </li>
                <li>
                    <a class="features" href="/diet"><h4>Diet</h4></a>
                </li>
                <li>
                    <a class="features" href="/gym"><h4>Gyms</h4></a>
                </li>
            </div>
            <div class="logo">
                <a href="/signIn">
                    <FontAwesomeIcon className="userIcon" icon={faUser} size="2xl" />
                </a>
            </div>
        </div>
    )

}

export default Navbar;