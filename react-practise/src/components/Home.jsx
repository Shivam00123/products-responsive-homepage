import React from "react";
import "../style/home.css";
import ColgateImg from "../assets/Images/images.jpg";
import CatchChatMasala from "../assets/Images/catchChatMasala.jpg";
import CatchMasala from "../assets/Images/catchMasala.jpg";
import GaramMasala from "../assets/Images/garamMasala.jpg";
import Cycle from "../assets/Images/cycle.jpg";
import SmartCity from "../assets/Images/smartCity.png";
import Gadgets from "../assets/Images/gadget.png";
import { useDispatch } from "react-redux";
import { addProductDetails } from "../redux/actions";
import { RiStarSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function genStar(n) {
  return [...Array(5)].map((x, i) => (
    <RiStarSLine style={{ fontSize: "1.2rem" }} />
  ));
}

function Home() {
  const dispatch = useDispatch();
  const productDetails = (e) => {
    const attr = e.target.parentElement.attributes;
    dispatch(
      addProductDetails(attr.name.value, attr.price.value, attr.image.value)
    );
    return;
  };

  return (
    <div className="homeContainer">
      <div className="card">
        <span className="Tag">Also available at</span>
        <div className="itemContainer">
          <div className="cardItem">
            <div className="imgDiv">
              <img src={Cycle} className="logoImg" alt="logo" />
            </div>
            <span className="Tag">Tech Friend</span>
          </div>
          <div className="cardItem">
            <div className="imgDiv">
              <img src={SmartCity} className="logoImg" alt="logo" />
            </div>
            <span className="Tag">Smart Shop</span>
          </div>
          <div className="cardItem">
            <div className="imgDiv">
              <img src={Gadgets} className="logoImg" alt="logo" />
            </div>
            <span className="Tag">Gadget 360</span>
          </div>
        </div>
      </div>
      <div className="card">
        <span className="Tag">Related Products</span>
        <Link to="/productDetails">
          <div className="ProductContainer" onClick={(e) => productDetails(e)}>
            <div
              className="productItem"
              image={ColgateImg}
              name="Colgate Advanced Protection"
              price="200"
            >
              <div className="cover"></div>
              <div className="discount">
                <span>20% off</span>
              </div>
              <div className="productImg">
                <img src={ColgateImg} className="logoImg" alt="colgate-img" />
              </div>
              <div className="infoDiv">
                <span className="Tag">Colgate Advanced Protection</span>
                <span className="stars">{genStar()}</span>
                <div>
                  <span className="productPrice">$200.00</span>
                  <span>
                    <strike className="off Tag">250.00</strike>
                  </span>
                </div>
              </div>
              <div className="add">
                <span>+</span>
              </div>
            </div>
            <div
              className="productItem"
              image={CatchChatMasala}
              name="Catch Sprinkle Chat Masala"
              price="200"
            >
              <div className="cover"></div>
              <div className="discount">
                <span>20% off</span>
              </div>
              <div className="productImg">
                <img
                  className="logoImg"
                  src={CatchChatMasala}
                  alt="catch-Chat-Masala-img"
                />
              </div>
              <div className="infoDiv">
                <span className="Tag">Catch Sprinkle Chat Masala</span>
                <span className="stars">{genStar()}</span>
                <div>
                  <span className="productPrice">$200.00</span>
                  <span>
                    <strike className="off Tag">250.00</strike>
                  </span>
                </div>
              </div>
              <div className="add">
                <span>+</span>
              </div>
            </div>
            <div
              className="productItem"
              image={CatchMasala}
              name="Catch Italian Seasoning"
              price="200"
            >
              <div className="cover"></div>
              <div className="discount">
                <span>20% off</span>
              </div>
              <div className="productImg">
                <img className="logoImg" src={CatchMasala} alt="colgate-img" />
              </div>
              <div className="infoDiv">
                <span className="Tag">Catch Italian Seasoning</span>
                <span className="stars">{genStar()}</span>
                <div>
                  <span className="productPrice">$200.00</span>
                  <span>
                    <strike className="off Tag">250.00</strike>
                  </span>
                </div>
              </div>
              <div className="add">
                <span>+</span>
              </div>
            </div>
            <div
              className="productItem"
              image={GaramMasala}
              name="Tadka Garam Masala"
              price="200"
            >
              <div className="cover"></div>
              <div className="discount">
                <span>20% off</span>
              </div>
              <div className="productImg">
                <img className="logoImg" src={GaramMasala} alt="colgate-img" />
              </div>
              <div className="infoDiv">
                <span className="Tag">Tadka Garam Masala</span>
                <span className="stars">{genStar()}</span>
                <div>
                  <span className="productPrice">$200.00</span>
                  <span>
                    <strike className="off Tag">250.00</strike>
                  </span>
                </div>
              </div>
              <div className="add">
                <span>+</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
