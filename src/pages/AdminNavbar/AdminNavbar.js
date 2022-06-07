import React from 'react';
import "./styleSheets/AdminNavbar.css";
import avatar from "../../assts/avatar.svg"
const AdminNavbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div>
            <nav className='navbar'>
                <div className="nav_icon" onClick={() => openSidebar()}>
                    <i className='fa fa-bars'></i>
                </div>
                <div className='navbar__left'>
                    <a href='#'>Add Recipes</a>
                    <a href='#'>Check Request of recipe</a>
                </div>
                <div className='navbar__right'>
                    <a href='#'>
                        <i className='fa fa-search'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-clock-o'></i>
                    </a>
                    <a href='#'>
                        <img width="30" src={avatar} alt="avatar"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar
