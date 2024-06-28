import React, {useEffect, useState} from "react";
import "./productdetails.css";
import { getProductsById} from "../../Api/api";
import { useParams,Link } from "react-router-dom";

const ProductDetails = () => {

  const{id} =useParams();
  const [productDetails, setProductDetails] = useState({})
  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductsById(id);
      setProductDetails(data)
    };
    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <div className="product-container">
        <img src={productDetails.image} alt="" />
        <div className="product-details">
          <h2 className="product-title">{productDetails.title}</h2>
          <p className="product-description">{productDetails.description}</p>
          <p className="product-price">{productDetails.price}</p>
          <button className="buy-now">Buy Now</button>
          <Link to ="/">
          <button className="go-home">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
