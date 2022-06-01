import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";

function App() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/welcome" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
