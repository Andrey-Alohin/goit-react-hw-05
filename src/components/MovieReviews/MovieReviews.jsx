import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { movieReviews } from "../../api";
import ReviewsList from "../ReviewsList/ReviewsList";
import ReviewPlaceHold from "../ReviewPlaceHold/ReviewPlaceHold";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData(movieId) {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await movieReviews(movieId);
        setReviews(response.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData(movieId);
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.reviewsHeader}>Reviews</h2>
      <Loader isLoading={isLoading} />
      {isError && <Error />}
      {reviews.length > 0 && !isLoading ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <ReviewPlaceHold />
      )}
    </div>
  );
}

export default MovieReviews;
