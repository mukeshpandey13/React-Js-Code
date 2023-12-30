import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Navbar from "./components/Navbar"; //1) importing navbar from Navbar.js in this app.js
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* this is use for normal props  */}
      <Navbar title="TextUtils" about="About Us" />

      {/* this is use for default props  */}
      {/* <Navbar/> */}

      <div className="container my-3"> 
        <TextForm heading="Enter the text to analyze below"/>
        {/* <TextForm /> */}
      <button className="btn btn-primary">Convert to Upercase</button>
      </div>
    </>
  );
}

export default App;

// note
// importing navbar using props
//  line no 17 my-3 is use for to adjust text or components up or down 
// line no 21 btn btn-primary is use for button color 