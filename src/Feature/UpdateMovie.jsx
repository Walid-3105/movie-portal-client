import React, { useEffect, useState } from "react";
import NavBar from "../NavBarContainer/NavBar";
import { Rating } from "react-simple-star-rating";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import "../Feature/style.css";

const UpdateMovie = () => {
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  const handleRating = (value) => {
    setRating(value);
  };

  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://movie-portal-server-azure.vercel.app/movie/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleUpdateMovie = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const title = form.title.value;
    const time = form.time.value;
    const summary = form.summary.value;

    const updatedMovie = {
      image: form.image.value,
      title: form.title.value,
      genre: form.genre.value,
      time: form.time.value,
      year: form.year.value,
      summary: form.summary.value,
      rating,
    };

    const photoRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    const titleRegex = /^.{2,}$/;
    const cleanedSummary = summary.replace(/[\r\n]+/g, " ").trim();

    if (!photoRegex.test(image)) {
      toast.error("PhotoURL must be a link");
      return;
    }

    if (!titleRegex.test(title)) {
      toast.error("Movie Title at least 2 character");
      return;
    }

    if (time <= 60) {
      toast.error("Time must be grater than 60");
      return;
    }

    if (!rating) {
      toast.error("Fill the Rating Filled");
      return;
    }

    if (cleanedSummary.length < 10) {
      toast.error("Summary must be at least 10 characters");
      return;
    }

    fetch(`https://movie-portal-server-azure.vercel.app/movie/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Movie updated successfully!");
          e.target.reset();
          navigate("/");
        } else {
          toast.error("Failed to update the movie.");
        }
      });
  };
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="pt-20">
        <div className="p-8 w-full lg:w-[700px] mx-auto bg-base-200 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Update Movie</h1>
          <form onSubmit={handleUpdateMovie}>
            {/* Movie Poster */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Movie Poster (Image Link)</span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={movie.image}
                placeholder="Enter image link"
                className="input input-bordered"
              />
            </div>

            {/* Movie Title */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={movie.title}
                placeholder="Enter movie title"
                className="input input-bordered"
                required
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
              {/* Genre */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  className="select select-bordered"
                  name="genre"
                  defaultValue={movie.genre}
                >
                  <option value="">Select Genre</option>
                  <option value="comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                  <option value="Action">Action</option>
                </select>
              </div>
              {/* Release Year */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Release Year</span>
                </label>
                <select
                  className="select select-bordered"
                  name="year"
                  defaultValue={movie.year}
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
              {/* Duration */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Duration (in minutes)</span>
                </label>
                <input
                  type="number"
                  name="time"
                  defaultValue={movie.time}
                  placeholder="Enter duration"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Rating */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <div className="flex items-center gap-2" name="rating">
                  <Rating
                    size={30}
                    allowHover={true}
                    className={"flex"}
                    onClick={handleRating}
                    ratingValue={rating}
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                name="summary"
                className="textarea textarea-bordered"
                defaultValue={movie.summary}
                placeholder="Enter movie summary"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn wonder-button">Update Movie</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UpdateMovie;
