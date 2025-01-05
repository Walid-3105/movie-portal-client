import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useLoaderData } from "react-router-dom";
import Movie from "../Components/Movie";
import Footer from "../Components/Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllMovies = () => {
  const movies = useLoaderData();
  const movieList = Array.isArray(movies) ? movies : [];
  const [search, setSearch] = useState("");
  const [showSkeleton, setShowSkeleton] = useState(true);

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
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
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-lg lg:text-2xl font-bold">
                  All Movies at a Glance
                </h3>
              </div>
              <div>
                <div className="my-4 text-left lg:text-right">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-60 text-black border shadow-sm border-slate-500 rounded-md p-2"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => (
                  <Movie key={index} movie={movie}></Movie>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-600">
                  No movies found.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllMovies;
