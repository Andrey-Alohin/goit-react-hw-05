import MovieListItem from "../MovieListItem/MovieListItem";
import css from "./MovieList.module.css";

function MovieList({ data }) {
  return (
    <ul className={css.movieList}>
      {data.map((movie) => (
        <li className={css.movieItem} key={movie.id}>
          <MovieListItem movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
