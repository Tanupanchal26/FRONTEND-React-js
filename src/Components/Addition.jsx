import React from 'react'
import { useState } from 'react';
import "./Addition.css"
function App() {
  const [A, setA] = useState();
  const [B, setB] = useState();
  const [result, setresult] = useState();

  const add = () => {
    setresult(parseInt(A) + parseInt(B));
  };
  const sub = () => {
    setresult(parseInt(A) - parseInt(B));
  };
  const multi= () => {
    setresult(parseInt(A) * parseInt(B));
  };
  const div = () => {
    setresult(parseInt(A) / parseInt(B));
  };
  const modulo = () => {
    setresult(parseInt(A) % parseInt(B));
  };
  const randomcolor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ backgroundColor: randomcolor() }}>
      <input type="number" value={A} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={B} onChange={(e) => setB(e.target.value)} />
      <button onClick={add}> + </button>
      <button onClick={sub}>-</button>
      <button onClick={multi}>*</button>
      <button onClick={div}>/</button>
      <button onClick={modulo}>%r</button>
      <p>Result= {result}</p>
    </div>
  );
}
export default App;