import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "pages/HomePage";
// import MoviePage from "pages/MoviesPage";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import Layout from "./Loyaut/Loyaut";

const MovieDetails = lazy(()=> import('../components/MovieDetails/MovieDetails'));
const MoviePage = lazy(()=>import('../pages/MoviePage/MoviesPage'));
const Cast = lazy(()=>import('./Cast/Cast'));
const Reviews = lazy(()=>import('./Reviews/Reviews'));
const HomePage = lazy(()=>import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element= {<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="movies" element={<MoviePage/>}/>
          <Route path="/movies/:id" element={<MovieDetails/>} >
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path='404' element={<PageNotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
      </Route>
      
    </Routes>
    </>
  );
};
