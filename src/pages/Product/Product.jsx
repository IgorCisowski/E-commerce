import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/context/context";
import { useContext } from "react";
import { ProductSkeleton } from "../../components/Skeleton/ProductSkeleton";
import "./Product.css";

export const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct({ ...product, quantity: 1 });
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="productContainer">
      {isLoading && <ProductSkeleton />}
      <div className="productImage">
        <img src={product.image} alt="" />
      </div>
      <div className="productDesc">
        <h3>{product.title}</h3>
        <span>£{product.price}</span>
        <p>{product.description}</p>
        <button
          onClick={() =>
            addItem(product.id, product.image, product.title, product.price)
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
