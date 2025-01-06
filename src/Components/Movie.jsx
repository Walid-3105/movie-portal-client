import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "../Feature/style.css";
const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const { _id, image, title, genre, time, year, rating, addedBy } = movie;
  const goToMovie = () => {
    navigate(`/movie/${_id}`);
  };

  return (
    <div>
      <div
        className="card movie w-full md:max-w-[380px] lg:max-w-[440px] shadow-xl shadow-slate-500 mx-auto rounded-none"
        onClick={() => goToMovie()}
      >
        <figure>
          <img
            src={image}
            alt="Movie Poster"
            className="w-full h-56 object-cover"
          />
        </figure>
        <p className="text-sm font-medium absolute bg-gray-500 bg-opacity-40 text-white p-1 right-1 top-1 rounded-sm">
          <span className="">{time} m</span>
        </p>
        <div className="card-body p-5">
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <p className="text-sm font-medium">
            Genre: <span className="">{genre}</span>
          </p>

          <p className="text-sm font-medium ">
            Rating:
            <span className="text-blue-700 font-semibold"> {rating}</span>
          </p>
          {addedBy && (
            <div className="text-sm  mt-2">
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
          <div className="card-actions justify-center">
            <button
              onClick={() => goToMovie()}
              className="wonder-button btn-sm"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
