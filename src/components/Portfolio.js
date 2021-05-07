import React from "react";
import logo from '../1.jpg';

function Portfolio() {
  return (
    <div className="App-logo" style={{
      backgroundImage: 'url('+logo+')',
      backgroundSize: "cover",
      height: "100vh",
    }}>
    <h1 className="Centered"> This is portfolio page </h1>
    </div>
  );
}

export default Portfolio;