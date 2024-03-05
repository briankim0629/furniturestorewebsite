import React from "react";
import banner1img from "../assets/banner-1.jpg"
import { Link } from "react-router-dom";

const Banner1 = () => {
  return (
    <section id="banner-1">
      <div className="container">
        <div className="row">
          <div className="banner">
            <div className="banner__text">
              <h2 className="banner__text__title">
                Design that suits your house
              </h2>
              <p className="banner__text__paragraph">
                Our products are designed in Europe, created in California, and
                will be shipped within days
              </p>
              <Link to="/products" className="banner__text__btn">Shop Now</Link>
            </div>
            <img src={banner1img } alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
