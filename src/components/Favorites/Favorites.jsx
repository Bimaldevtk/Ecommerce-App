// src/components/Favorites/Favorites.js
import React from "react";
import { useStateValue } from "../../StateContext/StateContext";
import "./Favorites.css";

const Favorites = () => {
  const [{ favorites }] = useStateValue();

  return (
    <div className="favorites-container">
      {favorites.length === 0 ? (
        <p>No favorite products added.</p>
      ) : (
        favorites.map((item, index) => (
          <div key={index} className="favorite-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
