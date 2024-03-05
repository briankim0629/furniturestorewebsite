import React from 'react';
import Homeimg1 from "../assets/home-img-1.jpg"
import Homeimg2 from "../assets/home-img-2.jpg"
import Homeimg3 from "../assets/home-img-3.jpg"
import Homeimg4 from "../assets/home-img-4.jpg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row header__row">
                    <h1 className="header__title">
                        Welcome to <span className="color-primary">Minimal furnitures</span>
                    </h1>
                    <div className="header__grid-container">
                        <Link to="/products" className="header__grid">
                            <h2 className="header__grid__title">
                                Furnitures
                            </h2>
                            <img src={Homeimg1} alt="" className="header__grid__img" />
                        </Link>
                        <Link to="/products" className="header__grid">
                            <h2 className="header__grid__title">
                                For your skin
                            </h2>
                            <img src={Homeimg2} alt="" className="header__grid__img" />
                        </Link>
                        <Link to="/products" className="header__grid">
                            <h2 className="header__grid__title">
                                Kitchen
                            </h2>
                            <img src={Homeimg3} alt="" className="header__grid__img" />
                        </Link>
                        <Link to="/products" className="header__grid">
                            <h2 className="header__grid__title">
                                Electronics
                            </h2>
                            <img src={Homeimg4} alt="" className="header__grid__img" />
                        </Link >
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
