import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Navbar from "./components/Navbar"; //1) importing navbar from Navbar.js in this app.js

function App() {
  return (
    <>
    {/* this is use for normal props  */}
    <Navbar title="TextUtils" about="About Us" />

    {/* this is use for default props  */}
    {/* <Navbar/> */}
     
    </>
  );
}

export default App;

// note 
// importing navbar using props 