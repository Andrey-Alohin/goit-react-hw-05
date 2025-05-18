import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { movieCast } from "../../api";
import CastList from "../CastList/CastList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData(movieId) {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await movieCast(movieId);
        const sortedResponse = response.cast
          .slice(0, 11)
          .sort((actor, secActor) => secActor.popularity - actor.popularity);
        setCast(sortedResponse);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData(movieId);
  }, [movieId]);
  return (
    <div className={css.castContainer}>
      <h2 className={css.castHeader}>Cast</h2>
      <Loader isLoading={isLoading} />
      {isError && <Error />}
      {!isLoading && cast.length > 0 && <CastList cast={cast} />}
    </div>
  );
}

export default MovieCast;
