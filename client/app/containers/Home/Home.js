import React, { Component } from 'react';
import 'whatwg-fetch';

//Not sure if this is the best way...but good for now I guess
function URL() {
  location.href = '/profile';
}

const Home = () => (
  <div className="maindiv outer" align="center">
    <div className="middle">
      <div className="titlediv inner">
        <div className="slogan">
          <p><strong>CryptStock Screen</strong> - A <br/>MERN Crypto/Stock <br/>Dashboard</p>
          <p id="subtag">Helping you reach the Moon</p>
          <button type="button" className="btn btn-primary" onClick={() => URL()}>GET STARTED</button> 
          <div className="elogo">
                <div className="trif u1"></div>
                <div className="trif u2"></div>
                <div className="trif u3"></div>
                <div className="trif u4"></div>
                <div className="ct"></div>
                <div className="trif l1"></div>
                <div className="trif l2"></div>
                <div className="trif l3"></div>
                <div className="trif l4"></div>
          </div>
        </div>
      </div>
    </div>
    <canvas id="canvas" width="100%" height="100%"></canvas>
  </div>
)
export default Home;