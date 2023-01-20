import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductsSkeleton.css";

export const ProductsSkeleton = () => {
  return (
    <div className="skeletonsContainer">
      <div className="firstProdut">
        <Skeleton height={400} width={270} />
      </div>
      <div className="secondProdut">
        <Skeleton height={400} width={270} />
      </div>
      <div className="thirdProdut">
        <Skeleton height={400} width={270} />
      </div>
      <div className="fourthProdut">
        <Skeleton height={400} width={270} />
      </div>
    </div>
  );
};
