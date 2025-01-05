import React, { useState } from "react";
import faq from "../../src/assets/faq.png";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleOpen1 = () => setIsOpen1(!isOpen1);
  const toggleOpen2 = () => setIsOpen2(!isOpen2);
  const toggleOpen3 = () => setIsOpen3(!isOpen3);

  return (
    <div className="mt-32">
      <h3 className="text-3xl font-bold ">
        Everything You Need to Know About Movie Hive
      </h3>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div>
            <div className="collapse shadow-xl shadow-slate-500">
              <input
                type="checkbox"
                id="faq1"
                checked={isOpen1}
                onChange={toggleOpen1}
              />
              <div className="collapse-title text-xl font-medium">
                What is Movie Hive?
              </div>
              <div className="collapse-content">
                <p>
                  Movie Hive is your ultimate movie companion that simplifies
                  the process of discovering, watching, and managing your
                  favorite movies. From detailed movie information to adding and
                  deleting your favorites, Movie Hive makes movie exploration
                  seamless and fun!
                </p>
              </div>
            </div>
            <div className="collapse shadow-xl shadow-slate-500  mt-2">
              <input
                type="checkbox"
                id="faq2"
                checked={isOpen2}
                onChange={toggleOpen2}
              />
              <div className="collapse-title text-xl font-medium">
                How can I add movies to my favorites list?
              </div>
              <div className="collapse-content">
                <p>
                  To add a movie to your favorites, simply click the heart icon
                  next to the movie title or select the 'Add to Favorites'
                  button on the movie's page. Your favorite movies will be saved
                  to your personal collection for easy access!
                </p>
              </div>
            </div>
            <div className="collapse shadow-xl shadow-slate-500  mt-2">
              <input
                type="checkbox"
                id="faq3"
                checked={isOpen3}
                onChange={toggleOpen3}
              />
              <div className="collapse-title text-xl font-medium">
                Is Movie Hive free to use?
              </div>
              <div className="collapse-content ">
                <p>
                  Yes, Movie Hive is completely free to use! You can explore
                  movies, add to your favorites, and enjoy a seamless browsing
                  experience without any cost.
                </p>
              </div>
            </div>
            <div className="collapse shadow-xl shadow-slate-500  mt-2">
              <input
                type="checkbox"
                id="faq3"
                checked={isOpen3}
                onChange={toggleOpen3}
              />
              <div className="collapse-title text-xl font-medium">
                How can I search for a specific movie?
              </div>
              <div className="collapse-content">
                <p>
                  You can use the search bar located at the top of the website
                  to search for movies by title, genre, or director. Simply type
                  in the keywords and browse the results!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="mt-6 lg:-mt-20 h-[460px]" src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
