// Home.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import productImage from "../../assets/img/product.jpg";

class Detail extends Component {
  render() {
    return (
      <div className="page">
        <h1>Detail</h1>
        <div className="Wrapper">
          <div className="ImageWrapper">
            <img className="ProductImage" src={productImage} />
          </div>
          <div className="TextWrapper">
            <h4>Some text about the product</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
