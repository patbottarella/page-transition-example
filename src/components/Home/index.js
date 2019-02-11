// Home.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import productImage from "../../assets/img/product.jpg";
import "./styles.css";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1>Home</h1>
        <div className="Wrapper">
          <p>Welcome to the Home</p>
        </div>
      </div>
    );
  }
}

export default Home;
