import React from "react";
// eslint-disable-next-line no-unused-vars
import Header from './Components/Header';

// eslint-disable-next-line no-unused-vars
import Footer from "./Components/Footer";

// eslint-disable-next-line no-unused-vars
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainsection  from "./Components/Mainsection";


export default function App() {
  return( 
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainsection />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>     
  </>
  );
}