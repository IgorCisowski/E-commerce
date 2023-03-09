import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../../components/context/context";
import { useContext } from "react";
import Logo from "../../assets/img/Logo.png";

export const Navbar = () => {
  const [isactive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isactive);
  };

  const { cart } = useContext(CartContext);
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="storeLogo" />
              <p>Wodiwo</p>
            </Link>
          </div>
          <nav>
            <div
              className={isactive ? "burger-menu active" : "burger-menu"}
              onClick={handleActive}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <ul className={isactive ? "active" : ""}>
              <div className="logo-burger">
                <img src={Logo} alt="storeLogo" />
                <p>Wodiwo</p>
              </div>
              <NavLink
                activeclassname=".highlight"
                to="/"
                onClick={handleActive}
              >
                Home
              </NavLink>
              <NavLink to="/products" onClick={handleActive}>
                Products
              </NavLink>
              <Link to="/cart" onClick={handleActive}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                </svg>
                <div className="cartCount">
                  {cart
                    .map((i) => i.quantity)
                    .reduce((total, value) => total + value, 0)}
                </div>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
