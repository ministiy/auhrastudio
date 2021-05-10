import React from "react";
import './Home.css';
import logo from '../kain.jpeg';
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="App-logo" style={{
      backgroundImage: 'url('+logo+')',
      backgroundSize: "cover",
      height: "100vh",
    }}>
      <div class='container'>
        <h1 className='Centered'>
          <p class='text-white'> Website in progress. </p> 
          <p class='text-white'> Please visit my <a class='text-white' href="https://www.instagram.com/auhra"><u>Instagram</u></a> in the meantime </p>
        </h1>
      </div>
    </div>
  );
}

export default Home;