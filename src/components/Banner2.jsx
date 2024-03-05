import React from 'react';
import banner2img from "../assets/banner-2.jpg"
import { Link } from 'react-router-dom';

const Banner2 = () => {
    return (
        <section id="banner-2">
      <div className="container">
        <div className="row">
          <div className="banner banner-2">
            <div className="banner__text">
              <h2 className="banner__text__title">
                Decorate your house like noone else
              </h2>
              <p className="banner__text__paragraph">
                Our products are designed in Europe, created in California, and
                will be shipped within days
              </p>
              <Link to="/products" className="banner__text__btn">Shop Now</Link>
            </div>
            <img src={banner2img } alt="" />
          </div>
        </div>
      </div>
    </section>
    );
}

export default Banner2;
