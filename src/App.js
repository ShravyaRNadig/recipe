import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Cuisine from "./pages/Cuisine.js";
import Signup from "./pages/Signup";
import Contactus from "./pages/Contactus";

function App() {
    return (  
          
        <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Signup/>} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/cuisine" element={<Cuisine />}></Route>
            <Route path="/contactus" element={<Contactus/>}></Route>
          </Routes>
        </BrowserRouter>
      
    );
}

export default App;


