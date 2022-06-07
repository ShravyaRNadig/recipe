import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./styleSheets/Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <nav className=" navbar">
                <Link to="/home" className="navbar-logo">
                    RECIPE
                    <Icons.FaCarrot />
                </Link>
                <ul className="nav-items">
                    {navItems.map((item) => {
                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <input list="browsers" name="browser" />
                <datalist id="browsers">
                    <option value="Internet Explorer" />
                    <option value="Firefox" />
                    <option value="Chrome" />
                    <option value="Opera" />
                    <option value="Safari" />
                </datalist>
            </nav>
        </>
    );
}

export default Navbar;
