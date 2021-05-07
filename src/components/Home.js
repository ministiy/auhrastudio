import React from "react";
import './Home.css';
import logo from '../1.jpg';

function Home() {
  return (
    <div className="App-logo" style={{
      backgroundImage: 'url('+logo+')',
      backgroundSize: "cover",
      height: "100vh",
    }}>
    <h1 className="Centered"> This is home page </h1>
    </div>
  );
}

export default Home;