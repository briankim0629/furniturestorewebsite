import React, { useEffect, useState } from "react";
import placeholder from "../../assets/product-img.jpg"
import { Link } from "react-router-dom";

const Product = ( {item}) => {
  return ( 
    <Link to= {`/products/${item.id}`} className="product">
      <img src= {`https://ecommerce-samurai.up.railway.app/${item.images[0]}`} alt="" className="product__img" />
      <div className="product__details">
        <h3 className="product__details__title">{item.name}</h3>
        <span className="product__details__price">${item.price}</span>
      </div>
    </Link>
  );
};

export default Product;
