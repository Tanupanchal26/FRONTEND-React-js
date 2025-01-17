import React from "react";
import Todo from "./Components/Todo";
import Form from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return <>
   <BrowserRouter>
      <Routes>
        <Route path="/Form" element={<Form />}/>
        <Route path="/Todo" element={<Todo />}/>
      </Routes>
    </BrowserRouter>     
  </>
}