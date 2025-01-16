import React, { useEffect, useState } from 'react'
const Filter=()=>{
    const[count,setcount]=useState(0)
    const[theme,settheme]=useState(0)
    const[name,setname]=useState(0)
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
useEffect(()=>{
    console.log("HIIIII")
},[count,name])


 return(
    <>
    {count}
    <br></br>
    <button onClick={() => setcount(count+1)}>+</button>
    <button onClick={() => setcount(count-1)}>-</button>    <br></br>
    {name}
    <br></br>
    <button style={{backgroundColor:'blue',}} onClick={()=> setname (toggle)}> Change  </button>
    </>
 )
}
export default Filter;