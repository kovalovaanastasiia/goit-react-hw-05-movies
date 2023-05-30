import {Routes, Route} from "react-router-dom";

import {Home} from "../pages/Home/Home";
import {Layout} from "./Layout/Layout";
import {MovieDetails} from "../pages/MovieDetails/MovieDetails";
import {Movies} from "../pages/Movies/Movies";
import {Review} from "../pages/Review/Review";
import {Cast} from "../pages/Cast/Cast";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Review/>}/>
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
