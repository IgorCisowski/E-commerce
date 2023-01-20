import React from "react";
import "./ProductCard.css";

// const CardContainer = styled.div`
//   margin-top: 40px;
//   width: 100%;
//   display: flex;
//   gap: 4%;
//   color: ${({isActive}) => isActive ? '' : ''}
// `

export const ProductCard = ({ products }) => {
  return (
    // <CardContainer isActive={true}>
    <div className="cardContainer">
      <div className="card">
        <img src={products.image} alt="" />
        <div className="cardDescription">
          <p>{products.tile}</p>
          <span>£{products.price}</span>
        </div>
      </div>
    </div>
    // </CardContainer>
  );
};
