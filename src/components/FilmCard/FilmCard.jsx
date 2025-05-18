import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import css from "./FilmCard.module.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original";
function FilmCard({ film }) {
  const ratingFilm = Math.round(film.vote_average * 10);
  const ratingColor =
    ratingFilm < 25 ? "#db2360" : ratingFilm < 75 ? "#d2d531" : "#21d07a";
  console.log(ratingColor);

  return (
    <div className={css.filmCard}>
      <img
        className={css.cardImg}
        src={baseImgUrl + film.poster_path}
        alt={`Film poster for ${film.title}`}
      />
      <div className={css.cardDescr}>
        <h2 className={css.descrHeader}>
          {film.title} ({film.release_date})
        </h2>
        <div className={css.descrInfo}>
          <h3 className={css.infoTitle}></h3>
          <div className={css.infoRating}>
            <CircularProgressbar
              value={ratingFilm}
              text={ratingFilm}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: ratingColor,
                strokeLinecap: "round",
                trailColor: "#204529",
              })}
            />
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
