import css from "./HomePage.module.css";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import { trandingFilm } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await trandingFilm();
        setFilms(response.results);
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, []);
  return (
    <section className={css.homeSection}>
      <Container>
        <h1>Hello User</h1>
        <MovieList data={films} />
      </Container>
    </section>
  );
}

export default HomePage;
