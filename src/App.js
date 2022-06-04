// import React, { useState, useEffect } from "react";
// import RegisterForm from "./components/RegisterForm";
// import LoginForm from "./components/LoginForm";
// import auth from "./auth/config";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.slim";
// import './App.css';
import React ,{ useState } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Cuisine from "./pages/Cuisine.js";
import Time from './pages/Time';
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Signup checkSignIn={checkSignIn}/>} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cuisine" element={<Cuisine />}></Route>
        <Route path='/time' element={<Time />}></Route>
        {/* <Route path='/' element={<Signup/>}></Route> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
