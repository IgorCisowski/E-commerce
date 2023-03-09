import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/context/context";
import { useContext } from "react";
import "./Product.css";
import Skeleton from "react-loading-skeleton";

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
    <div className="product">
      <div className="productContainer">
        {isLoading && ""}
        <div className="productImage">
          <img src={product.image || <Skeleton height={300} />} alt="" />
        </div>
        <div className="productDesc">
          <h3>{product.title || <Skeleton height={150} />}</h3>
          <span>£{product.price || <Skeleton />}</span>
          <p>{product.description || <Skeleton height={100} />}</p>
          <button
            onClick={() =>
              addItem(product.id, product.image, product.title, product.price)
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
