import { Link } from "react-router-dom";
import "./EmptyCart.css";

export const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="23px"
        width="23px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
      </svg>
      <p>Your basket is Empty!</p>
      <button>
        <Link to={"/products"}>Continue shopping </Link>
      </button>
    </div>
  );
};
