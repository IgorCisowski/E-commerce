import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductsSkeleton.css";

export const ProductsSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="firstProduct">
        <Skeleton height={400} width={264} />
      </div>
      <div className="secondProduct">
        <Skeleton height={400} width={264} />
      </div>
      <div className="thirdProduct">
        <Skeleton height={400} width={264} />
      </div>
      <div className="fourthProduct">
        <Skeleton height={400} width={264} />
      </div>
    </div>
  );
};
