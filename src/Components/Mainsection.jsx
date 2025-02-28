/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
function Mainsection() {
  return (
 <>
 <main>
 <h1>Nike shoes
 </h1>
    <img   class="shoes"src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a12a1e20-18d2-480e-bb30-85a4c213a161/AIR+FORCE+1+%2707+LV8+1.png"></img>
    <div  class="grid-container">
        <ol calss="info">
        Sustainable Materials<br></br>
        Nike Air Force 1 '07 LV8<br></br>
        Men's Shoes.<br></br>
        MRP : ₹ 10 795.00
        </ol>
        </div>
        <p>These AF-1s are going back to school and they just won "Best Dressed".
            Layers of canvas and synthetic leather create a vintage, varsity-inspired aesthetic.
            Don't forget to leave your mark: the sockliner graphics are inspired by school yearbooks—and we already signed it.
        
            <div  class="grid"><ol>

         Colour Shown: Light British Tan/Coconut Milk/Gum Dark Brown/Burgundy Crush<br></br>
        Style: FQ8713-200<br></br>
        Country/Region of Origin: Vietnam
        </ol>
        </div>
        </p>
       <h3>Services :</h3>
       <p>
       The company uses digital tools and platforms to engage customer
       provide convenience, and deliver tailored experiences that meet individual needs.
       Beyond their innovative product design, sleek, cool style, and emphasis on community, 
       Nike is a company that has mastered its branding.Leaning on their values of innovation, simplicity, 
       and collaboration, they are able to create a strong and lasting impression on consumers, inviting them to be part of the journey.
       </p>
 </main>
 <Link to="/" className="custom-link" >Home</Link> 
 <Link to="/contact" className="custom-link">Contact</Link> 
 <Link to="/about" className="custom-link">About</Link>
 </>
 )
  
}

export default Mainsection;