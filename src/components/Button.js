import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

function Button() {
  return (
    <Link to="search">
        <button className='btn'>Search</button>
    </Link>
    
  )
}

export default Button;
