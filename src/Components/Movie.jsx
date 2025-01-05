import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const { _id, image, title, genre, time, year, rating, addedBy } = movie;
  const goToMovie = () => {
    navigate(`/movie/${_id}`);
  };

  return (
    <div>
      <div className="card w-full md:max-w-[380px] lg:max-w-[440px] shadow-xl shadow-slate-500 mx-auto">
        <figure>
          <img
            src={image}
            alt="Movie Poster"
            className="w-full h-64 object-cover"
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
          <p className="text-sm font-medium ">
            Rating:
            <span className="text-blue-700 font-semibold"> {rating}</span>
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
          <div className="card-actions justify-end">
            <button
              onClick={() => goToMovie()}
              className="btn text-white bg-[#0f9ccf] hover:bg-sky-900"
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
