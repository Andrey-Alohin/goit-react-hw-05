import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { movieDetails } from "../../api";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState();
  useEffect(() => {
    async function fetchData(id) {
      const data = await movieDetails(id);
    }
  });
  return (
    <>
      <h2>{movieId}</h2>
    </>
  );
}

export default MovieDetailsPage;
