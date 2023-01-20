import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ products }) => {
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          <img src={products.image} alt="" />
          <div className="cardDescription">
            <p>{products.tile}</p>
            <span>£{products.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};
