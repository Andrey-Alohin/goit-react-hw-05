import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { movieSearch } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);

  function updateSearchParams(newQuerry, key = "search") {
    const params = new URLSearchParams(searchParams);
    params.set(key, newQuerry);
    setSearchParams(params);
  }
  useEffect(() => {
    if (searchParams === "") {
      return;
    }
    const getData = async (userQuery) => {
      try {
        const data = await movieSearch(userQuery);
        console.log(data);
        setFilms(data.results);
      } catch {
        console.error("Something went wrong");
      }
    };
    getData(searchParams.get("search"));
  }, [searchParams]);
  return (
    <section className={css.moviePage}>
      <Container>
        <SearchForm onSubmit={updateSearchParams} />
        {films.length > 0 ? <MovieList data={films} /> : <p>No match</p>}
      </Container>
    </section>
  );
}

export default MoviesPage;
