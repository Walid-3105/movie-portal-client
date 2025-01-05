import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;
