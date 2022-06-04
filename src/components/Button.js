import React from 'react';
import { Link } from 'react-router-dom';
import "./styleSheets/Button.css";

function Button() {
  return (
    <Link to="signup">
        <button className='btn'>Sign Up</button>
    </Link>
  )
}

export default Button;
