import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./styleSheets/Navbar.css";

function Navbar(props) {

 return (
        <>
            <nav className=" navbar">
                <Link to="/home" className="navbar-logo">
                    RECIPE
                    <Icons.FaCarrot />
                </Link>
                <ul className="nav-items">
                    {props.navItems.map((item) => {
                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
