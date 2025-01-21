/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
 <>
 <footer>
 <Link to="https://www.nike.com/in/w/mens-shoes-nik1zy7ok"className="custom-link">click for the vist website</Link>
 
  <div class="contact-info">
    <p>Email: <a href="mailto:tanyapanchal65@gmail.com" class="email">tanyapanchal65@gmail.com</a></p>
    <p>Phone: <a href="tel:9998370911" class="phone">+998-370-911</a></p>
  </div>
 </footer>
 </>
  )
}

export default Footer;
