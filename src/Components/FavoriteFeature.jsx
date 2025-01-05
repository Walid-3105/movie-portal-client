import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyFavorites from "../NavBarContainer/MyFavorites";
import NavBar from "../NavBarContainer/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "./Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FavoriteFeature = () => {
  const [favoriteMovies, setFavoriteMovies] = useState();
  const { user } = useContext(AuthContext);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch(
      `https://movie-portal-server-azure.vercel.app/favorite?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFavoriteMovies(data);
      });
  }, []);

  return (
    <div>
      <div className="w-full lg:w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mx-auto">
        {showSkeleton ? (
          <SkeletonTheme height="30px" highlightColor="#0f9ccf" duration={3}>
            <Skeleton count={7}></Skeleton>
          </SkeletonTheme>
        ) : (
          <div>
            <h3 className="text-sm lg:text-2xl font-bold mt-6">
              Manage and explore your personal movie favorites collection
            </h3>
            {favoriteMovies && favoriteMovies.length === 0 ? (
              <div className="text-center py-20 h-screen">
                <h2 className="text-2xl font-bold">No Favorite Movies Added</h2>
                <p className="text-gray-500">
                  Explore and add your favorite movies!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {favoriteMovies &&
                  favoriteMovies.map((movie, index) => (
                    <MyFavorites
                      key={index}
                      movie={movie}
                      favoriteMovies={favoriteMovies}
                      setFavoriteMovies={setFavoriteMovies}
                    ></MyFavorites>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FavoriteFeature;
