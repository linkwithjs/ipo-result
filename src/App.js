// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Bulk from "./pages/bulk";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bulk' element={<Bulk />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
