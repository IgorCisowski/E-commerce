import React from "react";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import { CartContext } from "../../components/context/context";
import { useContext } from "react";
import "./Cart.css";

export const Cart = () => {
  const { cart, deleteItem, decreaseQuantity, addItem } =
    useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  return (
    <>
      <div className="cartContainer">
        <h2>
          {`Cart (${cart
            .map((i) => i.quantity)
            .reduce((total, value) => total + value, 0)})`}
        </h2>
        {isCartEmpty ? (
          <EmptyCart />
        ) : (
          <div className="fullCart">
            <ul>
              {cart.map(({ id, img, title, price, quantity }) => (
                <li key={id}>
                  <div className="imge">
                    <img src={img} alt="productImage" />
                  </div>
                  <div className="itemDesc">
                    <p>{title.substring(0, 20)}</p>
                    <span>£{price}</span>
                    <button onClick={() => deleteItem(id)}>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                      Delete
                    </button>
                  </div>
                  <div className="keepCount">
                    <button onClick={() => decreaseQuantity(id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => addItem(id)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="checkOut">
              <span>Total</span>
              <span>
                £
                {cart
                  .map((item) => item.price * item.quantity)
                  .reduce((total, value) => total + value, 0)
                  .toFixed(2)}
              </span>
              <button>Check Out</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
