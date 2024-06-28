import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../Api/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  console.log(products, "data");

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>
            <span className="price">${product.price}</span>
          </p>

          <Link to={`/product/${product.id}`}>
          <button className="product-button">Product Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
