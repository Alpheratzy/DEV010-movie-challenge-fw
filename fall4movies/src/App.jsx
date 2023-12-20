import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Importación de componentes
import MoviesGrid from "./components/moviesGrid";
import Header from "./components/header";
import Pagination from "./components/pagination";
import Copyrights from "./components/copyrights";
import Detail from "./components/detail";
import ErrorPage from "./components/error-page"

// const [ searchText, setSearchText ] = useState("");
// const [currentPage, setCurrentPage] = useState(1);
// const [selectedGenre, setSelectedGenre] = useState("");
// const [selectedOrder, setSelectedOrder] = useState("");

/* function handlePageChange(nextPage) {
  setCurrentPage(nextPage);}*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
         <Header/>
         <MoviesGrid/>,
         <Pagination />,
         <footer><Copyrights/></footer>
         </>,
    errorElement: <ErrorPage />
  },
  {
    path:"/detail/:movieId",
    element:  <>
        <Header/>
        <Detail/>
        <footer><Copyrights/></footer>
      </>,
    errorElement: <ErrorPage />,
  }
]);


function App(){
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App;
