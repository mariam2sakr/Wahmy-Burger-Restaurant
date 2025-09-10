import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      console.log("Restored Cart:", JSON.parse(savedCart));
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return; 
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, isFirstLoad]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace("EGP", "").trim());
    return total + price * item.quantity;
  }, 0);

  return (
    <div>
      <Header cart={cart} setShowCart={setShowCart} />
      <Home />
      <Menu addToCart={addToCart} />
      <Contact />
      <About />

      {showCart && (
        <div className="cart-popup">
          <h4>Your Order</h4>
          {cart.length === 0 ? (
            <p style={{ fontSize: "15px" }}>No items yet</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.price} x {item.quantity}
                    <button onClick={() => increaseQty(item.id)}>+</button>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                  </li>
                ))}
              </ul>
              <h5 className="total">Total: {totalPrice} EGP</h5>
              <button
                onClick={clearCart}
                style={{
                  margin: "20px auto",
                  display: "block",
                  padding: "8px 15px",
                  cursor: "pointer",
                }}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;