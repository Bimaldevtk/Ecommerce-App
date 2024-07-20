import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import "./TopHeader.css";
import SearchBox from "../SearchBox/SearchBox"

const TopHeader = () => {
  return (
    <div>
      <div className="TopContainer">
        <div>
          <div className="TopHeader">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <button>Shop Now</button>
          </div>
        </div>
        <Link to="/logout">
          <button className="EnglishButton">Logout</button>
        </Link>
      </div>
      <div className="Dialog">
        <div>
          <Link to='/'  style={{textDecoration:'none', color:"black"}} >
          <p>Exclusive</p>
          </Link> 
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <SearchBox/>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
