import React, { useContext, useState } from "react";
import NavBar from "../NavBarContainer/NavBar";
import { Rating } from "react-simple-star-rating";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../Components/Footer";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const time = form.time.value;
    const year = form.year.value;
    const summary = form.summary.value;

    const newMovie = {
      image,
      title,
      genre,
      time,
      year,
      summary,
      rating,
      addedBy: {
        name: user?.displayName,
        photo: user?.photoURL,
      },
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

    fetch("https://movie-portal-server-azure.vercel.app/movie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Movie Added Successfully");
        e.target.reset();
        setRating(null);
        // console.log(data);
      });
  };
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="pt-20">
        <div className="p-8 w-full lg:w-[700px] mx-auto bg-base-200 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Add a Movie</h1>
          <form onSubmit={handleAddMovie}>
            {/* Movie Poster */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Movie Poster (Image Link)</span>
              </label>
              <input
                type="text"
                name="image"
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
                placeholder="Enter movie title"
                className="input input-bordered"
                required
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
              {/* Genre */}
              <div className="form-control mb-4 ">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select className="select select-bordered" name="genre">
                  <option>Select Genre</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Horror</option>
                  <option>Action</option>
                  <option>Animation</option>
                </select>
              </div>
              {/* Release Year */}
              <div className="form-control mb-4 ">
                <label className="label">
                  <span className="label-text">Release Year</span>
                </label>
                <select className="select select-bordered" name="year">
                  <option value="">Select Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
              {/* Duration */}
              <div className="form-control mb-4 ">
                <label className="label">
                  <span className="label-text">Duration (in minutes)</span>
                </label>
                <input
                  type="number"
                  name="time"
                  placeholder="Enter duration"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Rating */}
              <div className="form-control mb-4 ">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <div className="flex items-center gap-2" name="rating">
                  <Rating
                    size={30}
                    allowHover={true}
                    className={"flex"}
                    onClick={handleRating}
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
                placeholder="Enter movie summary"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Movie</button>
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

export default AddMovie;
