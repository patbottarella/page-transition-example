// Products.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import productImage from "../../assets/img/product.jpg";

class Products extends Component {
  render() {
    return (
      <div className="page">
        <h1>Products</h1>
        <div className="Wrapper">
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
          <div className="Content">
            <Link className="Link" to="/detail">
              <img className="ProductImage" src={productImage} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
