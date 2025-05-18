import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { movieDetails } from "../../api";
import Container from "../../components/Container/Container";
import FilmCard from "../../components/FilmCard/FilmCard";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    async function fetchData(id) {
      try {
        const data = await movieDetails(id);
        setFilm(data);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(`run${movieId}`);
    fetchData(movieId);
  }, [movieId]);
  return (
    <section className={css.details}>
      <Container>{film && <FilmCard film={film} />}</Container>
    </section>
  );
}

export default MovieDetailsPage;
