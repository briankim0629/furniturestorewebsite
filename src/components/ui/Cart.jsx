import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import cartempty from "../../assets/empty-cart.svg";
import { AppContext } from "../../Context/AppContext";

const Cart = ({ cartOpen, setCartOpen }) => {
  const { cart, addCart, reduceCart, removeCart } = useContext(AppContext);

  function subtotal() {
    let totprice = 0;
    cart.forEach((item) => {
      totprice += item.price * item.quantity;
    });
    return totprice;
  }

  return (
    <div className={`cart__wrapper ${cartOpen && "cart-open"}`}>
      <nav className="cart">
        <div className="cart__header">
          <h3 className="cart__header__title">Your Shopping Cart</h3>
          <button
            className="cart__header__close"
            onClick={() => setCartOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart__items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="cart__item">
                <div className="cart__item__left">
                  <img
                    src={`https://ecommerce-samurai.up.railway.app/${item.images[0]}`}
                    alt=""
                    className="cart__item__img"
                  />
                </div>
                <div className="cart__item__mid">
                  <h4 className="cart__item__title">{item.name}</h4>
                  <span className="cart__item__price">
                    ${item.price * item.quantity}
                  </span>
                  <div className="cart__item__quantity">
                    <button
                      className="cart__item__quantity__btn"
                      onClick={() => reduceCart(item)}
                    >
                      -
                    </button>
                    <span className="cart__item__quantity__amount">
                      {item.quantity}
                    </span>
                    <button
                      className="cart__item__quantity__btn"
                      onClick={() => addCart(item, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="cart__item__remove"
                  onClick={() => removeCart(item)}
                />
              </div>
            ))
          ) : (
            <div className="cart__empty">
              <img src={cartempty} alt="" className="cart__empty__img" />
              <span className="cart__empty__text">Your cart is empty!</span>
              <button
                className="cart__empty__btn"
                onClick={() => setCartOpen(false)}
              >
                Keep Browsing
              </button>
            </div>
          )}
          {/* <div className="cart__item">
            <div className="cart__item__left">
              <img src={tempimg} alt="" className="cart__item__img" />
            </div>
            <div className="cart__item__mid">
              <h4 className="cart__item__title">Gang Gang Gang</h4>
              <span className="cart__item__price">$124</span>
              <div className="cart__item__quantity">
                <button className="cart__item__quantity__btn">-</button>
                <span className="cart__item__quantity__amount">1</span>
                <button className="cart__item__quantity__btn">+</button>
              </div>
            </div>
            <FontAwesomeIcon icon={faTimes} className="cart__item__remove" />
          </div> */}
        </div>
        <div className="cart__footer">
          <div className="cart__footer__details">
            <h4 className="cart__footer__title">Subtotal</h4>
            <span className="cart__footer__subtitle">${subtotal()}</span>
          </div>
          <button
            className="cart__footer__btn"
            onClick={() => alert("Feature not implemented yet")}
          >
            Go to Checkout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Cart;
