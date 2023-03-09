import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { ProductsSkeleton } from "../../components/Skeleton/ProductsSkeleton";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setFilter(products);
        setIsLoading(false);
      });
  }, []);

  const filterProducts = (category) => {
    const updatedList = products.filter(
      (product) => product.category === category
    );
    setFilter(updatedList);
  };

  const handleFilter = () => {
    setShow(!show);
  };

  return (
    <>
      <section className="products">
        <div className="productsContainer">
          <div className="filterProducts">
            <h2>Products</h2>
            <>
              <div className={show ? "visible" : "hiddenFilterButtons"}>
                <button onClick={() => setFilter(products)}>All</button>
                <button
                  onClick={() => {
                    filterProducts("men's clothing");
                  }}
                >
                  Men
                </button>
                <button
                  onClick={() => {
                    filterProducts("women's clothing");
                  }}
                >
                  Women
                </button>
                <button
                  onClick={() => {
                    filterProducts("jewelery");
                  }}
                >
                  Jewlerry
                </button>
                <button
                  onClick={() => {
                    filterProducts("electronics");
                  }}
                >
                  Elctronics
                </button>
              </div>
            </>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleFilter()}
            >
              <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
            </svg>
          </div>
          {isLoading && <ProductsSkeleton />}
          <div className="cardContainer">
            {filter.map((product) => (
              <div className="card" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div className="imgContainer">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="cardDescription">
                    <p>{product.title.substring(0, 20)}</p>
                    <span>£{product.price}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
