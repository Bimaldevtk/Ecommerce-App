// src/components/SearchBox.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";
import { useStateValue } from "../../StateContext/StateContext";
import Basket from "../Basket/Basket";
import Favorites from "../Favorites/Favorites";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showBasket, setShowBasket] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [{ basket, favorites }] = useStateValue();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleBasket = () => {
    setShowBasket(!showBasket);
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="components">
      <div className="compo1">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="What are you looking for?"
        />
        <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
      </div>
      <div className="cart-icon" onClick={toggleBasket}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="basket-count">{basket?.length}</span>
        {showBasket && <Basket />}
      </div>
      <div className="favorites-icon" onClick={toggleFavorites}>
        <FontAwesomeIcon icon={faHeart} />
        <span className="favorites-count">{favorites?.length}</span>
        {showFavorites && <Favorites />}
      </div>
    </div>
  );
};

export default SearchBox;
