import { Route, Routes } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import HomePage from "../../pages/HomePage/HomePage";
import NotFound from "../../pages/NotFound/NotFound";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
// import css from "./App.module.css";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
