import React,{useState} from "react";
import {Link} from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import {navItems} from "./NavItems";
import Button from "./Button";
import Dropdown from './Dropdown';

function Navbar (){
     const[dropdown, setDropdown] = useState(false);

    return(
        <>
            <nav className=" navbar">
                <Link to="/home" className="navbar-logo">
                    RECIPE
                    <Icons.FaCarrot />
                </Link>
                <ul className="nav-items">
                    {navItems.map((item)=>{
                        if(item.title === "Cuisine"){
                            return(
                                <li key={item.id} className={item.cName}
                                onMouseEnter={()=> setDropdown(true)} 
                                onMouseLeave={()=> setDropdown(false)}>
                                    <Link to={item.path}>
                                        {item.title}
                                        </Link>
                                    {dropdown && <Dropdown/>}
                                </li>
                                );
                        }

                        return(
                        <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                        );
                    })}
                </ul>
                <Button/>
            </nav>
            {/* <Dropdown/> */}
        </>
    );
}

export default Navbar;



// import React from 'react';
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
// } from './NavbarElements';
// // import background from './background.jpg';

// const Navbar = () => {
//     return (
//         <>
//             <Nav fixed="top">
//                 <Bars />

//                 <NavMenu>
//                     <NavLink to='/recipe' activeStyle>
//                        <b>RECIPE</b> 
//                     </NavLink>
//                     <NavLink to='/register' activeStyle>
                        
//                     </NavLink>
//                     {/* Second Nav */}
//                     {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//                 </NavMenu>
//                 <NavBtn>
//                     <NavBtnLink to='/register'><b>Register</b></NavBtnLink>
//                     <NavBtnLink to='/login'><b>Login</b></NavBtnLink>
//                 </NavBtn>
              
//             </Nav>
//             <div>
//                 <h1 align="center">Welcome to The Recipe App</h1>
//                 {/* <img src={require('./background.jpg')}/> */}
//                 {/* <img src={background} alt="recipe"/> */}
//             </div>
//         </>
//     );
// };

// export default Navbar;