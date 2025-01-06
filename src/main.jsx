import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout.jsx";
import MovieFeature from "./Components/MovieFeature.jsx";
import AddMovie from "./Feature/AddMovie.jsx";
import AllMovies from "./NavBarContainer/AllMovies.jsx";
import MovieDetails from "./Feature/movieDetails.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./NavBarContainer/Login.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import { Toaster } from "react-hot-toast";
import FavoriteFeature from "./Components/favoriteFeature.jsx";
import UpdateMovie from "./Feature/UpdateMovie.jsx";
import Error from "./Components/Error.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Registers from "./NavBarContainer/Registers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <MovieFeature></MovieFeature>,
        loader: () =>
          fetch("https://movie-portal-server-azure.vercel.app/movie"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registers",
    element: <Registers></Registers>,
  },
  {
    path: "/allmovie",
    element: <AllMovies></AllMovies>,
    loader: () => fetch("https://movie-portal-server-azure.vercel.app/movie"),
  },

  {
    path: "/myFavorite",
    element: (
      <PrivateRoutes>
        <FavoriteFeature></FavoriteFeature>
      </PrivateRoutes>
    ),
  },
  {
    path: "/addMovie",
    element: (
      <PrivateRoutes>
        <AddMovie></AddMovie>
      </PrivateRoutes>
    ),
  },
  {
    path: "/updateMovie/:id",
    element: (
      <PrivateRoutes>
        <UpdateMovie></UpdateMovie>
      </PrivateRoutes>
    ),
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },

  {
    path: "/movie/:id",
    element: <MovieDetails></MovieDetails>,
    loader: ({ params }) =>
      fetch(`https://movie-portal-server-azure.vercel.app/movie/${params.id}`),
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
