// src/components/Basket.js
import React from "react";
import { useStateValue } from "../../StateContext/StateContext";
import "./Basket.css";

const Basket = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="basket-dropdown">
      {basket.length === 0 ? (
        <div className="basket-empty">Your basket is empty</div>
      ) : (
        <div className="basket-items">
          {basket.map((item, index) => (
            <div key={index} className="basket-item">
              <img src={item.image} alt={item.title} />
              <div className="basket-item-details">
                <p>{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;
