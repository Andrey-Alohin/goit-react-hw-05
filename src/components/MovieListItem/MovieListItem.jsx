import { Link } from "react-router-dom";
import css from "./MovieListItem.module.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original";
function MovieListItem({ movie }) {
  return (
    <>
      <img
        className={css.posterMovie}
        src={`${baseImgUrl}${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
      <h3 className={css.headerMovie}>{movie.title}</h3>
      <Link className={css.movieLink} to={`/movies/${movie.id}`}>
        More details
      </Link>
    </>
  );
}

export default MovieListItem;
