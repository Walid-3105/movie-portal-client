import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const MyFavorites = ({ movie, favoriteMovies, setFavoriteMovies }) => {
  const { user } = useContext(AuthContext);
  const { _id, image, title, genre, time, year, rating, addedBy, email } =
    movie;

  const handleDeleteFavorite = (_id) => {
    fetch(`https://movie-portal-server-azure.vercel.app/favorite/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          fetch(
            `https://movie-portal-server-azure.vercel.app/favorite?email=${user.email}`
          )
            .then((res) => res.json())
            .then((updatedData) => {
              setFavoriteMovies(updatedData);
            });
          toast.success("Successfully Deleted");
        }
      });
  };

  return (
    <div>
      <div className="mt-10 card w-full md:max-w-[380px] lg:max-w-[440px] shadow-xl shadow-slate-500 mx-auto">
        <figure>
          <img
            src={image}
            alt="Movie Poster"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <p className="text-sm ">
            Genre: <span className="">{genre}</span>
          </p>
          <p className="text-sm ">
            Duration: <span className="">{time} m</span>
          </p>
          <p className="text-sm ">
            Release Year: <span className="">{year}</span>
          </p>
          <p className="text-sm ">
            Rating:
            <span className="text-yellow-500 font-semibold">{rating}</span>
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
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDeleteFavorite(movie._id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
