//Importacion de funcionalidades
import "./index.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importación de componentes
import MoviesGrid from "./components/moviesGrid";
import Header from "./components/header";
import Pagination from "./components/pagination";
import Copyrights from "./components/copyrights";
import Detail from "./components/detail";


function App(){
return (
  <Router>
    <Routes>
      <Route 
        path='/' 
        element={
          <>
            <Header/>
            <MoviesGrid/>
            <Pagination />
          </>
        }
        />
        <Route 
          path="/detail/:movieId" 
          element={
            <>
              <Header/>
              <Detail/>
            </>
        } />
      </Routes>
      <footer>
        <Copyrights/>
      </footer>
  </Router>
);
}

export default App;

//TODO arreglar el asunto de navehar hacia el error page.
/*



import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Importaciones de componentes


import { Home } from "./Pages/home";
import ErrorPage from "./Pages/error-page"
import MovieDetail from "./Pages/movieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/detail/:movieId",
    element:  <MovieDetail/>,
    errorElement: <ErrorPage />,
  },
]);


function App(){
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App;
*/