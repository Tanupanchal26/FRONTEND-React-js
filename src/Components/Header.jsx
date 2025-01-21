/* eslint-disable react/jsx-no-undef */
import React from 'react'

function Header() {
  return (
  <header>
    <nav>
        <li><Navlink to="/home">Home</Navlink></li>
        <li><Navlink to="/Contact">Contact Us</Navlink></li>
        <li><Navlink to="/About us">About Us</Navlink></li>
    </nav>
  </header>
  )
}

export default Header;