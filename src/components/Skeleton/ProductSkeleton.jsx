import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductSkeleton.css";
export const ProductSkeleton = () => {
  return (
    <div className="skeletonContainer">
      <div className="skeletonImg">
        <Skeleton height={400} width={535} />
      </div>
      <div className="lines">
        <div className="skeletonTitle">
          <Skeleton width={535} height={60} />
        </div>
        <div className="skeletonPrice">
          <Skeleton width={135} height={30} />
        </div>
        <div className="skeletonDesc">
          <Skeleton width={535} height={150} />
        </div>
        <div className="skeletonButton">
          <Skeleton width={135} height={50} />
        </div>
      </div>
    </div>
  );
};
