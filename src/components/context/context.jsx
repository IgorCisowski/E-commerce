import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
// nowe
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
//
export const CartProvider = ({ children }) => {
  // w useState była tablica cartFromLocalStorage
  const [cart, setCart] = useState(cartFromLocalStorage);
  // tez dodałem useEffect
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addItem(id, img, title, price) {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, img, title, price, quantity: 1 }]);
    }
  }

  const deleteItem = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  const decreaseQuantity = (id) => {
    const ProductExist = cart.find((item) => item.id === id);
    if (ProductExist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, deleteItem, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
