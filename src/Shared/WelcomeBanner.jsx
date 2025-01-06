import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="bg-[#023E8A]  text-white h-screen lg:min-h-screen ">
      <div className="p-5 py-10 md:p-48 lg:p-62 flex-row justify-center items-center space-y-11">
        <h3 className="text-4xl">Welcome to Movie Hive</h3>
        <p className="text-gray-400">
          Movie Hive is your ultimate platform for movie enthusiasts, offering a
          seamless way to explore, manage, and share your favorite movies. Users
          can add, update, organize, and delete their personal movie collections
          while discovering new titles and exclusive content. The platform is
          secure, intuitive, and responsive, built with modern technologies like
          React and MongoDB. Join us to create a vibrant movie-loving community
          and never miss out on the magic of cinema!
        </p>
        <p>
          Join MovieHive and share your thoughts with the world through our
          platform, where your voice makes an impact!
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
