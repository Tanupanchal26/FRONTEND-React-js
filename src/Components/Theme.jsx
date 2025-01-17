import React from 'react';
import { useState } from 'react';
import '/.App.css';
function Theme() {
  const [name, setname]=useState("Tanya")
  const [theme, settheme]=useState("")
const toggle=() =>{
  if(name==='Tanya'&& theme==='light'){
    setname('Tanu')
    settheme('dark')
    document.body.style.backgroundColor='black';
    document.body.style.color='red';
  }
  else{
    setname('Tanya')
    settheme('light')
    document.body.style.backgroundColor='white';
    document.body.style.color='blue';
  }
}
  return (
    < >
{name}
<br></br>
<button onClick={()=> setname (toggle)}> Change  </button>
    
    </>
  );
}

export default Theme;