import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../Pages/home";
import MovieDetail from "../Pages/movieDetail";
import ErrorPage from "../Pages/error-page";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/detail/:movieId',
    element: <MovieDetail />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;