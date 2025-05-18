import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { movieCast } from "../../api";
import CastList from "../CastList/CastList";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getData(movieId) {
      try {
        const response = await movieCast(movieId);

        const sortedResponse = response.cast
          .slice(0, 11)
          .sort((actor, secActor) => actor.popularity > secActor.popularity);
        setCast(sortedResponse);
      } catch {
        console.error("error");
      } finally {
        console.log("end");
      }
    }
    getData(movieId);
  }, [movieId]);
  return (
    <div className={css.casrContainer}>
      <h2 className={css.castHeader}>Cast</h2>
      {cast.length > 0 && <CastList cast={cast} />}
    </div>
  );
}

export default MovieCast;
