import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { movieReviews } from "../../api";
import ReviewsList from "../ReviewsList/ReviewsList";
import ReviewPlaceHold from "../ReviewPlaceHold/ReviewPlaceHold";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getData(movieId) {
      try {
        const response = await movieReviews(movieId);
        setReviews(response.results);
      } catch {
        console.error("error");
      } finally {
        console.log("Don`t forget");
      }
    }
    getData(movieId);
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.reviewsHeader}>Reviews</h2>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <ReviewPlaceHold />
      )}
    </div>
  );
}

export default MovieReviews;
