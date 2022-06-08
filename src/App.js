import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Cuisine from "./pages/Cuisine.js";
import ContactUs from "./pages/ContactUs";
import Auth from './pages/Auth';
import Footer from "./components/Footer";
import Contribute from "./pages/Contribute";
import Search from "./pages/Search";
import AddRecipe from './pages/Admin/AddRecipe';
import Requests from './pages/Admin/Requests';
import NavItems from "./data/NavItems";

function App() {

  const [nav, setNav] = useState(NavItems)

  // useEffect(() => {
  //   console.log('Session',sessionStorage.getItem("userName"))
  //   if (sessionStorage.getItem("userName") === 'admin') {
  //     alert(sessionStorage.getItem("userName"))
  //     setNav(AdminNavItems)
  //   } else {
  //     setNav(NavItems)
  //   }
  // })

  const updateNavItems = (navItems) =>{
      setNav(navItems)
  }

  return (
    <div >
      {/* <button onClick={btnClick}>Click</button> */}
      <BrowserRouter>
        <Navbar navItems={nav} />
        <Routes>
          <Route path="/" element={<Auth updateNavItems={updateNavItems} />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cuisine" element={<Cuisine />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/contribute" element={<Contribute />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/admin/addRecipe" element={<AddRecipe />}></Route>
          <Route path="/admin/requests" element={<Requests />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


