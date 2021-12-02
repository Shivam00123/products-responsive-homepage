import React from "react";
import { connect } from "react-redux";
import "../style/productDetails.css";
import { genStar } from "./Home";

function ProductDetail({ name, price, image }) {
  return (
    <div className="productDetailDiv">
      <div className="imageContainer">
        <img src={image} alt="product-Image" />
      </div>
      <div className="ProductDetails">
        <h1 className="name">{name}</h1>
        <span className="brand">Brand :</span>
        <span className="brandName">Xiaomi</span>
        <div className="starDiv">
          <span className="stars">Rated :</span>
          <span className="allStars">{genStar()}</span>
          <span className="stars">(50)</span>
        </div>
        <h1 className="price">${price}.00</h1>
        <p className="availability">Stock Available</p>
        <button className="btn">Add To Cart</button>
        <span className="seller">Sold By:</span>
        <span className="sellerName"> Mobile Store</span>
      </div>
    </div>
  );
}

function mapStateToProps({ name, price, image }) {
  return {
    name,
    price,
    image,
  };
}
export default connect(mapStateToProps)(ProductDetail);
