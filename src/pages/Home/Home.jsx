import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="banner">
          <h1>New season arrivals</h1>
          <p>Check out all the trends</p>
          <button>
            <Link to={"/products"}>Order Now</Link>
          </button>
        </div>
      </div>
    </>
  );
};
