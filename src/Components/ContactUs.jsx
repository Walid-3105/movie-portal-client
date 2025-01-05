import React from "react";
import NavBar from "../NavBarContainer/NavBar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="contact-us-section p-6 ">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg mb-6 text-center">
            We’d love to hear from you! Please reach out with your questions,
            feedback, or suggestions.
          </p>
          <div className="w-[800px] max-w-full bg-gray-100 p-6 rounded-md  mx-auto shadow-xl shadow-slate-500">
            <div className="mb-4 ">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                className="w-full px-4 py-2 border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ContactUs;
