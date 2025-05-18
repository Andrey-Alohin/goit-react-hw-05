import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { movieSearch } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searched, setIsSearched] = useState(false);

  const noMatch = searched && films.length === 0;
  function updateSearchParams(newQuerry, key = "search") {
    const params = new URLSearchParams(searchParams);
    params.set(key, newQuerry);
    setSearchParams(params);
  }
  useEffect(() => {
    if (searchParams.size === 0) {
      setIsSearched(false);
      return;
    }
    const getData = async (userQuery) => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await movieSearch(userQuery);
        setFilms(data.results);
        setIsSearched(true);
      } catch {
        setIsError(true);
        setIsSearched(false);
      } finally {
        setIsLoading(false);
      }
    };
    getData(searchParams.get("search"));
  }, [searchParams]);
  return (
    <section className={css.moviePage}>
      <Container>
        <SearchForm onSubmit={updateSearchParams} />
        <Loader isLoading={isLoading} />
        {isError && <Error />}
        {films.length > 0 && <MovieList data={films} />}
        {noMatch && <p className={css.noResultText}>No match</p>}
      </Container>
    </section>
  );
}

export default MoviesPage;
