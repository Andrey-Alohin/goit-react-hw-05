import css from "./HomePage.module.css";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import { trandingFilm } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

function HomePage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await trandingFilm();
        setFilms(response.results);
      } catch (error) {
        console.error(error);

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <section className={css.homeSection}>
      <Container>
        {!isError && !isLoading && <h1>Hello User</h1>}
        {films.length > 0 && !isLoading && <MovieList data={films} />}
        <Loader isLoading={isLoading} />
        {isError && <Error />}
      </Container>
    </section>
  );
}

export default HomePage;
