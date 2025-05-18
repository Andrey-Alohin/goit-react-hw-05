import { AiFillPicture } from "react-icons/ai";
import { baseImgURL } from "../../baseUrlImg";
import css from "./FilmCard.module.css";
import clsx from "clsx";

function FilmCard({ film }) {
  const ratingFilm = Math.round(film.vote_average * 10);
  return (
    <div className={css.filmCard}>
      {film.poster_path ? (
        <img
          className={css.cardImg}
          src={baseImgURL + film.poster_path}
          alt={`Film poster for ${film.title}`}
          loading="lazy"
        />
      ) : (
        <AiFillPicture className={css.cardImg} />
      )}
      <div className={css.cardDescr}>
        <h2 className={css.descrHeader}>
          {film.title} (
          {film.release_date
            ? new Date(film.release_date).getFullYear()
            : "Unknown release year"}
          )
        </h2>
        <div className={css.descrInfo}>
          <h3 className={css.infoTitle}>User Rating</h3>
          <div className={css.infoRating}>
            <p
              className={clsx(
                css.ratingText,
                ratingFilm < 25
                  ? css.lowRating
                  : ratingFilm < 75
                  ? css.medRating
                  : css.hightRating
              )}
            >{`${ratingFilm}%`}</p>
          </div>
        </div>
        <div className={css.descrInfo}>
          <h3 className={css.infoTitle}>Overview</h3>
          <p className={css.descrOverview}>{film.overview}</p>
        </div>
        <div className={css.descrInfo}>
          <h3 className={css.infoTitle}>Genres</h3>
          <ul className={css.infoGenresList}>
            {film.genres.map((genre) => (
              <li className={css.genreItem} key={genre.id}>
                <p className={css.genreText}>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
