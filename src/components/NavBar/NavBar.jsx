import React from 'react';
import "./NavBar.css"

function Navbar({ handleButtonClick }) {
  return (
    <div className="navbar">
      <button onClick={() => handleButtonClick(1)} className="category" id="1">With hat</button>
      <button onClick={() => handleButtonClick(2)} className="category" id="2">In universe</button>
      <button onClick={() => handleButtonClick(3)} className="category" id="3">In action</button>
      <button onClick={() => handleButtonClick(4)} className="category" id="4">With sunglasses</button>
    </div >
  );
}

export default Navbar;
