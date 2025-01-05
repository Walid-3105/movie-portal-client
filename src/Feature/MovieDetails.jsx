import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  NavLink,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import NavBar from "../NavBarContainer/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Footer from "../Components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MovieDetails = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const MovieDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, image, title, genre, time, year, summary, rating, addedBy } =
    MovieDetails;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDeleteMovie = (_id) => {
    fetch(`https://movie-portal-server-azure.vercel.app/movie/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Movie deleted Successfully");
        navigate("/allmovie");
      });
  };

  const handleAddFavorite = () => {
    const favoriteMovie = {
      ...MovieDetails,
      email: user.email,
    };
    delete favoriteMovie._id;

    fetch("https://movie-portal-server-azure.vercel.app/favorite", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Added to Favorites");
      })
      .catch((error) => toast.error("Not added in Favorites", error));
  };

  return (
    <div>
      <div className="w-full lg:w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mx-auto">
        {" "}
        {showSkeleton ? (
          <SkeletonTheme height="30px" highlightColor="#0f9ccf">
            <Skeleton count={7}></Skeleton>
          </SkeletonTheme>
        ) : (
          <div className="flex items-center justify-center my-10">
            <div className="card w-[800px] shadow-xl shadow-slate-500">
              <figure>
                <img
                  src={image}
                  alt="Movie Poster"
                  className="w-full h-80 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <p className="text-sm font-medium">
                  Genre: <span className="">{genre}</span>
                </p>
                <p className="text-sm font-medium">
                  Duration: <span className="">{time} m</span>
                </p>
                <p className="text-sm font-medium">
                  Release Year: <span className="">{year}</span>
                </p>
                <p className="text-sm font-medium">
                  Rating:
                  <span className="text-blue-700 font-semibold"> {rating}</span>
                </p>
                <p className="text-sm font-medium">
                  Summary:
                  <span className=" font-semibold">{summary}</span>
                </p>
                {addedBy && (
                  <div className="text-sm mt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={addedBy.photo}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="">
                        by <span className="font-semibold">{addedBy.name}</span>
                      </span>
                    </div>
                  </div>
                )}
                <div className="card-actions ">
                  <button
                    onClick={() => handleAddFavorite(_id)}
                    className="btn btn-primary"
                  >
                    Add to Favorite
                  </button>

                  <Link to={`/updateMovie/${_id}`} className="btn btn-primary">
                    Update Movie
                  </Link>
                  <button
                    onClick={() => handleDeleteMovie(_id)}
                    className="btn btn-primary"
                  >
                    Delete Movie
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-center">
          <NavLink to="/allmovie" className="btn btn-primary">
            <FaArrowLeft></FaArrowLeft> See All Movies
          </NavLink>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MovieDetails;
