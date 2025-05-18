import { Link, useLocation } from "react-router-dom";
import css from "./MovieListItem.module.css";
import { baseImgURL } from "../../baseUrlImg";
import { AiFillPicture } from "react-icons/ai";

function MovieListItem({ movie }) {
  const location = useLocation();
  return (
    <>
      {movie.poster_path ? (
        <img
          className={css.posterMovie}
          src={baseImgURL + movie.poster_path}
          alt={`${movie.title} poster`}
        />
      ) : (
        <AiFillPicture className={css.posterMovie} />
      )}
      <h3 className={css.headerMovie}>{movie.title}</h3>
      <Link
        className={css.movieLink}
        to={`/movies/${movie.id}`}
        state={location}
      >
        More details
      </Link>
    </>
  );
}

export default MovieListItem;
