import React from "react";
// eslint-disable-next-line no-unused-vars
import Header from './Components/Header';

// eslint-disable-next-line no-unused-vars
import Footer from "./Components/Footer";

// eslint-disable-next-line no-unused-vars
import Home from "./Components/Page/Home";
import Contact from "./Components/Page/Contact";
import About from "./Components/Page/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainsection  from "./Components/Mainsection";


export default function App() {
  return( 
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Mainsection />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>     
  </>
  );
}