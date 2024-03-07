import axios from "axios";
import Nav from "./components/Nav";
import { AppContext } from "./Context/AppContext";
import { useEffect, useState } from "react";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addCart(product, addedquantity) {
    const checkProductinCart = cart.find((item) => item.id === product.id);
    if (checkProductinCart) {
      setCart((prevcart) =>
        prevcart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + addedquantity }
            : item
        )
      );
    } else {
      setCart((prevcart) => [
        ...prevcart,
        { ...product, quantity: addedquantity },
      ]);
    }
  }

  function reduceCart(product) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeCart(product) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }

  function cartLength(){
    let cnt = 0

    cart.forEach((item) => {
     cnt += item.quantity
    })

    return cnt
  }

  async function fetchProducts() {
    const { data } = await axios.get(
      "https://ecommerce-samurai.up.railway.app/product"
    );
    const productdata = data.data;
    setProducts(productdata);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <AppContext.Provider
      value={{ products, addCart, cart, reduceCart, removeCart,cartLength }}
    > 
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
