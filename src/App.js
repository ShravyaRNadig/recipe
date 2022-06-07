import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Cuisine from "./pages/Cuisine.js";
import ContactUs from "./pages/ContactUs";
import Auth from './pages/Auth';
import Footer from "./components/Footer";
import Contribute from "./pages/Contribute";
import Search from "./pages/Search";

function App() {
  return (

    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cuisine" element={<Cuisine />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/contribute" element={<Contribute />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


