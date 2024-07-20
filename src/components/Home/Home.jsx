// src/components/Home.js
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../Api/api";
import { useStateValue } from "../../StateContext/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [{ basket, favorites }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const notify = () => toast("Added To Cart!", { autoClose: 2000 });

  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
    notify();
  };

  const addToFavorites = (product) => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      item: product,
    });
  };

  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>
              <span className="price">${product.price}</span>
            </p>
            <div className="buttons-container">
              <button className="basket" onClick={() => addToBasket(product)}>
                Add to Basket
              </button>
              <FontAwesomeIcon
                icon={faHeart}
                className="favorites-icon"
                onClick={() => addToFavorites(product)}
              />
              <Link to={`/product/${product.id}`}>
                <button className="product-button">Product Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer 
        position="top-center" 
        autoClose={1000} 
        closeOnClick 
        hideProgressBar={false} // Ensure progress bar is visible
      />
    </div>
  );
};

export default Home;
