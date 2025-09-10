import React, { useEffect, useState } from "react";
import "./Menu.css";

function Menu({ addToCart }) {
  const [beefItems, setBeefItems] = useState([]);
  const [chickenItems, setChickenItems] = useState([]);

  useEffect(() => {
    // beef
    fetch("http://localhost:5000/beef")
      .then((res) => res.json())
      .then((data) => setBeefItems(data))
      .catch((err) => console.error("Error fetching beef:", err));

    // chicken
    fetch("http://localhost:5000/chicken")
      .then((res) => res.json())
      .then((data) => setChickenItems(data))
      .catch((err) => console.error("Error fetching chicken:", err));
  }, []);

  return (
    <div id="MENU">
       {/* Beef Section  */}
      <h3 className="h-menu">Beef Burger</h3>
      <div className="menu-container">
        <div className="menu-track">
          {beefItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <img
                src={`http://localhost:3000${item.img}`}
                alt={item.name}
                className="menu-img"
              />
              <div className="menu-info">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <div className="add" onClick={() => addToCart(item)}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
          {beefItems.map((item) => (
            <div className="menu-card" key={item.id + "-copy"}>
              <img
                src={`http://localhost:3000${item.img}`}
                alt={item.name}
                className="menu-img"
              />
              <div className="menu-info">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <div className="add" onClick={() => addToCart(item)}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chicken Section */}
      <h3 className="h-menu">Chicken Burger</h3>
      <div className="menu-container">
        <div className="menu-track2">
          {chickenItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <img
                src={`http://localhost:3000${item.img}`}
                alt={item.name}
                className="menu-img"
              />
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className="add" onClick={() => addToCart(item)}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
          {chickenItems.map((item) => (
            <div className="menu-card" key={item.id + "-copy"}>
              <img
                src={`http://localhost:3000${item.img}`}
                alt={item.name}
                className="menu-img"
              />
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className="add" onClick={() => addToCart(item)}>
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;