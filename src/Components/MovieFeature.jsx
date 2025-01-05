import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";
import Faq from "./Faq";
import SubscriptionPlans from "./SubscriptionPlans";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieFeature = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const movies = useLoaderData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const sortedMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  if (showSkeleton) {
    return (
      <SkeletonTheme height="30px" highlightColor="#0f9ccf" duration={3}>
        <Skeleton count={7}></Skeleton>
      </SkeletonTheme>
    );
  }

  return (
    <div className="mb-20">
      <h3 className="text-xl lg:text-3xl  font-bold mb-5 mt-40 lg:mt-0 w-11/12 text-center mx-auto lg:text-left lg:mx-0">
        Uncover the Best of the Silver Screen
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedMovies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
      <div>
        <SubscriptionPlans></SubscriptionPlans>
      </div>
      <div>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default MovieFeature;
