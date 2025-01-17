import React from "react";
// eslint-disable-next-line no-unused-vars
import Header from './Components/Header';
// eslint-disable-next-line no-unused-vars
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return( 
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>     
  </>
  );
}