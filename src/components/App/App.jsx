import { Route, Routes } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import HomePage from "../../pages/HomePage/HomePage";
import NotFound from "../../pages/NotFound/NotFound";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
// import css from "./App.module.css";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" />
          <Route path="reviews" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
