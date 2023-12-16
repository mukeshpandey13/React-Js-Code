import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Navbar from "./components/Navbar"; //1) importing navbar from Navbar.js in this app.js

function App() {
  return (
    <>
      {/* 1) importing navbar from Navbar.js in this app.js */}

      {/* Use of props  */}
      {/* <Navbar title={"TextUtils"} about="About Me" /> */}
      <Navbar/>
    </>
  );
}

export default App;
