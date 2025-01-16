import React from 'react'
import { useState } from 'react';

export default function Form() {
  // eslint-disable-next-line no-unused-vars
  const [name,setname]=useState()
  // eslint-disable-next-line no-unused-vars
  const [email,setemail]=useState()
  // eslint-disable-next-line no-unused-vars
  const [age,setage]=useState()


function Onsubmit() {
    // eslint-disable-next-line no-undef
    e.preventDefualt()
    console.log("form submiteed")
}


 return (
    <div>
        <form>
            <input type="text" placeholder="Enter the name" onChange={(e)=>setname(e.target.value)}></input>
            <input type="text" placeholder="Enter the email" onChange={(e) => setemail(e.target.value)}></input>
            <input type="text" placeholder="Enter the age" onChange={(e) => setage(e.target.value)}></input>
            <button onClick={Onsubmit}>submit </button>
        </form>
    </div>

)
}