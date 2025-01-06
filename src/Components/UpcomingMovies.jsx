import React, { useState, useEffect } from "react";

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching upcoming movies data from an API
    const fetchUpcomingMovies = async () => {
      const fakeUpcomingMovies = [
        {
          id: 1,
          title: "Avatar: The Seed Bearer",
          releaseDate: "2025-12-18",
          description:
            "The next chapter in the Avatar series, exploring Pandora.",
          poster: "https://i.ibb.co.com/Gdk9DvG/The-Seed-Bearer.jpg", // Placeholder image
        },
        {
          id: 2,
          title: "Spider-Man: Beyond the Spider-Verse",
          releaseDate: "2025-03-29",
          description:
            "Miles Morales returns for the final chapter of the Spider-Verse saga.",
          poster: "https://i.ibb.co.com/fqZgxch/Spider-Man.jpg", // Placeholder image
        },
        {
          id: 3,
          title: "The Batman: Part II",
          releaseDate: "2025-10-03",
          description:
            "Bruce Wayne faces new challenges as Gotham's protector in this sequel.",
          poster: "https://i.ibb.co.com/2kRrzty/The-Batman.jpg", // Placeholder image
        },
      ];
      setUpcomingMovies(fakeUpcomingMovies);
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div className="w-11/12 mx-auto pt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Upcoming Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingMovies.map((movie) => (
          <div
            key={movie.id}
            className="border shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
              <p className="text-gray-500 text-sm mb-3">
                Release Date: {movie.releaseDate}
              </p>
              <p className="text-gray-500 text-sm">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
