import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBarContainer/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "./Footer";
import { MdDeleteForever } from "react-icons/md";

const FavoriteFeature = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://movie-portal-server-azure.vercel.app/favorite?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFavoriteMovies(data);
      });
  }, [user.email]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="w-11/12 mx-auto pt-20">
        <h3 className="text-xl font-bold mb-6 ">
          Manage and explore your personal movie favorites collection
        </h3>
        {favoriteMovies.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold">No Favorite Movies Added</h2>
            <p className="text-gray-500">
              Explore and add your favorite movies!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="border text-gray-400">
                <tr>
                  <th></th>
                  <th>Movie</th>
                  <th>AddedBy</th>
                  <th>Release Year</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="border">
                {favoriteMovies.map((movie, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={movie.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{movie.title}</div>
                          <div className="font-semibold">{movie.genre}</div>
                        </div>
                      </div>
                    </td>
                    <td>{movie.addedBy.name}</td>

                    <td>{movie.year}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => {
                          // Remove movie logic
                          const updatedMovies = favoriteMovies.filter(
                            (m) => m !== movie
                          );
                          setFavoriteMovies(updatedMovies);
                        }}
                        className="px-3 py-1 rounded hover:text-red-600"
                      >
                        <MdDeleteForever size={25}></MdDeleteForever>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default FavoriteFeature;
