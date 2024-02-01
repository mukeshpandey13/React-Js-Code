import React, { useState } from "react";



export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked: " + text); // show on console text 
    let newText=text.toUpperCase();
    setText(newText);
    // setText("you have clicked on handleUpClick");
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicked: " + text); // show on console text 
    let newText=text.toLowerCase();
    setText(newText);
    // setText("you have clicked on handleUpClick");
  }

  const handleOnChange = (event) =>{
    // console.log("handleOnChange was clicked");
    setText(event.target.value);
  }

  // ### USE OF useState hook #### 
  const [text, setText] = useState("enter text here Mukesh.");
  // setText("Hello Mukesh pandey"); //it is used to change text of useState

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      {/* mx-2 for side space 
      btn btn-primary for blue color */}
      <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to Upercase</button>
      <button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
       {/* // showes the text out side of the box blow preview */}
    </div>
    </>
  );
}


// note 
// my-2 gives margin
// text.split for words
// text.length for characer
// mx-2 for side space 
// btn btn-primary for blue color